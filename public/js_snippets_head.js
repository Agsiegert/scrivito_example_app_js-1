// This file is for executing JavaScript code immediately before the head element is closed.
// Here you can, for example, connect your site to remote services such as booking.com, segment.io, etc.
// Don't forget to whitelist the URLs in the CSP at public/_headersCsp.json.

// Google Analytics and Intercom are already taken care of by the app, so there's no need to add them here.
// function downloadAtOnload() {
//   // Dynamically load CSS
//   var ls = document.createElement("link");
//   ls.rel="stylesheet";
//   ls.href= "/index.css";
//   document.getElementsByTagName("head")[0].appendChild(ls);

//   // Dynamically load Javascript/jQuery
//   element = document.createElement("script");
//   element.src = "/index.js";
//   document.body.appendChild(element);
// }
// if (window.addEventListener) window.addEventListener("load", downloadAtOnload, false);
// else if (window.attachEvent) window.attachEvent("onload", downloadAtOnload);
// else window.onload = downloadAtOnload;
