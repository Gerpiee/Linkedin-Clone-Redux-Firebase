import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("This area is for the best news", "Top news-9099 readers")}
      {newsArticle("React New Updates", "Top news-283823 readers")}
      {newsArticle("Coronavirus new Variant", "Top news-92832 readers")}
      {newsArticle("Is Redux To good ? ", "Top news-1391 readers")}
      {newsArticle("Bitcoin Breaks $22k", "Top news-5000 readers")}
    </div>
  );
};

export default Widgets;
