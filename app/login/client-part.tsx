"use client";
import React from "react";
import { Session } from "@supabase/auth-helpers-nextjs";
import { Provider } from "@supabase/supabase-js";
import { supabaseClientComponent as supabase } from "@/libs/supabase-client-instance";
import EmailLogin from "./email";
import { useRouter } from "next/navigation";

export default function AuthButtonClient({
  session,
}: {
  session: Session | null;
}) {
  const router = useRouter();

  const handleOAuthSignIn = async (provider: Provider) => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/auth/callback`,
      },
    });
  };

  React.useEffect(() => {
    if (session) router.push("/");
  }, [session, router]);

  return (
    <div className="container mx-auto max-w-[500px] text-center py-4">
      <div className="mb-4">
        <div>
          <button
            className="p-2 bg-sky-600 hover:bg-sky-700 dark:hover:bg-sky-500 w-full rounded mb-2"
            onClick={() => handleOAuthSignIn("github")}
          >
            Github Login
          </button>
        </div>
        <div>
          <button
            className="p-2 bg-sky-600 hover:bg-sky-700 dark:hover:bg-sky-500 w-full rounded mb-2"
            onClick={() => handleOAuthSignIn("figma")}
          >
            Figma Login
          </button>
        </div>
      </div>
      <hr className="border-[0.5px] border-[rgba(200,200,200,0.5)] mb-6" />
      <EmailLogin />
    </div>
  );
}
