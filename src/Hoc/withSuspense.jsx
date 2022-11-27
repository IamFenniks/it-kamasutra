import React, { Suspense } from "react";
import Preloader from "../Components/Common/Preloader";

export const withSuspense = (Componet) => {
    return (props) => {
        return <Suspense fallback={<Preloader />}>
            <Componet { ...props } />
        </Suspense>
    };
}
