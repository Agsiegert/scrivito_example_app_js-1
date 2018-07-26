import * as Scrivito from "scrivito";

const config = { tenant: process.env.SCRIVITO_TENANT };

<<<<<<< HEAD
if (process.env.SCRIVITO_ORIGIN) {
  config.origin = process.env.SCRIVITO_ORIGIN;
}

Scrivito.configure(config);
=======
Scrivito.configure({
  tenant: process.env.SCRIVITO_TENANT,
  homepage: () => Scrivito.Obj.getByPermalink(location.origin.match(/shi.netlify.com/) ? 'my-product' : 'no-path'),
});
>>>>>>> no path and permalink test
