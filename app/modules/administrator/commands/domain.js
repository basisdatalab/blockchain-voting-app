//Karena ini adalah domain yang berada pada repositories command, maka isinya hanya bisa create, update dan delete data
const passport = require('passport');

class administrator {
    
    async passport_authenticate() {
        passport.authenticate('google', { failureRedirect: '/failed' }),
            function (req, res) {
                // Successful authentication, redirect home.
                res.redirect('/success');
            }
    }

    // buat cek udah terdaftar apa belum.

};

module.exports = administrator;