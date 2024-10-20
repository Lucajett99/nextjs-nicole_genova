import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "Chi sono", href: "/whoIam" },
	{ name: "Il mio approccio", href: "/myAproach" },
	{ name: "Trattamenti", href: "/treatments" },
	{ name: "Contatti", href: "contacts" },
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = () => {
			setMobileMenuOpen(false);
		};

		router.events.on('routeChangeComplete', handleRouteChange);

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router]);

	return (
		<header className="absolute inset-x-0 top-0 z-50">
			<nav
				className="flex items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">Logopedista Nicole Genova</span>
						<Image className="h-12 w-auto" src={logo} alt="" loading="lazy" />
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-850"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:flex-auto lg:gap-x-12">
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="text-lg font-semibold leading-6 text-gray-900 hover:text-gray-50"
						>
							{item.name}
						</Link>
					))}
				</div>
			</nav>
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-50" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<Link href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">Logopedista Nicole Genova</span>
							<Image className="h-12 w-auto" src={logo} alt="" loading="lazy" />
						</Link>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										{item.name}
									</Link>
								))}
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
