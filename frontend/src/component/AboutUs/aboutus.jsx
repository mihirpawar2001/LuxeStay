import React from "react";

const teamMembers = [
  {
    name: "Rohan Jundare",
    linkedin: "https://www.linkedin.com/in/rohan-jundare-5a1194283",
    photo: "./assets/images/Rohan.png",
    email: "rohanjundare123@gmail.com",
  },
  {
    name: "Akansha Kulkarni",
    linkedin: "https://www.linkedin.com/in/akanksha-kulkarni-249439323",
    photo: "./assets/images/Akansha.png",
    email: "kgayatri360@gmail.com",
  },
  {
    name: "Mihir Pawar",
    linkedin: "http://www.linkedin.com/in/mihir-pawar-7363a5135",
    photo: "./assets/images/Mihir.png",
    email: "pawarmihir36@gmail.com",
  },
  {
    name: "Deepak Shrivastava",
    linkedin: "https://www.linkedin.com/in/deepak-shrivastava-9b5881123",
    photo: "./assets/images/Deepak.png",
    email: "deepakshrivastava2k@gmail.com",
  },
  {
    name: "Kunal Phund",
    linkedin: "https://www.linkedin.com/in/kunalphund",
    photo: "./assets/images/Kunal.png",
    email: "kunalphund07@gmail.com",
  },
];

const AboutUsPage = () => {
  return (
    <div className="container my-5">
      <h1 className="page-heading">About Us</h1>
      <div className="card-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="card-custom">
            <img
              src={member.photo}
              alt={member.name}
              className="card-img-custom"
            />
            <div className="card-body-custom">
              <h5 className="card-title">{member.name}</h5>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-custom"
              >
                LinkedIn
              </a>
              <p className="card-text">{member.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsPage;
