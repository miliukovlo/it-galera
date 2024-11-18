import { useDispatch } from "react-redux";
import { GetLogin } from "../GetLogin";
import { login } from '@/authLib';
import { setUser } from "@/store/userData/userStore";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useCallback } from "react";

interface useHandleLoginProps {
    loginValue: string,
    password: string,
    setError404: (value: React.SetStateAction<boolean>) => void,
    setError401: (value: React.SetStateAction<boolean>) => void,
    setError500: (value: React.SetStateAction<boolean>) => void

}

export const useHandleLogin = ({
    loginValue,
    password,
    setError404,
    setError401,
    setError500
}: useHandleLoginProps) => {
    const dispatch = useDispatch();
    const {replace} = useRouter()
    return useCallback( async () => {
        if (loginValue !== "" && password !== "") {
            setError404(false);
            setError401(false);
            setError500(false);
            try {
                const user = await GetLogin(loginValue, password);
                console.log(user);
                
                if (user) {
                    await login(loginValue, user.role);
                    dispatch(setUser(user));
                    replace(user.role === 'teacher' ? "/schedule" : "/users");
                }
            } catch (e) {
                if (axios.isAxiosError(e)) {
                    const errorResponse = e.response;
                    if (errorResponse) {
                        if (errorResponse.status === 401) {
                            setError401(true);
                        } 
                        else if (errorResponse.status === 404) {
                            setError404(true);
                        } 
                        else if (errorResponse.status === 500) {
                            setError500(true);
                        } 
                    } else {
                        console.error("Ошибка без ответа от сервера", e.message);
                        setError500(true);
                    }
                } else {
                    console.error("Произошла ошибка:", e);
                    setError500(true);
                }
            }
        }
    }, [loginValue, password, setError404, setError401, setError500])
};