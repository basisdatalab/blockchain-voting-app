//Karena ini adalah domain yang berada pada repositories query, maka isinya hanya bisa get data


class Login {
    getLogin(info) {
        const displayName = info.name
        const userEmail = info.email
        const profilePicture = info.picture
        const login = `Selamat datang ` + displayName + " dengan email: " + userEmail + ' dan link foto: ' + profilePicture
        return login
    }
    getRegister() {
        const register = 'terimakasih sudah register!';
        return register;
    }

    notLogin() {
        const notLogin = `anda sedang tidak login!`;
        return notLogin
    }

    notVerif() {
        const notVerif = `login dengan email telkom University!`;
        return notVerif
    }

    gagalLogin() {
        const gagalLogin = `Gagal login! silahkan ulangi!`;
        return gagalLogin
    }


}

module.exports = Login;