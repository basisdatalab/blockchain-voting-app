const stakeholder = require ('./domain');
//const stakeLogin = async () => {
//const login = new stakeholder();
//return login.login();
//}
const stakeRegister = async () => {
    const register = new stakeholder();
    return stakeRegister.stakeRegister();
}
module.exports = {
 stakeRegister,
 };


