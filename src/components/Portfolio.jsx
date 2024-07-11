import React from "react";
import bookstore from "../assets/portfolio/bookstore.jpg";
import gallery from '../assets/portfolio/gallery.png';
import hospital from '../assets/portfolio/hospital.png';
import blog from '../assets/portfolio/blog.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      title: "Bookify",
      id: 1,
      src: bookstore,
      link: "https://github.com/piyuxh01/Bookstore",
    },
    {
      title: "IOS-Gallery",
      id: 2,
      src: gallery,
      link: "https://github.com/piyuxh01/IOS-Gallery-Application",
    },
    {
      title: "Hospital management system",
      id: 3,
      src: hospital,
      link: "https://github.com/piyuxh01/Hospital-Management-System",
    },
    {
      title: "BlogMe",
      id: 4,
      src: blog,
      link: "https://github.com/piyuxh01/Blog-app",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0 rounded-full">
          {portfolios.map(({ title, id, src, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-md shadow-green-800 rounded-3xl"
            >
              <div className="py-3 px-2 text-center font-bold">{title}</div>
              <img
                src={src}
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

export default Portfolio;
