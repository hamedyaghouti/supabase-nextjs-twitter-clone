// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

// import AuthButtonServer from "./auth-button-server";

// export const dynamic = "force-dynamic";
// export const runtime = "edge";

// export default async function Home() {
//   const supabase = createServerComponentClient({ cookies });
//   const { data: tweets } = await supabase.from("tweets").select();

//   return (
//     <>
//       <AuthButtonServer />
//       <pre>{JSON.stringify(tweets, null, 2)}</pre>
//     </>
//   );
// }
"use client";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import {
  // Import predefined theme
  ThemeSupa,
} from "@supabase/auth-ui-shared";

// const supabase = createClient('<INSERT PROJECT URL>', '<INSERT PROJECT ANON API KEY>')
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

const App = () => (
  <Auth
    supabaseClient={supabase}
    appearance={{ theme: ThemeSupa }}
    providers={["github", "figma"]}
  />
);

export default App;
