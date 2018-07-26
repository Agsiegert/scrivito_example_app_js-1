import * as Scrivito from 'scrivito';

var origin = location.origin;
switch (origin) {
  case 'https://shi.netlify.com' :
    'product';
    break;
  case 'https://www.safehomeinspection.com' :
    'no-path';
    break;
  default:
    'about';
}

Scrivito.configure({
  tenant: process.env.SCRIVITO_TENANT,
  homepage: () => Scrivito.Obj.getByPermalink(origin),
});
