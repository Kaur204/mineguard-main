import Navbar from "../../components/website/incidentReporting/Navbar";
import Footer from "../../components/website/shared/Footer";
import Steps from "../../components/website/incidentReporting/Steps";

const IncidentReportingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between scroll-smooth bg-white">
      <Navbar />
      <Steps />
      <Footer />
    </div>
  );
};

export default IncidentReportingPage;