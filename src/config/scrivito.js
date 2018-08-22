import * as Scrivito from "scrivito";

function rootObj {
  var rootPath = '/';
  switch (location.hostname) {
    case 'shi.netlify.com' :
      rootPath = '/my-product';
      break;
    case 'www.safehomeinspection.com' :
      rootPath = '/no-path';
      break;
    case 'homeinspectionlink.com' :
      rootPath = '/';
      break;
  }
  return Scrivito.Obj.getByPath(rootPath);
}

Scrivito.configure({
  tenant: process.env.SCRIVITO_TENANT,
  homepage: () => rootObj(),
});
