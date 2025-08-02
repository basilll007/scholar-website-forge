
import React from 'react';
import ContactInfo from './contact/ContactInfo';
import SocialMediaLinks from './contact/SocialMediaLinks';

const Contact = () => {
  return (
    <section id="contact" className="content-section bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="section-title">Get in Touch</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm always interested in collaborating on research projects, speaking opportunities, or discussing ideas related to quantum physics, artificial intelligence, and Biology inquiry.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <ContactInfo />
          </div>
          <div>
            <SocialMediaLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
