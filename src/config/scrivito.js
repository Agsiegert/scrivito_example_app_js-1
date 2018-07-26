import * as Scrivito from 'scrivito';

// var origin = location.origin;
// switch (origin) {
//   case 'shi.netlify.com' :
//     '/product';
//     break;
//   case 'www.safehomeinspection.com' :
//     '/';
//     break;
//   default:
//     '';
// }

Scrivito.configure({
  tenant: process.env.SCRIVITO_TENANT,
  homepage: () => Scrivito.Obj.getByPermalink(location.origin.match(/shi.netlify.com/) ? 'my-product' : 'no-path'),
});
