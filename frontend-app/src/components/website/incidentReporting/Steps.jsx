import React from "react";

const IncidentSteps = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="mx-auto max-w-screen-md">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Incident Reporting Process
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Follow these five simple steps to report an incident through{" "}
            <span className="font-semibold text-purple-600">
              MineGuard
            </span>
            . Our system ensures quick response, accurate tracking, and safety
            compliance.
          </p>
        </div>

        {/* Timeline */}
        <ol className="relative border-l border-gray-300">
          {/* Step 1 */}
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-purple-600 rounded-full mt-1.5 -left-1.5 border-2 border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
              Step 1
            </time>
            <h3 className="text-lg font-semibold text-gray-900">
              Identify and Describe the Incident
            </h3>
            <p className="mb-4 text-base font-normal text-gray-600">
              Start by providing details about what happened — when, where, and
              the type of incident (e.g., safety hazard, injury, or near miss).
              Include as much information as possible to help the system
              understand the situation.
            </p>
            <a
              href="/portal/home"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-purple-600 focus:z-10 focus:ring-4 focus:outline-none focus:ring-purple-100 transition-all"
            >
              Get Started
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>

          {/* Step 2 */}
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-purple-600 rounded-full mt-1.5 -left-1.5 border-2 border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
              Step 2
            </time>
            <h3 className="text-lg font-semibold text-gray-900">
              Upload Supporting Evidence
            </h3>
            <p className="text-base font-normal text-gray-600">
              Attach relevant photos, videos, or documents. These help validate
              your report and allow safety teams to assess the severity and root
              cause efficiently.
            </p>
          </li>

          {/* Step 3 */}
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-purple-600 rounded-full mt-1.5 -left-1.5 border-2 border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
              Step 3
            </time>
            <h3 className="text-lg font-semibold text-gray-900">
              AI Automatically Categorizes the Event
            </h3>
            <p className="text-base font-normal text-gray-600">
              The system's AI analyzes your input and classifies the incident
              based on type, severity, and potential impact, ensuring it reaches
              the right department immediately.
            </p>
          </li>

          {/* Step 4 */}
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-purple-600 rounded-full mt-1.5 -left-1.5 border-2 border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
              Step 4
            </time>
            <h3 className="text-lg font-semibold text-gray-900">
              Submit Your Report
            </h3>
            <p className="text-base font-normal text-gray-600">
              Review all details and submit your report. You'll receive a confirmation with a reference number for tracking.
            </p>
          </li>

          {/* Step 5 */}
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-purple-600 rounded-full mt-1.5 -left-1.5 border-2 border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
              Step 5
            </time>
            <h3 className="text-lg font-semibold text-gray-900">
              Track and Resolve
            </h3>
            <p className="text-base font-normal text-gray-600">
              Monitor the progress of your incident through the dashboard. Receive updates as it's reviewed and resolved.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default IncidentSteps;