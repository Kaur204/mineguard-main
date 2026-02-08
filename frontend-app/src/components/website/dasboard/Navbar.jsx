import { useState, useEffect, useRef } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Chatbot", to: "/dashboard/chatbot" },
  { name: "Reports", to: "/reports" },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <header className="w-full">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          {/* Logo */}
          <div className="flex">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">MineGuard</span>
              <img alt="MineGuard Logo" src={logo} className="h-8 w-auto" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-sm font-semibold text-gray-900 hover:text-purple-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side - Auth */}
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-sm font-semibold text-gray-900 hover:text-purple-600 transition-colors">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;