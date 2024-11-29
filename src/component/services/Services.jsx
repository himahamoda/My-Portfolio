import React from 'react';
import './Services.module.css';
// import img from '../Assets/services/commonscams.png';

// Array of services
const services = [
  {
    id: 1,
    icon: <i className="fas fa-code"></i>,
    title: 'Web Development',
    description:
      'We build responsive and user-friendly websites that help you connect with your audience and grow your business.',
  },
  {
    id: 2,
    icon: <i className="fas fa-paint-brush"></i>,
    title: 'Web Design',
    description:
'As a Web Designer, I specialize in building responsive, user-friendly websites tailored to your brand’s identity and goals'
  },
  {
    id: 3,
    icon: <i className="fas fa-cogs"></i>,
    title: 'Graphic Design', // Fixed typo from "Griphic Design"
    description:

'Need eye-catching designs that captivate your audience? 🎨 As a Graphic Designer, I create unique and professional visuals that bring your brand to life. From logos and branding to social media posts'
  },
  {
    id: 4,
    icon: <i className="fas fa-bullhorn"></i>,
    title: 'Media Buyer ',
    description:
      "As a Media Buyer, I specialize in creating and managing high-performing ad campaigns tailored to your brand's goals. I handle everything from strategic audience targeting to budget optimization,"
  },
  {
    id: 5,
    icon: <i className="fas fa-chart-line"></i>,
    title: 'Marketing ',
    description:
' As a Marketing Specialist, I offer tailored strategies to build your brand, increase engagement, and drive sales. From social media management to content creation and campaign planning'
  },

];

// Service component to render individual service
const Service = ({ icon, title, description, img }) => {
  return (
    <div className="service">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Services component
const Services = () => {
  return (
    <div className="container mt-5">
      <div className="services">
        <h2 className='text-white'>Our Services</h2>
        <div className="gridd">
          {services.map((service) => (
            <Service key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 