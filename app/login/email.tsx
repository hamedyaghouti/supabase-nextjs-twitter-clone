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
      className=""
      //   onSubmit={(event) => {
      //     event.preventDefault();
      //     signInWithEmail(email, password);
      //   }}
    >
      <div>
        <input
          className="text-black bg-white border rounded block w-full p-2 mb-2"
          placeholder="email"
          value={email}
          onChange={(event) => {
            const value = event.target.value;
            setEmail(value);
          }}
        />
      </div>
      <div>
        <input
          className="text-black bg-white border rounded block w-full p-2 mb-2"
          placeholder="password"
          value={password}
          onChange={(event) => {
            const value = event.target.value;
            setPassword(value);
          }}
        />
      </div>
      <button
        className="p-2 bg-sky-600 hover:bg-sky-700 dark:hover:bg-sky-500 w-full rounded mb-2"
        type="button"
        onClick={handleSignIn}
      >
        Sign in
      </button>
      <button
        className="p-2 bg-sky-600 hover:bg-sky-700 dark:hover:bg-sky-500 w-full rounded mb-2"
        type="button"
        onClick={handleSignUp}
      >
        Sign up
      </button>
    </form>
  );
}
