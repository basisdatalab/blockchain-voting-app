//Karena ini adalah domain yang berada pada repositories query, maka isinya hanya bisa get data

class Login {
    getLogin(){
        const login = `Selamat datang `
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