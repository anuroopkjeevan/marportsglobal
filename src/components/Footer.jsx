import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">MARPORTS GLOBAL 2026</h3>
              <p className="text-gray-400">
                Shaping the future of global maritime and port ecosystem through innovation and collaboration.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Conference</Link></li>
                <li><Link to="/awards/categories" className="hover:text-white transition-colors">Award Categories</Link></li>
                <li><a href="mailto:jayadev@marportsglobal.com" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: jayadev@marportsglobal.com</li>
                <li>Phone:  +919633958465</li>
                {/* <li>Location: International Maritime Center</li> */}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} MARPORTS GLOBAL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
