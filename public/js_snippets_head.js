// This file is for executing JavaScript code immediately before the head element is closed.
// Here you can, for example, connect your site to remote services such as booking.com, segment.io, etc.
// Don't forget to whitelist the URLs in the CSP at public/_headersCsp.json.

// Google Analytics and Intercom are already taken care of by the app, so there's no need to add them here.
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PSM6L25');
