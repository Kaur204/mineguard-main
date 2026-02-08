import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();

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

          {/* Center - Title */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <h1 className="text-lg font-semibold text-gray-900">Incident Reporting</h1>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="text-sm font-semibold text-gray-900 hover:text-purple-600 transition-colors"
            >
              Back Home
            </button>
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