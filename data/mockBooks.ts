
import { Book, Category } from "@/types/book";

// Mock book data
export const books: Book[] = [
  {
    id: "1",
    title: "The Digital Revolution",
    author: "Alex Turner",
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000",
    description: "An exploration of how technology has transformed our lives over the past few decades. This book delves into the social, economic, and cultural impacts of digitalization.",
    categories: ["Technology", "Non-fiction"],
    rating: 4.5,
    pageCount: 320,
    language: "English",
    publicationDate: "2022-04-15",
    isFeatured: true,
    isAvailable: true
  },
  {
    id: "2",
    title: "Echoes of Eternity",
    author: "Sophia Chen",
    coverImage: "https://images.unsplash.com/photo-1518744386442-2d48ac47a7eb?auto=format&fit=crop&q=80&w=1000",
    description: "A captivating science fiction novel set in the 23rd century where humanity has achieved immortality through digital consciousness transfer.",
    categories: ["Science Fiction", "Adventure"],
    rating: 4.7,
    pageCount: 480,
    language: "English",
    publicationDate: "2023-02-10",
    isFeatured: true,
    isAvailable: true
  },
  {
    id: "3",
    title: "Midnight Whispers",
    author: "Elena Blackwood",
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=1000",
    description: "A thrilling mystery novel that follows detective Sarah Miles as she uncovers a series of secrets in a small coastal town.",
    categories: ["Mystery", "Thriller"],
    rating: 4.8,
    pageCount: 384,
    language: "English",
    publicationDate: "2023-07-22",
    isFeatured: true,
    isAvailable: true
  },
  {
    id: "4",
    title: "The Historical Atlas",
    author: "Prof. Jennifer Adams",
    coverImage: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&q=80&w=1000",
    description: "A beautifully illustrated atlas that chronicles human history from ancient civilizations to the modern day through maps and informative text.",
    categories: ["History", "Reference"],
    rating: 4.9,
    pageCount: 512,
    language: "English",
    publicationDate: "2021-05-18",
    isFeatured: true,
    isAvailable: true
  },
  {
    id: "5",
    title: "The Quantum Paradox",
    author: "Dr. Samantha Wells",
    coverImage: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=1000",
    description: "A fascinating exploration of quantum physics and its mind-bending implications for our understanding of reality.",
    categories: ["Science", "Physics"],
    rating: 4.7,
    pageCount: 340,
    language: "English",
    publicationDate: "2023-03-28",
    isFeatured: true,
    isAvailable: true
  },
  {
    id: "6",
    title: "Code Masters: The Programming Journey",
    author: "Dr. James Wilson",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    description: "An inspiring guide for aspiring programmers, covering the fundamentals of coding while sharing stories of innovation and perseverance in the tech world.",
    categories: ["Technology", "Education"],
    rating: 4.8,
    pageCount: 415,
    language: "English",
    publicationDate: "2023-01-30",
    isFeatured: true,
    isAvailable: true
  },
  {
    id: "7",
    title: "Starlight Odyssey",
    author: "Eliza Moon",
    coverImage: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1000",
    description: "An epic science fiction adventure following a crew of explorers as they journey to the edge of the known universe.",
    categories: ["Science Fiction", "Adventure"],
    rating: 4.9,
    pageCount: 520,
    language: "English",
    publicationDate: "2023-03-10",
    isFeatured: true,
    isAvailable: true
  },
  {
    id: "8",
    title: "The Climate Challenge",
    author: "Dr. Emma Green",
    coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1000",
    description: "A scientific examination of climate change and the urgent actions needed to address this global crisis.",
    categories: ["Science", "Environment"],
    rating: 4.7,
    pageCount: 290,
    language: "English",
    publicationDate: "2023-02-05",
    isFeatured: true,
    isAvailable: true
  },
  {
    id: "9",
    title: "Decoding the Enigma",
    author: "Alan Turing",
    coverImage: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?auto=format&fit=crop&q=80&w=1000",
    description: "The thrilling true story of how a team of mathematicians broke the supposedly unbreakable Nazi code during World War II.",
    categories: ["History", "Technology"],
    rating: 4.9,
    pageCount: 340,
    language: "English",
    publicationDate: "2022-03-15",
    isFeatured: true,
    isAvailable: true
  },
  
  // Technology books
  {
    id: "10",
    title: "The Art of Data",
    author: "Marcus Johnson",
    coverImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1000",
    description: "A comprehensive guide to data visualization and interpretation in the modern age. Perfect for both beginners and experienced data analysts.",
    categories: ["Technology", "Education"],
    rating: 4.2,
    pageCount: 256,
    language: "English",
    publicationDate: "2021-11-30",
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "11",
    title: "Foundations of AI",
    author: "Dr. Robert Lee",
    coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000",
    description: "An accessible introduction to artificial intelligence concepts, history, and future implications for society and business.",
    categories: ["Technology", "Education"],
    rating: 4.6,
    pageCount: 420,
    language: "English",
    publicationDate: "2022-09-05",
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "12",
    title: "The Neural Network Handbook",
    author: "Dr. Alan Turing",
    coverImage: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1000",
    description: "A comprehensive guide to understanding and implementing neural networks for machine learning applications.",
    categories: ["Technology", "Education"],
    rating: 4.7,
    pageCount: 410,
    language: "English",
    publicationDate: "2023-01-15",
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "13",
    title: "Python for Data Science",
    author: "Michael Python",
    coverImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1000",
    description: "A practical guide to using Python for data analysis, visualization, and machine learning projects.",
    categories: ["Technology", "Education"],
    rating: 4.8,
    pageCount: 425,
    language: "English",
    publicationDate: "2022-08-10",
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "14",
    title: "Web Development Masterclass",
    author: "Tim Berners-Lee",
    coverImage: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&q=80&w=1000",
    description: "A comprehensive guide to modern web development, covering HTML, CSS, JavaScript, and popular frameworks.",
    categories: ["Technology", "Education"],
    rating: 4.8,
    pageCount: 450,
    language: "English",
    publicationDate: "2023-01-05",
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "15",
    title: "Cryptocurrency Revolution",
    author: "Satoshi Nakamoto",
    coverImage: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1000",
    description: "An in-depth look at how blockchain and cryptocurrencies are transforming the global financial system.",
    categories: ["Finance", "Technology"],
    rating: 4.5,
    pageCount: 330,
    language: "English",
    publicationDate: "2023-02-28",
    isFeatured: false,
    isAvailable: true
  },
  
  // Fiction & Literature
  {
    id: "16",
    title: "The Silent Garden",
    author: "Emily Winters",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1000",
    description: "A haunting tale of mystery and redemption set in a forgotten estate where nature reclaims what was once lost to time.",
    categories: ["Fiction", "Mystery"],
    rating: 4.6,
    pageCount: 342,
    language: "English",
    publicationDate: "2023-05-12",
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "17",
    title: "The Venetian Conspiracy",
    author: "Lynne Stringer",
    coverImage: "https://thafd.bing.com/th/id/OIP.KsZODOXAd2YJB85Etlt-qQHaLT?rs=1&pid=ImgDetMain",
    description: "A fast-paced thriller set in the winding canals of Venice, where an art historian uncovers a centuries-old plot.",
    categories: ["Mystery", "Thriller"],
    rating: 4.6,
    pageCount: 356,
    language: "English",
    publicationDate: "2022-06-12",
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "18",
    title: "Summer in Provence",
    author: "Claire Laurent",
    coverImage: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&q=80&w=1000",
    description: "A heartwarming novel about a woman who finds love and purpose during a summer spent in the lavender fields of Provence.",
    categories: ["Fiction", "Drama"],
    rating: 4.4,
    pageCount: 295,
    language: "English",
    publicationDate: "2022-07-15",
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "19",
    title: "The Paris Mystery",
    author: "Agatha Christie",
    coverImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1000",
    description: "A classic whodunit set in 1920s Paris, where a detective must solve a murder in the city's glamorous art scene.",
    categories: ["Mystery", "Fiction"],
    rating: 4.7,
    pageCount: 305,
    language: "English",
    publicationDate: "2022-04-10",
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "20",
    title: "The Moscow Deception",
    author: "Natasha Romanov",
    coverImage: "https://madisyncarlin.files.wordpress.com/2022/03/deceivedfrontfinal.jpg",
    description: "A gripping espionage thriller set during the Cold War, following a double agent caught between loyalty and survival.",
    categories: ["Thriller", "Historical Fiction"],
    rating: 4.7,
    pageCount: 390,
    language: "English",
    publicationDate: "2023-01-25",
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "21",
    title: "Vienna 1938",
    author: "Anna Müller",
    coverImage: "https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&q=80&w=1000",
    description: "A moving historical novel about a Jewish family's struggle to survive in Vienna during the Anschluss.",
    categories: ["Historical Fiction", "Drama"],
    rating: 4.8,
    pageCount: 375,
    language: "English",
    publicationDate: "2022-08-05",
    isFeatured: false,
    isAvailable: true
  },
  
  // Science & Nature
  {
    id: "22",
    title: "Quantum Mechanics: A Beginner's Guide",
    author: "Dr. Richard Feynman",
    coverImage: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=1000",
    description: "An accessible introduction to the fascinating and counterintuitive world of quantum physics.",
    categories: ["Physics", "Science"],
    rating: 4.5,
    pageCount: 280,
    language: "English",
    publicationDate: "2022-05-30",
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "23",
    title: "The Coral Reef",
    author: "Dr. Jacques Cousteau",
    coverImage: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&q=80&w=1000",
    description: "A stunning visual journey through the world's coral reefs, exploring their biodiversity and the threats they face.",
    categories: ["Nature", "Science"],
    rating: 4.8,
    pageCount: 275,
    language: "English",
    publicationDate: "2022-09-20",
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "24",
    title: "The Rainforest Ecosystem",
    author: "Dr. Jane Goodall",
    coverImage: "https://images.unsplash.com/photo-1469125155630-7ed37e065743?auto=format&fit=crop&q=80&w=1000",
    description: "A detailed study of rainforest biodiversity and the critical importance of preserving these vital ecosystems.",
    categories: ["Nature", "Science"],
    rating: 4.9,
    pageCount: 320,
    language: "English",
    publicationDate: "2022-05-15",
    isFeatured: false,
    isAvailable: true
  },
  
  // History & Philosophy
  {
    id: "25",
    title: "The Roman Empire: Rise and Fall",
    author: "Dr. Marcus Aurelius",
    coverImage: "https://images.unsplash.com/photo-1552432552-06c0b0a94dda?auto=format&fit=crop&q=80&w=1000",
    description: "A detailed historical account of the Roman Empire from its founding to its eventual collapse.",
    categories: ["History", "Non-fiction"],
    rating: 4.8,
    pageCount: 580,
    language: "English",
    publicationDate: "2021-09-15",
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "26",
    title: "Beyond the Horizon",
    author: "Manoj Krishnan",
    coverImage: "https://notionpress.com/coveruploads/404381478resize_cover_516646.png",
    description: "In Beyond the Horizon, stories of special needs families have been included. These real-life inspiring stories will motivate special needs families and caregivers. Every story is so unique and full of emotions that will touch the core of the heart.",
    categories: ["Philosophy", "Non-fiction"],
    rating: 4.3,
    pageCount: 54,
    language: "English",
    publicationDate: "2023-12-01",
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "27",
    title: "Existential Questions",
    author: "Jean-Paul Sartre",
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1000",
    description: "A thought-provoking exploration of the fundamental questions of human existence and meaning.",
    categories: ["Philosophy", "Non-fiction"],
    rating: 4.5,
    pageCount: 320,
    language: "English",
    publicationDate: "2022-04-20",
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "28",
    title: "The Encyclopedia of World History",
    author: "Prof. William Durant",
    coverImage: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=1000",
    description: "A comprehensive reference guide to major historical events, figures, and civilizations throughout human history.",
    categories: ["Reference", "History"],
    rating: 4.9,
    pageCount: 850,
    language: "English",
    publicationDate: "2021-12-10",
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "29",
    title: "The Impressionist Movement",
    author: "Claude Monet",
    coverImage: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=1000",
    description: "A beautifully illustrated exploration of Impressionist art, its key figures, and its lasting impact on the art world.",
    categories: ["Art", "History"],
    rating: 4.8,
    pageCount: 310,
    language: "English",
    publicationDate: "2022-02-10",
    isFeatured: false,
    isAvailable: true
  },
  
  // Business & Self-Help
  {
    id: "30",
    title: "The Startup Playbook",
    author: "Sam Altman",
    coverImage: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=1000",
    description: "Essential strategies and advice for entrepreneurs looking to build successful startups in today's competitive market.",
    categories: ["Business", "Self-Help"],
    rating: 4.7,
    pageCount: 320,
    language: "English",
    publicationDate: "2023-04-05",
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "31",
    title: "The Mindful Entrepreneur",
    author: "Jack Dorsey",
    coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000",
    description: "Combining business acumen with mindfulness practices to create sustainable, purpose-driven companies.",
    categories: ["Business", "Self-Help"],
    rating: 4.6,
    pageCount: 265,
    language: "English",
    publicationDate: "2022-11-10",
    isFeatured: false,
    isAvailable: true
  },
  
  // Lifestyle & Environment
  {
    id: "32",
    title: "Sustainable Home",
    author: "Emma Greenfield",
    coverImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1000",
    description: "Practical tips and designs for creating an eco-friendly, energy-efficient home that reduces your environmental footprint.",
    categories: ["Lifestyle", "Environment"],
    rating: 4.6,
    pageCount: 230,
    language: "English",
    publicationDate: "2022-10-25",
    isFeatured: false,
    isAvailable: true
  },
  
  // Cooking & Travel
  {
    id: "33",
    title: "Culinary Journeys: Flavors of the World",
    author: "Sofia Rodriguez",
    coverImage: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?auto=format&fit=crop&q=80&w=1000",
    description: "A vibrant cookbook that takes readers on a global adventure through cuisines and cultures, featuring authentic recipes and the stories behind them.",
    categories: ["Cooking", "Travel"],
    rating: 4.7,
    pageCount: 280,
    language: "English",
    publicationDate: "2022-11-15",
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "34",
    title: "The Chef's Journey",
    author: "Gordon Ramsay",
    coverImage: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=1000",
    description: "A renowned chef shares his personal journey from apprentice to culinary master, with insights into the world of fine dining.",
    categories: ["Biography", "Cooking"],
    rating: 4.7,
    pageCount: 295,
    language: "English",
    publicationDate: "2023-03-20",
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "35",
    title: "Flavors of Thailand",
    author: "Padma Lakshmi",
    coverImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000",
    description: "A culinary journey through Thailand, featuring authentic recipes and stories about the country's rich food culture.",
    categories: ["Cooking", "Travel"],
    rating: 4.7,
    pageCount: 285,
    language: "English",
    publicationDate: "2022-07-20",
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "36",
    title: "Lost in the Amazon",
    author: "Carlos Rivera",
    coverImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1000",
    description: "A thrilling adventure story of survival and discovery in the depths of the Amazon rainforest.",
    categories: ["Adventure", "Travel"],
    rating: 4.6,
    pageCount: 310,
    language: "English",
    publicationDate: "2022-11-18",
    isFeatured: false,
    isAvailable: true
  },


  {
    id: "37",
    title: "The Architect's Vision",
    author: "Frank Lloyd Wright",
    coverImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1000",
    description: "A fascinating exploration of architectural principles and design philosophy from one of history's most influential architects.",
    categories: ["Art", "Non-fiction"],
    rating: 4.8,
    pageCount: 340,
    language: "English",
    publicationDate: "2022-05-18",
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "38",
    title: "Financial Freedom",
    author: "Warren Buffett",
    coverImage: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1000",
    description: "A practical guide to personal finance, investing, and building wealth through proven strategies and mindful money management.",
    categories: ["Finance", "Self-Help"],
    rating: 4.9,
    pageCount: 295,
    language: "English",
    publicationDate: "2023-01-10",
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "39",
    title: "The Hidden Kingdom",
    author: "David Attenborough",
    coverImage: "https://images.unsplash.com/photo-1508185159346-bb1c5e93ebb4?auto=format&fit=crop&q=80&w=1000",
    description: "A breathtaking journey into the microscopic world that exists all around us, revealing the complex ecosystems that operate beyond human sight.",
    categories: ["Science", "Nature"],
    rating: 4.8,
    pageCount: 320,
    language: "English",
    publicationDate: "2022-09-30",
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "40",
    title: "The Last Expedition",
    author: "Ernest Shackleton",
    coverImage: "https://images.unsplash.com/photo-1551649001-7a2482d98d05?auto=format&fit=crop&q=80&w=1000",
    description: "The gripping true story of survival and leadership during one of history's most daring polar expeditions.",
    categories: ["Adventure", "Biography"],
    rating: 4.9,
    pageCount: 375,
    language: "English",
    publicationDate: "2022-03-25",
    isFeatured: false,
    isAvailable: true
  }
];

