import AsyncStorage from '@react-native-community/async-storage';
import React, { useContext } from 'react';
import { AuthContext } from '../modules/auth/AuthProvider';
import Logger from './logger';

// export async function login() {
//   const { user } = useContext(AuthContext);

// }

export const loginEmailPassword = async (userAuth: { email: string; token: string }) => {
  const { user, setUser } = useContext(AuthContext);

  const userUpdated = { ...userAuth, passcode: '', userAuthenticated: false };
  setUser(userUpdated);
  await AsyncStorage.setItem('user', JSON.stringify(userUpdated));
  Logger.debug('AUTH_PROVIDER__LOGIN_EMAIL', userUpdated);
};

export const loginPasscode = async (passcode: string) => {
  const { user, setUser } = useContext(AuthContext);

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
};

export const logout = async () => {
  const { user, setUser } = useContext(AuthContext);

  setUser(null);
  await AsyncStorage.removeItem('user');
  Logger.debug('AUTH_PROVIDER__LOGOUT--USER_REMOVED', user);
};

export const signUp = () => {
  //
};

export const softLogout = async () => {
  const { user, setUser } = useContext(AuthContext);

  const userDataStringFromStorage = await AsyncStorage.getItem('user');
  let userDataObjectFromStorage;

  if (userDataStringFromStorage) userDataObjectFromStorage = JSON.parse(userDataStringFromStorage);
  userDataObjectFromStorage = { ...userDataObjectFromStorage, userAuthenticated: false, token: '' };
  setUser(userDataObjectFromStorage);
  await AsyncStorage.setItem('user', JSON.stringify(userDataObjectFromStorage));
  Logger.debug('AUTH_PROVIDER__LOGOUT-SOFT--USER_TOKEN_REMOVED', user);
};

export const setPasscode = async (passcode: string) => {
  const { user, setUser } = useContext(AuthContext);

  try {
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
  } catch (e) {
    console.log(e);
  }
  // return;
};

export const authToken = async () => {
  const userDataStringFromStorage = await AsyncStorage.getItem('user');

  if (userDataStringFromStorage) {
    const userDataObjectFromStorage = JSON.parse(userDataStringFromStorage);
    return userDataObjectFromStorage;
  }
  return {};
};
