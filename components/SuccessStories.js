// components/SuccessStories.js

import { useState } from 'react';

const students = [
  {
    name: 'Jaya Sinha',
    title: 'Data Scientist',
    image: 'https://www.learnbay.co/_next/image?url=https%3A%2F%2Fd32and0ii3b8oy.cloudfront.net%2Fweb%2Fs3_main%2FMobileReview%2Fsoniya-img.webp&w=256&q=75',
    hike: '150%',
    quote: 'Transitioning from a non-tech role, LearnBay’s IBM data science certification equipped me with the skills needed in today’s market. The course’s interactive sessions and personalized guidance from Abhishek sir were invaluable.',
    company: 'Amazon',
  },
  {
    name: 'Rahul Mehta',
    title: 'Software Engineer',
    image: 'https://www.learnbay.co/_next/image?url=https%3A%2F%2Fd32and0ii3b8oy.cloudfront.net%2Fweb%2Fs3_main%2FMobileReview%2Fsatya-img.webp&w=256&q=75',
    hike: '120%',
    quote: 'The course helped me transition into tech effectively, enhancing my coding skills significantly.',
    company: 'Google',
  },
  {
    name: 'Priya Sharma',
    title: 'Product Manager',
    image: 'https://www.learnbay.co/_next/image?url=https%3A%2F%2Fd32and0ii3b8oy.cloudfront.net%2Fweb%2Fs3_main%2FMobileReview%2Fkomal-img.webp&w=256&q=75',
    hike: '130%',
    quote: 'LearnBay provided me with the insights and tools necessary to succeed in product management.',
    company: 'Microsoft',
  },
  {
    name: 'Amit Singh',
    title: 'Data Analyst',
    image: 'https://www.learnbay.co/_next/image?url=https%3A%2F%2Fd32and0ii3b8oy.cloudfront.net%2Fweb%2Fs3_main%2FMobileReview%2Fgautam-img.webp&w=256&q=75',
    hike: '140%',
    quote: 'The hands-on approach to learning at LearnBay made a huge difference in my career.',
    company: 'Facebook',
  },
];

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? students.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === students.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="container">
      <div className="left-column">
        <div className="card">
          <img src={students[currentIndex].image} alt={students[currentIndex].name} className="profile-image" />
          <h3>{students[currentIndex].name}</h3>
          <h4>{students[currentIndex].title}</h4>
          <p className="hike">{students[currentIndex].hike} Hike</p>
          <p className="quote">"{students[currentIndex].quote}"</p>
          <p className="company"><strong>{students[currentIndex].company}</strong></p>
        </div>
      </div>

      <div className="right-column">
        <h2>Real Stories, Real Success</h2>
        <div className="slider">
          <button className="arrow left" onClick={handlePrev}>❮</button>
          <div className="student-images">
            {students.map((student, index) => (
              <img
                key={index}
                src={student.image}
                alt={student.name}
                className={`student-thumbnail ${index === currentIndex ? 'active' : ''}`}
                style={{ filter: index === currentIndex ? 'none' : 'blur(4px)' }}
              />
            ))}
          </div>
          <button className="arrow right" onClick={handleNext}>❯</button>
        </div>
        <div className="achievements">
          <p>9K+ Successful Career Transitions</p>
          <p>175% Average Salary Hike</p>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px;
          font-family: Arial, sans-serif;
        }
        .left-column {
          width: 100%;
          padding: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          background-color: #fff;
        }
        .right-column {
          width: 100%;
          padding: 20px;
          text-align: center;
        }
        .card {
          text-align: center;
        }
        .profile-image {
          width: 150px;
          height: 150px;
          border-radius: 75px;
          margin-bottom: 15px;
        }
        .hike {
          font-weight: bold;
          font-size: 1.2em;
          color: green;
        }
        .quote {
          font-style: italic;
          color: #555;
          margin: 15px 0;
        }
        .company {
          color: #555;
          margin-top: 10px;
        }
        .slider {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin: 20px 0;
        }
        .student-images {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .student-thumbnail {
          width: 50px;
          height: 50px;
          border-radius: 25px;
          margin: 0 5px;
          transition: transform 0.3s;
        }
        .arrow {
          background: transparent;
          border: none;
          font-size: 30px;
          cursor: pointer;
          color: #333;
          z-index: 1;
          padding: 10px;
        }
        .arrow:hover {
          color: red;
        }
        .achievements {
          text-align: center;
          font-size: 1.1em;
          margin-top: 20px;
        }
        h2 {
          color: #333;
          margin-bottom: 20px;
        }
        @media (max-width: 768px) {
          .left-column, .right-column {
            width: 100%;
            padding: 15px;
          }
          .profile-image {
            width: 120px;
            height: 120px;
          }
          .student-thumbnail {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default SuccessStories;
