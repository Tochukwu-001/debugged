import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { auth, signIn } from "@/auth"
import { redirect } from 'next/navigation';

const page = async () => {
    const session = await auth()
    console.log(session);
    if (session) {
        redirect("/post-fix")
    }
    return (
        <main className='min-h-dvh flex items-center justify-center lg:p-10 p-5'>
            <section className='shadow-md rounded-md p-5 lg:w-1/3 mx-auto space-y-10 lg:space-y-20'>
                <h1 className='text-center text-2xl md:text-4xl text-gray-700 font-semibold'>Sign in to your account to continue</h1>

                <div className='flex flex-col gap-5'>
                    <form className='flex flex-col space-y-3'>
                        <input type="text" className='border border-gray-200 p-2 rounded-md outline-none' placeholder='Enter your email address...' />
                        <input type="text" className='border border-gray-200 p-2 rounded-md outline-none' placeholder='Enter your password...' />
                        <button className='bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 transition-colors duration-200'>Log In</button>
                    </form>

                    <div className='flex items-center justify-center'>
                        <div className='border w-full border-gray-500'></div>
                        <span className='text-xs text-gray-600 w-full text-center'>or Sign in with</span>
                        <div className='border w-full border-gray-500'></div>
                    </div>
                    <form
                        action={async () => {
                            "use server"
                            await signIn("google")
                        }}
                    >
                        <button type='submit' className='border border-gray-200 flex items-center justify-center gap-2 px-2 py-3 rounded-full w-full'>
                            <FcGoogle className='text-xl' />
                            <p className='text-gray-700'>Continue with Google</p>
                        </button>
                    </form>
                    <button className='border border-gray-200 flex items-center justify-center gap-2 px-2 py-3 rounded-full'>
                        <FaGithub className='text-xl' />
                        <p className='text-gray-700'>Continue with Github</p>
                    </button>
                    <button className='border border-gray-200 flex items-center justify-center gap-2 px-2 py-3 rounded-full'>
                        <FaXTwitter className='text-xl' />
                        <p className='text-gray-700'>Continue with Twitter</p>
                    </button>
                </div>

                <p className='text-xs text-gray-700 text-center'>
                    By signing in, you agree to our <span className='underline'>Terms of Use</span> and <span className='underline'>Privacy Policy</span>
                </p>
            </section>
        </main>
    )
}

export default page
