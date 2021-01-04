//Karena ini adalah domain yang berada pada repositories query, maka isinya hanya bisa get data

class Login {
    getLogin(payload){
        const displayName = payload.name
        const userEmail = payload.email
        const profilePicture = payload.picture
        const login = `Selamat datang ` + displayName + " dengan email: " + userEmail + ' dan link foto: ' + profilePicture
        return login
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