//Karena ini adalah domain yang berada pada repositories query, maka isinya hanya bisa get data


class Login {
    async getLogin(payload) {
        const login = `Selamat datang diserver kami ${req.user.displayName}`
        return login;
    }
    async getRegister() {
        const register = 'terimakasih sudah register!';
        return register;
    }

    async notLogin() {
        const notLogin = `anda sedang tidak login!`;
        return notLogin
    }

    async notVerif() {
        const notVerif = `login dengan email telkom University!`;
        return notVerif
    }

    async gagalLogin() {
        const gagalLogin = `Gagal login! silahkan ulangi!`;
        return gagalLogin
    }


}

module.exports = Login;