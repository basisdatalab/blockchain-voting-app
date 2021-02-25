const getStake = require ('./domain');
//const stakeLogin = async () => {
//const login = new stakeholder();
//return login.login();
//}
const nowRegister = (show) => {
    const getRegisterStake = new getStake.Register()
    return getRegisterStake.nowRegister(show)
}
module.exports = {
 nowRegister,
 };


