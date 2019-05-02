// import "scrivito-collapsible-card";
// import "scrivito-collapsible-card/index.css";
import "scrivito-areachart";
import "scrivito-adv-button";
import "scrivito-adv-button/index.css";
import "scrivito-social-links";
import "scrivito-social-links/index.css";
import "scrivito-highlight-code";
import "scrivito-highlight-code/index.css";
import "scrivito-barchart";
import "scrivito-accessible-accordion";
import "scrivito-reference-teaser";
import "scrivito-countdown";
import "scrivito-time-ago";
import "scrivito-follow-on-twitter";
import "scrivito-twitter-timeline";
import "scrivito-progressbar";
import "scrivito-progressbar/index.css";
import "scrivito-linechart";
import "scrivito-piechart";
import "scrivito-fancy-header";
import "scrivito-fancy-header/index.css";
import "scrivito-news-api";
import "scrivito-jw-video-player";
import "scrivito-range-slider";
import "scrivito-tabs";
import "scrivito-blockquote";
import "scrivito-swipeable";
import "scrivito-content-lists";
import "scrivito-eyecatcher";
import "scrivito-eyecatcher/index.css";
import "scrivito-undraw";
import "scrivito-undraw/index.css";

function importAll(r) {
  r.keys().forEach(r);
}

// import all js files under src/Widgets/
importAll(require.context("./", true, /\.js$/));
