# React-Learning
# Live Site URl - https://itsreactproject.netlify.app/
# npm
- npm init
# parcel
 - npm install parcel
 - npx parcel indecx.html (for development)
 - npx parcel build indecx.html (for Production)
 - used for minifying, optimizing image, hot module replacement, file watching,
   differential bundling, Diagonstics, Tree shaking algorithm that removes unused
   code, code spliting.

# React
 - npm install react
# React-DOM
 - npm install react-dom
# In this Repository I will perform basic to advance react concept implementation

# Types of Routing
- Client Side Routing
  In this case we do not make network calls intead we have all the code in the initial call and we loads the component according to the route
- Server Side Routing
  In this case we make a network call and fetches that from server and then we render that page

# Types of Testing
Unit Testing
Integeration Testing
End to End Testing -e2e testing


# Setup Testing in our app
-Install React testing library - npm install --save-dev @testing-library/react @testing-library/dom
-Install Jest - npm install --save-dev jest
-configure babel for jest - https://jestjs.io/docs/getting-started#using-babel
-To disable babel transpilation in parcel https://parceljs.org/languages/javascript/#usage-with-other-tools
-Jest configureation - npx jest --init
-install jsdom library -https://testing-library.com/docs/react-testing-library/setup#jest-28
