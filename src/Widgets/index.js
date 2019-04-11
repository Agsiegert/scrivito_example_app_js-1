import "scrivito-collabsible-card";
import "scrivito-collabsible-card/index.css";
import "scrivito-areachart";

function importAll(r) {
  r.keys().forEach(r);
}

// import all js files under src/Widgets/
importAll(require.context("./", true, /\.js$/));
