import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";
import { parse } from "cookie";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const cookieName = "sb-oqetnmealraxzvlallio-auth-token";
  const cookie = parse(request.headers.get("Cookie") || "{}");
  //   const cookie = request.headers.get("Cookie");
  const parsedCookie = JSON.parse(cookie[cookieName]);
  const token = parsedCookie[0];
  const res = await fetch(
    "https://cloudflare-workers-test.hamedyaghooti1992.workers.dev",
    { headers: { Authorization: `Bearer ${token}` } }
  );

  const data = await res.json();
  const supabase = await createServerComponentClient({ cookies });

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return NextResponse.json(data);
}
