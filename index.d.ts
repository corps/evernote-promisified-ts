import { Evernote } from "evernote";
/** A minimal Promise contract supported by most modern promise libraries. */
export interface Promise<R> {
    then<U>(onFulfilled: (value: R) => Promise<U>, onRejected: (error: any) => Promise<U>): Promise<U>;
    then<U>(onFulfilled: (value: R) => Promise<U>, onRejected?: (error: any) => U): Promise<U>;
    then<U>(onFulfilled: (value: R) => U, onRejected: (error: any) => Promise<U>): Promise<U>;
    then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => U): Promise<U>;
    catch<U>(onReject?: (error: any) => Promise<U>): Promise<U>;
    catch<U>(onReject?: (error: any) => U): Promise<U>;
    finally<U>(handler: () => Promise<U>): Promise<R>;
    finally<U>(handler: () => U): Promise<R>;
}
/** A minimal deferred contract supported by most modern promise libraries */
export interface Deferred<R> {
    promise: Promise<R>;
    resolve(value: R): void;
    reject(reason: any): void;
}
/** The constructor object providing the deferred implementation to use */
export interface PromiseEngine {
    defer<R>(): Deferred<R>;
}
/** Set this value to the Promise constructor of the underlying promise you'd like to use. */
export declare function setPromiseEngine(engine: PromiseEngine): void;
/**
 * Creates a wrapped, promise generating version of the Evernote.UserStoreClient.  The arguments for each method
 * will be the same as the original, minus the ending callback, and returning a promise that resolves with the
 * callback's result instead.  The returned wrapper unfortunately loses its doc strings, so you'll want to refer
 * either the evernote.d.ts file directly or the evernote thrift api.
 * @param userStore
 */
