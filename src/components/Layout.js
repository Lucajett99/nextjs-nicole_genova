import Header from "./Header.js";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-purple-500">
      <Head>
        <title>Logopedista Nicole Genova</title>
        <meta name="description" content="Logopedista Nicole Genova" />
      </Head>
      <Header />
      <div className="min-h-screen">{children}</div>
    </div>
  );
};

export default Layout;
