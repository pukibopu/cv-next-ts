import Link from 'next/link';
import React, { useState } from 'react'
const experiences = [
    {
        name: "绍兴文理学院",
        role: "学生",
        url: "https://www.usx.edu.cn",
        start: "9 2020",
        end: "Present",
        shortDescription: [
            "I had experience working on a large codebase utilizing Kibana and Elasticsearch.",
            "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, TypeScript, Node.js, Hapi, and Elasticsearch, among others.",
            "I've also managed a small team that includes Frontend Developers, Backend Developers, and UI/UX Developers.",
            "Additionally, I've represented the company in client meetings, communicating effectively on their behalf.",
        ],
    },
    {
        name: "Youtube",
        role: "Content Creator",
        url: "https://www.youtube.com/kishansheth21",
        start: "April 2021",
        end: "Present",
        shortDescription: [
            "Upon graduating in 2021, I began creating content on YouTube, with the aim of enhancing my skills and working with the latest technologies, specifically React and Node.",
            "Over time, I have developed and shared over 50 projects using React on my channel.",
            "As a result, my channel has gained a substantial following, with over 11,000 subscribers to date. I have also had the pleasure of collaborating with various brands throughout my journey.",
        ],
    },
    {
        name: "ACES",
        role: "President",
        url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
        start: "November 2019",
        end: "November 2020",
        shortDescription: [
            "As the elected President of the ACES Departmental Club, I successfully led a team of board members and executive committee members to organize and execute multiple events throughout the year.",
            "Additionally, I secured sponsorships from reputable brands to support our events.",
            "Overall, it was a rewarding experience that allowed me to develop my leadership skills while contributing positively to the growth of the organization.",
        ],
    },
    {
        name: "ISTE",
        role: "Web Developer",
        url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
        start: "November 2019",
        end: "November 2020",
        shortDescription: [
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
            "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
        ],
    },
    {
        name: "Shashaan",
        role: "Founder",
        url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
        start: "November 2018",
        end: "November 2021",
        shortDescription: [
            "While still a student, I founded a web hosting company that offered affordable hosting services.",
            "With over 300 customers, the business thrived until I graduated and sold it to another company.",
        ],
    },
];
const Experience = () => {
    const [selected, setselected] = useState(0)

    return (
        <div className="experience" id="experience">
            <div className="title">
                <h2>我的经历</h2>
            </div>
            <div className="container">
                <ul className="exp-slider">
                    <div className="underline"></div>
                    {
                        experiences.map((experience, index) => {
                            return <li key={index} className={`exp-slider-item 
                            ${index === selected && "exp-slider-item-selected"}`}
                                onClick={() => setselected(index)}>
                                <span>{experience.name}</span>
                            </li>
                        })
                    }
                </ul>
                <div className="exp-details">
                    <div className="exp-details-position">
                        <h3>
                            <span>{experiences[selected].role}</span>
                            <span className="exp-details-position-company">
                                &nbsp;&nbsp;
                                <Link className="link"
                                    href={experiences[selected].url}>
                                    {experiences[selected].name}{" "}
                                </Link>
                            </span>
                        </h3>
                        <p className="exp-details-range">
                            {experiences[selected].start} - {experiences[selected].end}
                        </p>
                        <ul className="exp-details-list">
                            {experiences[selected].shortDescription.map(
                                (description, index) => (
                                    <li key={index} className="exp-details-list-item">
                                        {description}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience