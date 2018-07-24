import * as Scrivito from 'scrivito';

Scrivito.configure({
  tenant: process.env.SCRIVITO_TENANT,
  homepage: () => Scrivito.Obj.getByPath(location.origin.match(/shi.netlify.com/) ? '/product' : '/'),
});
