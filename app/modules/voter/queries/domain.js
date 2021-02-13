//Karena ini adalah domain yang berada pada repositories query, maka isinya hanya bisa get data
const Pool = require("pg").Pool;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "rizkyroyal123",
    port: 5432,
    database: "VotingApp"
});
class Login {
    async getLogin(payload){
        const userName = payload.name.toLowerCase()
        const user = await pool.query("SELECT * FROM voter WHERE LOWER(name) = $1",[userName])
        if(user.rows.length === 0){
            return "Nama Tidak Terdaftar"
        }
        return "Nama terdaftar"
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
}

module.exports = Login