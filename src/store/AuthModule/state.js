export class AuthState {
  constructor() {
    Object.assign(this, {
      processing: false,
      userSession: null
    });
  }
}