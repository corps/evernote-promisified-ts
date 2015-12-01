require("lie/polyfill");
import readline = require("readline");
import assert = require("assert");
import { Evernote } from "evernote";
import { UserStore, NoteStore, promisifyUserStore, promisifyNoteStore } from "../index";

var readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

declare var Promise:PromiseConstructorLike;

var question = (q:string) => {
  return new Promise<string>((resolve, reject) => {
    readlineInterface.question(q, (answer:string) => {
      resolve(answer);
    })
  })
};

describe("integration", function () {
  this.timeout(60000);

  var userStore:UserStore;
  var noteStore:NoteStore;

  before(() => {
    return question("Please provide a valid evernote auth token: ").then(answer => {
      var client = new Evernote.Client({token: answer, sandbox: false});
      userStore = promisifyUserStore(client.getUserStore());
      noteStore = promisifyNoteStore(client.getNoteStore());
      return userStore.getUser();
    }).then(user => {
      console.log("running tests as ", user.username);
    });
  });

  it("can correctly call an api and provide a promise to its result", () => {
    var filter = new Evernote.NoteFilter();
    filter.order = Evernote.NoteSortOrder.CREATED;
    var resultSpec = new Evernote.NotesMetadataResultSpec();
    resultSpec.includeTitle = true;

    return noteStore.findNotesMetadata(filter, 10, 5, resultSpec).then(result => {
      console.log("Found", result.totalNotes, "total notes");
      console.log("Start index was", result.startIndex);
      console.log("Note titles were", result.notes.map(n => n.title).join(", "));
    })
  });

  context("when an api call fails", () => {
    it("correctly fails the promise with the expected error", () => {
      return noteStore.getNote("not-valid-uuid", false, false, false, false).then(() => {
        assert.ok(false, "Did not expect to succeed!")
      }, (e:Evernote.EDAMUserException) => {
        assert.ok(e instanceof Evernote.EDAMUserException);
        console.log("error code was", e.errorCode, "parameter that was problem:", e.parameter);
      })
    })
  })
});
