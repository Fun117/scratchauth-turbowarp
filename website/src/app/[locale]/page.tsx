"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

// Scratch Auth
import {
  useAuthSession,
  ScratchAuth_Login,
  ScratchAuth_Logout,
} from "scratch-auth-react";
import { Button } from "@/components/ui/button";
import { TLink } from "@/components/ui/Tcomps";

export default function Home() {
  const t = useTranslations("PageHome");
  const ta = useTranslations();

  const session = useAuthSession();

  return (
    <div className="relative flex flex-col justify-center items-center gap-4 min-h-[calc(100vh-64px)] p-2 md:p-8 lg:p-24 xl:p-36">
      <div className="flex flex-col md:flex-row flex-wrap gap-3 justify-center md:justify-between items-center w-full bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 p-5 border rounded-lg drop-shadow-xl">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          {session}
        </h1>
        {session ? (
          <Button onClick={() => ScratchAuth_Logout()}>{ta("Logout")}</Button>
        ) : (
          <Button onClick={() => ScratchAuth_Login()}>{ta("Login")}</Button>
        )}
      </div>
      <TLink i18n_link to="/api/auth" className="w-full">
        <Button className="w-full h-16 text-xl" variant="outline">{ta("Auth")}</Button>
      </TLink>
    </div>
  );
}
