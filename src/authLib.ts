'use server'

import { cookies } from "next/headers"

export const login = async (loginValue: string) : Promise<boolean> => {
    try {
        await cookies().set('login',loginValue, {expires: 7, httpOnly:true})
        console.log(cookies().get('login'))
        return true
    } catch (e) {
        console.error(e)
        throw new Error()
    }
}