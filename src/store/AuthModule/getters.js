export default {
  isAuthenticated: state => {
    return !!(state.userSession && state.userSession.accessToken);
  }
}
