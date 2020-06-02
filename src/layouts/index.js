import PropTypes from "prop-types";
import React from "react";
import Navigation from "../components/base/navigation";
import Footer from "../components/base/footer";
import { SpacexLaunchesProvider } from "../context/SpacexLaunchesContext";

function Layout({ children }) {
    return (
        <>
            <Navigation />
            <SpacexLaunchesProvider>
                <main>{children}</main>
            </SpacexLaunchesProvider>

            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
