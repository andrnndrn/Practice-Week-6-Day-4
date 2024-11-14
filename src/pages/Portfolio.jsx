import React from "react";
import OurWorkSection from "../components/OurWorkSection";
import BannerSection from "../components/BannerSection";
import QuoteCard from "../components/QuoteCard";
import SEO from "../components/SEO";
import ourWork1 from "../assets/our-work-1.png";
import ourWork2 from "../assets/our-work-2.png";
import ourWork3 from "../assets/our-work-3.png";
import ourWork4 from "../assets/our-work-4.png";
import ourWork5 from "../assets/our-work-5.png";

const Portfolio = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Our Work - Portfolio",
    url: "https://example.com/portfolio",
    description:
      "Explore our portfolio showcasing images categorized by Life, Moments, Nature, Stories, and Travel. Discover the different stories we tell through our work.",
    mainEntityOfPage: "https://example.com/portfolio",
    hasPart: [
      {
        "@type": "CreativeWork",
        name: "Life Category - Portfolio Work",
        description:
          "This category showcases images capturing life's special moments.",
        category: "Life",
        image: { ourWork1 },
        url: "https://example.com/portfolio/life",
        keywords: "life, photography, moments",
      },
      {
        "@type": "CreativeWork",
        name: "Moments Category - Portfolio Work",
        description:
          "This category includes images that capture fleeting moments in time.",
        category: "Moments",
        image: { ourWork2 },
        url: "https://example.com/portfolio/moments",
        keywords: "moments, memories, photography",
      },
      {
        "@type": "CreativeWork",
        name: "Nature Category - Portfolio Work",
        description:
          "A collection of stunning nature photography showcasing the beauty of the natural world.",
        category: "Nature",
        image: { ourWork3 },
        url: "https://example.com/portfolio/nature",
        keywords: "nature, landscape, photography",
      },
      {
        "@type": "CreativeWork",
        name: "Stories Category - Portfolio Work",
        description:
          "Images that tell captivating stories through powerful visuals.",
        category: "Stories",
        image: { ourWork4 },
        url: "https://example.com/portfolio/stories",
        keywords: "stories, visual storytelling, art",
      },
      {
        "@type": "CreativeWork",
        name: "Travel Category - Portfolio Work",
        description:
          "Travel photography capturing the essence of different places around the world.",
        category: "Travel",
        image: { ourWork5 },
        url: "https://example.com/portfolio/travel",
        keywords: "travel, photography, adventure",
      },
    ],
  };

  return (
    <div>
      <SEO
        title="Our Portfolio"
        description="Explore our portfolio to see the projects we’ve worked on and the solutions we’ve provided for our clients."
        schema={schema}
      />

      {/* send props for change title and bread crumb */}
      <BannerSection title="Portofolio" breadCrumb="Home / Portofolio" />
      <OurWorkSection />
      <QuoteCard />
    </div>
  );
};

export default Portfolio;
