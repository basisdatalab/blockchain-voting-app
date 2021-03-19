//Karena ini adalah domain yang berada pada repositories query, maka isinya hanya bisa get data
const Pool = require("pg").Pool;
const socketio = require('socket.io')
const io = socketio()

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "rizkyroyal123",
    port: 5432,
    database: "VotingApp"
});
class Voter {
    async getLogin(payload){
        const userName = payload.name.toLowerCase()
        const user = await pool.query("SELECT * FROM voter WHERE LOWER(name) = $1",[userName])
        if(user.rows.length === 0){
            return "Nama Tidak Terdaftar"
        }
        return "Nama terdaftar"
    }
    async voteCandidate(payload){
        const idCandidate = payload.candidate_id
        const candidate = await pool.query("SELECT id_candidate, name, sid FROM candidate WHERE id_candidate = $1", [idCandidate])
        if(candidate.rows.length === 0){
            return "Candidate Tidak Ditemukan"
        }
        candidate.rows[0]['voter_email'] = payload.voter_email
        return candidate.rows[0]
    }
    async liveVoter(payload){
        const emailVoter = payload.voter_email
        const voter = await pool.query("SELECT name,sid,email FROM voter WHERE email = $1", [emailVoter])
        io.on("connection", (socket)=>{
            console.log("MASUK PAK EKO");
            socket.broadcast.emit("live vote", voter.rows[0])
        })
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

module.exports = Voter