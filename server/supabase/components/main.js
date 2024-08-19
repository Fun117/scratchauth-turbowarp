const supabase = require("../lib/client");

var ReqSupabase = {};

ReqSupabase.GET = async function (form, select) {
  const { data, error } = await supabase.from(form).select(select);
  if (error) {
    throw Error(error.message);
  }
  return data;
};

ReqSupabase.POST = async function (form, data) {
  const { error } = await supabase.from(form).insert(data);
  if (error) {
    throw Error(error.message);
  }
  return data;
};

ReqSupabase.PUT = async function (form, code, data) {
  const { error } = await supabase.from(form).update(data).eq("code", code);
  if (error) {
    throw Error(error.message);
  }
  return data;
};

ReqSupabase.DELETE = async function (form, code) {
  const { error } = await supabase.from(form).delete().eq("code", code);
  if (error) {
    throw Error(error.message);
  }
  return { message: `Record with code ${code} deleted successfully` };
};

ReqSupabase.DELETE_EXPIRED = async function (form) {
  const now = new Date().toISOString();
  const { error } = await supabase.from(form).delete().lt("expiration", now);
  if (error) {
    throw Error(error.message);
  }
  return { message: `Expired records deleted successfully` };
};

module.exports = ReqSupabase;