export declare function promisifyUserStore(userStore: Evernote.UserStoreClient): {
    getUser: () => Promise<Evernote.User>;
    checkVersion: (a1: string, a2: number, a3: number) => Promise<boolean>;
    getBootstrapInfo: (a1: string) => Promise<Evernote.BootstrapInfo>;
    revokeLongSession: () => Promise<void>;
    authenticateToBusiness: () => Promise<Evernote.AuthenticationResult>;
    getPublicUserInfo: (a1: string) => Promise<Evernote.PublicUserInfo>;
    getNoteStoreUrl: () => Promise<string>;
};
export declare var _userStore: {
    getUser: () => Promise<Evernote.User>;
    checkVersion: (a1: string, a2: number, a3: number) => Promise<boolean>;
    getBootstrapInfo: (a1: string) => Promise<Evernote.BootstrapInfo>;
    revokeLongSession: () => Promise<void>;
    authenticateToBusiness: () => Promise<Evernote.AuthenticationResult>;
    getPublicUserInfo: (a1: string) => Promise<Evernote.PublicUserInfo>;
    getNoteStoreUrl: () => Promise<string>;
};
/** The 'type' of the wrapped UserStore object. */
export declare type UserStore = typeof _userStore;
export declare function promisifyNoteStore(noteStore: Evernote.NoteStoreClient): {
    getSyncStateWithMetrics: (a1: Evernote.ClientUsageMetrics) => Promise<Evernote.SyncState>;
    getFilteredSyncChunk: (a1: number, a2: number, a3: Evernote.SyncChunkFilter) => Promise<Evernote.SyncState>;
    getLinkedNotebookSyncState: (a1: Evernote.LinkedNotebook) => Promise<Evernote.SyncState>;
    getLinkedNotebookSyncChunk: (a1: Evernote.LinkedNotebook, a2: number, a3: number, a4: boolean) => Promise<Evernote.SyncChunk>;
    listNotebooks: () => Promise<Evernote.Notebook[]>;
    getNotebook: (a1: string) => Promise<Evernote.Notebook>;
    getDefaultNotebook: () => Promise<Evernote.Notebook>;
    createNotebook: (a1: Evernote.Notebook) => Promise<Evernote.Notebook>;
    updateNotebook: (a1: Evernote.Notebook) => Promise<number>;
    expungeNotebook: (a1: string) => Promise<number>;
    listTags: () => Promise<Evernote.Tag[]>;
    listTagsByNotebook: (a1: string) => Promise<Evernote.Tag[]>;
    getTag: (a1: string) => Promise<Evernote.Tag>;
    createTag: (a1: Evernote.Tag) => Promise<Evernote.Tag>;
    updateTag: (a1: Evernote.Tag) => Promise<number>;
    untagAll: (a1: string) => Promise<void>;
    expungeTag: (a1: string) => Promise<number>;
    listSearches: () => Promise<Evernote.SavedSearch[]>;
    getSearch: (a1: string) => Promise<Evernote.SavedSearch>;
    createSearch: (a1: Evernote.SavedSearch) => Promise<Evernote.SavedSearch>;
    updateSearch: (a1: Evernote.SavedSearch) => Promise<number>;
    expungeSearch: (a1: string) => Promise<number>;
    findNotes: (a1: Evernote.NoteFilter, a2: number, a3: number) => Promise<Evernote.NoteList>;
    findNoteOffset: (a1: Evernote.NoteFilter, a2: string) => Promise<number>;
    findNotesMetadata: (a1: Evernote.NoteFilter, a2: number, a3: number, a4: Evernote.NotesMetadataResultSpec) => Promise<Evernote.NotesMetadataList>;
    findNoteCounts: (a1: Evernote.NoteFilter, a2: boolean) => Promise<Evernote.NoteCollectionCounts>;
    getNote: (a1: string, a2: boolean, a3: boolean, a4: boolean, a5: boolean) => Promise<Evernote.Note>;
    getNoteApplicationData: (a1: string) => Promise<Evernote.LazyMap>;
    getNoteApplicationDataEntry: (a1: string, a2: string) => Promise<string>;
    setNoteApplicationDataEntry: (a1: string, a2: string, a3: string) => Promise<number>;
    unsetNoteApplicationDataEntry: (a1: string, a2: string) => Promise<number>;
    getNoteContent: (a1: string) => Promise<string>;
    getNoteSearchText: (a1: string, a2: boolean, a3: boolean) => Promise<string>;
    getResourceSearchText: (a1: string) => Promise<string>;
    getNoteTagNames: (a1: string) => Promise<string[]>;
    createNote: (a1: Evernote.Note) => Promise<Evernote.Note>;
    updateNote: (a1: Evernote.Note) => Promise<Evernote.Note>;
    deleteNote: (a1: string) => Promise<number>;
    expungeNote: (a1: string) => Promise<number>;
    expungeNotes: (a1: string[], a2: Evernote.Callback<number>) => Promise<{}>;
    expungeInactiveNotes: () => Promise<number>;
    copyNote: (a1: string, a2: string) => Promise<Evernote.Note>;
    listNoteVersions: (a1: string) => Promise<Evernote.NoteVersionId[]>;
    getNoteVersion: (a1: string, a2: number, a3: boolean, a4: boolean, a5: boolean) => Promise<Evernote.Note>;
    getResource: (a1: string, a2: boolean, a3: boolean, a4: boolean, a5: boolean) => Promise<Evernote.Resource>;
    getResourceApplicationData: (a1: string) => Promise<Evernote.LazyMap>;
    getResourceApplicationDataEntry: (a1: string, a2: string) => Promise<string>;
    setResourceApplicationDataEntry: (a1: string, a2: string, a3: string) => Promise<number>;
    unsetResourceApplicationDataEntry: (a1: string, a2: string) => Promise<number>;
    updateResource: (a1: Evernote.Resource) => Promise<number>;
    getResourceData: (a1: string) => Promise<string>;
    getResourceByHash: (a1: string, a2: string, a3: boolean, a4: boolean, a5: boolean) => Promise<Evernote.Resource>;
    getResourceRecognition: (a1: string) => Promise<string>;
    getResourceAlternateData: (a1: string) => Promise<string>;
    getResourceAttributes: (a1: string) => Promise<Evernote.ResourceAttributes>;
    getPublicNotebook: (a1: number, a2: string) => Promise<Evernote.Notebook>;
    createSharedNotebook: (a1: Evernote.SharedNotebook) => Promise<Evernote.SharedNotebook>;
    updateSharedNotebook: (a1: Evernote.SharedNotebook) => Promise<number>;
    setSharedNotebookRecipientSettings: (a1: number, a2: Evernote.SharedNotebookRecipientSettings) => Promise<number>;
    sendMessageToSharedNotebookMembers: (a1: string, a2: string, a3: string[]) => Promise<number>;
    listSharedNotebooks: () => Promise<Evernote.SharedNotebook[]>;
    expungeSharedNotebooks: (a1: number[]) => Promise<number>;
    createLinkedNotebook: (a1: Evernote.LinkedNotebook) => Promise<Evernote.LinkedNotebook>;
    updateLinkedNotebook: (a1: Evernote.LinkedNotebook) => Promise<number>;
    listLinkedNotebooks: () => Promise<Evernote.LinkedNotebook[]>;
    expungeLinkedNotebook: (a1: string) => Promise<number>;
    authenticateToSharedNotebook: (a1: string) => Promise<Evernote.AuthenticationResult>;
    getSharedNotebookByAuth: () => Promise<Evernote.SharedNotebook>;
    emailNote: (a1: Evernote.NoteEmailParameters) => Promise<void>;
    shareNote: (a1: string) => Promise<string>;
    stopSharingNote: (a1: string) => Promise<void>;
    authenticateToSharedNote: (a1: string, a2: string) => Promise<Evernote.AuthenticationResult>;
    findRelated: (a1: Evernote.RelatedQuery, a2: Evernote.RelatedResultSpec) => Promise<Evernote.RelatedResult>;
};
/** The 'type' of the wrapped NoteStore object. */
export declare var _noteStore: {
    getSyncStateWithMetrics: (a1: Evernote.ClientUsageMetrics) => Promise<Evernote.SyncState>;
    getFilteredSyncChunk: (a1: number, a2: number, a3: Evernote.SyncChunkFilter) => Promise<Evernote.SyncState>;
    getLinkedNotebookSyncState: (a1: Evernote.LinkedNotebook) => Promise<Evernote.SyncState>;
    getLinkedNotebookSyncChunk: (a1: Evernote.LinkedNotebook, a2: number, a3: number, a4: boolean) => Promise<Evernote.SyncChunk>;
    listNotebooks: () => Promise<Evernote.Notebook[]>;
    getNotebook: (a1: string) => Promise<Evernote.Notebook>;
    getDefaultNotebook: () => Promise<Evernote.Notebook>;
    createNotebook: (a1: Evernote.Notebook) => Promise<Evernote.Notebook>;
    updateNotebook: (a1: Evernote.Notebook) => Promise<number>;
    expungeNotebook: (a1: string) => Promise<number>;
    listTags: () => Promise<Evernote.Tag[]>;
    listTagsByNotebook: (a1: string) => Promise<Evernote.Tag[]>;
    getTag: (a1: string) => Promise<Evernote.Tag>;
    createTag: (a1: Evernote.Tag) => Promise<Evernote.Tag>;
    updateTag: (a1: Evernote.Tag) => Promise<number>;
    untagAll: (a1: string) => Promise<void>;
    expungeTag: (a1: string) => Promise<number>;
    listSearches: () => Promise<Evernote.SavedSearch[]>;
    getSearch: (a1: string) => Promise<Evernote.SavedSearch>;
    createSearch: (a1: Evernote.SavedSearch) => Promise<Evernote.SavedSearch>;
    updateSearch: (a1: Evernote.SavedSearch) => Promise<number>;
    expungeSearch: (a1: string) => Promise<number>;
    findNotes: (a1: Evernote.NoteFilter, a2: number, a3: number) => Promise<Evernote.NoteList>;
    findNoteOffset: (a1: Evernote.NoteFilter, a2: string) => Promise<number>;
    findNotesMetadata: (a1: Evernote.NoteFilter, a2: number, a3: number, a4: Evernote.NotesMetadataResultSpec) => Promise<Evernote.NotesMetadataList>;
    findNoteCounts: (a1: Evernote.NoteFilter, a2: boolean) => Promise<Evernote.NoteCollectionCounts>;
    getNote: (a1: string, a2: boolean, a3: boolean, a4: boolean, a5: boolean) => Promise<Evernote.Note>;
    getNoteApplicationData: (a1: string) => Promise<Evernote.LazyMap>;
    getNoteApplicationDataEntry: (a1: string, a2: string) => Promise<string>;
    setNoteApplicationDataEntry: (a1: string, a2: string, a3: string) => Promise<number>;
    unsetNoteApplicationDataEntry: (a1: string, a2: string) => Promise<number>;
    getNoteContent: (a1: string) => Promise<string>;
    getNoteSearchText: (a1: string, a2: boolean, a3: boolean) => Promise<string>;
    getResourceSearchText: (a1: string) => Promise<string>;
    getNoteTagNames: (a1: string) => Promise<string[]>;
    createNote: (a1: Evernote.Note) => Promise<Evernote.Note>;
    updateNote: (a1: Evernote.Note) => Promise<Evernote.Note>;
    deleteNote: (a1: string) => Promise<number>;
    expungeNote: (a1: string) => Promise<number>;
    expungeNotes: (a1: string[], a2: Evernote.Callback<number>) => Promise<{}>;
    expungeInactiveNotes: () => Promise<number>;
    copyNote: (a1: string, a2: string) => Promise<Evernote.Note>;
    listNoteVersions: (a1: string) => Promise<Evernote.NoteVersionId[]>;
    getNoteVersion: (a1: string, a2: number, a3: boolean, a4: boolean, a5: boolean) => Promise<Evernote.Note>;
    getResource: (a1: string, a2: boolean, a3: boolean, a4: boolean, a5: boolean) => Promise<Evernote.Resource>;
    getResourceApplicationData: (a1: string) => Promise<Evernote.LazyMap>;
    getResourceApplicationDataEntry: (a1: string, a2: string) => Promise<string>;
    setResourceApplicationDataEntry: (a1: string, a2: string, a3: string) => Promise<number>;
    unsetResourceApplicationDataEntry: (a1: string, a2: string) => Promise<number>;
    updateResource: (a1: Evernote.Resource) => Promise<number>;
    getResourceData: (a1: string) => Promise<string>;
    getResourceByHash: (a1: string, a2: string, a3: boolean, a4: boolean, a5: boolean) => Promise<Evernote.Resource>;
    getResourceRecognition: (a1: string) => Promise<string>;
    getResourceAlternateData: (a1: string) => Promise<string>;
    getResourceAttributes: (a1: string) => Promise<Evernote.ResourceAttributes>;
    getPublicNotebook: (a1: number, a2: string) => Promise<Evernote.Notebook>;
    createSharedNotebook: (a1: Evernote.SharedNotebook) => Promise<Evernote.SharedNotebook>;
    updateSharedNotebook: (a1: Evernote.SharedNotebook) => Promise<number>;
    setSharedNotebookRecipientSettings: (a1: number, a2: Evernote.SharedNotebookRecipientSettings) => Promise<number>;
    sendMessageToSharedNotebookMembers: (a1: string, a2: string, a3: string[]) => Promise<number>;
    listSharedNotebooks: () => Promise<Evernote.SharedNotebook[]>;
    expungeSharedNotebooks: (a1: number[]) => Promise<number>;
    createLinkedNotebook: (a1: Evernote.LinkedNotebook) => Promise<Evernote.LinkedNotebook>;
    updateLinkedNotebook: (a1: Evernote.LinkedNotebook) => Promise<number>;
    listLinkedNotebooks: () => Promise<Evernote.LinkedNotebook[]>;
    expungeLinkedNotebook: (a1: string) => Promise<number>;
    authenticateToSharedNotebook: (a1: string) => Promise<Evernote.AuthenticationResult>;
    getSharedNotebookByAuth: () => Promise<Evernote.SharedNotebook>;
    emailNote: (a1: Evernote.NoteEmailParameters) => Promise<void>;
    shareNote: (a1: string) => Promise<string>;
    stopSharingNote: (a1: string) => Promise<void>;
    authenticateToSharedNote: (a1: string, a2: string) => Promise<Evernote.AuthenticationResult>;
    findRelated: (a1: Evernote.RelatedQuery, a2: Evernote.RelatedResultSpec) => Promise<Evernote.RelatedResult>;
};
export declare type NoteStore = typeof _noteStore;
