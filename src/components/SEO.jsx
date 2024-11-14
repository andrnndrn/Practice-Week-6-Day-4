import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, schema }) => {
  return (
    <Helmet>
      {/* Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Schema Markup */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SEO;
