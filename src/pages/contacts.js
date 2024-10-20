import Layout from "../components/Layout.js";
import ContactForm from "../components/ContactForm.js";
import SimpleMap from "../components/Map.js";


export default function contacts() {

  return (
    <Layout>
      <div className="isolate px-6 py-24 sm:py-32 lg:px-8 items-center">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contatti
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row flex-auto items-center justify-around mt-8">
          <div className="max-w-2xl">
            <ul className="mt-2 text-lg leading-8 text-black">
              <li>Telefono: +39 0123456789</li>
              <li>Email: logopedistanicolegenova@gmail.com</li>
            </ul>
            <span className="mt-6 text-lg leading-8 text-black">
              Ricevo negli studi:
            </span>
            <ul className="mt-2 text-lg indent-6 leading-8 text-black list-disc list-inside">
              <li>Studio di Via Roma 1, Campobasso</li>
              <li>Studio di Via Garibaldi 2, Campobasso</li>
            </ul>
          </div>
          <div className="flex-none mt-6 sm:mt-0 w-64 lg:w-96 ...">
            <SimpleMap style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
