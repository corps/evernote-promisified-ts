# evernote-promisified-ts

Typescript bindings for Evernote in NodeJS, with promises!

## Installation

```
npm install evernote-promisified-ts
tsd link
```

You'll also need to includde evernote.d.ts in your build.  evernote-promisified-ts cannot directly declare its
dependency on them =( as doing so could produce duplicate definition problems, but it does provide the definitions
under the typings directory.  Using the `tsconfig.json` hotness:

```json
files: [
  "node_modules/evernote-promisified-ts/typings/evernote/evernote.d.ts" 
]
```

There is an open pull request ([here](https://github.com/borisyankov/DefinitelyTyped/pull/5153)) to add these 
definitions into DefinitelyTyped so that they are easily accessible via tsd itself, but until that is complete you'll
have to link to the ones included directly here.

## Usage

Note that evernote-promisified-ts does not provide its own Promise implementation but requires specifying one to be
used by the system via `setPromiseEngine`.  bluebird is recommended but not required.


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
