import React from 'react';
// import PreloaderSVG from './images/svg/preloader.svg';

import './preloader.css';

const HTML = (props) => {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Lazywill" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#D0E0D8" />
        <meta name="google-site-verification" content="NJ79ZVgVfMEQ3JvCfYsGmJhQyjEf62QNx02dgtxgWfc" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
      
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {/* <div key={`preloader`} id="preloader-container">
          <div id='preloader'>
            <div className='preloader-wrap'>
              <div className='circle'></div>
            </div>
            <PreloaderSVG className='svg-icon' />
          </div>
        </div> */}
        {props.postBodyComponents}
      </body>
    </html>
  );
}

export default HTML;