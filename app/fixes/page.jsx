import { auth } from '@/auth'
import FixesComponent from '@/components/FixesComponent'
import React from 'react'

const page = async () => {
  const session = await auth()
  return (
    <main>
      <FixesComponent session={session}/>
    </main>
  )
}

export default page
