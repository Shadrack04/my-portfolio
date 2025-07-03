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
    <div className=" bg-foreground">
      <div className=" flex flex-col items-center mb-4">
        <h2 className=" text-3xl font-bold text-primary-text mb-8 underline underline-offset-10 decoration-primary-color">
          My Projects
        </h2>

        <p className=" text-content-text text-lg/relaxed">
          Company and a roles i contributed to.
        </p>
      </div>
      <div className=" my-12">
        <Timeline defaultValue={3} className=" max-w-[50rem] mx-auto">
          {items.map((item) => (
            <TimelineItem
              key={item.id}
              step={item.id}
              className=" card-shadow rounded-xl mb-4 p-6  group-data-[orientation=vertical]/timeline:ms-10"
            >
              <TimelineHeader>
                <TimelineSeparator className=" top-0 bottom-0 bg-primary-color group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
                <TimelineDate className=" text-special-text text-xl mb-4">
                  {item.date}
                </TimelineDate>
                <TimelineTitle className=" text-primary-text flex flex-col">
                  <p className=" text-xl font-medium ">AGM Tech Pulse</p>
                  <p className=" text-lg font-bold text-special-text">
                    {item.title}
                  </p>
                </TimelineTitle>
                <TimelineIndicator className="group-data-completed/timeline-item:bg-primary-color group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center group-data-completed/timeline-item:border-none group-data-[orientation=vertical]/timeline:-left-7">
                  <CheckIcon
                    className="group-not-data-completed/timeline-item:hidden"
                    size={16}
                  />
                </TimelineIndicator>
              </TimelineHeader>
              <TimelineContent className="">
                <ul className=" flex flex-col gap-1 p-4">
                  {item.description?.map((task, index) => (
                    <li
                      className=" list-disc text-content-text text-lg/relaxed"
                      key={index}
                    >
                      {task}
                    </li>
                  ))}
                </ul>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
}
