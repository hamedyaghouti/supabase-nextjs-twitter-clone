import { supabaseServerComponent as supabase } from "@/libs/supabase-server-instance";
import AuthButton from "./auth-button";

export const dynamic = "force-dynamic";
export const runtime = "edge";

export default async function Home() {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <header className="flex justify-end">
        <AuthButton session={session} />
      </header>
      {/* <AuthButtonServer /> */}
      {/* <pre>{JSON.stringify(tweets, null, 2)}</pre> */}
    </div>
  );
}
