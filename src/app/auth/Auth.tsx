'use client'

import React, { useState } from 'react';
import styles from "./auth.module.css"
import Input from '@/Components/Common/Input/Input';
import Button from '@/Components/Common/Button/Button';
import { useHandleLogin } from '@/Hooks/client/useHandleLogin';

const Auth : React.FC = () => {
    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error404, setError404] = useState<boolean>(false)
    const [error401, setError401] = useState<boolean>(false)
    const [error500, setError500] = useState<boolean>(false)

    const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }    
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const handleLogin = useHandleLogin({loginValue: login,password, setError404, setError401, setError500})
    return (
        <main className={`main ${styles.auth__content}`}>
            <h1 className={styles.auth__head_text}>Вход</h1>
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
                size="s"
                onClick={handleLogin}
            />
            <p className={(error404 || error401 || error500) ? "error__text" : "error__text_hidden"}>
                {
                error404 ? "Такой учетной записи нет!" :
                error401 ? "Вы неправильно ввели логин/пароль!" :
                error500 ? "Сервер не работает, повторите попытку позже!" : ""}</p>

        </main>
    );
}

export default Auth;
