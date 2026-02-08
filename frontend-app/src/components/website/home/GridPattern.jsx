export default function GridPattern() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 pt-10">
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* 1️⃣ AI-Powered Chatbot */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gray-50 lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 max-lg:text-center">
                  AI Regulatory Assistant
                </p>
                <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                  Get instant answers to mining regulations and compliance queries through our intelligent chatbot powered by advanced language models.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-300 bg-white outline outline-gray-300">
                  <img
                    alt="AI Chatbot Interface"
                    src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.1&auto=format&fit=crop&w=1000&q=80"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-gray-900/15 lg:rounded-l-4xl" />
          </div>

          {/* 2️⃣ Real-time Incident Reporting */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-gray-50 max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 max-lg:text-center">
                  Incident Reporting
                </p>
                <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                  Report safety incidents, hazards, and near-misses in real-time with our streamlined digital reporting system.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  alt="Incident Reporting Dashboard"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.1&auto=format&fit=crop&w=1000&q=80"
                  className="w-full max-lg:max-w-xs"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-gray-900/15 max-lg:rounded-t-4xl" />
          </div>

          {/* 3️⃣ 24/7 Availability */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-gray-50" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 max-lg:text-center">
                  24/7 Availability
                </p>
                <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                  Access regulatory information and report incidents anytime, anywhere with our always-available platform.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center max-lg:py-6 lg:pb-2">
                <img
                  alt="24/7 Availability"
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.1&auto=format&fit=crop&w=1000&q=80"
                  className="h-[min(152px,40cqw)] object-cover"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-gray-900/15" />
          </div>

          {/* 4️⃣ Compliance Management */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gray-50 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 max-lg:text-center">
                  Compliance Management
                </p>
                <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                  Stay updated with the latest mining regulations and ensure full compliance with automated tracking and alerts.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-white/60 outline outline-gray-900/10">
                  <div className="flex bg-white outline outline-gray-900/5">
                    <div className="-mb-px flex text-sm font-medium text-gray-600">
                      <div className="border-r border-b border-r-gray-300 border-b-gray-200 bg-gray-50 px-4 py-2 text-gray-900">
                        ComplianceDashboard.jsx
                      </div>
                      <div className="border-r border-gray-300 px-4 py-2">
                        SafetyReports.jsx
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-gray-900/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>
    </section>
  );
}