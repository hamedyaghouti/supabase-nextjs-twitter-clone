"use client";

import React from "react";

const getUserInfo = async () => {
  const res = await fetch(
    "https://supabase-nextjs-twitter-clone.pages.dev/api/userinfo"
  );
  const userinfo = await res.json();

  return userinfo;
};
// export const runtime = "edge";
export function UserData() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    setIsLoading(true);
    getUserInfo().then((userInfo) => {
      setIsLoading(false);
      setData(userInfo);
    });
  }, []);

  //

  React.useEffect(() => {
    console.log("userinfo =====> ", data);
  }, [data]);

  return <div>User Info</div>;
}
