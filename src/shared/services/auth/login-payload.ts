export interface AuthorizationPayload {
  strategy?: string;
}


export interface LoginPayload extends AuthorizationPayload {
  email: string;
  password: string;
}

export interface RefreshPayload extends AuthorizationPayload {
  accessToken?: string;
}