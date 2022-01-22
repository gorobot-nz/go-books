import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

const AppRouter = () => {
    const auth = false;
    return (
        auth ?
            <Routes>

            </Routes>
            :
            <Routes>

            </Routes>
    );
};

export default AppRouter;