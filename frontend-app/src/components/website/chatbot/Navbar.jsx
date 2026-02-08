import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border-b border-gray-200">
      <header className="w-full z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          {/* Logo */}
          <div className="flex">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={logo} className="h-8 w-auto" />
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center">
            <button
              onClick={() => navigate("/dashboard/chatbot")}
              className="text-sm font-semibold text-gray-900 hover:text-purple-600 focus:outline-none transition"
            >
              Try Chatbot <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;