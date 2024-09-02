'use client'

import { auth, db } from '@/firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc } from 'firebase/firestore'
import React, { useContext, useState, useEffect } from 'react'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [userDataObj, setUserDataObj] = useState({})
    const [loading, setLoading] = useState(true)

    //AUTH HANDLERS

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        setUserDataObj({})
        setCurrentUser(null)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {

            try {
                //Set the user to our local context state
                setLoading(true)
                setCurrentUser(user)
                if (!user) {
                    return
                }

                //if user exists, fetch data from firestore database
            const docRec = doc(db, 'users', user.uid)
            

            } catch (err) {
                console.log(err.message)
            }
            finally {
                setLoading(false)
            }

        })
        return unsubscribe

    }, [])


    const value = {

    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
