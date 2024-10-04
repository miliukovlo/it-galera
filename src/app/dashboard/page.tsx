import React from 'react';
import { Metadata } from 'next';
import Dashboard from './Dashboard';

export const metadata: Metadata = {
    title: "Список",
    description: "Generated by create next app",
  };

const DashboardPage = () => {
    return (
        <>
            <Dashboard/>
        </>
    );
}

export default DashboardPage;