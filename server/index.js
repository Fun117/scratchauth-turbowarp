const ReqSupabase = require("./supabase/components/main");
const ScratchAuthSupabase = require("./supabase/main");

const main = async () => {
  // await ScratchAuthSupabase.GenerationAuthCode("authentication", "Fun_117");
  var res = await ReqSupabase.GET("authentication", "*");
  console.log(res);
  var res = await ScratchAuthSupabase.DELETE_EXPIRED("authentication");
  console.log(res);
};

main();