// Update the categories array with book counts
export const categories: Category[] = [
  { id: "1", name: "Technology", slug: "technology", bookCount: 10 },
  { id: "2", name: "Science Fiction", slug: "science-fiction", bookCount: 2 },
  { id: "3", name: "Mystery", slug: "mystery", bookCount: 5 },
  { id: "4", name: "History", slug: "history", bookCount: 5 },
  { id: "5", name: "Philosophy", slug: "philosophy", bookCount: 2 },
  { id: "6", name: "Science", slug: "science", bookCount: 6 },
  { id: "7", name: "Non-fiction", slug: "non-fiction", bookCount: 5 },
  { id: "8", name: "Education", slug: "education", bookCount: 6 },
  { id: "9", name: "Adventure", slug: "adventure", bookCount: 4 },
  { id: "10", name: "Thriller", slug: "thriller", bookCount: 4 },
  { id: "11", name: "Physics", slug: "physics", bookCount: 3 },
  { id: "12", name: "Reference", slug: "reference", bookCount: 2 },
  { id: "13", name: "Fiction", slug: "fiction", bookCount: 5 },
  { id: "14", name: "Cooking", slug: "cooking", bookCount: 4 },
  { id: "15", name: "Travel", slug: "travel", bookCount: 4 },
  { id: "16", name: "Finance", slug: "finance", bookCount: 3 },
  { id: "17", name: "Historical Fiction", slug: "historical-fiction", bookCount: 3 },
  { id: "18", name: "Drama", slug: "drama", bookCount: 3 },
  { id: "19", name: "Business", slug: "business", bookCount: 3 },
  { id: "20", name: "Self-Help", slug: "self-help", bookCount: 4 },
  { id: "21", name: "Nature", slug: "nature", bookCount: 4 },
  { id: "22", name: "Environment", slug: "environment", bookCount: 3 },
  { id: "23", name: "Lifestyle", slug: "lifestyle", bookCount: 2 },
  { id: "24", name: "Art", slug: "art", bookCount: 3 },
  { id: "25", name: "Biography", slug: "biography", bookCount: 3 }
];

// Get featured books
export const getFeaturedBooks = (): Book[] => {
  return books.filter(book => book.isFeatured);
};

// Get book by ID
export const getBookById = (id: string): Book | undefined => {
  return books.find(book => book.id === id);
};

// Get books by category
export const getBooksByCategory = (categorySlug: string): Book[] => {
  const category = categories.find(cat => cat.slug === categorySlug);
  if (!category) return [];
  return books.filter(book => book.categories.includes(category.name));
};

// Search books
export const searchBooks = (query: string): Book[] => {
  const lowercaseQuery = query.toLowerCase();
  return books.filter(
    book =>
      book.title.toLowerCase().includes(lowercaseQuery) ||
      book.author.toLowerCase().includes(lowercaseQuery) ||
      book.description.toLowerCase().includes(lowercaseQuery)
  );
};

// Get all books
export const getAllBooks = (): Book[] => {
  return books;
};
