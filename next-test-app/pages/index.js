import React, { useState } from "react";
import Link from "next/link";

const index = () => {
  const [username, setUsername] = useState("");

  return (
    <div>
      <label>
        username
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </label>
      <p>{username} 깃허브 검색하기</p>
      <Link href={`/users/${username}`}>검색하기</Link>
    </div>
  );
};

export default index;
