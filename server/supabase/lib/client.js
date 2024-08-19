const { createClient } = require("@supabase/supabase-js");

const config = require("./config");

// Create a single supabase client for interacting with your database
const supabase = createClient(config.PUBLIC_URL, config.PUBLIC_ANON_KEY);

module.exports = supabase;
