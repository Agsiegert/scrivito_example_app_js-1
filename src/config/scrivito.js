import * as Scrivito from "scrivito";

var origin = location.origin;
switch (origin) {
  case 'https://shi.netlify.com' :
    origin = 'my-product';
    break;
  case 'https://www.safehomeinspection.com' :
    origin = 'home';
    break;
  case 'https://homeinspectionlink.com' :
    origin = 'home-inspection-link'
  default:
    origin = 'home';
}

Scrivito.configure({
  tenant: process.env.SCRIVITO_TENANT,
  homepage: () => Scrivito.Obj.getByPermalink(origin),
});
