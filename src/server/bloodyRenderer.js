import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';

/**
 * The following function renders a given React component and return into within a new HTML page
 */
const bloodyRenderer = (component) => {
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
      <div id="root">${markup}</div>
      <script src="/public/app.bundle.js"></script>
    </body>
  </html>`
  );
};

export default bloodyRenderer;
