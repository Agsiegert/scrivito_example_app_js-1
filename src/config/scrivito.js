import * as Scrivito from 'scrivito';
// location.origin.match(/shi.netlify.com/) ? 'my-product' : 'no-path'

Scrivito.configure(
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
{
  tenant: process.env.SCRIVITO_TENANT,
  homepage: () => Scrivito.Obj.getByPermalink(origin),
});
