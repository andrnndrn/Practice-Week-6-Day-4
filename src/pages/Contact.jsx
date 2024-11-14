import React from "react";
import BannerSection from "../components/BannerSection";
import QuoteCard from "../components/QuoteCard";
import GetInTouchSection from "../components/GetInTouchSection";
import SEO from "../components/SEO";
import vite from "/vite.svg";
const Contact = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Logoipsum",
    "url": "https://example.com",
    "logo": {vite},
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-356-678-7897",
        "email": "info@example.com",
        "contactType": "Customer Service",
        "areaServed": ["ID"],
        "availableLanguage": ["English", "Indonesia"],
        "hoursAvailable": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
          }
        ]
      }
    ]
  };
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with us for inquiries, support, or any questions you may have."
        schema={schema}
      />
      <BannerSection title={"Contact"} breadCrumb={"Home / Contact"} />
      <div className="bg-peach-red-10">
        <GetInTouchSection />
      </div>
      <QuoteCard />
    </>
  );
};

export default Contact;
