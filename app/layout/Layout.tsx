"use client"
// app/layout/Layout.tsx
import React from 'react';
import Header from '../components/Header'; // Adjust the path as necessary
import Footer from '../components/Footer'; // Adjust the path as necessary
import useTawkTo from '../../hooks/useTawkTo'; // Import the useTawkTo hook
import './layout.css'; // Import the CSS file for layout styles

const Layout = ({ children }: { children: React.ReactNode }) => {
    useTawkTo(); // Call the hook to load Tawk.to

    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;