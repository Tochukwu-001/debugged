import { auth } from '@/auth'
import FixesComponent from '@/components/FixesComponent'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const session = await auth()
  if (!session) {
    redirect("/auth/signin")
  }
  return (
    <main>
      <FixesComponent session={session}/>
    </main>
  )
}

export default page
