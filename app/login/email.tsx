import React from "react";
import { useRouter } from "next/navigation";

import { supabaseClientComponent as supabase } from "@/libs/supabase-client-instance";

export default function Email() {
  //   const supabase = createClientComponentClient();
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log("dataaaaaaaaaaa =======> ", data);
    if (data) {
      router.push("/");
    }
  };

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/auth/callback`,
      },
    });
    router.refresh();
  };

  return (
    <form
    //   onSubmit={(event) => {
    //     event.preventDefault();
    //     signInWithEmail(email, password);
    //   }}
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
      <button type="button" onClick={handleSignIn}>
        Sign in
      </button>
      <button type="button" onClick={handleSignUp}>
        Sign up
      </button>
    </form>
  );
}
