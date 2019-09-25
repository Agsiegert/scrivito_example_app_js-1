import * as Scrivito from 'scrivito';
function getHomepage() {
 const currentPage = Scrivito.currentPage();
 let language = '/lang/en';
 let path;
 if (currentPage) {
   path = currentPage.path();
 }
 if (!path) {
   path = language;
 }
 if (path.startsWith('/lang/')) {
   language = path.substr(0, 8);
 }
 // console.log('path: ' + path);
 // console.log('language: ' + language);
 // console.log('currentPage: ' + currentPage);
 
 return Scrivito.Obj.getByPath(language);
}
export default getHomepage;
