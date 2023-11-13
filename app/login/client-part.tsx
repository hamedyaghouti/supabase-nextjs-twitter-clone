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
    <div>
      <div>
        <button onClick={() => handleOAuthSignIn("github")}>
          Github Login
        </button>
      </div>
      <div>
        <button onClick={() => handleOAuthSignIn("figma")}>Figma Login</button>
      </div>
      <EmailLogin />
    </div>
  );
}
