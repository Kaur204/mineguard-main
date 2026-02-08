import { Link } from "react-router-dom";

const DashboardCard = ({ title, description, to }) => {
  return (
    <Link to={to}>
      <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:border-purple-300 transition-all p-6 cursor-pointer hover:bg-gray-50">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default DashboardCard;