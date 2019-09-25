import * as Scrivito from 'scrivito';
import getHomepage from '../utils/getHomepage.js';

Scrivito.configure({
 homepage: () => getHomepage() || Scrivito.Obj.getByPath('/lang/en'),
 tenant: process.env.SCRIVITO_TENANT,
});
