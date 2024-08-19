"use client";

import { ScratchAuthProvider } from "@/components/provider/scratchauth";
import { Authenticate } from "@/lib/supabase/auth";
import { useLocale, useTranslations } from "next-intl";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import { useAuthSession } from "scratch-auth-react";

function Page() {
  const lang = useLocale();
  const t = useTranslations();

  const authenticationsCodeRef = useRef<HTMLInputElement>(null);

  const session = useAuthSession();

  const AuthenticationsCodeSend = async () => {
    if (session) {
      const code = `${authenticationsCodeRef.current?.value}`;
      const result = await Authenticate(lang, session, code);
      if (result.error) {
        toast.error(result.error);
        return;
      }
      toast.success(`${result.message}`);
    } else {
    }
  };

  return (
    <ScratchAuthProvider>
      <div className="flex justify-center items-center w-full h-full min-h-[calc(100dvh-64px)]">
        <div className="flex flex-col gap-3 w-full max-w-xl px-2">
          <input
            ref={authenticationsCodeRef}
            type="text"
            title="AuthenticationsCode"
            name="AuthenticationsCode"
            placeholder={t("Authentications Code")}
            className="w-full p-4 rounded-lg bg-neutral-100 dark:bg-neutral-900 outline outline-2 outline-neutral-200 dark:outline-neutral-800 focus:outline-neutral-300 focus:dark:outline-neutral-700"
          />
          <button
            onClick={AuthenticationsCodeSend}
            className="w-full p-4 rounded-lg bg-neutral-100 dark:bg-neutral-900 hover:drop-shadow-lg active:drop-shadow-none active:opacity-50 transition-all duration-300 ease-in-out"
          >
            {t("Send")}
          </button>
        </div>
      </div>
    </ScratchAuthProvider>
  );
}

export default Page;
