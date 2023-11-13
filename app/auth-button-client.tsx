"use client";
import React from "react";
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
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleGithubSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/auth/callback`,
      },
    });
  };

  const handleFigmaSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "figma",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/auth/callback`,
        // "http://localhost:8787/api/auth/callback",
      },
    });
  };

  const signInWithEmail = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log("dataaaaaaaaaaa =======> ", data);
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
      <form
        onSubmit={(event) => {
          event.preventDefault();
          signInWithEmail(email, password);
        }}
      >
        <input
          className="text-black bg-white border rounded"
          placeholder="email"
          value={email}
          onChange={(event) => {
            const value = event.target.value;
            setEmail(value);
          }}
        />
        <input
          className="text-black bg-white border rounded"
          placeholder="password"
          value={password}
          onChange={(event) => {
            const value = event.target.value;
            setPassword(value);
          }}
        />
        <button>Sign In</button>
      </form>
    </>
  );
}
