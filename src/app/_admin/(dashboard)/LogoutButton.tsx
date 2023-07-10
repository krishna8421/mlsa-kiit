"use client";

import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <div>
      <button
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
