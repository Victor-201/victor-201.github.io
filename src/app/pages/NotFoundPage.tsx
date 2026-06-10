import React, { Suspense } from "react";
import { SEO } from "@/infra/SEO";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const NotFoundPage = () => {
    return (
        <>
            <SEO title="404 — Page Not Found" />
            <Suspense fallback={<div>Loading...</div>}>
                <Spline scene="/assets/404.spline" style={{ height: "100vh" }} />
            </Suspense>
        </>
    );
};

export default NotFoundPage;
