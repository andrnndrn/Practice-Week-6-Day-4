import React from "react";
import OurExperticeCardSection from "../components/OurExperticeCardSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import BannerSection from "../components/BannerSection";
import QuoteCard from "../components/QuoteCard";
import SEO from "../components/SEO";

const OurServices = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Our Services",
    "url": "https://example.com/our-services",
    "description": "Explore the range of services we offer to help you grow your business. Our team of experts provides specialized solutions tailored to your needs.",
    "mainEntityOfPage": "https://example.com/our-services",
    "hasPart": [
      {
        "@type": "Service",
        "name": "Business Consulting",
        "description": "We offer professional business consulting services to help you optimize operations, improve efficiency, and enhance overall performance.",
        "serviceType": "Consulting",
        "provider": {
          "@type": "Organization",
          "name": "Logoipsum"
        }
      },
      {
        "@type": "Service",
        "name": "Marketing Solutions",
        "description": "Our marketing solutions help businesses increase brand awareness, drive traffic, and improve conversion rates through innovative strategies.",
        "serviceType": "Marketing",
        "provider": {
          "@type": "Organization",
          "name": "Logoipsum"
        }
      },
      {
        "@type": "Service",
        "name": "Web Development",
        "description": "We specialize in custom web development, offering high-quality websites tailored to your business needs with excellent functionality and design.",
        "serviceType": "Web Development",
        "provider": {
          "@type": "Organization",
          "name": "Logoipsum"
        }
      }
    ]
  };
  return (
    <div>
      <SEO
        title="Our Services"
        description="Explore the range of services we offer to help your business grow. Learn more about our expertise and how we can assist you."
        schema={schema}
      />

      <BannerSection title={"Services"} breadCrumb={"Home / Services"} />
      <WhatWeDoSection />
      <OurExperticeCardSection />
      <QuoteCard />
    </div>
  );
};

export default OurServices;
