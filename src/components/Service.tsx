import React from "react";

const serviceItems = [
  {
    role: "Program Committee Member",
    detail: "11th International Workshop on Health Intelligence (W3PHIAI-27) at AAAI-27 (2027)",
  },
  {
    role: "Founder",
    detail: "Applied AI Club, Purdue University Northwest",
  },
  {
    role: "Senior Under Officer (Troop Commander) & Best Cadet",
    detail: "National Cadet Corps (NCC)",
  },
  {
    role: "Invited Guest Lecturer",
    detail: "Cloud Architectures and AI",
  },
];

const Service = () => {
  return (
    <section id="service" className="py-12 border-t border-border">
      <div className="scholar-container">
        <p className="section-label">Service &amp; Leadership</p>
        <h2 className="section-heading">Academic Service &amp; Community</h2>

        <ul className="divide-y divide-border/70 max-w-[72ch]">
          {serviceItems.map((item) => (
            <li key={item.role} className="py-3 text-sm sm:text-base">
              <span className="font-medium text-foreground">{item.role}</span>
              <span className="text-muted-foreground"> — {item.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service;
