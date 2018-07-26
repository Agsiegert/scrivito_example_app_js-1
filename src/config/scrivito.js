mport * as Scrivito from "scrivito";

<<<<<<< HEAD
const config = { tenant: process.env.SCRIVITO_TENANT };
=======
var origin = location.origin;
switch (origin) {
  case 'https://shi.netlify.com' :
    'my-product';
    break;
  case 'https://www.safehomeinspection.com' :
    'about';
    break;
  case 'https://www.homeinspectionlink.com' :
    'about';
    break;
  default:
    'home';
}
// location.origin.match(/shi.netlify.com/) ? 'my-product' : 'no-path'
>>>>>>> switch2

<<<<<<< HEAD
if (process.env.SCRIVITO_ORIGIN) {
  config.origin = process.env.SCRIVITO_ORIGIN;
}

Scrivito.configure(config);
=======
Scrivito.configure({
  tenant: process.env.SCRIVITO_TENANT,
  homepage: () => Scrivito.Obj.getByPermalink(origin),
});
>>>>>>> no path and permalink test
