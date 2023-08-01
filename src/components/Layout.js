import Header from "./Header.js";

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-purple-500">
      <Header />
      <div className="min-h-screen">{children}</div>
    </div>
  );
};

export default Layout;
