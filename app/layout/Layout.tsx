// app/layout/Layout.tsx
import React from 'react';
import Header from '../components/Header'; // Adjust the path as necessary
import Footer from '../components/Footer'; // Adjust the path as necessary
import './layout.css'; // Import the CSS file for layout styles

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;