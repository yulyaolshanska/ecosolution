import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

function App() {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
