// app/pages/index.tsx
import React from 'react';
import Layout from '../layout/Layout'; // Adjust the path as necessary
import Homepage from './homepage';

const Index = () => {
    return (
        <Layout>
            <Homepage />
        </Layout>
    );
};

export default Index;