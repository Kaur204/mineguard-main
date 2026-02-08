import React from "react";
import logo from "../../../assets/logo.png";

const Footer = () => (
  <footer className="bg-white border-t border-gray-200">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="/"
          className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-8" alt="MineGuard Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">
            MineGuard
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-600 sm:mb-0">
          <li>
            <a href="/about" className="hover:text-purple-600 me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="/privacy-policy" className="hover:text-purple-600 me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/licensing" className="hover:text-purple-600 me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-purple-600">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-gray-600 sm:text-center">
        © 2025{" "}
        <a href="#" className="hover:text-purple-600">
          MineGuard™
        </a>
        . All Rights Reserved.
      </span>
    </div>
  </footer>
);

export default Footer;