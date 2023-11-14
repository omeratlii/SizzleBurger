import React from "react";
import BannerImage from "../assets/burgerbanner.jpg";
import "../styles/About.css";

export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          nemo architecto sunt necessitatibus quidem vitae ut laborum odio
          dolores voluptatibus debitis, aliquam sit officiis molestias molestiae
          ullam ratione magnam quod. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Corporis voluptate, eius ad, suscipit cumque amet id
          beatae dolor iusto, natus ipsa saepe repellat dolorem qui vitae nisi
          consectetur molestias minus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quas totam fugit placeat voluptates corporis hic eos
          dolor sed, provident pariatur, asperiores fuga itaque natus eius qui.
          Quibusdam voluptates quod harum! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cupiditate nemo architecto sunt
          necessitatibus quidem vitae ut laborum odio dolores voluptatibus
          debitis, aliquam sit officiis molestias molestiae ullam ratione magnam
          quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Corporis voluptate, eius ad, suscipit cumque amet id beatae dolor
          iusto, natus ipsa saepe repellat dolorem qui vitae nisi consectetur
          molestias minus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quas totam fugit placeat voluptates corporis hic eos dolor sed,
          provident pariatur, asperiores fuga itaque natus eius qui. Quibusdam
          voluptates quod harum! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cupiditate nemo architecto sunt necessitatibus
          quidem vitae ut laborum odio dolores voluptatibus debitis, aliquam sit
          officiis molestias molestiae ullam ratione magnam quod. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Corporis voluptate, eius
          ad, suscipit cumque amet id beatae dolor iusto, natus ipsa saepe
          repellat dolorem qui vitae nisi consectetur molestias minus. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quas totam fugit
          placeat voluptates corporis hic eos dolor sed, provident pariatur,
          asperiores fuga itaque natus eius qui. Quibusdam voluptates quod
          harum!
        </p>
      </div>
    </div>
  );
};
