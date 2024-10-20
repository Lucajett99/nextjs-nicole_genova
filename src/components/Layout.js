import Header from "./Header.js";
import Head from "next/head";

const Layout = ({ children }) => {
  // or: <div className="bg-gradient-to-r from-[#FF8E7E] to-[#00B3B0]">
  return (
    <div className="bg-gradient-to-r from-[#00B3B0] to-[#FF8E7E]">
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
