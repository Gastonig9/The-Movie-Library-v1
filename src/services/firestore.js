import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAwkpWp4MBq-kZP5SOG1NY-b0dWzcwGwrs",
  authDomain: "movie-app-4e44d.firebaseapp.com",
  projectId: "movie-app-4e44d",
  storageBucket: "movie-app-4e44d.appspot.com",
  messagingSenderId: "1000952565848",
  appId: "1:1000952565848:web:5d83b973b2ccaa75527a2d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function getDataMovieFb() {
  const getMoviesCollection = collection(db, "movies")
  const snapMovie = await getDocs(getMoviesCollection)
  const documents = snapMovie.docs

  const documentsData = documents.map(doc => {
    return { id: doc.id, ...doc.data() }
  })
  return documentsData;
}

export async function getDataMovieIndividualFb(idURL) {
  const docsCollection = doc(db, "movies", idURL)
  const docSnap = await getDoc(docsCollection)
  return { id: docSnap.id, ...docSnap.data() }
}

export async function getDataMovieCategoryFb(categoryid) {
  const getMoviesCollection = collection(db, "movies")
  const queryMovie = query(getMoviesCollection, where("category", "==", categoryid))
  const docSnap = await getDocs(queryMovie)
  const documents = docSnap.docs

  const documentsData = documents.map(doc => {
    return { id: doc.id, ...doc.data() }
  })
  return documentsData;
}

export async function searchMovieIndividual(titleMovie) {
  const getMoviesCollection = collection(db, "movies")
  const queryMovie = query(getMoviesCollection, where("title", "==", titleMovie))
  const docSnap = await getDocs(queryMovie)
  const documents = docSnap.docs

  const documentsData = documents.map(doc => {
    return { id: doc.id, ...doc.data() }
  })
  return documentsData;
}

export async function createOrder(order) {
  const orderCollection = collection(db, "orders")
  const addOrder = await addDoc(orderCollection, order)
  return { id: addOrder.id, ...order };
}

export async function createComment(comment) {
  const commentCollection = collection(db, "comments")
  const addComment = await addDoc(commentCollection, comment)
  return addComment;
}

export async function getComment(commentId) {
  const getCommentCollection = collection(db, "comments")
  const queryComment = query(getCommentCollection, where("movieId", "==", commentId))
  const docSnap = await getDocs(queryComment)
  const documents = docSnap.docs

  const documentsData = documents.map(doc => {
    return { id: doc.id, ...doc.data() }
  })
  return documentsData;
}


