class Auth {

    /**
     * Authenticate a user. Save a token string in Local Storage
     *
     * @param {string} token
     */
    static authenticateUser(token) {
      localStorage.setItem('user', token);
    }
  
    /**
     * Check if a user is authenticated - check if a token is saved in Local Storage
     *
     * @returns {boolean}
     */
    static isUserAuthenticated() {
      return localStorage.getItem('user') !== null;
    }
  
    /**
     * Deauthenticate a user. Remove a token from Local Storage.
     *
     */
    static deauthenticateUser() {
      localStorage.removeItem('user');
    }
  
    /**
     * Get a token value.
     *
     * @returns {string}
     */
  
    static getToken() {
      return localStorage.getItem('user');
    }
  
  }
  
  export default Auth;