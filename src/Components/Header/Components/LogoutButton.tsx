import { logout } from '@/authLib';
import LogoutIcon from '@/Components/Common/Svg/Icons/LogoutIcon/LogoutIcon';
import React, { Dispatch } from 'react';
import styles from './LogoutButton.module.css'
import { UnknownAction } from '@reduxjs/toolkit';
import { clearUser } from '@/store/userData/userStore';

interface logoutButtonProps {
    routerFunc: () => void,
    dispatch: Dispatch<UnknownAction>
}

const LogoutButton: React.FC<logoutButtonProps> = ({
    routerFunc,
    dispatch
}) => {
    const logoutFunc = () => {
        dispatch(clearUser())
        logout()
        routerFunc()
    }
    return (
        <button className={styles.btn} onClick={logoutFunc}>
            <LogoutIcon fill="white" />
        </button>
    );
}

export default LogoutButton;
