import * as Scrivito from 'scrivito';

var origin = location.origin;
switch (origin) {
  case 'https://shi.netlify.com' :
    origin = 'my-product';
    break;
  case 'https://www.safehomeinspection.com' :
    origin = 'no-path';
    break;
  case 'http://homeinspectionlink.com' :
  	origin = 'about'
  default:
    origin = 'home';
}

Scrivito.configure({
  tenant: process.env.SCRIVITO_TENANT,
  homepage: () => Scrivito.Obj.getByPermalink(origin),
});
