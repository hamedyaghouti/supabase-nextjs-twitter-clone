"use client";
import {
  createClientComponentClient,
  Session,
} from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserData } from "@/app/components/userdata";

export default function AuthButtonClient({
  session,
}: {
  session: Session | null;
}) {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleGithubSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo:
          "https://supabase-nextjs-twitter-clone.pages.dev/api/auth/callback",
        // "http://localhost:8787/api/auth/callback",
      },
    });
  };

  const handleFigmaSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "figma",
      options: {
        redirectTo:
          "https://supabase-nextjs-twitter-clone.pages.dev/api/auth/callback",
        // "http://localhost:8787/api/auth/callback",
      },
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return session ? (
    <>
      <button onClick={handleSignOut}>Logout</button>
      <UserData />
    </>
  ) : (
    <>
      <div>
        <Link href="/sign-up">Sign Up</Link>
      </div>
      <div>
        <button onClick={handleGithubSignIn}>Github Login</button>
      </div>
      <div>
        <button onClick={handleFigmaSignIn}>Figma Login</button>
      </div>
    </>
  );
}
