const Pool = require("pg").Pool;
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "291100",
    port: 6000,
    database: "VotingApp"
});
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
class Register {
    async nowRegister(show) {
      
        if (!req.body.email) {
            return res.status(400).send({
                message: 'No values!'

            })
          }
        if (!isValidEmail(req.body.email)) {
            return res.status(400).send({
                message: 'Please enter a valid email address'
                
            });
          }
        const email = show.email
        const user = await pool.query("SELECT * FROM stakeholder WHERE email = $1", [email])
        if(user.rows.length === 0){
          var create = `INSERT INTO stakeholder VALUES ($1, $2, $3, $4)`;
          var params = [show.id, show.name, show.sid, show.email]
          pool.query(create, params)
          return res.status(201).send({

                message: 'Email berhasil ditambahkan'
            })
          } 
          return res.status(400).send({

            name : 'Email sudah terdaftar sebagai stakeholder.'
        })
        
    }
}
module.exports = {  
  Register: Register
}