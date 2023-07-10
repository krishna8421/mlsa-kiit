"use client"

import { signOut } from "next-auth/react"

const SignOut = () => {
  return (
    <div>
      <h1
        onClick={() => signOut()}
      >SignOut</h1>
    </div>
  )
}

export default SignOut