// export async function exportData() {
//   const movies = [
//     {
//       id: 23,
//       title: "A Clockwork Orange",
//       price: 5,
//       description: "In a dystopian future, a violent young man is subjected to an experimental treatment designed to cure him of his antisocial tendencies.",
//       synopsis: "Alex is a young man with a penchant for violence, who leads a gang of thugs through the streets of a dystopian London. After being arrested for murder, he volunteers for an experimental program that is supposed to cure him of his violent tendencies.",
//       premiere: 1971,
//       classification: "Classification R",
//       category: "Drama",
//       director: "Stanley Kubrick",
//       scriptwriters: "Stanley Kubrick",
//       rating: 8.3,
//       cast: "Malcolm McDowell, Patrick Magee, Michael Bates",
//       valoration: "⭐⭐⭐⭐⭐⭐⭐⭐",
//       img: "https://i.ibb.co/1mnKTBv/50-anos-de-la-naranja-mecanica-la-naranja-mecanica-2.jpg",
//     },
//     {
//       id: 24,
//       title: "Good Will Hunting",
//       price: 4.50,
//       description: "A janitor at MIT has a gift for mathematics and solves a difficult problem, attracting the attention of a renowned professor who tries to help him come to terms with his troubled past.",
//       synopsis: "Will Hunting is a janitor at MIT who is secretly a mathematical genius. When he solves a difficult math problem, he attracts the attention of a renowned professor who tries to help him come to terms with his troubled past.",
//       premiere: 1997,
//       classification: "Classification R",
//       category: "Drama",
//       director: "Gus Van Sant",
//       scriptwriters: "Matt Damon, Ben Affleck",
//       rating: 8.3,
//       cast: "Matt Damon, Robin Williams, Ben Affleck",
//       valoration: "⭐⭐⭐⭐⭐⭐⭐",
//       img: "https://i.ibb.co/Qd60Hdy/El-indomable-Will-Hunting-336513212-large.jpg"
//     },
//     {
//       id: 25,
//       title: "The Truman Show",
//       price: 5.50,
//       description: "An insurance salesman discovers his entire life is actually a television show.",
//       synopsis: "Truman Burbank is an ordinary man who discovers that his entire life has been a television show. As he begins to unravel the truth about his existence, he must decide whether to continue living in the fabricated world he knows, or to venture out into the unknown.",
//       premiere: 1998,
//       classification: "Classification PG",
//       category: "Drama",
//       director: "Peter Weir",
//       scriptwriters: "Andrew Niccol",
//       rating: 8.1,
//       cast: "Jim Carrey, Laura Linney, Ed Harris",
//       valoration: "⭐⭐⭐⭐⭐⭐⭐⭐",
//       img: "https://i.ibb.co/7N80650/the-Truman-Show.jpg"
//     },
//     {
//       id: 26,
//       title: "Amélie",
//       price: 4.5,
//       description: "A whimsical and charming story about a shy waitress who decides to change the lives of those around her for the better.",
//       synopsis: "Amélie Poulain is a young and imaginative waitress in a café in Montmartre, Paris. After discovering a hidden box of toys in her apartment, she decides to return them to their owner and sets out on a quest to help other people in need. Along the way, she falls in love and learns valuable lessons about life and love.",
//       premiere: 2001,
//       classification: "Classification R",
//       category: "Drama",
//       director: "Jean-Pierre Jeunet",
//       scriptwriters: "Jean-Pierre Jeunet, Guillaume Laurant",
//       rating: 8.3,
//       cast: "Audrey Tautou, Mathieu Kassovitz",
//       valoration: "⭐⭐⭐⭐⭐⭐⭐⭐",
//       img: "https://i.ibb.co/JRBRpwN/amelie.png"
//     },
//     {
//       id: 27,
//       title: "Citizen Kane",
//       price: 5.5,
//       description: "A classic and influential film about the life of a wealthy newspaper magnate, exploring themes of power, corruption, and the American Dream.",
//       synopsis: "After the death of Charles Foster Kane, a wealthy and influential newspaper tycoon, a reporter is assigned to investigate his life and legacy. Through a series of flashbacks and interviews with those who knew him, the reporter discovers the complex and often tragic story of Kane's rise to power and ultimate downfall.",
//       premiere: 1941,
//       classification: "Classification PG",
//       category: "Drama",
//       director: "Orson Welles",
//       scriptwriters: "Orson Welles, Herman J. Mankiewicz",
//       rating: 8.3,
//       cast: "Orson Welles, Joseph Cotten",
//       valoration: "⭐⭐⭐⭐⭐⭐⭐⭐",
//       img: "https://i.ibb.co/82MHWk7/citizen-Kane.jpg"
//     }, 
//     {
//       id: 28,
//       title: "Reservoir Dogs",
//       price: 7,
//       description: "A group of thieves assemble to pull off the perfect diamond heist, but when things go awry, allegiances are questioned and chaos ensues.",
//       synopsis: "Six criminals, who are strangers to each other, are hired by a crime boss named Joe Cabot to carry out a diamond robbery. Right at the outset, they are given false names with the intention that they won't get too close and will concentrate on the job instead. The heist is successful, but when the police show up right at the rendezvous spot, the group begins to suspect that one of their own is an undercover cop.",
//       premiere: 1992,
//       classification: "R",
//       category: "Action",
//       director: "Quentin Tarantino",
//       scriptwriters: "Quentin Tarantino, Roger Avary",
//       rating: 8.3,
//       cast: "Harvey Keitel, Tim Roth, Michael Madsen, Chris Penn, Steve Buscemi, Lawrence Tierney",
//       valoration: "⭐⭐⭐⭐⭐⭐⭐",
//       img: "https://i.ibb.co/k19CdTs/reseivor-Dogs.jpg"
//     }


//   ]

//   const collectionRef = collection(db, "movies")

//   for (const item of movies) {
//     item.index = item.id
//     delete item.id
//     const response = await addDoc(collectionRef, item)
//     console.log("movie export with ID: " + response.id);
//   }
// }

