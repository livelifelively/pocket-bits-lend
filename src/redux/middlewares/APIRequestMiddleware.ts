import { API_REQUEST } from '../actions/APIRequestActions';

// this middleware care only for API calls
export const apiMiddleware = ({ dispatch }: { dispatch: any }) => (next: any) => async (action: any) => {
  if (action.type === API_REQUEST) {
    const { requestFunction, onSuccess, onError } = action.meta;

    try {
      const data = await requestFunction(action.payload);
      if (onSuccess) dispatch({ type: onSuccess, payload: data });
    } catch (error) {
      dispatch({ type: onError, payload: error });
    }
  }
  return next(action);
};
