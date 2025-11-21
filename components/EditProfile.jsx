"use client"
import React, { useState } from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '@/config/firebaseConfig';

const EditProfile = ({ name, uid }) => {
    const [username, setUsername] = useState(name)
    // console.log(username);
    

    const handleUpdate = async (id) => {
        try {
            const docRef = doc(db, "users", id)
            await updateDoc(docRef, {name: username})
            alert("Profile updated")
        } catch (error) {
            console.error("An error occurred while updating your document", error)
            alert("Oops, an error occurred. Please try again later")
        }
    }

    return (
        <main>
            <form onSubmit={()=> handleUpdate(uid)} action="" className='space-y-5'>
                <input
                    type="text"
                    placeholder='Edit your name...'
                    className='w-full border border-gray-200 p-2 rounded-md outline-none'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}

                />
                <button className='bg-blue-900 text-white text-xl rounded-md w-full py-2 hover:bg-blue-950 transition-all duration-200 outline-none'>Update</button>
            </form>
        </main>
    )
}

export default EditProfile
