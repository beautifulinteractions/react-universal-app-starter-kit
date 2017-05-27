import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';


const bloodyRender = (component) => {
  const markup = renderToString(component);
  const helmet = Helmet.renderStatic();

  return (`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
    </head>
    <body ${helmet.bodyAttributes.toString()}>
      <div id="app">${markup}</div>
      <h1>HI</h1>
      <script src="/public/app.bundle.js"></script>
    </body>
  </html>`
  );
};

export default bloodyRender;
