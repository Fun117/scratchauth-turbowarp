const supabase_config = require("../../supabase.config");

var config = {};

config.PUBLIC_URL = supabase_config.PUBLIC_URL;
if (!config.PUBLIC_URL) {
  throw new Error("'PUBLIC_URL' must be set");
}

config.PUBLIC_ANON_KEY = supabase_config.PUBLIC_ANON_KEY;
if (!config.PUBLIC_ANON_KEY) {
  throw new Error("'PUBLIC_ANON_KEY' must be set");
}

config.SERVICE_ROLE_KEY = supabase_config.SERVICE_ROLE_KEY;

config.expiration = supabase_config.expiration;
if (!config.expiration) {
  config.expiration = 3;
}

config.codeLength = supabase_config.codeLength;
if (!config.codeLength) {
  config.codeLength = 8;
}

module.exports = config;
