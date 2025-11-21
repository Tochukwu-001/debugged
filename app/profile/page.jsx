import { auth, signOut } from '@/auth'
import EditProfile from '@/components/EditProfile'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
    const session = await auth()
    const username = session.user.name
    const userId = session.user.id
    if (!session) {
        redirect("/auth/signin")
    }

    // console.log(session);
    
    return (
        <main className='min-h-dvh flex flex-col items-center justify-center gap-10 p-3 max-w-1/3 mx-auto'>
            <h1 className='text-center text-4xl font-semibold text-blue-950 lg:my-10'>View and Manage your Profile</h1>
            {
                session.user.image ? <img src={session.user.image} alt={session.user.name.slice(0, 2).toUpperCase()} className='w-52 h-52 rounded-full' /> : "Avatar"
            }

            <h1 className='text-2xl '>{session.user.name}</h1>
            <h2 className='text-xl font-light'>{session.user.email}</h2>
            <p className='text-sm text-gray-600'>{session.user.id}</p>

            <EditProfile name={username} uid={userId} />

            <form
                className='w-full mx-auto flex items-center justify-center'
                action={async () => {
                    "use server"
                    await signOut()
                }}
            >
                <button type='submit' className='bg-red-600 text-white px-20 py-2 rounded-md text-xl hover:bg-red-700 transition-all duration-200'>
                    Sign Out
                </button>
            </form>
        </main>
    )
}

export default page
