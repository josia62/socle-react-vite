import { useDispatch } from 'react-redux';

export type AuthState = {
  credentials: any,
  accessToken: string,
};

export const enum AuthActionType {
  updateCredentials = '[Auth] Update credentials',
}

export const initialAuthState: AuthState = {
  credentials: {},
  accessToken: '',
};

export const authReducer = (state = initialAuthState, action: any) => {

  const { type, payload } = action;
  switch (type) {
    case AuthActionType.updateCredentials:
      return {
        ...state,
        credentials: payload,
      };
    default:
      return state;
  }
};

export const useAuth = () => {
  const dispatch = useDispatch();
  return {
    updateCredentials: (payload: any) => dispatch({ payload, type: AuthActionType.updateCredentials }),
  };
};
