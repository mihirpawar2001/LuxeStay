import React from 'react';
// import './ContactUsPage.css'; // Ensure this is the path to your CSS file

const ContactUsPage = () => {
  return (
    <div className="contact-us-page">
      {/* HEADER SECTION */}
      <header className="header-banner">
        <img src="./assets/images/Contactus.png" alt="Contact Us" className="header-image" />
        <div className="overlay"></div>
        <div className="animated-texts">
          <h1 className="heading">Contact Us</h1>
          <p className="subheading">
            We are here to help you. Reach out to us for any inquiries or assistance.
          </p>
        </div>
      </header>

      {/* CONTACT INFO SECTION */}
      <section className="contact-info">
        <div className="contact-info-container">
          <div className="contact-form">
            <h2 className="section-title">Get in Touch</h2>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
          <div className="contact-cards">
            <div className="contact-card">
              <h3 className="card-title reception">Reception</h3>
              <p className="card-text">For booking inquiries, check-in/check-out information, and more.</p>
              <p><strong>Phone:</strong> +1 234 567 890</p>
              <p><strong>Email:</strong> reception@hotel.com</p>
            </div>
            <div className="contact-card">
              <h3 className="card-title customer-service">Customer Service</h3>
              <p className="card-text">For any issues or complaints, our customer service team is here to help.</p>
              <p><strong>Phone:</strong> +1 234 567 891</p>
              <p><strong>Email:</strong> support@hotel.com</p>
            </div>
            <div className="contact-card">
              <h3 className="card-title reservations">Reservations</h3>
              <p className="card-text">Assistance with your reservations and special requests.</p>
              <p><strong>Phone:</strong> +1 234 567 892</p>
              <p><strong>Email:</strong> reservations@hotel.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="map-section">
        <h2 className="section-title">Our Location</h2>
        <div className="map-container">
          <iframe
            title="Hotel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.687793161361!2d-122.41941838468167!3d37.77492927975991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d2e4b8c77%3A0x9e8d8d4d8d4d4c88!2sHotel%20Name!5e0!3m2!1sen!2sus!4v1612820165563!5m2!1sen!2sus"
            className="map-iframe"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;


// import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

// const ContactUsPage = () => {
//   return (
//     <div className="contact-us-page container-fluid p-0">
//       {/* HEADER SECTION */}
//       <header className="header-banner position-relative">
//         <img src="./assets/images/Contactus.png" alt="Contact Us" className="img-fluid w-100" style={{ height: '400px', objectFit: 'cover' }} />
//         <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
//         <div className="animated-texts position-absolute top-50 start-50 translate-middle text-center text-light">
//           <h1 className="display-3 fw-bold mb-3" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>Contact Us</h1>
//           <p className="lead fs-4" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
//             We are here to help you. Reach out to us for any inquiries or assistance.
//           </p>
//         </div>
//       </header>

//       {/* CONTACT INFO SECTION */}
//       <section className="contact-info mt-5">
//         <div className="row">
//           <div className="col-md-6">
//             <div className="card p-4 shadow-sm border-light">
//               <div className="card-body">
//                 <h2 className="card-title mb-4 text-primary" style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>Get in Touch</h2>
//                 <form>
//                   <div className="mb-3">
//                     <input type="text" className="form-control" placeholder="Your Name" required />
//                   </div>
//                   <div className="mb-3">
//                     <input type="email" className="form-control" placeholder="Your Email" required />
//                   </div>
//                   <div className="mb-3">
//                     <textarea className="form-control" placeholder="Your Message" rows="5" required></textarea>
//                   </div>
//                   <button type="submit" className="btn btn-primary">Send Message</button>
//                 </form>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="contact-cards">
//               <div className="card mb-3">
//                 <div className="card-body">
//                   <h3 className="card-title text-success" style={{ borderBottom: '2px solid #28a745', paddingBottom: '10px' }}>Reception</h3>
//                   <p className="card-text">For booking inquiries, check-in/check-out information, and more.</p>
//                   <p><strong>Phone:</strong> +1 234 567 890</p>
//                   <p><strong>Email:</strong> reception@hotel.com</p>
//                 </div>
//               </div>
//               <div className="card mb-3">
//                 <div className="card-body">
//                   <h3 className="card-title text-danger" style={{ borderBottom: '2px solid #dc3545', paddingBottom: '10px' }}>Customer Service</h3>
//                   <p className="card-text">For any issues or complaints, our customer service team is here to help.</p>
//                   <p><strong>Phone:</strong> +1 234 567 891</p>
//                   <p><strong>Email:</strong> support@hotel.com</p>
//                 </div>
//               </div>
//               <div className="card mb-3">
//                 <div className="card-body">
//                   <h3 className="card-title text-info" style={{ borderBottom: '2px solid #17a2b8', paddingBottom: '10px' }}>Reservations</h3>
//                   <p className="card-text">Assistance with your reservations and special requests.</p>
//                   <p><strong>Phone:</strong> +1 234 567 892</p>
//                   <p><strong>Email:</strong> reservations@hotel.com</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* MAP SECTION */}
//       <section className="map-section mt-5">
//         <h2 className="mb-4 text-primary" style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>Our Location</h2>
//         <div className="map-container">
//           <iframe
//             title="Hotel Location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.687793161361!2d-122.41941838468167!3d37.77492927975991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d2e4b8c77%3A0x9e8d8d4d8d4d4c88!2sHotel%20Name!5e0!3m2!1sen!2sus!4v1612820165563!5m2!1sen!2sus"
//             className="w-100"
//             height="400"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactUsPage;
