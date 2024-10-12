import { getSession } from "@/authLib"

export const getIsAuth = async () => {
    const session = await getSession()
    if (session) {
        return true
    } else {
        return false
    }
}