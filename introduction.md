# Reactjs Basic Commands
	
**How to Create a Reactjs Application in quick!**\
		`npx create-react-app firstproject`\
	*This command which is used to create a REACTJS projects quick and it will create everything*

**************************************************************

## react js concepts

### render element in web page using jsx
    jsx - javascript XML\
    using this jsx we can write a html code and assign this code to the variable , call that variable using ReactDOM.render and display it in browser,\
    Because of the lite-server we not need to reload the page.

index.html code,
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
```
index.js code
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const element = <div>
<h1>hello world<h1>
</div>

reactDOM.render(
    element,
    document.getElementById('root'),
);
```

*******************************************************************

### Render CSS element into index.js

Apply css concepts in reactjs is very simple\
first You need to import the index.css file to index.js file \

_Example code shown below_
index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
const element = <div className="divone">
  <h1>My name is Maari muthu</h1>
  <h2>Initial of mine is B</h2>
  <h3>My Degree is B.E</h3>
</div>
ReactDOM.render(
element,
document.getElementById('root'),
);
```
index.css
```css
.divone{
  color: blue;
  text-align: center;
}
```

