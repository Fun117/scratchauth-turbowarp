"use server"

import { getTranslations } from "next-intl/server";
import supabase from "./client";

export async function Authenticate(
  lang: string,
  username: string,
  code: string
) {
  const t = await getTranslations({ lang, namespace: "API" });

  if (!username || !code) {
    return { error: t("Username and code are required") };
  }

  try {
    // 現在の時刻を取得
    const now = new Date().toISOString();

    // 認証コードを確認
    const { data, error } = await supabase
      .from("authentication")
      .select("*")
      .eq("username", username)
      .eq("code", code)
      .maybeSingle();

    if (error) {
      return { error: error.message };
    }

    if (!data) {
      return { error: t("Invalid code") };
    }

    // 有効期限が過ぎているかを確認
    if (data.expiration < now) {
      const { error: deleteError } = await supabase
        .from("authentication")
        .delete()
        .eq("code", data.code);
      if (deleteError) {
        return { error: deleteError.message };
      }
      return { error: t("Code has expired") };
    }

    // 既に使用されているかを確認
    if (data.already_used) {
      const { error: deleteError } = await supabase
        .from("authentication")
        .delete()
        .eq("code", data.code);
      if (deleteError) {
        return { error: deleteError.message };
      }
      return { error: "Code has already been used" };
    }

    // 認証コードを使用済みに更新
    const { error: updateError } = await supabase
      .from("authentication")
      .update({ already_used: true })
      .eq("id", data.id);

    if (updateError) {
      return { error: updateError.message };
    }

    return { message: t("Authentication successful") };
  } catch (error) {
    return { error: t("An error occurred while processing your request") };
  }
}
