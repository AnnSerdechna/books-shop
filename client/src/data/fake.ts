interface BookProps {
  title: string
  author: string
  about: string
  imageUrl: string
  previewLink: string
  published: string
  publisher: string
  pageCount: number
  language: string
  nominations?: string
  genres: string
  price: number
};

interface AuthorProps {
  name: string
  photoUrl: string
  bio: string
  profession: string
  wikiLink: string
};

interface ReviewProps {
  book?: string
  review: string
  source: string
};

const author = {
  "name": "",
  "photoUrl": "",
  "bio": "",
  "profession": "",
  "wikiLink": ""
}

const book = {
  "title": "",
  "author": "",
  "about": "",
  "imageUrl": "",
  "previewLink": "",
  "published": "",
  "publisher": "",
  "pageCount": 0,
  "language": "",
  "nominations": "",
  "genres": "",
}

const authors: AuthorProps[] = [
  {
    "name": "David Mitchell",
    "photoUrl": "https://res.cloudinary.com/duoohoaqi/image/upload/v1730997661/David_Mitchell_by_Kubik_fmlkzl.jpg",
    "bio": "David Mitchell is the author of the novels Ghostwritten, number9dream, Cloud Atlas, Black Swan Green, The Thousand Autumns of Jacob de Zoet, The Bone Clocks, Slade House and Utopia Avenue. He has been shortlisted twice for the Booker Prize, won the John Llewellyn Rhys, Geoffrey Faber Memorial and South Bank Show Literature Prizes among others, and been named a Granta Best Young British Novelist. In 2018, he won the Sunday Times Award for Literary Excellence, given in recognition of a writer's entire body of work. In addition, David Mitchell together with KA Yoshida has translated from Japanese two books by Naoki Higashida - The Reason I Jump: One Boy's Voice from the Silence of Autism and Fall Down Seven Times, Get Up Eight: A Young Man's Voice from the Silence of Autism. He lives with in Ireland with his family.",
    "profession": "Novelist and television writer",
    "wikiLink": "https://en.wikipedia.org/wiki/David_Mitchell_(author)"
  },
  {
    "name": "John Irving",
    "photoUrl": "https://res.cloudinary.com/duoohoaqi/image/upload/v1730997675/John_Irving_at_Cologne_2010__7108_qkl51l.jpg",
    "bio": "ohn Irving published his first novel, Setting Free the Bears, in 1968. He has been nominated for a National Book Award three times - winning once, in 1980, for the novel The World According to Garp. He also received an O. Henry Award in 1981 for the short story 'Interior Space'. In 1992, he was inducted into the National Wrestling Hall of Fame in Stillwater, Oklahoma. In 2000, he won the Oscar for Best Adapted Screenplay for The Cider House Rules - a film with seven Academy Award nominations. In 2001, he was elected to the American Academy of Arts and Letters. His most recent novel is Last Night in Twisted River.",
    "profession": "American novelist and short story writer",
    "wikiLink": "https://en.wikipedia.org/wiki/John_Irving"
  },
  {
    "name": "Peter Watts",
    "photoUrl": "https://res.cloudinary.com/duoohoaqi/image/upload/v1730997689/Peter_Watts_fulbeskuren_fcv5os.png",
    "bio": "Peter Watts is a former marine biologist, flesh-eating-disease survivor and convicted felon whose novels—despite an unhealthy focus on space vampires—have become required texts for university courses ranging from Philosophy to Neuropsychology. His work is available in 21 languages, has appeared in over 350 best-of-year anthologies, and been nominated for over 50 awards in a dozen countries. His (somewhat shorter) list of 20 actual wins includes the Hugo, the Shirley Jackson, and the Seiun. Peter is the author of the Rifters novels (Starfish, Maelstrom) and the Firefall series (Blindsight, Echopraxia).",
    "profession": "Peter Watts",
    "wikiLink": "https://en.wikipedia.org/wiki/Peter_Watts_(author)"
  },
  {
    "name": "Kurt Vonnegut",
    "photoUrl": "https://res.cloudinary.com/duoohoaqi/image/upload/v1730998841/Kurt_Vonnegut_by_Bernard_Gotfryd__1965_xhqdep.jpg",
    "bio": "Kurt Vonnegut ’s humor, satiric voice, and incomparable imagination first captured America’s attention in The Sirens of Titan in 1959 and established him as “a true artist” (The New York Times) with Cat’s Cradle in 1963. He was, as Graham Greene declared, “one of the best living American writers.” Mr. Vonnegut passed away in April 2007.",
    "profession": "American author",
    "wikiLink": "https://en.wikipedia.org/wiki/Kurt_Vonnegut"
  },
  {
    "name": "Douglas Adams",
    "photoUrl": "https://res.cloudinary.com/duoohoaqi/image/upload/v1730999209/Douglas_adams_portrait_cropped_hgmnii.jpg",
    "bio": "Douglas Noel Adams was an English author, humourist, and screenwriter, best known as the creator of The Hitchhiker's Guide to the Galaxy. Originally a 1978 BBC radio comedy, The Hitchhiker's Guide to the Galaxy developed into a 'trilogy' of five books which sold more than 15 million copies in his lifetime.",
    "profession": "English author",
    "wikiLink": "https://en.wikipedia.org/wiki/Douglas_Adams"
  },
  {
    "name": "Stephen King",
    "photoUrl": "https://res.cloudinary.com/duoohoaqi/image/upload/v1730999579/Stephen_King_at_the_2024_Toronto_International_Film_Festival_2__cropped_jiaykl.jpg",
    "bio": "Stephen King is the author of more than sixty books, all of them worldwide bestsellers. His recent work includes the short story collection You Like It Darker, Holly (a New York Times Notable Book of 2023), Fairy Tale, Billy Summers, If It Bleeds, The Institute, Elevation, The Outsider, Sleeping Beauties (cowritten with his son Owen King), and the Bill Hodges trilogy: End of Watch, Finders Keepers, and Mr. Mercedes (an Edgar Award winner for Best Novel and a television series streaming on Peacock). His novel 11/22/63 was named a top ten book of 2011 by The New York Times Book Review and won the Los Angeles Times Book Prize for Mystery/Thriller. His epic works The Dark Tower, It, Pet Sematary, Doctor Sleep, and Firestarter are the basis for major motion pictures, with It now the highest-gro… ",
    "profession": "American author",
    "wikiLink": "https://en.wikipedia.org/wiki/Stephen_King"
  },
  {
    "name": "Oleksiy Dekan",
    "photoUrl": "https://res.cloudinary.com/duoohoaqi/image/upload/v1731000358/560px-Dekan_Aleksey_nfofvz.jpg",
    "bio": "Oleksiy Dekan is a Ukrainian science fiction author.He has published more than 15 books as well as several collections of short stories. Currently, he is working in several literary genres, including thriller, mystery, science fiction, fantasy, detective, and poetry. He also writes and illustrates children’s books.In addition, Oleksiy is a professional designer, translator, screenwriter, and musician.He has several prestigious awards in the fields of literature and graphic design.",
    "profession": "Journalist",
    "wikiLink": "https://en.wikipedia.org/wiki/Oleksiy_Dekan"
  }
]

