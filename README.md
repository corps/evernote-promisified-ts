# evernote-promisified-ts

Typescript bindings for Evernote in NodeJS, with promises!

## Installation

```
npm install evernote-promisified-ts
tsd query evernote --action install --save
tsd query thrift --action install --save
tsd link
```

## Usage

Note that evernote-promisified-ts does not provide its own Promise implementation but requires specifying one to be used by the system via `setPromiseEngine`.  bluebird is recommended but not required.


```typescript
import Promise = require("bluebird");
import { Evernote } from "evernote";
import { UserStore, NoteStore, promisifyUserStore, promisifyNoteStore } from "evernote-promisified-ts";


var userStore:UserStore;
var noteStore:NoteStore;

setPromiseEngine(Promise);

var client = new Evernote.Client({authenticationToken: "myauthtoken", sandbox: false});

userStore = promisifyUserStore(client.getUserStore());
noteStore = promisifyNoteStore(client.getNoteStore());

userStore.getUser().then(user => { console.log("Hi!", user.username); });
```

## Testing

There is a single integration test that can be run with `npm test`.  This will require a developer auth token.
