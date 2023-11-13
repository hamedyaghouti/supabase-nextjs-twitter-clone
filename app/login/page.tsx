// "use client";
// import { supabase } from "@/libs/supabase-instance";
// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";

// const Login = () => {
//   return (
//     <div className="container mx-auto">
//       <Auth
//         supabaseClient={supabase}
//         appearance={{ theme: ThemeSupa }}
//         providers={["github", "figma"]}
//       />
//     </div>
//   );
// };

// export default Login;
import AuthButtonClient from "./client-part";
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

  return <AuthButtonClient session={session} />;
}
