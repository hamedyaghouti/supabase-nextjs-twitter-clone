"use client";
import React from "react";
import {
  createClientComponentClient,
  Session,
} from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AuthButtonClient({
  session,
}: {
  session: Session | null;
}) {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  const initialized = React.useRef(false);

  React.useEffect(() => {
    if (!initialized.current && session) {
      router.refresh();
      initialized.current = true;
    }
  }, [router, session]);

  return session ? (
    <div className="inline-block">
      <button
        className="p-2 bg-sky-600 hover:bg-sky-700 dark:hover:bg-sky-500 w-full rounded"
        onClick={handleSignOut}
      >
        Logout
      </button>
    </div>
  ) : (
    <Link href="/login">
      <button className="p-2 bg-sky-600 hover:bg-sky-700 dark:hover:bg-sky-500 w-full rounded">
        Login/Register
      </button>
    </Link>
  );
}
