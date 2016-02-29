# Preact Rollup Redux

## Up and Running

If you had `nodemon` installed, just run:

```console
npm start
```

## Generate JS bundle

```console
npm run build
```

If you are using Windows, you must run:

```console
SET BABEL_ENV=production
SET NODE_ENV=production
SET UGLIFY=true
rollup -c
```

> Thanks [@katopz](https://github.com/katopz) for Windows tips =)
