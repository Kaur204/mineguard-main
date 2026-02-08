import Navbar from "../../components/portal/auth/Navbar";
import Footer from "../../components/website/shared/Footer";
import { useNavigate } from "react-router-dom";

const PortalHome = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center text-gray-900 pt-40 pb-40">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-3">Choose Your Portal</h1>
        <p className="text-gray-600 mb-10 max-w-xl">
          Select the appropriate portal to continue. Access admin tools or
          submit incident reports.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          {/* Admin Portal Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 p-8 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Admin Portal</h2>
            <p className="text-gray-600 mb-8 text-sm">
              Manage incidents, monitor reports, and view analytics in one
              dashboard.
            </p>
            <button
              onClick={() => navigate("/portal/admin/login")}
              className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all font-medium text-white"
            >
              Go to Admin Portal
            </button>
          </div>

          {/* User Portal Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 p-8 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">User Portal</h2>
            <p className="text-gray-600 mb-8 text-sm">
              Report incidents, chat with AI assistant, and track updates
              easily.
            </p>
            <button
              onClick={() => navigate("/portal/user/login")}
              className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all font-medium text-white"
            >
              Go to User Portal
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default PortalHome;