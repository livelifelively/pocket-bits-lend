export const API_REQUEST = '[app] API Request';

export const apiRequest = (requestFunction: any, body: any, onSuccess: string, onError: string) => ({
  type: API_REQUEST,
  payload: body,
  meta: { requestFunction, onSuccess, onError },
});
