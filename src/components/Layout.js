import Header from "./Header.js";
import Footer from "./Footer.js";
import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <div className="bg-gradient-to-r from-[#FFB4A9] to-[#7DD3D3]">
            <Head>
                <title>Logopedista Nicole Genova</title>
                <meta name="description" content="Logopedista Nicole Genova" />
            </Head>
            <Header />
            <div className="min-h-screen">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
