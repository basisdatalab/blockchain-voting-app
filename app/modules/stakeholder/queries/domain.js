//Karena ini adalah domain yang berada pada repositories query, maka isinya hanya bisa get data
const { pool } = require('../../../helpers/dbConfig')
require('pg')
class Login {
    async getLogin(show){
        const email = show.email
        const user = await pool.query("SELECT * FROM stakeholder WHERE email = $1", [email])
          if(user.rows.length === 0){
            return res.status(400).send({
                message : 'Email Tidak terdaftar sebagai stakeholder'
            })
        }
        return res.status(201).send({
            message : 'Email Terdaftar sebagai stakeholder, selamat datang!'
        })
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