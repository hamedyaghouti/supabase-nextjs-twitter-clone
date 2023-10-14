import React from "react";

export default async function Tweets() {
  const res = await fetch(
    "https://cloudflare-workers-test.hamedyaghooti1992.workers.dev/hamed"
  );
  const tweets: { id: string; created_at: string; title: string }[] =
    await res.json();

  return (
    <>
      {tweets.map((tweet) => (
        <div key={tweet.id}>{tweet.title}</div>
      ))}
    </>
  );
}
