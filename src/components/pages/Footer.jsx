import { IoLogoInstagram } from "react-icons/io5";
import ladelogoM from "/ladelogoM-removebg-preview.png";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <footer className="footer bg-gray-900 text-white py-12 px-6 lg:px-24">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="logo text-center lg:text-left">
            <h1 className="text-3xl font-bold text-white mb-4">FLEXFITZ</h1>
            <img src={ladelogoM} alt="FlexFitz Logo" className="w-[160px] h-[130px] mx-auto lg:mx-0" />
          </div>

          {/* Links Section */}
          <div className="footer-links text-center lg:text-left">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li className="hover:text-yellow-500 transition-colors duration-200"><a href="#home">Home</a></li>
              <li className="hover:text-yellow-500 transition-colors duration-200"><a href="#contact">Contact</a></li>
              <li className="hover:text-yellow-500 transition-colors duration-200"><a href="#privacy-policy">Privacy Policy</a></li>
              <li className="hover:text-yellow-500 transition-colors duration-200"><a href="#terms">Terms and Conditions</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="social-media text-center lg:text-left">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="social-icons flex justify-center lg:justify-start space-x-6">
              <a href="https://facebook.com" className="hover:text-blue-600 transition-colors duration-200">
                <BsFacebook size={30} />
              </a>
              <a href="https://instagram.com" className="hover:text-pink-600 transition-colors duration-200">
                <IoLogoInstagram size={30} />
              </a>
              <a href="https://tiktok.com" className="hover:text-black transition-colors duration-200">
                <FaTiktok size={30} />
              </a>
              <a href="https://twitter.com" className="hover:text-black transition-colors duration-200">
                <FaXTwitter size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section (Optional) */}
        <div className="mt-12 text-center text-sm">
          <p>&copy; 2025 FLEXFITZ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
