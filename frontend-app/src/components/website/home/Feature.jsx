import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Real-time Reporting",
    description:
      "Report safety incidents instantly with our streamlined digital system. Get immediate acknowledgment and tracking updates.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Secure Data Storage",
    description:
      "All incident reports and regulatory information are encrypted and securely stored with full compliance standards.",
    icon: LockClosedIcon,
  },
  {
    name: "Regulatory Database",
    description:
      "Access over 5000+ mining regulations and compliance requirements in one centralized, always-updated database.",
    icon: ServerIcon,
  },
];

export default function Feature() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-purple-600">
                Powerful Features
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Everything you need for mining safety
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                MineGuard provides comprehensive tools for regulatory compliance and incident management, making mining operations safer and more efficient.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-purple-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-900/10 sm:w-[28rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}