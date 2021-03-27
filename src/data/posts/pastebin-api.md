---
title: Pastebin API
created_at: March 27, 2021 17:20:00
intro: Learn more about my npm package.
---

On February 23rd I created my second [npm](https://npmjs.com) package "pastebin-api", it's a package to interact with the [Pastebin](https://pastebin.com) api.

## Getting started

### install

#### npm

_No need to install types since pastebin-api was created using Typescript and includes built in types!_

```bash
npm install pastebin-api
```

#### yarn

```bash
yarn add pastebin-api
```

### Creating the client

We will first import the client using:

```typescript
// import/export
import PasteClient from "pastebin-api";

// commonjs
const PasteClient = require("pastebin-api").default;
```

#### After importing, we'll create the client

**Note:** Replace `process.env["API_KEY_HERE"]` with your own api key from Pastebin. You can also add it in a `.env` file.

```typescript
const client = new PasteClient(process.env["API_KEY_HERE"]);
```

### Creating a new paste

Now we'll create a new paste using the [`.createPaste`](https://github.com/Dev-CasperTheGhost/pastebin-api/blob/main/docs/README.md#create-a-paste) method

```typescript
const pasteUrl = await client.createPaste({
  code: "const hello = 'hello world!'", // The code we want to send in the Paste
  expireDate: "N", // When should the paste expire
  format: "javascript", // The format, "javascript", "java", "lua", etc
  name: "hello.js", // The name of the paste
  publicity: 0, // 0 for a public paste
});

console.log(pasteUrl); // if an error occurred, it'll be thrown to the console.
```

## Woohoo 🎉

There you have it! We've successfully created a new paste! [Read more on the docs](https://github.com/Dev-CasperTheGhost/pastebin-api/blob/main/docs/README.md)
