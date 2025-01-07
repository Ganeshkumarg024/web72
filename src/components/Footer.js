import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 py-16">
      {/* Values Section */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold mb-12">
          The values that hold us<br />true and to account
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className=" bg-opacity-10 p-2 rounded-lg">
                <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold">Simplicity</h3>
            </div>
            <p className="text-gray-600">Things being made beautifully simple are at the heart of everything we do.</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className=" bg-opacity-10 p-2 rounded-lg">
                <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold">Social Good</h3>
            </div>
            <p className="text-gray-600">We believe in making things better for everyone, even if just by a little bit!</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className=" bg-opacity-10 p-2 rounded-lg">
                <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold">Trust</h3>
            </div>
            <p className="text-gray-600">We work on the basis of creating trust which can only be nurtured through authenticity and transparency.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-[var(--primary)] bg-opacity-5 rounded-xl p-8 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-3xl text-white font-bold mb-2">Ready for a simple future?</h2>
            <p className="text-xl text-white">Let's get started!</p>
          </div>
          <button className="mt-4 md:mt-0 bg-[var(--primary)] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-4 border-t border-gray-200 pt-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold">C.</span>
            </Link>
            <p className="text-sm text-gray-500">© {currentYear}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Customers</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/buyer" className="hover:text-[var(--primary)]">Buyer</Link></li>
              <li><Link to="/supplier" className="hover:text-[var(--primary)]">Supplier</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/about" className="hover:text-[var(--primary)]">About us</Link></li>
              <li><Link to="/careers" className="hover:text-[var(--primary)]">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--primary)]">Contact us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Further Information</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/terms" className="hover:text-[var(--primary)]">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-[var(--primary)]">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"  // Add your Facebook link
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-opacity-10 p-2 rounded-full hover:bg-opacity-20"
              >
                <FaFacebookF className="w-5 h-5 text-[var(--primary)]" />
              </a>
              <a
                href="https://twitter.com"  // Add your Twitter link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-opacity-10 p-2 rounded-full hover:bg-opacity-20"
              >
                <FaTwitter className="w-5 h-5 text-[var(--primary)]" />
              </a>
              <a
                href="https://www.linkedin.com"  // Add your LinkedIn link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-opacity-10 p-2 rounded-full hover:bg-opacity-20"
              >
                <FaLinkedinIn className="w-5 h-5 text-[var(--primary)]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;