import { Col } from "react-bootstrap";
import { useState } from "react";

export const ProjectCard = ({ title, description, technologies, Responsibilities, imgUrl }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handlePopupToggle}>
        <img src={imgUrl} alt="" style={{height: "400px"}}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
          {showPopup && (
            <div className="popup">
            <div className="popup-overlay" onClick={closePopup}></div>
            <div className="popup-content">
              <h2>{title} ({description})</h2>
              <h3>Technologies:</h3>
              <ul>
                {technologies.split('*').map((part, index) => (
                  <li key={index}>{part}</li>
                ))}
              </ul>
              <h3>Responsibilities:</h3>
              <ul>
                {Responsibilities.split('*').map((part, index) => (
                  <li key={index}>{part}</li>
                ))}
              </ul>
            </div>
          </div>
          )}
      </div>
    </Col>
  )
}
