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
import { getExperience } from "@/sanity/sanity-utils";
import Title from "../title";

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

export default async function Experience() {
  const experience = await getExperience();

  return (
    <div className=" lg:px-14">
      {/* <div className=" flex flex-col items-center mb-4">
        <h2 className=" text-2xl font-bold text-primary-text mb-2">
          My Work Experience
        </h2>

        <p className=" text-content-text text-lg/relaxed">
          Company and roles i contributed to.
        </p>
      </div> */}
      <Title
        isMainHeader={false}
        title="My Work Experience"
        subContent="Company and roles i contributed to."
      />
      <div className=" my-12">
        <Timeline
          value={0}
          defaultValue={3}
          className=" lg:max-w-[55rem] flex flex-col "
        >
          {experience?.map((item, index) => (
            <TimelineItem
              key={item._id}
              step={index}
              className=" rounded-xl  group-data-[orientation=vertical]/timeline:ms-10"
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
                  <p className=" text-xl font-medium ">{item.company}</p>
                  <p className=" text-lg font-bold text-special-text">
                    {item.role}
                  </p>
                </TimelineTitle>
                <TimelineIndicator
                  // className={`${index == 0 ? "" : ""} group-data-completed/timeline-item:bg-primary-color group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center group-data-completed/timeline-item:border-none group-data-[orientation=vertical]/timeline:-left-7`}
                  className={` ${index === 0 ? " border-2 border-primary-color bg-transparent" : " bg-primary-color border-none"} flex size-6 items-center justify-center group-data-[orientation=vertical]/timeline:-left-7`}
                >
                  {index !== 0 && (
                    <div className=" size-4">
                      <CheckIcon className=" text-white font-bold" size={12} />
                    </div>
                  )}
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
                  {item.tasks?.map((task, index) => (
                    <AnimationWrapper
                      as="li"
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.8 }}
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
