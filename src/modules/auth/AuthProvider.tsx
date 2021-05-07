import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import Logger from '../../services/logger';

export const AuthContext = React.createContext<{
  user: User;
  // setUser: (user: User) => void;
  loginEmailPassword: (user: { email: string; token: string }) => void;
  loginPasscode: (passcode: string) => void;
  logout: () => void;
  signUp: () => void;
  softLogout: () => void;
  setPasscode: (passcode: string) => void;
}>({
  user: null,
  // setUser: (user: User) => {},
  loginEmailPassword: (user: { email: string; token: string }) => {},
  loginPasscode: (passcode: string) => {},
  logout: () => {},
  signUp: () => {},
  softLogout: () => {},
  setPasscode: (passcode: string) => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(() => null);

  return (
    <AuthContext.Provider
      value={{
        user,
        // setUser: (user) => {
        //   setUser(user);
        // },
        loginEmailPassword: async (userAuth) => {
          const userUpdated = { ...userAuth, passcode: '', userAuthenticated: false };
          setUser(userUpdated);
          await AsyncStorage.setItem('user', JSON.stringify(userUpdated));
          Logger.debug('AUTH_PROVIDER__LOGIN_EMAIL', userUpdated);
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
          Logger.debug('AUTH_PROVIDER__LOGOUT--USER_REMOVED', user);
        },
        signUp: () => {
          //
        },
        softLogout: async () => {
          const userDataStringFromStorage = await AsyncStorage.getItem('user');
          let userDataObjectFromStorage;

          if (userDataStringFromStorage) userDataObjectFromStorage = JSON.parse(userDataStringFromStorage);
          userDataObjectFromStorage = { ...userDataObjectFromStorage, userAuthenticated: false, token: '' };
          setUser(userDataObjectFromStorage);
          await AsyncStorage.setItem('user', JSON.stringify(userDataObjectFromStorage));
          Logger.debug('AUTH_PROVIDER__LOGOUT-SOFT--USER_TOKEN_REMOVED', user);
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
