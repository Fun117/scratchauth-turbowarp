const config = require("../lib/config");

function generateRandomCode(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function GenerationAuthenticationCode(length) {
  const code = generateRandomCode(length);
  return code;
}

var ScratchAuthSupabaseCode = {};

ScratchAuthSupabaseCode.create = function (username) {
  const config_codeLength = config.codeLength;
  const config_expiration = config.expiration;

  var res = {};

  const today = new Date();

  const expiration = new Date(today.getTime() + config_expiration * 60000);

  res.expiration = expiration.toISOString();
  res.username = username;
  res.code = GenerationAuthenticationCode(config_codeLength);
  res.already_used = false;

  return res;
};

module.exports = ScratchAuthSupabaseCode;
