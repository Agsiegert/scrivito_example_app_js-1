import * as Scrivito from 'scrivito';

Scrivito.configure({
 homepage: () => Scrivito.Obj.getByPath('/lang/en'),
 tenant: process.env.SCRIVITO_TENANT,
});
