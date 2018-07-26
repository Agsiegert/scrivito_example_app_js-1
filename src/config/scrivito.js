import * as Scrivito from 'scrivito';

Scrivito.configure({
  tenant: process.env.SCRIVITO_TENANT,
  homepage: () => Scrivito.Obj.getByPath(
   switch (location.origin) {
      case 'shi.netlify.com' :
        '/product';
        break;
      case 'www.safehomeinspection.com' :
        '/';
        break;
      default:
        '/';
    }
  ),
});
