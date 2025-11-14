"use server"
import { auth } from "@/auth"
import PostFixClient from '@/components/postfixclient'
import { redirect } from "next/navigation"
import React from 'react'



 const page = async () => {
  const session = await auth();
  if (!session) {
    redirect("/auth/signin")
  }
 
  return (
    <div>
      <PostFixClient/>
    </div>
  )
}

export default page
