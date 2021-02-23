//Karena ini adalah domain yang berada pada repositories query, maka isinya hanya bisa get data
const { pool } = require('../../../helpers/dbConfig')
require('pg')
class Login {
    async getLogin(payload) {
        const id = payload.id
        const user = await pool.query("SELECT * FROM admin WHERE id_committee = $1",[id])
        if(user.rows.length === 0){
            return {
                status: 'false',
                name : 'Tidak terdaftar sebagai admin'
            }
        }
        return {
            status: 'true',
            name : 'Terdaftar sebagai admin, selamat datang!'
        }
    }
    getRegister() {
        const register = 'terimakasih sudah register!';
        return register;
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