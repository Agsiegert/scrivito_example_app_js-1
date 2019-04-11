import "scrivito-collabsible-card";
import "scrivito-collabsible-card/index.css";
import "scrivito-areachart";
import "scrivito-adv-button";
import "scrivito-adv-button/index.css";

function importAll(r) {
  r.keys().forEach(r);
}

// import all js files under src/Widgets/
importAll(require.context("./", true, /\.js$/));
