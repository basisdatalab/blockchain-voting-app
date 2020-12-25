//Karena ini adalah domain yang berada pada repositories query, maka isinya hanya bisa get data


class Login {
    async getLogin() {
        const login = 'Kamu telah login!';
        return login;
    }

    async getRegister() {
        const register = 'terimakasih sudah register!';
        return register;
    }
}

module.exports = Login;