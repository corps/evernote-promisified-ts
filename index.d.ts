import { Evernote } from "evernote";

/**
 * Creates a wrapped, promise generating version of the Evernote.UserStoreClient.  The arguments for each method
 * will be the same as the original, minus the ending callback, and returning a promise that resolves with the
 * callback's result instead.  The returned wrapper unfortunately loses its doc strings, so you'll want to refer
 * either the evernote.d.ts file directly or the evernote thrift api.
 * @param userStore
 */
export declare function promisifyUserStore(userStore:Evernote.UserStoreClient):{
  getUser: () => PromiseLike<Evernote.User>;
  checkVersion: (a1:string, a2:number, a3:number) => PromiseLike<boolean>;
  getBootstrapInfo: (a1:string) => PromiseLike<Evernote.BootstrapInfo>;
  revokeLongSession: () => PromiseLike<void>;
  authenticateToBusiness: () => PromiseLike<Evernote.AuthenticationResult>;
  getPublicUserInfo: (a1:string) => PromiseLike<Evernote.PublicUserInfo>;
  getNoteStoreUrl: () => PromiseLike<string>;
};
export declare var _userStore:{
  getUser: () => PromiseLike<Evernote.User>;
  checkVersion: (a1:string, a2:number, a3:number) => PromiseLike<boolean>;
  getBootstrapInfo: (a1:string) => PromiseLike<Evernote.BootstrapInfo>;
  revokeLongSession: () => PromiseLike<void>;
  authenticateToBusiness: () => PromiseLike<Evernote.AuthenticationResult>;
  getPublicUserInfo: (a1:string) => PromiseLike<Evernote.PublicUserInfo>;
  getNoteStoreUrl: () => PromiseLike<string>;
};
/** The 'type' of the wrapped UserStore object. */
export declare type UserStore = typeof _userStore;
export declare function promisifyNoteStore(noteStore:Evernote.NoteStoreClient):{
  getSyncStateWithMetrics: (a1:Evernote.ClientUsageMetrics) => PromiseLike<Evernote.SyncState>;
  getFilteredSyncChunk: (a1:number, a2:number, a3:Evernote.SyncChunkFilter) => PromiseLike<Evernote.SyncState>;
  getLinkedNotebookSyncState: (a1:Evernote.LinkedNotebook) => PromiseLike<Evernote.SyncState>;
  getLinkedNotebookSyncChunk: (a1:Evernote.LinkedNotebook, a2:number, a3:number,
                               a4:boolean) => PromiseLike<Evernote.SyncChunk>;
  listNotebooks: () => PromiseLike<Evernote.Notebook[]>;
  getNotebook: (a1:string) => PromiseLike<Evernote.Notebook>;
  getDefaultNotebook: () => PromiseLike<Evernote.Notebook>;
  createNotebook: (a1:Evernote.Notebook) => PromiseLike<Evernote.Notebook>;
  updateNotebook: (a1:Evernote.Notebook) => PromiseLike<number>;
  expungeNotebook: (a1:string) => PromiseLike<number>;
  listTags: () => PromiseLike<Evernote.Tag[]>;
  listTagsByNotebook: (a1:string) => PromiseLike<Evernote.Tag[]>;
  getTag: (a1:string) => PromiseLike<Evernote.Tag>;
  createTag: (a1:Evernote.Tag) => PromiseLike<Evernote.Tag>;
  updateTag: (a1:Evernote.Tag) => PromiseLike<number>;
  untagAll: (a1:string) => PromiseLike<void>;
  expungeTag: (a1:string) => PromiseLike<number>;
  listSearches: () => PromiseLike<Evernote.SavedSearch[]>;
  getSearch: (a1:string) => PromiseLike<Evernote.SavedSearch>;
  createSearch: (a1:Evernote.SavedSearch) => PromiseLike<Evernote.SavedSearch>;
  updateSearch: (a1:Evernote.SavedSearch) => PromiseLike<number>;
  expungeSearch: (a1:string) => PromiseLike<number>;
  findNotes: (a1:Evernote.NoteFilter, a2:number, a3:number) => PromiseLike<Evernote.NoteList>;
  findNoteOffset: (a1:Evernote.NoteFilter, a2:string) => PromiseLike<number>;
  findNotesMetadata: (a1:Evernote.NoteFilter, a2:number, a3:number,
                      a4:Evernote.NotesMetadataResultSpec) => PromiseLike<Evernote.NotesMetadataList>;
  findNoteCounts: (a1:Evernote.NoteFilter, a2:boolean) => PromiseLike<Evernote.NoteCollectionCounts>;
  getNote: (a1:string, a2:boolean, a3:boolean, a4:boolean, a5:boolean) => PromiseLike<Evernote.Note>;
  getNoteApplicationData: (a1:string) => PromiseLike<Evernote.LazyMap>;
  getNoteApplicationDataEntry: (a1:string, a2:string) => PromiseLike<string>;
  setNoteApplicationDataEntry: (a1:string, a2:string, a3:string) => PromiseLike<number>;
  unsetNoteApplicationDataEntry: (a1:string, a2:string) => PromiseLike<number>;
  getNoteContent: (a1:string) => PromiseLike<string>;
  getNoteSearchText: (a1:string, a2:boolean, a3:boolean) => PromiseLike<string>;
  getResourceSearchText: (a1:string) => PromiseLike<string>;
  getNoteTagNames: (a1:string) => PromiseLike<string[]>;
  createNote: (a1:Evernote.Note) => PromiseLike<Evernote.Note>;
  updateNote: (a1:Evernote.Note) => PromiseLike<Evernote.Note>;
  deleteNote: (a1:string) => PromiseLike<number>;
  expungeNote: (a1:string) => PromiseLike<number>;
  expungeNotes: (a1:string[], a2:Evernote.Callback<number>) => PromiseLike<{}>;
  expungeInactiveNotes: () => PromiseLike<number>;
  copyNote: (a1:string, a2:string) => PromiseLike<Evernote.Note>;
  listNoteVersions: (a1:string) => PromiseLike<Evernote.NoteVersionId[]>;
  getNoteVersion: (a1:string, a2:number, a3:boolean, a4:boolean, a5:boolean) => PromiseLike<Evernote.Note>;
  getResource: (a1:string, a2:boolean, a3:boolean, a4:boolean, a5:boolean) => PromiseLike<Evernote.Resource>;
  getResourceApplicationData: (a1:string) => PromiseLike<Evernote.LazyMap>;
  getResourceApplicationDataEntry: (a1:string, a2:string) => PromiseLike<string>;
  setResourceApplicationDataEntry: (a1:string, a2:string, a3:string) => PromiseLike<number>;
  unsetResourceApplicationDataEntry: (a1:string, a2:string) => PromiseLike<number>;
  updateResource: (a1:Evernote.Resource) => PromiseLike<number>;
  getResourceData: (a1:string) => PromiseLike<string>;
  getResourceByHash: (a1:string, a2:string, a3:boolean, a4:boolean, a5:boolean) => PromiseLike<Evernote.Resource>;
  getResourceRecognition: (a1:string) => PromiseLike<string>;
  getResourceAlternateData: (a1:string) => PromiseLike<string>;
  getResourceAttributes: (a1:string) => PromiseLike<Evernote.ResourceAttributes>;
  getPublicNotebook: (a1:number, a2:string) => PromiseLike<Evernote.Notebook>;
  createSharedNotebook: (a1:Evernote.SharedNotebook) => PromiseLike<Evernote.SharedNotebook>;
  updateSharedNotebook: (a1:Evernote.SharedNotebook) => PromiseLike<number>;
  setSharedNotebookRecipientSettings: (a1:number, a2:Evernote.SharedNotebookRecipientSettings) => PromiseLike<number>;
  sendMessageToSharedNotebookMembers: (a1:string, a2:string, a3:string[]) => PromiseLike<number>;
  listSharedNotebooks: () => PromiseLike<Evernote.SharedNotebook[]>;
  expungeSharedNotebooks: (a1:number[]) => PromiseLike<number>;
  createLinkedNotebook: (a1:Evernote.LinkedNotebook) => PromiseLike<Evernote.LinkedNotebook>;
  updateLinkedNotebook: (a1:Evernote.LinkedNotebook) => PromiseLike<number>;
  listLinkedNotebooks: () => PromiseLike<Evernote.LinkedNotebook[]>;
  expungeLinkedNotebook: (a1:string) => PromiseLike<number>;
  authenticateToSharedNotebook: (a1:string) => PromiseLike<Evernote.AuthenticationResult>;
  getSharedNotebookByAuth: () => PromiseLike<Evernote.SharedNotebook>;
  emailNote: (a1:Evernote.NoteEmailParameters) => PromiseLike<void>;
  shareNote: (a1:string) => PromiseLike<string>;
  stopSharingNote: (a1:string) => PromiseLike<void>;
  authenticateToSharedNote: (a1:string, a2:string) => PromiseLike<Evernote.AuthenticationResult>;
  findRelated: (a1:Evernote.RelatedQuery, a2:Evernote.RelatedResultSpec) => PromiseLike<Evernote.RelatedResult>;
};
/** The 'type' of the wrapped NoteStore object. */
export declare var _noteStore:{
  getSyncStateWithMetrics: (a1:Evernote.ClientUsageMetrics) => PromiseLike<Evernote.SyncState>;
  getFilteredSyncChunk: (a1:number, a2:number, a3:Evernote.SyncChunkFilter) => PromiseLike<Evernote.SyncState>;
  getLinkedNotebookSyncState: (a1:Evernote.LinkedNotebook) => PromiseLike<Evernote.SyncState>;
  getLinkedNotebookSyncChunk: (a1:Evernote.LinkedNotebook, a2:number, a3:number,
                               a4:boolean) => PromiseLike<Evernote.SyncChunk>;
  listNotebooks: () => PromiseLike<Evernote.Notebook[]>;
  getNotebook: (a1:string) => PromiseLike<Evernote.Notebook>;
  getDefaultNotebook: () => PromiseLike<Evernote.Notebook>;
  createNotebook: (a1:Evernote.Notebook) => PromiseLike<Evernote.Notebook>;
  updateNotebook: (a1:Evernote.Notebook) => PromiseLike<number>;
  expungeNotebook: (a1:string) => PromiseLike<number>;
  listTags: () => PromiseLike<Evernote.Tag[]>;
  listTagsByNotebook: (a1:string) => PromiseLike<Evernote.Tag[]>;
  getTag: (a1:string) => PromiseLike<Evernote.Tag>;
  createTag: (a1:Evernote.Tag) => PromiseLike<Evernote.Tag>;
  updateTag: (a1:Evernote.Tag) => PromiseLike<number>;
  untagAll: (a1:string) => PromiseLike<void>;
  expungeTag: (a1:string) => PromiseLike<number>;
  listSearches: () => PromiseLike<Evernote.SavedSearch[]>;
  getSearch: (a1:string) => PromiseLike<Evernote.SavedSearch>;
  createSearch: (a1:Evernote.SavedSearch) => PromiseLike<Evernote.SavedSearch>;
  updateSearch: (a1:Evernote.SavedSearch) => PromiseLike<number>;
  expungeSearch: (a1:string) => PromiseLike<number>;
  findNotes: (a1:Evernote.NoteFilter, a2:number, a3:number) => PromiseLike<Evernote.NoteList>;
  findNoteOffset: (a1:Evernote.NoteFilter, a2:string) => PromiseLike<number>;
  findNotesMetadata: (a1:Evernote.NoteFilter, a2:number, a3:number,
                      a4:Evernote.NotesMetadataResultSpec) => PromiseLike<Evernote.NotesMetadataList>;
  findNoteCounts: (a1:Evernote.NoteFilter, a2:boolean) => PromiseLike<Evernote.NoteCollectionCounts>;
  getNote: (a1:string, a2:boolean, a3:boolean, a4:boolean, a5:boolean) => PromiseLike<Evernote.Note>;
  getNoteApplicationData: (a1:string) => PromiseLike<Evernote.LazyMap>;
  getNoteApplicationDataEntry: (a1:string, a2:string) => PromiseLike<string>;
  setNoteApplicationDataEntry: (a1:string, a2:string, a3:string) => PromiseLike<number>;
  unsetNoteApplicationDataEntry: (a1:string, a2:string) => PromiseLike<number>;
  getNoteContent: (a1:string) => PromiseLike<string>;
  getNoteSearchText: (a1:string, a2:boolean, a3:boolean) => PromiseLike<string>;
  getResourceSearchText: (a1:string) => PromiseLike<string>;
  getNoteTagNames: (a1:string) => PromiseLike<string[]>;
  createNote: (a1:Evernote.Note) => PromiseLike<Evernote.Note>;
  updateNote: (a1:Evernote.Note) => PromiseLike<Evernote.Note>;
  deleteNote: (a1:string) => PromiseLike<number>;
  expungeNote: (a1:string) => PromiseLike<number>;
  expungeNotes: (a1:string[], a2:Evernote.Callback<number>) => PromiseLike<{}>;
  expungeInactiveNotes: () => PromiseLike<number>;
  copyNote: (a1:string, a2:string) => PromiseLike<Evernote.Note>;
  listNoteVersions: (a1:string) => PromiseLike<Evernote.NoteVersionId[]>;
  getNoteVersion: (a1:string, a2:number, a3:boolean, a4:boolean, a5:boolean) => PromiseLike<Evernote.Note>;
  getResource: (a1:string, a2:boolean, a3:boolean, a4:boolean, a5:boolean) => PromiseLike<Evernote.Resource>;
  getResourceApplicationData: (a1:string) => PromiseLike<Evernote.LazyMap>;
  getResourceApplicationDataEntry: (a1:string, a2:string) => PromiseLike<string>;
  setResourceApplicationDataEntry: (a1:string, a2:string, a3:string) => PromiseLike<number>;
  unsetResourceApplicationDataEntry: (a1:string, a2:string) => PromiseLike<number>;
  updateResource: (a1:Evernote.Resource) => PromiseLike<number>;
  getResourceData: (a1:string) => PromiseLike<string>;
  getResourceByHash: (a1:string, a2:string, a3:boolean, a4:boolean, a5:boolean) => PromiseLike<Evernote.Resource>;
  getResourceRecognition: (a1:string) => PromiseLike<string>;
  getResourceAlternateData: (a1:string) => PromiseLike<string>;
  getResourceAttributes: (a1:string) => PromiseLike<Evernote.ResourceAttributes>;
  getPublicNotebook: (a1:number, a2:string) => PromiseLike<Evernote.Notebook>;
  createSharedNotebook: (a1:Evernote.SharedNotebook) => PromiseLike<Evernote.SharedNotebook>;
  updateSharedNotebook: (a1:Evernote.SharedNotebook) => PromiseLike<number>;
  setSharedNotebookRecipientSettings: (a1:number, a2:Evernote.SharedNotebookRecipientSettings) => PromiseLike<number>;
  sendMessageToSharedNotebookMembers: (a1:string, a2:string, a3:string[]) => PromiseLike<number>;
  listSharedNotebooks: () => PromiseLike<Evernote.SharedNotebook[]>;
  expungeSharedNotebooks: (a1:number[]) => PromiseLike<number>;
  createLinkedNotebook: (a1:Evernote.LinkedNotebook) => PromiseLike<Evernote.LinkedNotebook>;
  updateLinkedNotebook: (a1:Evernote.LinkedNotebook) => PromiseLike<number>;
  listLinkedNotebooks: () => PromiseLike<Evernote.LinkedNotebook[]>;
  expungeLinkedNotebook: (a1:string) => PromiseLike<number>;
  authenticateToSharedNotebook: (a1:string) => PromiseLike<Evernote.AuthenticationResult>;
  getSharedNotebookByAuth: () => PromiseLike<Evernote.SharedNotebook>;
  emailNote: (a1:Evernote.NoteEmailParameters) => PromiseLike<void>;
  shareNote: (a1:string) => PromiseLike<string>;
  stopSharingNote: (a1:string) => PromiseLike<void>;
  authenticateToSharedNote: (a1:string, a2:string) => PromiseLike<Evernote.AuthenticationResult>;
  findRelated: (a1:Evernote.RelatedQuery, a2:Evernote.RelatedResultSpec) => PromiseLike<Evernote.RelatedResult>;
};
export declare type NoteStore = typeof _noteStore;
