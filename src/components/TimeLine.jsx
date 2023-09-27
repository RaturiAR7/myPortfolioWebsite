import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import experiences from "./experi";

const MyTimeline = () => {
  return (
    <div className='h-full mt-20'>
      <h2 className='text-center text-6xl m-10'>Education And Experience</h2>
      <VerticalTimeline>
        {experiences.map((element) => {
          return (
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{ background: "black", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date={element.date}
              iconStyle={{ background: "white", color: "black" }}
              icon={<img className='rounded-3xl w-56' src={element.icon} />}
            >
              <h3 className='vertical-timeline-element-title text-white text-center text-3xl'>
                {element.title}
              </h3>
              <h4 className='vertical-timeline-element-title text-white text-center text-3xl'>
                {element.company_name}
              </h4>
              <p>{element.points}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default MyTimeline;
