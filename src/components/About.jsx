import React from "react";
import LeetcodeLogo from '../assets/codings/leetcode.png';
import CodeChefLogo from '../assets/codings/codechef.png';
import AtcoderLogo from '../assets/codings/atcoder.jpg';
import CodeforcesLogo from '../assets/codings/codeforces.jpg';

const About = () => {
  const Coding = [
    {
      title: "Leetcode",
      id: 1,
      logo: LeetcodeLogo,
      Rating: 2001,
      link: 'https://leetcode.com/u/Piyuxh_01/',
    },
    {
      title: "CodeChef",
      id: 2,
      logo: CodeChefLogo,
      Rating: 1718,
      link: 'https://www.codechef.com/users/shaan_2',
    },
    {
      title: "Atcoder",
      id: 3,
      logo: AtcoderLogo,
      Rating: 930,
      link: 'https://atcoder.jp/users/Piyuxh_011',
    },
    {
      title: "Codeforces",
      id: 4,
      logo: CodeforcesLogo,
      Rating: 1315,
      link: 'https://codeforces.com/profile/Piyuxh_01',
    },
  ];

  return (
    <div
      name="about"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white pt-20 pb-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
            </p>
        </div>
        <p className="text-pretty text-lg mt-20">
          I am a passionate and dedicated competitive programmer with a strong
          foundation in algorithms and data structures. My journey in
          competitive programming has honed my problem-solving skills and
          allowed me to tackle complex challenges efficiently. I enjoy
          participating in coding contests, consistently striving to improve my
          ranking and deepen my understanding of computational theory.
          <br />
          In addition to my competitive programming experience, I am a skilled
          MERN stack and Next.js developer. With expertise in MongoDB,
          Express.js, React, and Node.js, I have built and deployed several
          full-stack web applications. My proficiency in Next.js enables me to
          create fast, scalable, and SEO-friendly web solutions. I am committed
          to writing clean, maintainable code and continuously learning new
          technologies and best practices.
          <br />
          I thrive in collaborative environments, where I can contribute to
          innovative projects and learn from fellow developers. My goal is to
          leverage my programming skills and web development expertise to build
          impactful software solutions and drive technological advancements.
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-8 px-10 sm:px-1 py-40 rounded-full">
          {Coding.map(({ title, id, logo, Rating, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-md rounded-3xl"
            >
              <div className="py-3 px-2 text-center font-bold">{title} - (~{Rating})</div>
              <img
                src={logo}
                alt={title}
                className="rounded-md duration-200 hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;