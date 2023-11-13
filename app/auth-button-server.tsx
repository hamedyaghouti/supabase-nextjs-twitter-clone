// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
import AuthButtonClient from "./auth-button-client";
import { supabaseServerComponent as supabase } from "@/libs/supabase-server-instance";

export const dynamic = "force-dynamic";
export const runtime = "edge";

export default async function AuthButtonServer() {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("session =====> ", session);

  return (
    <>
      <div>{user?.email}</div>
      <AuthButtonClient session={session} />
    </>
  );
}
