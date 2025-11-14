<<<<<<< HEAD
"use server"
import { auth } from "@/auth"
import PostFixClient from '@/components/postfixclient'
import { redirect } from "next/navigation"
import React from 'react'



 const page = async () => {
=======
"use server";
import { auth } from '@/auth';
import PostFixClient from '@/components/PostFixClient';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async () => {
>>>>>>> 42f3d01560e03df74dfd46184787f220e83ad268
  const session = await auth();
  if (!session) {
    redirect("/auth/signin")
  }
<<<<<<< HEAD
 
  return (
    <div>
      <PostFixClient/>
=======
  return (
    <div className='mb-5'>
      <PostFixClient session={session}/>
>>>>>>> 42f3d01560e03df74dfd46184787f220e83ad268
    </div>
  )
}

export default page
