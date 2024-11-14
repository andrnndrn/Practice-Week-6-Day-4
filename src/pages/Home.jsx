import React from "react";
import AboutUsSection from "../components/AboutUsSection";
import BlogListCard from "../components/BlogListCard";
import GetInTouchSection from "../components/GetInTouchSection";
import HeroSection from "../components/HeroSection";
import OurExperticeCardSection from "../components/OurExperticeCardSection";
import OurProcessCardSection from "../components/OurProcessCardSection";
import TeamSection from "../components/TeamCard";
import TestimonialCardSection from "../components/TestimonialCardSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import QuoteCard from "../components/QuoteCard";
import SEO from "../components/SEO";

const Home = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://example.com",
    "name": "Logoipsum",
    "description": "Discover our services, team, and expertise at our company. Explore what we do and how we can help you.",
    "publisher": {
      "@type": "Organization",
      "name": "Logoipsum",
      "url": "https://example.com",
      "logo": "https://example.com/logo.png",
      "sameAs": [
        "https://www.facebook.com/logoipsum",
        "https://www.twitter.com/logoipsum",
        "https://www.linkedin.com/company/logoipsum"
      ]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://example.com/search?query={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-356-678-7897",
        "email": "info@example.com",
        "contactType": "Customer Service",
        "areaServed": ["ID"],
        "availableLanguage": ["English", "Indonesian"],
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
    <div className="overflow-hidden">
      <SEO
        title="Welcome to Our Website"
        description="Discover our services, team, and expertise at our company. Explore what we do and how we can help you"
        schema={schema}
      />

      <HeroSection />
      <AboutUsSection />
      <OurProcessCardSection />
      <WhatWeDoSection showButton />
      <OurExperticeCardSection />
      <div className="bg-off-white pt-10 pb-20">
        <TeamSection maxMembers={4} />
      </div>
      <TestimonialCardSection />
      <div className="bg-dark-blue-100">
        <GetInTouchSection titleColor="text-white" />
      </div>
      <BlogListCard maxPosts={3} />
      <QuoteCard />
    </div>
  );
};

export default Home;
