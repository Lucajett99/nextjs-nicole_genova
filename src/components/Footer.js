import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white/10 backdrop-blur-sm text-white text-xs sm:text-base py-4">
            <div className="container mx-auto text-center space-y-2">
                <p>Logopedista Nicole Genova &copy; Tutti i diritti riservati</p>
                <p>Cell: +39 320 2438325</p>
                <p>E-mail: nicolegenova95@gmail.com</p>
                <p>P.IVA: 01835500701</p>
                <p> Iscr. Albo: TSRM-PSTRP di CB e IS - n&deg; 47</p>
                <div className="flex justify-center space-x-4 mb-4">
                    {/* <Link
                        href="https://www.facebook.com/nicole.genova.925?locale=it_IT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1877F2] hover:text-[#3B5998] transition-colors"
                    >
                        <FaFacebookF className="h-4 w-4" />
                    </Link>
                    <p>|</p>
                    <Link
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E1306C] hover:text-[#C13584] transition-colors"
                    >
                        <FaInstagram className="h-4 w-4" />
                    </Link> */}
                    <p>|</p>
                    <Link
                        href="https://www.linkedin.com/in/nicole-genova-00969b1a6/?originalSubdomain=it"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0077B5] hover:text-[#0A66C2] transition-colors"
                    >
                        <FaLinkedinIn className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
