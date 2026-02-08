import {
  ChatBubbleBottomCenterTextIcon,
  CpuChipIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    id: 1,
    title: "Step 1: Understanding Your Query",
    icon: ChatBubbleBottomCenterTextIcon,
    description:
      "When you send a message, the chatbot first analyzes your query using advanced natural language processing to understand intent, context, and urgency.",
  },
  {
    id: 2,
    title: "Step 2: Intelligent Analysis",
    icon: CpuChipIcon,
    description:
      "Once the intent is recognized, our system compares it against mining safety standards and real-time operational data to generate a reliable and compliant response.",
  },
  {
    id: 3,
    title: "Step 3: Smart & Human-like Response",
    icon: SparklesIcon,
    description:
      "Finally, the chatbot formulates a clear, natural response — providing actionable guidance or escalation when needed, ensuring safety and clarity.",
  },
];

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            From the System Insights
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Learn how our chatbots analyze your query and provide you the best
            guidance according to mining safety standards.
          </p>
        </div>
        {/* Steps */}
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-12 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.id}
              className="flex flex-col items-start justify-between max-w-xl bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-purple-500 transition-all"
            >
              {/* Icon + Step Number */}
              <div className="flex items-center gap-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 border border-purple-600">
                  <step.icon className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-sm font-medium text-purple-600">
                  Step {step.id}
                </p>
              </div>

              {/* Title & Description */}
              <div className="group relative mt-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm text-gray-600 leading-6">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}