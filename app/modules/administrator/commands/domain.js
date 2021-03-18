// //Karena ini adalah domain yang berada pada repositories command, maka isinya hanya bisa create, update dan delete data
const socketio = require("socket.io");
const formatMessage = require("../../../helpers/formatAdmin");
const io = socketio();

const name = "Agus gituh";
const bilik = [1, 2, 3];
class CommandAdmHandler {
  VoterRequested() {
    var myObjectAcc = {
      message: "Diterima, silahkan lanjutkan",
    };

    io.on("connection", (socket) => {
      console.log("ada terkoneksi");
      socket.emit("accept", formatMessage(name, myObjectAcc, bilik[0]));
      // dikirim dengan event accept, nanti coba console.log(accept) untuk testing dan liat di inspect element apakah kekirim atau tidak
    });
  }

  RejectedVoter() {
    var myObjectDen = {
      message: "Tidak diterima, silahkan out",
    };

    io.on("connection", (socket) => {
      socket.emit("denied", formatMessage(name, myObjectDen, bilik[1]));
      // dikirim dengan event denied, nanti coba console.log(accept) untuk testing dan liat di inspect element apakah kekirim atau tidak
      // belum di test dengan postman, berhubungan dengan FE bayangan saya karena tidak bisa, di JS FE perlu di terima event denied/acceptnya agar bisa digunakan sepertinya
      // Note jng lupa : ada 2 koneksi server-side, pertanyaan : apakah bisa dalam 1 fungsi bedain 2 emit ?
    });
  }
}

module.exports = CommandAdmHandler;
