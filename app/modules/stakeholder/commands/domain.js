const { pool } = require('../../../helpers/dbConfig')
require('pg')
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
class Register {
    async nowRegister(show) {
      
        if (!show.email) {
            return {
                status : 'false',
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
          var create = `INSERT INTO stakeholder VALUES ($1, $2, $3, $4)`;
          var params = [show.id, show.name, show.sid, show.email]
          pool.query(create, params)
          return {
                status: 'true',
                message: 'Email berhasil ditambahkan sebagai stakeholder'
            }
          } 
          return {
            status: 'false',
            message : 'Email sudah terdaftar sebagai stakeholder.'
        }
        
    }
}
module.exports = {  
  Register: Register
}