import Image from "next/image";

export default function coming_soon({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-500">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center item">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Sito in costruzione <br />
            ...
          </h1>
        </div>
      </div>
    </div>
  );
}
