import { For } from 'solid-js';
import { InfoSection, type InfoSectionProps } from './InfoSection';

const infoSections: InfoSectionProps[] = [
  {
    title: 'Services',
    content: (
      <ul>
        <li>Custom web app development</li>
        <li>Cloud infrastructure design & implementation</li>
        <li>Microservices architecture & development</li>
        <li>API development & integration</li>
        <li>Database design & management</li>
        <li>Serverless computing solutions</li>
        <li>Mobile & Desktop app development (iOS/Android)</li>
        <li>Front-end development (React, Angular, etc.)</li>
        <li>Quality assurance and testing</li>
        <li>Performance optimization and scalability</li>
        <li>Maintenance and technical support</li>
      </ul>
    ),
    link: '/showcase',
  },
  {
    title: 'Industries',
    content: (
      <ul>
        <li>Healthcare</li>
        <li>Finance</li>
        <li>Retail</li>
        <li>Government</li>
        <li>Transportation and logistics</li>
        <li>Cybersecurity</li>
        <li>Technology</li>
      </ul>
    ),
    link: '/showcase',
  },
  {
    title: 'Technologies',
    content: (
      <ul>
        <li>JavaScript & Typescript (React, Angular, Node.js)</li>
        <li>C# (.NET)</li>
        <li>Python</li>
        <li>Cloud platforms (AWS, Azure, Google Cloud)</li>
        <li>Databases (MongoDB, PostgreSQL, MSSQL, and more)</li>
      </ul>
    ),
    link: '/showcase',
  },
];

export const InfoSectionList = () => (
  <For each={infoSections}>
    {(section) => (
      <InfoSection title={section.title} content={section.content} link={section.link} />
    )}
  </For>
);
