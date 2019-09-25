import * as Scrivito from 'scrivito';
function getHomepage() {
 const currentPage = Scrivito.currentPage();
 let language = '/lang/en';
 let path;
 if (currentPage) {
   path = currentPage.path();
 }
 if (!path) {
   path = currentPage.get("language") || language;
 }
 if (path.startsWith('/lang/')) {
   language = path.substr(0, 8);
 }
 return Scrivito.Obj.getByPath(language);
}
export default getHomepage;
