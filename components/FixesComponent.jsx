"use client";
import React, { useEffect, useState } from 'react'
import { IoCopyOutline } from "react-icons/io5";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from '@/config/firebaseConfig';
import { FiLoader } from 'react-icons/fi';
import { FaRegTrashAlt } from "react-icons/fa";


const FixesComponent = ({ session }) => {

    const [errordetails, setErrorDetails] = useState([])
    const [fetching, setFetching] = useState(true)

    const fetchLogs = async () => {
        try {
            const errorDetailsFetch = []
            const querySnapshot = await getDocs(collection(db, "fixlog"))
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                let errorFix = {
                    id: doc.id,
                    ...doc.data()
                }
                console.log(errorFix);
                errorDetailsFetch.push(errorFix)
                console.log(errorDetailsFetch);

            });
            setErrorDetails(errorDetailsFetch)
            console.log(errordetails);
        } catch (error) {
            console.error("An error occurred while fetching", error)
            alert("An error occurred. Try again later")
        }
        finally {
            setFetching(false)
        }

    }
    useEffect(() => { fetchLogs() }, [errordetails])

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "fixlog", id))
        } catch (error) {
            console.error("An error occurred while deleting document:", error)
            alert("An error occurred. Try again later")
        }
    }

    return (
        <main className='min-h-dvh p-5'>
            <div className='flex flex-col gap-2 justify-center items-center lg:w-1/2 mx-auto my-10'>
                <h1 className='text-center text-3xl font-bold text-blue-900'>Welcome to the Fix Zone</h1>
                <p className='font-light text-xl text-center'>Explore solutions from real devs who have fixed bugs to give you a smooth experience. Every error deserves a comeback story.</p>
            </div>
            {
                fetching ? <div className='flex items-center justify-center'><FiLoader className='text-3xl animate-spin' /></div> :
                    <section className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                        {
                            errordetails.map((detail, i) => (

                                <div key={i} className='shadow-md lg:p-5 p-3 rounded-md space-y-3 relative group'>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-1'>
                                            <img src={detail.img} alt="logo" className='w-8 h-8 rounded-full' />
                                            <p className='font-light'>{detail.author}</p>
                                        </div>
                                        <p className='bg-blue-900 text-white px-2 py-1 rounded-md font-light'>{detail.category}</p>
                                    </div>

                                    <p className='text-center font-semibold text-2xl text-gray-800'>{detail.name}</p>
                                    <div>
                                        <p className='text-xs text-gray-600'>Error Message:</p>
                                        <p className='text-red-600 text-lg line-clamp-3'>
                                            {detail.error}
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
                                    {
                                        session.user.id == detail.uid &&
                                        <button onClick={() => handleDelete(detail.id)} className='absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200'>
                                            <FaRegTrashAlt />
                                        </button>
                                    }
                                </div>
                            ))
                        }

                    </section>
            }
        </main>
    )
}

export default FixesComponent
