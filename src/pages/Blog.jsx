import React from "react";
import LatestPostSection from "../components/LatestPostSection";
import BannerSection from "../components/BannerSection";
import BlogListCard from "../components/BlogListCard";
import QuoteCard from "../components/QuoteCard";
import SEO from "../components/SEO";
import Article1 from "../assets/AssetsBlogPages/Article1.png";

const Blog = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "The most Popular Business Of the Year",
    image: [{ Article1 }],
    datePublished: "2024-01-05T08:00:00+08:00",
    dateModified: "2024-02-05T09:20:00+08:00",
    author: [
      {
        "@type": "Person",
        name: "Ranold Jeff",
        url: "https://example.com/profile/RanoldJeff",
      },
    ],
  };  // saya masih belum mengerti untuk blog schema nya, munkin dibikin satu artikel satu schema ya ka?
  return (
    <>
      <SEO
        title="Blogs"
        description="Explore the latest posts, articles, and insights on our blog."
        schema={schema}
      />

      {/* send props for change title and bread crumb */}
      <BannerSection title="Blogs" breadCrumb="Home / Blogs" />
      <LatestPostSection />
      <BlogListCard />
      <QuoteCard />
    </>
  );
};

export default Blog;
