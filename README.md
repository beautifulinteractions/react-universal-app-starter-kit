# React isomorphic App starter kit 
---
![Logo](./ReactUniversalApp.png)


A **universal/isomorphic** web application starter kit built on [React](https://github.com/facebook/react) and [React Router 4](https://reacttraining.com/react-router/). 
Initially thought as an internal project, is now a completely open source project.
Inspired by the work of [Patrick Hund](https://github.com/pahund).

### Featues
 - SEO Oriented, using [Helmet](https://github.com/nfl/react-helmet)
 - Dynamic Routes, using [React Router](https://reacttraining.com/react-router/)
 - First page server-side rendered
 - ES6 

### Make it run

```
npm install
npm run build
npm start
```

Check your browser at [localhost:3000](localhost:3000)

### Development 

For local development, you run two watch jobs in parallel, one for
rebuilding the client-side JavaScript code when client-side scripts are changed,
and one for rebuilding the server-side JavaScript code when server-side scripts
are changed.

Run these two commands in two separate terminal windows or tabs – client:

```
npm run dev:client
```

Server:

```
npm run dev:server
```

Check your browser at [localhost:3000](localhost:3000)
