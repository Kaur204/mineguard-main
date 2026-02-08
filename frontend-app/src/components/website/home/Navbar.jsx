import { useState, useEffect, useRef } from "react";
import logo from "../../../assets/logo.png";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const navigation = [
  { name: "About", targetId: "about" },
  { name: "Features", targetId: "features" },
  {
    name: "Solutions",
    children: [
      { name: "Chatbot", href: "/chatbot" },
      { name: "Incident Reporting", href: "/incident-reporting" },
    ],
  },
  { name: "Contact", targetId: "contact" },
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
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleScroll = (targetId) => {
    if (!targetId) return;
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpenDropdown(null);
    }
  };

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
              <div key={item.name} className="relative" ref={item.children ? dropdownRef : null}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="text-sm font-semibold text-gray-900 hover:text-purple-600 transition-colors flex items-center gap-1"
                    >
                      {item.name}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        {item.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-900 hover:bg-purple-50 hover:text-purple-600 first:rounded-t-lg last:rounded-b-lg transition-colors"
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleScroll(item.targetId)}
                    className="text-sm font-semibold text-gray-900 hover:text-purple-600 transition-colors"
                  >
                    {item.name}
                  </button>
                )}
              </div>
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