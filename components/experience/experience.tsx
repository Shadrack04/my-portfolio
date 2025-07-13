import { CheckIcon } from "lucide-react";

import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import AnimationWrapper from "../animation/animation-wrapper";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // Delay between children
      delayChildren: 0.1, // Optional delay before starting
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const items = [
  {
    id: 1,
    date: "Mar, 2024 - Present",
    title: "Frontend Developer",
    description: [
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
    ],
  },
  {
    id: 2,
    date: "Mar 22, 2024",
    title: "Design Phase",
    description: [
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
    ],
  },
  {
    id: 3,
    date: "Apr 5, 2024",
    title: "Development Sprint",
    description: [
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
    ],
  },
  {
    id: 4,
    date: "Apr 19, 2024",
    title: "Testing & Deployment",
    description: [
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
    ],
  },
];

export default function Experience() {
  return (
    <div className=" lg:px-16 bg-foreground">
      <div className=" flex flex-col items-center mb-4">
        <h2 className=" text-3xl font-bold text-primary-text mb-4">
          My Work Experience
        </h2>

        <p className=" text-content-text text-lg/relaxed">
          Company and roles i contributed to.
        </p>
      </div>
      <div className=" my-12">
        <Timeline
          defaultValue={3}
          className=" lg:max-w-[55rem] flex flex-col gap-4 "
        >
          {items.map((item) => (
            <TimelineItem
              key={item.id}
              step={item.id}
              className=" hover:shadow-sm rounded-xl mb-4 py-6 pl-2 md:py-6 md:px-6  group-data-[orientation=vertical]/timeline:ms-10"
            >
              <TimelineHeader>
                <TimelineSeparator
                  // className={`${index == 0 ? " bg-gray-600" : "bg-primary-color"} top-0 bottom-0  group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5`}
                  className=" top-0 bottom-0 bg-primary-color group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5"
                />
                <TimelineDate className=" text-special-text text-xl mb-4">
                  {item.date}
                </TimelineDate>
                <TimelineTitle className=" text-primary-text flex flex-col">
                  <p className=" text-xl font-medium ">AGM Tech Pulse</p>
                  <p className=" text-lg font-bold text-special-text">
                    {item.title}
                  </p>
                </TimelineTitle>
                <TimelineIndicator
                  // className={`${index == 0 ? "" : ""} group-data-completed/timeline-item:bg-primary-color group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center group-data-completed/timeline-item:border-none group-data-[orientation=vertical]/timeline:-left-7`}
                  className="group-data-completed/timeline-item:bg-primary-color group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center group-data-completed/timeline-item:border-none group-data-[orientation=vertical]/timeline:-left-7"
                >
                  <CheckIcon
                    className="group-not-data-completed/timeline-item:hidden text-white"
                    size={16}
                  />
                </TimelineIndicator>
              </TimelineHeader>
              <TimelineContent className="">
                <AnimationWrapper
                  as="ul"
                  className=" flex flex-col gap-1 p-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {item.description?.map((task, index) => (
                    <AnimationWrapper
                      as="li"
                      whileInView={{ opacity: 1, y: 0 }}
                      key={index}
                      variants={itemVariants}
                      className=" list-disc text-content-text text-lg/relaxed"
                    >
                      {task}
                    </AnimationWrapper>
                  ))}
                </AnimationWrapper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
}
