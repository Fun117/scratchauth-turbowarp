const ScratchAuthSupabaseCode = require("./components/code");
const ReqSupabase = require("./components/main");

var ScratchAuthSupabase = {};

ScratchAuthSupabase.GenerationAuthCode = async function (form, username) {
  const generationCode = ScratchAuthSupabaseCode.create(username);
  const res = await ReqSupabase.POST(form, generationCode);
  return res;
};

ScratchAuthSupabase.DELETE_EXPIRED = async function (from) {
  const res = await ReqSupabase.DELETE_EXPIRED(from);
  return res;
};

module.exports = ScratchAuthSupabase;
