import { Evernote } from "evernote";

/** A minimal Promise contract supported by most modern promise libraries. */
export interface Promise<R> {
    then<U>(onFulfilled:(value:R) => Promise<U>, onRejected:(error:any) => Promise<U>): Promise<U>;
    then<U>(onFulfilled:(value:R) => Promise<U>, onRejected?:(error:any) => U): Promise<U>;
    then<U>(onFulfilled:(value:R) => U, onRejected:(error:any) => Promise<U>): Promise<U>;
    then<U>(onFulfilled?:(value:R) => U, onRejected?:(error:any) => U): Promise<U>;
    catch<U>(onReject?:(error:any) => Promise<U>): Promise<U>;
    catch<U>(onReject?:(error:any) => U): Promise<U>;
    finally<U>(handler:() => Promise<U>): Promise<R>;
    finally<U>(handler:() => U): Promise<R>;
}

/** A minimal deferred contract supported by most modern promise libraries */
export interface Deferred<R> {
    promise: Promise<R>;
    resolve(value:R): void;
    reject(reason:any): void;
}

/** The constructor object providing the deferred implementation to use */
export interface PromiseEngine {
    defer<R>(): Deferred<R>
}

var promiseEngine:PromiseEngine = null;

/** Set this value to the Promise constructor of the underlying promise you'd like to use. */
export function setPromiseEngine(engine:PromiseEngine) {
    promiseEngine = engine;
}

/**
 * Provided as a callback to the evernote api and unfolds the peculiar convention of errors first, results second.
 * @returns {{cb: (function(any, R): undefined), promise: Promise<R>}}
 */
function evernoteDeferredCallback<R>() {
    var deferred = promiseEngine.defer<R>();
    return {
        cb: (err:any, r:R) => {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(r);
            }
        },
        promise: deferred.promise
    };
}

/**
 * The following methods take methods of the evernote api and converts them into promise returning versions by
 * passing through an evernoteDeferredCallback as the callback to the method.  The number at the end represents
 * the number of non callback args the method is expected to take.
 */
function promisify0<R>(f:(cb:Evernote.Callback<R>) => void) {
    return () => {
        var deferred = evernoteDeferredCallback<R>();
        f(deferred.cb);
        return deferred.promise;
    }
}

function promisify1<R, A1>(f:(a1:A1, cb:Evernote.Callback<R>) => void) {
    return (a1:A1) => {
        var deferred = evernoteDeferredCallback<R>();
        f(a1, deferred.cb);
        return deferred.promise;
    }
}

function promisify2<R, A1, A2>(f:(a1:A1, a2:A2, cb:Evernote.Callback<R>) => void) {
    return (a1:A1, a2:A2) => {
        var deferred = evernoteDeferredCallback<R>();
        f(a1, a2, deferred.cb);
        return deferred.promise;
    }
}

function promisify3<R, A1, A2, A3>(f:(a1:A1, a2:A2, a3:A3, cb:Evernote.Callback<R>) => void) {
    return (a1:A1, a2:A2, a3:A3) => {
        var deferred = evernoteDeferredCallback<R>();
        f(a1, a2, a3, deferred.cb);
        return deferred.promise;
    }
}

function promisify4<R, A1, A2, A3, A4>(f:(a1:A1, a2:A2, a3:A3, a4:A4, cb:Evernote.Callback<R>) => void) {
    return (a1:A1, a2:A2, a3:A3, a4:A4) => {
        var deferred = evernoteDeferredCallback<R>();
        f(a1, a2, a3, a4, deferred.cb);
        return deferred.promise;
    }
}

function promisify5<R, A1, A2, A3, A4, A5>(f:(a1:A1, a2:A2, a3:A3, a4:A4, a5:A5, cb:Evernote.Callback<R>) => void) {
    return (a1:A1, a2:A2, a3:A3, a4:A4, a5:A5) => {
        var deferred = evernoteDeferredCallback<R>();
        f(a1, a2, a3, a4, a5, deferred.cb);
        return deferred.promise;
    }
}

/**
 * Creates a wrapped, promise generating version of the Evernote.UserStoreClient.  The arguments for each method
 * will be the same as the original, minus the ending callback, and returning a promise that resolves with the
 * callback's result instead.  The returned wrapper unfortunately loses its doc strings, so you'll want to refer
 * either the evernote.d.ts file directly or the evernote thrift api.
 * @param userStore
 */
export function promisifyUserStore(userStore:Evernote.UserStoreClient) {
    return {
        getUser: promisify0(userStore.getUser),
        checkVersion: promisify3(userStore.checkVersion),
        getBootstrapInfo: promisify1(userStore.getBootstrapInfo),
        revokeLongSession: promisify0(userStore.revokeLongSession),
        authenticateToBusiness: promisify0(userStore.authenticateToBusiness),
        getPublicUserInfo: promisify1(userStore.getPublicUserInfo),
        getNoteStoreUrl: promisify0(userStore.getNoteStoreUrl)
    };
}

export var _userStore = promisifyUserStore(<any>{});
/** The 'type' of the wrapped UserStore object. */
export type UserStore = typeof _userStore;


