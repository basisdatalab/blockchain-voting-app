// // inisialisasi object dari command_handler manipulasi data semua disini

const getAdmin = require("./domain");

const AcceptedVoter = () => {
  const AcceptedVoter = new getAdmin();
  return AcceptedVoter.AcceptedVoter;
};

const RejectedVoter = () => {
  const RejectedVoter = new getAdmin();
  return RejectedVoter.RejectedVoter;
};

module.exports = {
  AcceptedVoter,
  RejectedVoter,
};
