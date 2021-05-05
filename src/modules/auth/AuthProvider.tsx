import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import Logger from '../../services/logger';

export const AuthContext = React.createContext<{
  user: User;
  loginEmailPassword: (user: { email: string; token: string }) => void;
  loginPasscode: (passcode: string) => void;
  logout: () => void;
  signUp: () => void;
  setPasscode: (passcode: string) => void;
}>({
  user: null,
  loginEmailPassword: (user: { email: string; token: string }) => {},
  loginPasscode: (passcode: string) => {},
  logout: () => {},
  signUp: () => {},
  setPasscode: (passcode: string) => {},
});

// interface AuthProviderProps {}

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(() => null);

  return (
    <AuthContext.Provider
      value={{
        user,
        loginEmailPassword: async (userAuth) => {
          const userUpdated = { ...userAuth, passcode: '', userAuthenticated: false };
          setUser(userUpdated);
          Logger.debug('AUTH_PROVIDER__LOGIN_EMAIL', userUpdated);
          await AsyncStorage.setItem('user', JSON.stringify(userUpdated));
        },
        loginPasscode: async (passcode) => {
          Logger.debug('AUTH_PROVIDER__LOGIN_PASSCODE--USER_INPUT_RECIEVED', user);
          const userDataStringFromStorage = await AsyncStorage.getItem('user');

          if (userDataStringFromStorage) {
            const userDataObjectFromStorage = JSON.parse(userDataStringFromStorage);
            if (userDataObjectFromStorage.passcode === passcode) {
              userDataObjectFromStorage.userAuthenticated = true;
              setUser(userDataObjectFromStorage);
              await AsyncStorage.setItem('user', JSON.stringify(userDataObjectFromStorage));
              Logger.info('AUTH_PROVIDER__LOGIN_PASSCODE--USER_PASSCODE_MATCH_SUCCESS', user);
              return;
            }
          }
          Logger.debug('AUTH_PROVIDER__LOGIN_PASSCODE--USER_PASSCODE_MATCH_FAILED', user);
          // TODO tell user.
        },
        logout: () => {
          setUser(null);
          AsyncStorage.removeItem('user');
          return;
        },
        signUp: () => {
          //
        },
        setPasscode: async (passcode) => {
          Logger.info('AUTH_PROVIDER__SET_PASSCODE--USER_INPUT_RECIEVED', passcode);
          let userObject;
          if (user && user.email && user.token) {
            userObject = {
              ...user,
              passcode,
            };
            setUser(userObject);
            await AsyncStorage.setItem('user', JSON.stringify(userObject));
            Logger.info('AUTH_PROVIDER__SET_PASSCODE--USER_INPUT_RECIEVED', userObject);
          }
          return;
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