export function promisifyNoteStore(noteStore:Evernote.NoteStoreClient) {
    return {
        getSyncStateWithMetrics: promisify1(noteStore.getSyncStateWithMetrics),
        getFilteredSyncChunk: promisify3(noteStore.getFilteredSyncChunk),
        getLinkedNotebookSyncState: promisify1(noteStore.getLinkedNotebookSyncState),
        getLinkedNotebookSyncChunk: promisify4(noteStore.getLinkedNotebookSyncChunk),
        listNotebooks: promisify0(noteStore.listNotebooks),
        getNotebook: promisify1(noteStore.getNotebook),
        getDefaultNotebook: promisify0(noteStore.getDefaultNotebook),
        createNotebook: promisify1(noteStore.createNotebook),
        updateNotebook: promisify1(noteStore.updateNotebook),
        expungeNotebook: promisify1(noteStore.expungeNotebook),
        listTags: promisify0(noteStore.listTags),
        listTagsByNotebook: promisify1(noteStore.listTagsByNotebook),
        getTag: promisify1(noteStore.getTag),
        createTag: promisify1(noteStore.createTag),
        updateTag: promisify1(noteStore.updateTag),
        untagAll: promisify1(noteStore.untagAll),
        expungeTag: promisify1(noteStore.expungeTag),
        listSearches: promisify0(noteStore.listSearches),
        getSearch: promisify1(noteStore.getSearch),
        createSearch: promisify1(noteStore.createSearch),
        updateSearch: promisify1(noteStore.updateSearch),
        expungeSearch: promisify1(noteStore.expungeSearch),
        findNotes: promisify3(noteStore.findNotes),
        findNoteOffset: promisify2(noteStore.findNoteOffset),
        findNotesMetadata: promisify4(noteStore.findNotesMetadata),
        findNoteCounts: promisify2(noteStore.findNoteCounts),
        getNote: promisify5(noteStore.getNote),
        getNoteApplicationData: promisify1(noteStore.getNoteApplicationData),
        getNoteApplicationDataEntry: promisify2(noteStore.getNoteApplicationDataEntry),
        setNoteApplicationDataEntry: promisify3(noteStore.setNoteApplicationDataEntry),
        unsetNoteApplicationDataEntry: promisify2(noteStore.unsetNoteApplicationDataEntry),
        getNoteContent: promisify1(noteStore.getNoteContent),
        getNoteSearchText: promisify3(noteStore.getNoteSearchText),
        getResourceSearchText: promisify1(noteStore.getResourceSearchText),
        getNoteTagNames: promisify1(noteStore.getNoteTagNames),
        createNote: promisify1(noteStore.createNote),
        updateNote: promisify1(noteStore.updateNote),
        deleteNote: promisify1(noteStore.deleteNote),
        expungeNote: promisify1(noteStore.expungeNote),
        expungeNotes: promisify2(noteStore.expungeNotes),
        expungeInactiveNotes: promisify0(noteStore.expungeInactiveNotes),
        copyNote: promisify2(noteStore.copyNote),
        listNoteVersions: promisify1(noteStore.listNoteVersions),
        getNoteVersion: promisify5(noteStore.getNoteVersion),
        getResource: promisify5(noteStore.getResource),
        getResourceApplicationData: promisify1(noteStore.getResourceApplicationData),
        getResourceApplicationDataEntry: promisify2(noteStore.getResourceApplicationDataEntry),
        setResourceApplicationDataEntry: promisify3(noteStore.setResourceApplicationDataEntry),
        unsetResourceApplicationDataEntry: promisify2(noteStore.unsetResourceApplicationDataEntry),
        updateResource: promisify1(noteStore.updateResource),
        getResourceData: promisify1(noteStore.getResourceData),
        getResourceByHash: promisify5(noteStore.getResourceByHash),
        getResourceRecognition: promisify1(noteStore.getResourceRecognition),
        getResourceAlternateData: promisify1(noteStore.getResourceAlternateData),
        getResourceAttributes: promisify1(noteStore.getResourceAttributes),
        getPublicNotebook: promisify2(noteStore.getPublicNotebook),
        createSharedNotebook: promisify1(noteStore.createSharedNotebook),
        updateSharedNotebook: promisify1(noteStore.updateSharedNotebook),
        setSharedNotebookRecipientSettings: promisify2(noteStore.setSharedNotebookRecipientSettings),
        sendMessageToSharedNotebookMembers: promisify3(noteStore.sendMessageToSharedNotebookMembers),
        listSharedNotebooks: promisify0(noteStore.listSharedNotebooks),
        expungeSharedNotebooks: promisify1(noteStore.expungeSharedNotebooks),
        createLinkedNotebook: promisify1(noteStore.createLinkedNotebook),
        updateLinkedNotebook: promisify1(noteStore.updateLinkedNotebook),
        listLinkedNotebooks: promisify0(noteStore.listLinkedNotebooks),
        expungeLinkedNotebook: promisify1(noteStore.expungeLinkedNotebook),
        authenticateToSharedNotebook: promisify1(noteStore.authenticateToSharedNotebook),
        getSharedNotebookByAuth: promisify0(noteStore.getSharedNotebookByAuth),
        emailNote: promisify1(noteStore.emailNote),
        shareNote: promisify1(noteStore.shareNote),
        stopSharingNote: promisify1(noteStore.stopSharingNote),
        authenticateToSharedNote: promisify2(noteStore.authenticateToSharedNote),
        findRelated: promisify2(noteStore.findRelated)
    };
}

/** The 'type' of the wrapped NoteStore object. */
export var _noteStore = promisifyNoteStore(<any>{});
export type NoteStore = typeof _noteStore;
