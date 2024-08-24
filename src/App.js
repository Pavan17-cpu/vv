import React from 'react';
import './styles.css';  // Ensure this path is correct
import { FaBirthdayCake, FaSeedling } from 'react-icons/fa';
import image1 from './assets/image1.jpg'; // Import images from assets
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';

const BirthdayCard = () => {
  return (
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">HAPPY BIRTHDAY</h3>
        <FaBirthdayCake className="icon cake" />
      </div>
      <div className="cardInside">
        <h3 className="back">HAPPY BIRTHDAY</h3>
        <div className="images">
          <img src={image1} alt="Image 1" className="insideImage" />
          <img src={image2} alt="Image 2" className="insideImage" />
          <img src={image3} alt="Image 3" className="insideImage" />
          <img src={image4} alt="Image 4" className="insideImage" />
        </div>
        <p className="bold-italic text-left">Dear Friend, {'\n'} <br/>  On this special day, I want to remind you how amazing and loved you are. Your kindness, laughter, and strength light up every room and bring so much joy to everyone around you. May your birthday be filled with all the happiness and love you deserve, and may the year ahead be as wonderful as you are.</p>




      </div>
      <div className="border top">
        {Array.from({ length: 10 }).map((_, index) => (
          <FaSeedling key={index} className={`borderIcon ${index % 2 === 0 ? 'pink' : 'yellow'}`} />
        ))}
      </div>
      <div className="border right">
        {Array.from({ length: 13 }).map((_, index) => (
          <FaSeedling key={index} className={`borderIcon ${index % 2 === 0 ? 'pink' : 'yellow'}`} />
        ))}
      </div>
      <div className="border bottom">
        {Array.from({ length: 10 }).map((_, index) => (
          <FaSeedling key={index} className={`borderIcon ${index % 2 === 0 ? 'pink' : 'yellow'}`} />
        ))}
      </div>
      <div className="border left">
        {Array.from({ length: 13 }).map((_, index) => (
          <FaSeedling key={index} className={`borderIcon ${index % 2 === 0 ? 'pink' : 'yellow'}`} />
        ))}
      </div>
    </div>
  );
};

export default BirthdayCard;
