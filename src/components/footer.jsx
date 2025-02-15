import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold">Q&A Generator</h2>
          <p className="text-sm mt-2">
            Transform your PDFs into multilingual Q&A content with advanced AI technology.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="cursor-pointer text-xl" />
            <FaTwitter className="cursor-pointer text-xl" />
            <FaLinkedinIn className="cursor-pointer text-xl" />
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Home</li>
            <li>Features</li>
            <li>How It Works</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
        </div>
        
        {/* Legal */}
        <div>
          <h2 className="text-lg font-semibold">Legal</h2>
          <ul className="mt-2 space-y-2 text-sm">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact</li>
          </ul>
        </div>
        
        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold">Stay Updated</h2>
          <p className="text-sm mt-2">Subscribe to our newsletter for the latest updates and features.</p>
          <div className="mt-4 flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">Subscribe</button>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>&copy; 2024 Q&A Generator. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
