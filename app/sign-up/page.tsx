"use client";
import React from "react";
import {
  createClientComponentClient,
  Session,
} from "@supabase/auth-helpers-nextjs";

export default function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const supabase = createClientComponentClient();

  const signUpNewUser = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo:
          "https://supabase-nextjs-twitter-clone.pages.dev/api/auth/callback",
      },
    });

    console.log("data ==========> ", data);
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        signUpNewUser(email, password);
      }}
    >
      <div className="mb-2">
        <input
          className="border rounded"
          placeholder="email"
          value={email}
          onChange={(event) => {
            const value = event.target.value;
            setEmail(value);
          }}
        />
      </div>
      <div className="mb-2">
        <input
          className="border rounded"
          placeholder="password"
          value={password}
          onChange={(event) => {
            const value = event.target.value;
            setPassword(value);
          }}
        />
      </div>
      <button>Sign up</button>
    </form>
  );
}
