//Karena ini adalah domain yang berada pada repositories query, maka isinya hanya bisa get data
const { pool } = require('../../../helpers/dbConfig')
require('pg')
function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
class Login {
    async getLogin(show){
        if (!show.email) {
            return {
                status: 'false',
                message: 'No values!'

            }
          }
        if (!isValidEmail(show.email)) {
            return {
                status: 'false',
                message: 'Please enter a valid email address'
                
            };
          }
        console.log(show)
        const email = show.email
        const user = await pool.query("SELECT * FROM stakeholder WHERE email = $1", [email])
          if(user.rows.length === 0){
            return {
                status : 'false',
                message : 'Email Tidak terdaftar sebagai stakeholder'
            }
        }
        return {
            status : 'true',
            message : 'Email Terdaftar sebagai stakeholder, selamat datang!'
        }
    }
    notLogin() {
        const notLogin = `anda sedang tidak login!`;
        return notLogin
    }

    notVerif() {
        const notVerif = `login dengan email telkom University!`;
        return notVerif
    }

    gagalLogin() {
        const gagalLogin = `Gagal login! silahkan ulangi!`;
        return gagalLogin
    }


}

module.exports = Login;