const books: BookProps[] = [
  {
    "title": "Slade House",
    "author": "672cfa912d376a30f6f44030",
    "imageUrl": "https://res.cloudinary.com/duoohoaqi/image/upload/v1730977849/slade-house_pi8ngv.jpg",
    "previewLink": "https://www.google.com.ua/books/edition/Slade_House/BOq5BwAAQBAJ?hl=en&gbpv=1",
    "about": "The chilling seventh novel from the critically acclaimed author of Cloud Atlas and Utopia Avenue. Turn down Slade Alley - narrow, dank and easy to miss, even when you're looking for it. Find the small black iron door set into the right-hand wall. No handle, no keyhole, but at your touch it swings open. Enter the sunlit garden of an old house that doesn't quite make sense; too grand for the shabby neighbourhood, too large for the space it occupies. \nA stranger gre... \nThis unnerving, taut and intricately woven tale by one of our most original and bewitching writers begins in 1979 and comes to its turbulent conclusion around Hallowe'en, 2015. Because every nine years, on the last Saturday of October, a 'guest' is summoned to Slade House. But why has that person been chosen, by whom and for what purpose? The answers lie waiting in the long attic, at the top of the stairs . . .",
    "published": "October 27, 2015",
    "publisher": "Hodder & Stoughton",
    "pageCount": 240,
    "price": 12,
    "language": "English",
    "nominations": "Goodreads Choice Awards Best Horror",
    "genres": "Novel, Horror fiction, Mystery, Thriller, Fantasy Fiction, Drama, Suspense"
  }, 
  {
    "title": "The Thousand Autumns of Jacob de Zoet",
    "author": "672cfa912d376a30f6f44030",
    "imageUrl": "https://res.cloudinary.com/duoohoaqi/image/upload/v1730979021/The_Thousand_Autumns_of_Jacob_de_Zoet__cover_ruuhuy.jpg",
    "previewLink": "https://www.google.com.ua/books/edition/The_Thousand_Autumns_of_Jacob_de_Zoet/vQ9akeahkCgC?hl=en&gbpv=1&dq=The+Thousand+Autumns+of+Jacob+de+Zoet&printsec=frontcover",
    "about": "The Sunday Times Number One bestseller from the author of Cloud Atlas and Utopia Avenue In your hands is a place like no other: a tiny, man- made island in the bay of Nagasaki, for two hundred years the sole gateway between Japan and the West.Here, in the dying days of the eighteenth century, a young Dutch clerk arrives to make his fortune.Instead he loses his heart. \nStep onto the streets of Dejima and mingle with scheming traders, spies, interpreters, servants and concubines as two cultures converge. In a tale of integrity and corruption, passion and power, the key is control - of riches and minds, and over death itself.",
    "published": "May 13, 2010",
    "publisher": "Hodder & Stoughton",
    "pageCount": 300,
    "price": 26,
    "language": "English",
    "nominations": "Goodreads Choice Awards Best Fiction, Goodreads Choice Awards Favorite Book",
    "genres": "Novel, Historical Fiction, Drama"
  },
  {
    "title": "Until I Find You",
    "author": "672cfa912d376a30f6f44031",
    "imageUrl": "https://res.cloudinary.com/duoohoaqi/image/upload/v1730978921/irving_rnwhib.jpg",
    "previewLink": "https://www.google.com.ua/books/edition/Until_I_Find_You/tH1FlcpBzLkC?hl=en&gbpv=1",
    "about": "'According to his mother, Jack Burns was an actor before he was an actor, but Jack's most vivid memories of childhood were those moments when he felt compelled to hold his mother's hand. He wasn't acting then.' \nJack Burns' mother, Alice, is a tattoo artist in search of the boy's father, a virtuoso organist named William who has fled America to Europe. To fund her journey, she plies her trade in the seaports of the Baltic coast. But her four-year-old son's errant father can't be found, and soon even Jack's memories of that perplexing time are called into question. It is only when he becomes a Hollywood actor in later life that what he has experienced in the past comes into telling play in his present......",
    "published": "May 10, 2012",
    "publisher": "Transworld",
    "pageCount": 960,
    "price": 22,
    "language": "English",
    "genres": "Psychological Fiction, Domestic Fiction"
  },
  {
    "title": "Echopraxia",
    "author": "672cfa912d376a30f6f44032",
    "about": "Prepare for a different kind of singularity in Peter Watts' Echopraxia, the follow-up to the Hugo-nominated novel Blindsight. \nIt's the eve of the twenty-second century: a world where the dearly departed send postcards back from Heaven and evangelicals make scientific breakthroughs by speaking in tongues; where genetically engineered vampires solve problems intractable to baseline humans and soldiers come with zombie switches that shut off self-awareness during combat. And it's all under surveillance by an alien presence that refuses to show itself. \nDaniel Bruks is a living fossil: a field biologist in a world where biology has turned computational, a cat's-paw used by terrorists to kill thousands. Taking refuge in the Oregon desert, he's turned his back on a humanity that shatters into strange new subspecies with every heartbeat. But he awakens one night to find himself at the center of a storm that will turn all of history inside-out. \nNow he's trapped on a ship bound for the center of the solar system. To his left is a grief-stricken soldier, obsessed by whispered messages from a dead son. To his right is a pilot who hasn't yet found the man she's sworn to kill on sight. A vampire and its entourage of zombie bodyguards lurk in the shadows behind. And dead ahead, a handful of rapture-stricken monks takes them all to a meeting with something they will only call 'The Angels of the Asteroids.'",
    "imageUrl": "https://res.cloudinary.com/duoohoaqi/image/upload/v1730997542/Echopraxia__book_cover_yql48a.jpg",
    "previewLink": "https://www.google.com.ua/books/edition/Echopraxia/fOluAwAAQBAJ?hl=en&gbpv=1&dq=inauthor:%22Peter+Watts%22&printsec=frontcover",
    "published": "August 26, 2014",
    "publisher": "Tor Publishing Group",
    "pageCount": 384,
    "price": 20,
    "language": "English",
    "genres": "Science fiction, Novel"
  },
  {
    "title": "Blindsight",
    "author": "672cfa912d376a30f6f44032",
    "about": "Two months since the stars fell...Two months since sixty- five thousand alien objects clenched around the Earth like a luminous fist, screaming to the heavens as the atmosphere burned them to ash.Two months since that moment of brief, bright surveillance by agents unknown. \nTwo months of silence, while a world holds its breath. \nNow some half - derelict space probe, sparking fitfully past Neptune's orbit, hears a whisper from the edge of the solar system: a faint signal sweeping the cosmos like a lighthouse beam. Whatever's out there isn't talking to us. It's talking to some distant star, perhaps.Or perhaps to something closer, something en route. \nSo who do you send to force introductions on an intelligence with motives unknown, maybe unknowable ? Who do yo...",
    "imageUrl": "https://res.cloudinary.com/duoohoaqi/image/upload/v1730998674/Blindsight__book_cover_xfvfl6.jpg",
    "previewLink": "https://www.google.com.ua/books/edition/Blindsight/FVMzz-xINLsC?hl=en&gbpv=1&dq=blindsight:%22Peter+Watts%22&printsec=frontcover",
    "published": "October 3, 2006",
    "publisher": "Tor Publishing Group",
    "pageCount": 384,
    "price": 21,
    "language": "English",
    "nominations": "Hugo Award for Best Novel, Locus Award for Best Science Fiction Novel",
    "genres": "Science fiction, Novel, Hard science fiction, Space opera"
  },
  {
    "title": "Cat's Cradle",
    "author": "672cfa912d376a30f6f44033",
    "about": "Cat’s Cradle is Kurt Vonnegut’s satirical commentary on modern man and his madness. An apocalyptic tale of this planet’s ultimate fate, it features a midget as the protagonist, a complete, original theology created by a calypso singer, and a vision of the future that is at once blackly fatalistic and hilariously funny. A book that left an indelible mark on an entire generation of readers, Cat’s Cradle is one of the twentieth century’s most important works—and Vonnegut at his very best.",
    "imageUrl": "https://res.cloudinary.com/duoohoaqi/image/upload/v1730998634/cat_s_cradle_rui9aj.webp",
    "previewLink": "https://www.google.com.ua/books/edition/Cat_s_Cradle/w25sx0G6nRsC?hl=en&gbpv=1&dq=kurt+vonnegut&printsec=frontcover",
    "published": "November 4, 2009",
    "publisher": "Random House Publishing Group",
    "pageCount": 304,
    "price": 18,
    "language": "English",
    "nominations": "Hugo Award for Best Novel",
    "genres": "Novel, Science fiction, Satire, Humor"
  },
  {
    "title": "The Hitchhiker's Guide to the Galaxy",
    "author": "672cfa912d376a30f6f44034",
    "about": "Thirty years of celebrating the comic genius of Douglas Adams... On 12 October 1979 the most remarkable book ever to come out of the great publishing corporations of Ursa Minor (and Earth) was made available to humanity – The Hitchhiker’s Guide to the Galaxy. It’s an ordinary Thursday lunchtime for Arthur Dent until his house gets demolished. The Earth follows shortly afterwards to make way for a new hyperspace bypass and his best friend has just announced that he’s an alien. At this moment, they’re hurtling through space with nothing but their towels and an innocuous-looking book inscribed with the big, friendly words: DON’T PANIC. The weekend has only just begun... Volume one in the trilogy of five",
    "imageUrl": "https://res.cloudinary.com/duoohoaqi/image/upload/v1730999103/81nqplsq6ll_1_yjjbou.jpg",
    "previewLink": "https://www.google.com.ua/books/edition/The_Hitchhiker_s_Guide_to_the_Galaxy/DmUr6q1EDYMC?hl=en&gbpv=1&dq=the+hitchhikers+guide+to+the+galaxy&printsec=frontcover",
    "published": "October 12, 1979",
    "publisher": "Pan Macmillan",
    "pageCount": 936,
    "price": 24,
    "language": "English",
    "genres": "Science fiction, Novel, Humor, Science fiction comedy, Humorous Fiction"
  },
  {
    "title": "Fairy Tale",
    "author": "672cfa912d376a30f6f44035",
    "about": "Master storyteller Stephen King goes into the deepest well of his imagination in this #1 New York Times bestselling and spellbinding novel about a young man who inherits the keys to a parallel world where good and evil are at war, and the stakes could not be higher—for that world or ours. \nCharlie Reade looks like a regular high school kid, great at baseball and football, a decent student. But he carries a heavy load. His mom was killed in a horrific accident when he was seven, and grief drove his dad to drink. Charlie learned how to take care of himself—and his dad. When Charlie is seventeen, he meets a dog named Radar and her aging master, Howard Bowditch, a recluse in a big house at the top of a big hill, with a locked shed in the backyard. Sometimes strange sounds emerge from...",
    "imageUrl": "https://res.cloudinary.com/duoohoaqi/image/upload/v1730999555/Fairy_Tale__Stephen_King_ahb8vq.png",
    "previewLink": "https://www.google.com.ua/books/edition/Fairy_Tale/kOEKEQAAQBAJ?hl=en&gbpv=1&dq=Stephen+King&printsec=frontcover",
    "published": "June 25, 2024",
    "publisher": "Pocket Books",
    "pageCount": 800,
    "price": 25,
    "language": "English",
    "nominations": "Goodreads Choice Awards Best Fantasy, Audie Award for Best Male Narrator",
    "genres": "Fantasy Fiction, Thriller, Dark fantasy, Suspense, Paranormal fiction"
  },
  {
    "title": "Kaydash Family vs Zombies",
    "author": "672cfa912d376a30f6f44036",
    "about": "Oleksiy Dekan's novel “Kaydash Family vs Zombies” is a real mystery, seasoned with true horror and generously infused with Ukrainian history. This is a story about love, struggle and sacrifice, a tale that I hope you will enjoy. \nThe original “Kaydash Family” is a domestic story by the Ukrainian writer Ivan Semenovych Nechuy-Levytsky, written in 1878. \nOleksiy Dekan's mystical horror mashup is based on his immortal, classic work. It is a fictionalized, breathtaking story about the courage and steadfastness of an ordinary Ukrainian family and their fight against the Moscow Empire and Zombies in 19-th Century.",
    "imageUrl": "https://res.cloudinary.com/duoohoaqi/image/upload/v1731000199/english-_-_-dan-10000_1_npengs.jpg",
    "previewLink": "https://www.google.com.ua/books/edition/Kaydash_Family_vs_Zombies/L-zvEAAAQBAJ?hl=en&gbpv=1&dq=Kaydash+Family+vs+Zombies&pg=PP1&printsec=frontcover",
    "published": "January 23, 2024",
    "publisher": "Oleksiy Dekan",
    "pageCount": 320,
    "price": 23,
    "language": "English",
    "genres": "Erotic literature, Horror fiction, Dark fantasy, Alternate history"
  }
]

