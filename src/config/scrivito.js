import * as Scrivito from 'scrivito';

var origin = location.origin;
switch (origin) {
  case 'https://shi.netlify.com' :
    origin = 'product';
    break;
  case 'https://www.safehomeinspection.com' :
    origin = 'no-path';
    break;
  default:
   origin = 'about';
}

Scrivito.configure({
  tenant: process.env.SCRIVITO_TENANT,
  homepage: () => Scrivito.Obj.getByPermalink(origin),
});
