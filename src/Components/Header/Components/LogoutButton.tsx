import { logout } from '@/authLib';
import LogoutIcon from '@/Components/Common/Svg/Icons/LogoutIcon/LogoutIcon';
import React from 'react';
import styles from './LogoutButton.module.css'

interface logoutButtonProps {
    routerFunc: () => void
}

const LogoutButton: React.FC<logoutButtonProps> = ({
    routerFunc
}) => {
    const logoutFunc = () => {
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
