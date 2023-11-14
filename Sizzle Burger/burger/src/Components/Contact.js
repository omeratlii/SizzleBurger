import React from "react";
import ContactImage from "../assets/contactburger.png";
import "../styles/Contact.css"

export const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınızı soyadınızı giriniz..."
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen emailinizi giriniz..."
          />
          <label>Mesajınız</label>
          <textarea
          rows="6"
            name="message"
            placeholder="Lütfen mesajınızı giriniz..."
          ></textarea>
        </form>
      </div>
    </div>
  );
};
