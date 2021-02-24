const Helper = {
    /**
     * isValidEmail helper method
     * @param {string} email
     * @returns {Boolean} True or False
     */
    isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    },
  
  }
  
  export default Helper;