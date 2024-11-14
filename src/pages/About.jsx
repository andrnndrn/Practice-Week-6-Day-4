import React from "react";
import BannerSection from "../components/BannerSection";
import AboutUsSection from "../components/AboutUsSection";
import TeamCard from "../components/TeamCard";
import QuoteCard from "../components/QuoteCard";
import SEO from "../components/SEO";
const About = () => {
  const schema = {
    "@context" : "https://schema.org/",
      "@type": "EmployerAggregateRating",
      "itemReviewed": {
        "@type": "Organization",
        "name" : "Logoipsum",
        "sameAs" : "https://example.com"
      },
      "ratingValue": 91,
      "bestRating": 100,
      "worstRating": 1,
      "ratingCount" : "10561"
  };

  return (
    <>
      <SEO
        title="About Us"
        description="Learn more about our company and our team."
        schema={schema}      
      />
      {/* send props for change title and bread crumb */}
      <BannerSection title={"About Us"} breadCrumb={"Home / About Us"} />
      <AboutUsSection />
      <TeamCard />
      <QuoteCard />
    </>
  );
};

export default About;
