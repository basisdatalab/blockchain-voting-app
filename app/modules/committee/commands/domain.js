//Karena ini adalah domain yang berada pada repositories query, maka isinya hanya bisa get data
const { pool } = require('../../../helpers/dbConfig')

require('pg')

class Register {

    async regCandidate(payload) {
        const id_candidate = payload.id_candidate
        const user = await pool.query("SELECT * FROM candidate WHERE id_candidate = $1", [id_candidate])
        if(user.rows.length === 0){
            var sql = `INSERT INTO Candidate VALUES ($1, $2, $3, $4)`;
            var params = [payload.id_candidate, payload.id_committee, payload.name, payload.sid]
            pool.query(sql, params)
            return {
                status: 'True',
                name : 'Candidate berhasil terdaftar.'
            }
        }
        return {
            status: 'false',
            name : 'Candidate sudah terdaftar.'
        }
    }

    async regVoter(payload) {
        const id = payload.id_voter
        const user = await pool.query("SELECT * FROM voter WHERE id_voter = $1", [id])
        if(user.rows.length === 0){
            var sql = `INSERT INTO voter VALUES ($1, $2, $3, $4, $5)`;
            var params = [payload.id_voter, payload.id_admin, payload.name, payload.sid, payload.email]
            pool.query(sql, params)
            return {
                status: 'True',
                name : 'Voter berhasil terdaftar.'
            }
        }
        return {
            status: 'false',
            name : 'Voter sudah terdaftar.'
        }
    }

}

module.exports = Register