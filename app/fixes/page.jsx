"use client";
import React, { useEffect } from 'react'
import { IoCopyOutline } from "react-icons/io5";
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/config/firebaseConfig';


const page = () => {

  const errordetails = [
    {
      img: "/logo.png",
      author: "Jason Statham",
      category: "Python",
      errorName: "IndexError",
      errorMessage: "leNotFoundError: [Errno 2] No such file or directory: 'data.txt' FileNotFoundError: [Errno 2] No such file or directory: 'data.txt' FileNotFoundError: [Errno 2] No such file or directory: 'data.txt'",
      fix: "The specified file doesn’t exist or the path is incorrect. Always use absolute paths or verify relative ones with os.path.exists(). In production, handle this error gracefully with exception handling: import os filepath data.txt if os.path.exists(filepath): with open(filepath) as f: print(f.read()) else: print(File not found:, filepath) Using try-except blocks ensures your program doesn’t crash when files are missing.",
      timestamp: "11/7/2025"
    },
    {
      img: "/logo.png",
      author: "Jason Statham",
      category: "Python",
      errorName: "IndexError",
      errorMessage: "leNotFoundError: [Errno 2] No such file or directory: 'data.txt' FileNotFoundError: [Errno 2] No such file or directory: 'data.txt' FileNotFoundError: [Errno 2] No such file or directory: 'data.txt'",
      fix: "The specified file doesn’t exist or the path is incorrect. Always use absolute paths or verify relative ones with os.path.exists(). In production, handle this error gracefully with exception handling: import os filepath data.txt if os.path.exists(filepath): with open(filepath) as f: print(f.read()) else: print(File not found:, filepath) Using try-except blocks ensures your program doesn’t crash when files are missing.",
      timestamp: "11/7/2025"
    },
    {
      img: "/logo.png",
      author: "Jason Statham",
      category: "Python",
      errorName: "IndexError",
      errorMessage: "leNotFoundError: [Errno 2] No such file or directory: 'data.txt' FileNotFoundError: [Errno 2] No such file or directory: 'data.txt' FileNotFoundError: [Errno 2] No such file or directory: 'data.txt'",
      fix: "The specified file doesn’t exist or the path is incorrect. Always use absolute paths or verify relative ones with os.path.exists(). In production, handle this error gracefully with exception handling: import os filepath data.txt if os.path.exists(filepath): with open(filepath) as f: print(f.read()) else: print(File not found:, filepath) Using try-except blocks ensures your program doesn’t crash when files are missing.",
      timestamp: "11/7/2025"
    },
  ]

  const fetchLogs = async () => {
    // const  
    const querySnapshot = await getDocs(collection(db, "fixlog"))
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      let errorFix = {
        id: doc.id,
        ...doc.data()
      }
      console.log(errorFix);

    });
  }
  useEffect(() => { fetchLogs() }, [])

  return (
    <main className='min-h-dvh p-5'>
      <div className='flex flex-col gap-2 justify-center items-center lg:w-1/2 mx-auto my-10'>
        <h1 className='text-center text-3xl font-bold text-blue-900'>Welcome to the Fix Zone</h1>
        <p className='font-light text-xl text-center'>Explore solutions from real devs who have fixed bugs to give you a smooth experience. Every error deserves a comeback story.</p>
      </div>
      <section className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
        {
          errordetails.map((detail, i) => (

            <div key={i} className='shadow-md lg:p-5 p-3 rounded-md space-y-3'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                  <img src={detail.img} alt="logo" className='w-8 h-8 rounded-full' />
                  <p className='font-light'>{detail.author}</p>
                </div>
                <p className='bg-blue-900 text-white px-2 py-1 rounded-md font-light'>{detail.category}</p>
              </div>

              <p className='text-center font-semibold text-2xl text-gray-800'>{detail.errorName}</p>
              <div>
                <p className='text-xs text-gray-600'>Error Message:</p>
                <p className='text-red-600 text-lg line-clamp-3'>
                {detail.errorMessage}
                </p>
              </div>
              <div>
                <p className='text-xs to-gray-600'>Fix:</p>
                <p className='text-lg line-clamp-6'>
                 {detail.fix}
                </p>
              </div>
              <div className='flex items-center justify-between lg:mt-10'>
                <p className='text-sm font-light'>Posted on {detail.timestamp}</p>
                <button className='flex items-center gap-1 text-sm'><IoCopyOutline />Copy Fix</button>
              </div>
            </div>
          ))
        }
      </section>
    </main>
  )
}

export default page
