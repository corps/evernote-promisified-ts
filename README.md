# evernote-promisified-ts

Typescript bindings for Evernote in NodeJS, with promises!
Requires Typescript 1.6.2 for node_modules resolution of typings.

## Installation

```
npm install evernote-promisified-ts
tsd query evernote --action install --save
tsd query thrift --action install --save
```

## Usage

evernote-promisified-ts assumes global.Promise exists, so be sure to backfill.

```typescript
import * as Promise from "bluebird";
import { Evernote } from "evernote";
import { UserStore, NoteStore, promisifyUserStore, promisifyNoteStore } from "evernote-promisified-ts";


var userStore:UserStore;
var noteStore:NoteStore;

var client = new Evernote.Client({token: "myauthtoken", sandbox: false});

userStore = promisifyUserStore(client.getUserStore());
noteStore = promisifyNoteStore(client.getNoteStore());

userStore.getUser().then(user => { console.log("Hi!", user.username); });
```

## Testing

There is a single integration test that can be run with `npm test`.  This will require a developer auth token.
