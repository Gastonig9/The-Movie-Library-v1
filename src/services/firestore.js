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

export async function getDataMovieFb(){
  const getMoviesCollection = collection(db, "movies")
  const snapMovie = await getDocs(getMoviesCollection)
  const documents = snapMovie.docs
  
  const documentsData = documents.map(doc => {
    return {id: doc.id, ...doc.data()}
  })
  return documentsData;
}

export async function getDataMovieIndividualFb(idURL) {
  const docsCollection = doc(db, "movies", idURL)
  const docSnap = await getDoc(docsCollection)
  return {id: docSnap.id, ...docSnap.data()}
}

export async function getDataMovieCategoryFb(categoryid) {
  const getMoviesCollection = collection(db, "movies")
  const queryMovie = query(getMoviesCollection, where("category", "==", categoryid))
  const docSnap = await getDocs(queryMovie)
  const documents = docSnap.docs

  const documentsData = documents.map(doc=> {
    return {id: doc.id, ...doc.data()}
  })
  return documentsData;
}

export async function createOrder(order) {
  const orderCollection = collection(db, "orders")
  const addOrder = await addDoc(orderCollection, order)
  return { id: addOrder.id, ...order };
}


// export async function exportData() {
//     const movies = [
//         {
//           id: 1,
//           title: "The Shawshank Redemption",
//           price: 5,
//           description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
//           synopsis: "Andrew Dufresne is an innocent man who is accused of the murder of his wife. After being sentenced to life imprisonment, he is sent to Shawshank jail, in Maine. Over the years, Andrew will manage to earn the trust of the director of the center and the respect of the other convicts, especially Red, the boss of the mafia.",
//           premiere: 1994,
//           classification: "Classification PG",
//           category: "Drama",
//           director: "Frank Darabont",
//           scriptwriters: "Stephen King, Frank Daranbont",
//           rating: 9.3,
//           cast: "Tim Robbins, Morgan Freeman",
//           valoration: "⭐⭐⭐⭐⭐⭐⭐⭐⭐",
//           img: "https://i.ibb.co/nms3PT0/the-Shaw-Shank-Redemtion.jpg"
//         },
//         {
//           id: 2,
//           title: "The Godfather",
//           price: 5,
//           description: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
//           synopsis: "Don Vito Corleone is the respected and feared boss of one of the five mafia families in New York in the 40s. The man has four children: Connie, Sonny, Fredo and Michael, who wants nothing to do with Corleone's dirty business.",
//           premiere: 1972,
//           classification: "Classification R",
//           category: "Drama",
//           director: "Francis Ford Coppola",
//           scriptwriters: "Mario Puzo, Francis Ford Coppola",
//           rating: 9.2,
//           cast: "Marlon Brando, Al Pacino, James Caan",
//           valoration: "⭐⭐⭐⭐⭐⭐⭐⭐⭐",
//           img: "https://i.ibb.co/f2gmsF2/el-Padrino.jpg"
//         },
//         {
//           id: 3,
//           title: "The Dark Knight",
//           price: 12,
//           description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
//           synopsis: "With the help of Lieutenant Jim Gordon and District Attorney Harvey Dent, Batman keeps organized crime in Gotham at bay. Everything changes when the Joker appears, a new criminal who unleashes chaos and terrifies the citizens.",
//           premiere: 2008,
//           classification: "Classification PG",
//           category: "Action",
//           director: "Christopher Nolan",
//           scriptwriters: "Christopher Nolan, David S. Goyer",
//           rating: 9.0,
//           cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
//           valoration: "⭐⭐⭐⭐⭐⭐⭐⭐⭐",
//           img: "https://i.ibb.co/HC4L7Cy/the-Dark-Knight.jpg"
//         },
//         {
//           id: 4,
//           title: "The Lord of the Rings: The Fellowship of the Ring",
//           price: 9,
//           description: "A young hobbit named Frodo has been entrusted with ancient ring but he must travel to Mount Doom in order to destroy it.",
//           synopsis: "In Middle-earth, the Dark Lord Sauron forged the Great Rings of Power and created one with the power to enslave all of Middle-earth. Frodo Baggins is a hobbit who is made bearer of the powerful One Ring by his uncle Bilbo with the mission of destroying it.",
//           premiere: 2001,
//           classification: "Classification ATP",
//           category: "Adventure",
//           director: "Peter Jackson",
//           scriptwriters: "J.R.R. Tolkien(novel `The Fellowship of the Ring`), Fran Walsh",
//           rating: 8.8,
//           cast: "Elijah Wood, Ian McKellen, Viggo Mortensen, Orlando Bloom, Sean Astin",
//           valoration: "⭐⭐⭐⭐⭐⭐⭐⭐",
//           img: "https://i.ibb.co/MPtpJjX/el-Se-or-De-Los-Anillos.jpg"
//         },
//         {
//           id: 5,
//           title: "Forrest Gump",
//           price: 7,
//           description: "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
//           synopsis: "Sitting on a bench in Savannah, Georgia, Forrest Gump waits for the bus. While he takes time to arrive, the young man tells his life to the people who sit down to wait with him. Although he suffers from a slight mental retardation, this does not prevent him from doing wonderful things.",
//           premiere: 1994,
//           classification: "Classification ATP",
//           category: "Drama",
//           director: "Robert Zemeckis",
//           scriptwriters: "Winston Groom, Eric Roth",
//           rating: 8.8,
//           cast: "Tom Hanks, Robin Wright, Gary Sinise",
//           valoration: "⭐⭐⭐⭐⭐⭐⭐⭐",
//           img: "https://i.ibb.co/5Wx480x/forest-Gump.jpg"
//         },
//         {
//           id: 6,
//           title: "Pulp Fiction",
//           price: 15,
//           description: "The life of a boxer, two hitmen, a gangster's wife and two bandits intertwine in a story of violence and redemption.",
//           synopsis: "Pulp Fiction's narrative is told out of chronological order and follows three main interrelated stories that each have a different protagonist: Vincent Vega, a hitman; Butch Coolidge, a prizefighter; and Jules Winnfield, Vincent's business partner.[10]",
//           premiere: 1995,
//           classification: "Classification R",
//           category: "Action",
//           director: "Quentin Tarantino",
//           scriptwriters: "Quentin Tarantino, Roger Avary",
//           rating: 9.3,
//           cast: "John Travolta, Uma Thurman, Samuel L. Jackson, Harvey Keitel, Tim Roth",
//           valoration: "⭐⭐⭐⭐⭐⭐⭐⭐⭐",
//           img: "https://i.ibb.co/G7YN9dF/pulp-Fiction.jpg"
//         },
//         {
//           id: 7,
//           title: "The Silence of the Lambs",
//           price: 8,
//           description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
//           synopsis: "Clarice Starling is a young FBI trainee who is sent to interview Dr. Hannibal Lecter, a brilliant psychiatrist and cannibalistic serial killer, in order to gain insight into the mind of another serial killer named Buffalo Bill, who is skinning his female victims.",
//           premiere: 1991,
//           classification: "Classification R",
//           category: "Drama",
//           director: "Jonathan Demme",
//           scriptwriters: "Ted Tally, Thomas Harris",
//           rating: 8.6,
//           cast: "Jodie Foster, Anthony Hopkins, Scott Glenn",
//           valoration: "⭐⭐⭐⭐⭐⭐⭐",
//           img: "https://i.ibb.co/MVqWt1F/the-Lamb-Of-Silence.jpg"
//         },
//         {
//           id: 8,
//           title: "Fight Club",
//           price: 9,
//           description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
//           synopsis: "The narrator, a depressed and insomniac office worker, meets Tyler Durden, a charismatic soap salesman. Together, they form an underground fight club that quickly evolves into something much more sinister and anarchic.",
//           premiere: 1999,
//           classification: "Classification R",
//           category: "Action",
//           director: "David Fincher",
//           scriptwriters: "Chuck Palahniuk, Jim Uhls",
//           rating: 8.8,
//           cast: "Brad Pitt, Edward Norton, Helena Bonham Carter",
//           valoration: "⭐⭐⭐⭐⭐⭐⭐⭐",
//           img: "https://i.ibb.co/6YfhtRQ/the-Fight-Club.jpg"
//         },
//         {
//           id: 9,
//           price: 10,
//           title: "Shutter Island",
//           description: "Two U.S. Marshals investigate the disappearance of a patient from a hospital for the criminally insane, but their search leads them to a mysterious island where they uncover a web of deception and violence.",
//           synopsis: "In 1954, U.S. Marshals Teddy Daniels and Chuck Aule investigate the disappearance of a patient from a hospital for the criminally insane on Shutter Island. Teddy is haunted by the death of his wife Dolores Chanal, who was killed in a fire set by Andrew Laeddis, a man Teddy believes is currently a patient at Ashecliffe Hospital. As Teddy and Chuck search the island, they encounter increasingly intense resistance from the hospital staff and Teddy becomes convinced that the staff are hiding something from them.",
//           premiere: 2010,
//           classification: "Classification PG",
//           category: "Thriller",
//           director: "Martin Scorsese",
//           scriptwriters: "Laeta Kalogridis",
//           rating: 8.2,
//           cast: "Leonardo DiCaprio, Mark Ruffalo, Ben Kingsley, Max von Sydow, Michelle Williams",
//           valoration: "⭐⭐⭐⭐⭐⭐⭐⭐",
//           img: "https://i.ibb.co/g49dF5r/shutter-Island.jpg"
//         },
//         {
//           id: 10,
//           price: 10,
//           title: "Titanic",
//           description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
//           synopsis: "The story is set on the maiden voyage of the R.M.S. Titanic in April 1912, and follows the love story of Rose DeWitt Bukater, a wealthy 17-year-old passenger, and Jack Dawson, a poor artist who won a ticket to the ship in a card game.",
//           premiere: 1997,
//           classification: "Classification ATP",
//           category: "Drama",
//           director: "James Cameron",
//           scriptwriters: "James Cameron",
//           rating: 7.8,
//           cast: "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates, Frances Fisher",
//           valoration: "⭐⭐⭐⭐⭐⭐⭐",
//           img: "https://i.ibb.co/5vx4gZ0/titanic.jpg"
//         },
//         {
//           id: 11,
//           price: 6,
//           title: "Seven",
//           description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
//           synopsis: "Detective William Somerset, a veteran of the police department, is about to retire. He is paired with a young detective, David Mills, who has just moved to the city with his wife Tracy. The two are tasked with tracking down a serial killer who uses the seven deadly sins as his motives.",
//           premiere: 1995,
//           classification: "Classification R",
//           category: "Thriller",
//           director: "David Fincher",
//           scriptwriters: "Andrew Kevin Walker",
//           rating: 8.6,
//           cast: "Morgan Freeman, Brad Pitt, Kevin Spacey, Gwyneth Paltrow",
//           valoration: "⭐⭐⭐⭐⭐",
//           img: "https://i.ibb.co/TWS43Jv/seven.jpg"
//         },
//         {
//           id: 12,
//           title: "Shrek",
//           price: 6,
//           description: "After his swamp is filled with magical creatures, an ogre agrees to rescue a princess for a villainous lord in order to get his land back.",
//           synopsis: "Shrek, a reclusive ogre living in a swamp, finds his peaceful existence disrupted when his swamp is suddenly invaded by a group of fairy tale creatures who have been banished from their kingdom by the evil Lord Farquaad. To get his swamp back, Shrek agrees to rescue a princess for Farquaad.",
//           premiere: 2001,
//           classification: "Classification ATP",
//           category: "Adventure",
//           director: "Andrew Adamson, Vicky Jenson",
//           scriptwriters: "Ted Elliott, Terry Rossio, Joe Stillman, Roger S.H. Schulman",
//           rating: 7.9,
//           cast: "Mike Myers, Eddie Murphy, Cameron Diaz, John Lithgow",
//           valoration: "⭐⭐⭐⭐",
//           img: "https://i.ibb.co/GTFyRmC/shrek.jpg"
//         },
//         {
//           id: 13,
//           title: "Split",
//           price: 4,
//           description: "Three girls are kidnapped by a man with a diagnosed 23 distinct personalities. They must try to escape before the apparent emergence of a frightful new 24th.",
//           synopsis: "Three teenage girls are kidnapped by Kevin Wendell Crumb, a man with 23 distinct personalities. They must try to escape before the emergence of a terrifying new 24th personality known as 'The Beast'.",
//           premiere: 2016,
//           classification: "Classification PG",
//           category: "Thriller",
//           director: "M. Night Shyamalan",
//           scriptwriters: "M. Night Shyamalan",
//           rating: 7.3,
//           cast: "James McAvoy, Anya Taylor-Joy, Betty Buckley",
//           valoration: "⭐⭐⭐⭐",
//           img: "https://i.ibb.co/16x7fRJ/split.jpg"
//         },
//         {
//           id: 14,
//           title: "Jurassic Park",
//           price: 12,
//           description: "A wealthy entrepreneur invites a group of scientists to his theme park, which is populated by dinosaurs cloned from prehistoric DNA.",
//           synopsis: "John Hammond, the CEO of bioengineering company InGen, creates a theme park with genetically recreated dinosaurs. A team of experts, including Dr. Alan Grant and Dr. Ellie Sattler, are invited to visit the park, but their visit is interrupted when the park's security system fails and the dinosaurs escape their enclosures.",
//           premiere: 1993,
//           classification: "Classification ATP",
//           category: "Adventure",
//           director: "Steven Spielberg",
//           scriptwriters: "Michael Crichton, David Koepp",
//           rating: 8.1,
//           cast: "Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough",
//           valoration: "⭐⭐⭐⭐⭐⭐⭐",
//           img: "https://i.ibb.co/0Dw6QSR/jurassic-Park.jpg"
//         },
//         {
//           id: 15,
//           title: "Inception",
//           price: 9,
//           description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
//           synopsis: "Dominick Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now he is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible - inception.",
//           premiere: 2010,
//           classification: "Classification ATP",
//           category: "Thriller",
//           director: "Christopher Nolan",
//           scriptwriters: "Christopher Nolan",
//           rating: 8.8,
//           cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy, Ken Watanabe",
//           valoration: "⭐⭐⭐⭐⭐⭐⭐⭐",
//           img: "https://i.ibb.co/4twZBy0/inception.jpg"
//         },
//         {
//           id: 16,
//           title: "Indiana Jones and the Raiders of the Lost Ark",
//           price: 8,
//           description: "Archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis.",
//           synopsis: "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers.",
//           premiere: 1981,
//           classification: "Classification ATP",
//           category: "Adventure",
//           director: "Steven Spielberg",
//           scriptwriters: "George Lucas, Philip Kaufman",
//           rating: 8.4,
//           cast: "Harrison Ford, Karen Allen, Paul Freeman, Ronald Lacey, John Rhys-Davies",
//           valoration: "⭐⭐⭐⭐⭐",
//           img: "https://i.ibb.co/Rv7GpMs/indiana-Jones.jpg"
//         },
//         {
//           id: 17,
//           title: "Die Hard",
//           price: 5,
//           description: "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
//           synopsis: "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
//           premiere: 1988,
//           classification: "Classification PG",
//           category: "Action",
//           director: "John McTiernan",
//           scriptwriters: "Jeb Stuart, Steven E. de Souza",
//           rating: 8.2,
//           cast: "Bruce Willis, Alan Rickman, Bonnie Bedelia, Reginald VelJohnson, Paul Gleason",
//           valoration: "⭐⭐⭐⭐⭐⭐⭐⭐",
//           img: "https://i.ibb.co/3yd1r02/dieHard.jpg"
//         },
//         {
//           id: 18,
//           title: "Kill Bill",
//           price: 7,
//           description: "The Bride, a former member of an assassination team, seeks revenge against her ex-squad members who betrayed her and tried to kill her on her wedding day.",
//           synopsis: "The Bride awakens from a coma after a four-year pregnancy and seeks revenge against her former assassination team members who betrayed her on her wedding day and left her for dead. She goes on a killing spree, determined to take down each member of the squad and their leader, Bill.",
//           premiere: 2003,
//           classification: "Classification R",
//           category: "Action",
//           director: "Quentin Tarantino",
//           scriptwriters: "Quentin Tarantino",
//           rating: 8.1,
//           cast: "Uma Thurman, Lucy Liu, Vivica A. Fox, Daryl Hannah, David Carradine",
//           valoration: "⭐⭐⭐⭐⭐",
//           img: "https://i.ibb.co/tsH7M8Y/killBill.jpg"
//         }
//     ]

//     const collectionRef = collection(db, "movies")

//     for (const item of movies) {
//         item.index = item.id
//         delete item.id
//         const response = await addDoc(collectionRef, item)
//         console.log("movie export with ID: " + response.id);
//     }
// }