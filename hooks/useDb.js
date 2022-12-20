import { db, storage } from "../firebase";
import {
  onSnapshot,
  query,
  collection,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

export function getAllLanguages(getter) {
  const q = query(collection(db, "langs"));
  onSnapshot(q, (snap) => {
    const langs = snap?.docs?.map((d) => ({ id: d?.id, ...d?.data() }));
    getter?.(langs);
  });
}

export async function getDb(cols, id) {
  const d = await getDoc(doc(db, cols, id));
  return { id: d?.id, ...d?.data() };
}

export function listenCol(col, setter) {
  const q = query(collection(db, col));
  return onSnapshot(q, (snap) => {
    const docs_ = snap?.docs?.map((d) => ({ id: d?.id, ...d?.data() }));
    setter?.(docs_);
  });
}

export function listenColWhere(col, setter, ...options) {
  const q = query(collection(db, col), ...options);
  return onSnapshot(q, (snap) => {
    const docs_ = snap?.docs?.map((d) => ({ id: d?.id, ...d?.data() }));
    setter?.(docs_);
  });
}

export async function addDb(col, data) {
  const d = await addDoc(collection(db, col), {
    ...data,
    timestamp: serverTimestamp(),
  });
  return await getDb(col, d.id);
}

export async function updateDb(col, docId, data) {
  const d = doc(db, col, docId);
  return await updateDoc(d, data);
}

export async function removeDb(col, id) {
  return await deleteDoc(doc(db, col, id));
}

export async function addFile(path, name, file, caller) {
  if (!file) {
    return alert("no file ", { path, name, file });
  }
  const filePath = `files/${path}/${name}`;
  const fileRef = ref(storage, filePath);
  const uploadedFile = await uploadBytes(fileRef, file);
  const url = await getDownloadURL(uploadedFile?.ref);
  caller?.(url);
  return url;
}

export async function deleteFile(name, path = "diag", type = "img") {
  const path_ = `files/${path}/${name}/${type}`;
  const fileRef = ref(storage, path_);
  try {
    const x = await deleteObject(fileRef);
    console.log(x);
  } catch (error) {
    console.log("delete file error", { error, path_, fileRef });
  }
}

export async function updateFileDb(
  path,
  name,
  file,
  col,
  docId,
  propName = "img"
) {
  // console.log({ path, name, file, col, docId });
  if (file?.file) {
    const url = await addFile(path, name + "/" + propName, file?.file);
    await updateDb(col, docId, { [propName]: url });
  }
}