const reviews: ReviewProps[] = [
  {
    "book": "672cfc672d376a30f6f44040",
    "review": "Deliciously creepy",
    "source": "SUNDAY TIMES"
  },
  {
    "book": "672cfc672d376a30f6f44040",
    "review": "Irresistible",
    "source": "MAIL ON SUNDAY"
  },
  {
    "book": "672cfc672d376a30f6f44040",
    "review": "Skin-crawling",
    "source": "OBSERVER"
  },
  {
    "book": "672cfc672d376a30f6f44040",
    "review": "Manically ingenious",
    "source": "GUARDIAN"
  },
  {
    "book": "672cfc672d376a30f6f44040",
    "review": "An elegant fright-fest",
    "source": "THE TIMES"
  },
  {
    "book": "672cfc672d376a30f6f44041",
    "review": "Thrillingly suspenseful",
    "source": "SUNDAY TIMES"
  },
  {
    "book": "672cfc672d376a30f6f44041",
    "review": "Stunning",
    "source": "INDEPENDENT ON SUNDAY"
  },
  {
    "book": "672cfc672d376a30f6f44041",
    "review": "Entirely original'",
    "source": "OBSERVER"
  },
  {
    "book": "672cfc672d376a30f6f44041",
    "review": "'Brilliant",
    "source": "THE TIMES"
  },
  {
    "book": "672cfc672d376a30f6f44045",
    "review": "A free-wheeling vehicle . . . an unforgettable ride!",
    "source": "The New York Times",
  }, 
  {
    "book": "672cfc672d376a30f6f44045",
    "review": "[Vonnegut is] an unimitative and inimitable social satirist.",
    "source": "Harper’s Magazine"
  },
  {
    "book": "672cfc672d376a30f6f44045",
    "review": "Our finest black-humorist . . . We laugh in self-defense.",
    "source": "Atlantic Monthly"
  }
]
