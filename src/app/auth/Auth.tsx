'use client'

import React, { useState } from 'react';
import styles from "./auth.module.css"
import Input from '@/Components/Common/Input/Input';
import Button from '@/Components/Common/Button/Button';
import { useRouter } from 'next/navigation';

interface AuthProps {
    loginLib: (value: string) => Promise<boolean>,
}

const Auth : React.FC<AuthProps> = ({
    loginLib,
}) => {
    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<boolean>(false)
    const {replace} = useRouter()

    const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }    
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const handleLogin = () => {
        if (login !== "" && password !== "") {
            setError(false)
            loginLib(login)
            replace("/dashboard")
        } else {
            setError(true)
        }
    }

    return (
        <main className={`main ${styles.auth__content}`}>
            <Input
                type='text'
                value={login}
                placeholder='Введите корп. почту'
                onChange={handleChangeLogin}
                size='m'
            />
            <Input
                type="password"
                value={password}
                placeholder='Введите пароль'
                onChange={handleChangePassword}
                size='m'
            />
            <Button
                text='Войти'
                size="m"
                onClick={handleLogin}
            />
            <p className={error ? "error__text" : "error__text_hidden"}>Вы неправильно ввели логин/пароль!</p>
        </main>
    );
}

export default Auth;
