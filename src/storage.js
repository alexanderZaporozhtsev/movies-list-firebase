import { initializeApp } from "firebase/app";
import {
  getDocs,
  getFirestore,
  collection,
  query,
  orderBy,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxVGf6V3kpD0bpAIXp3DfE5O563L4W0S8",
  authDomain: "movies-list-3b069.firebaseapp.com",
  projectId: "movies-list-3b069",
  storageBucket: "movies-list-3b069.appspot.com",
  messagingSenderId: "932075410972",
  appId: "1:932075410972:web:86c0d28be9fd3040c3f1d9",
};

export function createMoviesStorage(key) {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  return {
    key,
    db,

    read: async function () {
      const ref = collection(this.db, this.key);
      const q = query(ref, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);

      const moviesList = [];

      querySnapshot.forEach((doc) => {
        moviesList.push({
          id: doc.id,
          title: doc.data().title,
          done: doc.date().done,
        });
      });

      return moviesList;
    },
  };
}
