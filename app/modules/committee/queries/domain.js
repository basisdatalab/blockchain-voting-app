//Karena ini adalah domain yang berada pada repositories query, maka isinya hanya bisa get data
const { pool } = require('../../../helpers/dbConfig')
require('pg')
class Logreg {
    async getLogin(payload) {
        const email = payload.email
        const user = await pool.query("SELECT * FROM committee WHERE email = $1", [email])
        if(user.rows.length === 0){
            return {
                status: 'false',
                name : 'Tidak terdaftar sebagai committee'
            }
        }
        return {
            status: 'true',
            name : 'Selamat datang committee!'
        }
    }
    notLogin(){
        const notLogin = `anda belum login`
        return notLogin
    }
    notVerif(){
        const notVerif = `Mohon login dengan email Telkom University`
        return notVerif
    }
    failLogin(){
        const failLogin = `Anda gagal login, silahkan login kembali`
        return failLogin
    }

    async getRegister(payload) {
        const email = payload.email
        const user = await pool.query("SELECT * FROM committee WHERE email = $1", [email])
        if(user.rows.length === 0){
            var sql = `INSERT INTO committee VALUES ($1, $2, $3, $4)`;
            var params = [payload.id, payload.name, payload.sid, payload.email]
            pool.query(sql, params)
            return {
                status: 'True',
                name : 'Anda berhasil mendaftar sebagai committee.'
            }
        }
        return {
            status: 'false',
            name : 'Anda sudah terdaftar sebagai committee.'
        }
    }
}

module.exports = Logreg