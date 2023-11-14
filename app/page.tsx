import { supabaseServerComponent as supabase } from "@/libs/supabase-server-instance";
import AuthButton from "./auth-button";

export const dynamic = "force-dynamic";
export const runtime = "edge";
// export const revalidate = 0;

export default async function Home() {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <header className="flex justify-end bg-[#2c2c2c] p-4 border-b-[#444444] border-b-[2px]">
        <AuthButton session={session} />
      </header>
      {/* <AuthButtonServer /> */}
      {/* <pre>{JSON.stringify(tweets, null, 2)}</pre> */}
    </div>
  );
}
