import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AuthButtonClient from "./auth-button-client";

export const dynamic = "force-dynamic";
export const runtime = "edge";

export default async function AuthButtonServer() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <div>{user?.email}</div>
      <AuthButtonClient session={session} />
    </>
  );
}
