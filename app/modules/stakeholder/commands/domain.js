// //Karena ini adalah domain yang berada pada repositories command, maka isinya hanya bisa create, update dan delete data
// const passport = require('passport');

// class administrator {
//     // buat cek udah terdaftar apa belum.

// };

// module.exports = stakeholder;
const Pool = require("pg").Pool;
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "291100",
    port: 6000,
    database: "VotingApp"
});
import Helper from '../Helper/Helper';
class Register {
    async nowRegister(show) {
      
        if (!req.body.email) {
            return res.status(400).send({
                message: 'No values!'

            })
          }
        if (!Helper.isValidEmail(req.body.email)) {
            return res.status(400).send({
                message: 'Please enter a valid email address'
                
            });
          }
        const email = show.email
        const user = await pool.query("SELECT * FROM stakeholder WHERE email = $1", [email])
        const createQuery = `INSERT INTO stakeholder VALUES ($1, $2, $3, $4)`;
        const values = [show.id, show.name, show.sid, show.email]
        try {
            const { rows } = await db.query(createQuery, values);
            return res.status(200).send({

                message: 'Email berhasil ditambahkan'
            })
          } catch(error) {
            if (error.routine === '_bt_check_unique') {
              return res.status(400).send({

                  message: 'Email telah terdaftar'
              })
            }
            return res.status(400).send(error);
          }
        }
    }
export default Register;