/*
 * page.tsx
 * This file is the component of the authentication page.
 * It retrieves the privateCode from the redirect URL and performs the authentication process.
 */

"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ScratchAuthSET_session } from "scratch-auth-react";

export default function AuthPage() {
  const searchParams = useSearchParams();
  const privateCode = searchParams.get("privateCode");

  useEffect(() => {
    async function auth() {
      await ScratchAuthSET_session(privateCode); //A uthenticate account
      if (typeof window !== "undefined") {
        window.location.href = `/`; // Redirect to home
      }
    }
    auth();
  }, []); // Pass an empty dependency array to execute only on initial render

  return (
    <html>
      <body>
        <span>Processing...</span>
      </body>
    </html>
  );
}
