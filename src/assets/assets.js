import luxor from './luxor.avif'
import aswan from './Aswan.jpg'
import dahab from './Dahab.webp'
import hurgahda from './hurghada.jpg'
import alex from './Alex.jpg'
import cairo from './cairo.jpg'
import marsa_alam from './marsa-alam.jpg'
import hero_img from './i5.jpg'
import grand_museum from './Grand museum.webp'
import LuxorExp from './Luxor.webp'
import Siwa from './Siwa4.jpg'
import Pyramids from './Pyramids.jpeg'
import WhiteDesert from './White Desert.jpg'
import SaintCatherine from './Saint Catherine.jpg'
import logo from './4.png'
import Footerlogo from './7.png'
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faPhone, faEnvelope, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const imgs = {
    luxor,
    aswan,
    dahab,
    hurgahda,
    alex,
    cairo,
    marsa_alam,
    hero_img,
    SaintCatherine,
    Siwa,
    grand_museum,
    WhiteDesert,
    LuxorExp,
    Pyramids,
    logo,
    Footerlogo,

};




export const Place_Category = [
    {
        id: 1,
        text: 'Restaurant'
    },
    {
        id: 2,
        text: 'Tourist Attraction'
    },
    {
        id: 3,
        text: 'Cafe'
    },
    {
        id: 4,
        text: 'Coffee Shop'
    },
    {
        id: 5,
        text: 'Museum'
    },
    {
        id: 6,
        text: 'Art Gallery'
    },
    {
        id: 7,
        text: 'Seafood Restaurant'
    },
    {
        id: 8,
        text: 'Barbecue Restaurant'
    },
    {
        id: 9,
        text: 'Historical Landmark'
    },
    {
        id: 10,
        text: 'Fast Food Restaurant'
    },
    {
        id: 11,
        text: 'Japanese Restaurant'
    },
    {
        id: 12,
        text: 'Pizza Restaurant'
    },
    {
        id: 13,
        text: 'Italian Restaurant'
    },
    {
        id: 14,
        text: 'Park'
    },
    {
        id: 15,
        text: 'Monument'
    },
    {
        id: 16,
        text: 'Sandwich Shop'
    }
];

export const Admin_Dashboard_items = [
    { text: "Users", id: 1, icon: <PeopleIcon /> },

    { text: "Places", id: 2, icon: <PublicIcon /> },

    { text: "Blogs", id: 3, icon: <AssignmentIcon /> },

];

export const social_icons = [
    {
        id: 1, icon: <FontAwesomeIcon
            icon={faFacebook}

        />
    },

    {
        id: 2, icon: <FontAwesomeIcon
            icon={faTwitter}

        />
    },

    {
        id: 3, icon: <FontAwesomeIcon
            icon={faInstagram}
        />
    },

];

export const contact_icons = [

    {
        text: '+12516121651', id: 1, icon: <FontAwesomeIcon
            icon={faPhone}
        />
    },

    {
        text: 'EgyGuide@EgyGuide.com', id: 2, icon: <FontAwesomeIcon
            icon={faEnvelope}
        />
    },
    {
        text: "01023456789", id: 3, icon: <FontAwesomeIcon
            icon={faLocationPin}
        />
    },

];

export const Quick_Links = [
    {
        id: 1,
        text: 'Currency Converter',
        path: '/Currency-Converter',
        icon: <FontAwesomeIcon icon={faChevronRight} />,
    },
    {
        id: 2,
        text: 'Blogs',
        path: '/blogs',
        icon: <FontAwesomeIcon icon={faChevronRight} />,
    },
    {
        id: 3,
        text: 'Plan Your Trip',
        path: '/trip-input',
        icon: <FontAwesomeIcon icon={faChevronRight} />,
    },
    {
        id: 4,
        text: 'Explore Egypt',
        path: '/Explore-Egypt',
        icon: <FontAwesomeIcon icon={faChevronRight} />,
    },


];


export const Explore_Egypt = [
    {
        id: 1,
        img: Pyramids,
        text: "Located on the outskirts of Cairo, the Pyramids of Giza stand as one of the Seven Wonders of the Ancient World. The Great Pyramid of Khufu, along with the enigmatic Sphinx, offers a timeless glimpse into Egypt's ancient civilization and is a must-see for any visitor."
    },
    {
        id: 2,
        img: grand_museum,
        text: "The Grand Egyptian Museum, located near the Giza Pyramids, is one of the most significant cultural projects of the 21st century. Set to be the largest archaeological museum in the world, it houses an unparalleled collection of ancient artifacts, including the treasures of Tutankhamun. The museum offers a modern, immersive experience that brings Egypt's rich history to life, making it a must-visit for history buffs and curious minds alike."
    },
    {
        id: 3,
        img: LuxorExp,
        text: "Known as the world's greatest open-air museum, Luxor is home to the Valley of the Kings, Karnak Temple, and Luxor Temple. Once the ancient city of Thebes, Luxor is a treasure trove of pharaonic history and architectural marvels."
    },
    {
        id: 4,
        img: aswan,
        text: "A serene city along the Nile, Aswan is famous for the Philae Temple, the Unfinished Obelisk, and its picturesque Nile River cruises. It also serves as a gateway to the awe-inspiring temples of Abu Simbel."
    },
    {
        id: 5,
        img: Siwa,
        text: "A remote desert oasis near the Libyan border, Siwa is renowned for its natural springs, the ancient Temple of the Oracle, and its unique Berber culture. It's a peaceful retreat offering a glimpse into a traditional way of life."
    },
    {
        id: 6,
        img: SaintCatherine,
        text: "A spiritual and historical destination, Saint Catherine is located at the foot of Mount Sinai. It is home to Saint Catherine's Monastery, one of the oldest working Christian monasteries in the world. This sacred site is significant to Judaism, Christianity, and Islam. Visitors can hike Mount Sinai for breathtaking sunrise views."
    },

    {
        id: 7,
        img: dahab,
        text: "A laid-back beach town on the Sinai Peninsula, Dahab is a haven for divers, windsurfers, and travelers seeking a relaxed atmosphere. The Blue Hole, a world-famous diving spot, is a highlight for underwater enthusiasts."
    },
    {
        id: 8,
        img: WhiteDesert,
        text: "The White Desert is a surreal and captivating landscape located in the Western Desert. Its chalk-white rock formations, shaped by wind erosion, create an otherworldly experience that feels like stepping onto another planet."
    },

];


export const User_Category = [

    {
        id: 1,
        text: 'Egyptian'
    },

    {
        id: 2,
        text: 'Egyptian Student'
    },

    {
        id: 3,
        text: 'Foreign Visitor'
    },

    {
        id: 4,
        text: 'Foreign Student'
    }

];

export const Plan = [
    {
      day: "Day 1",
      activities: [
        {
          activity: "Visit Luxor Temple",
          location: "Luxor City, Luxor, Luxor Governorate 1362501, Egypt",
          price_range: "500 EGP",
          time: "8:00 AM"
        },
        {
          activity: "Explore Luxor Art Gallery",
          location: "Memnon Street, Al Bairat, Al Qarna, Luxor Governorate 1341472, Egypt",
          price_range: "Free",
          time: "11:00 AM"
        },
        {
          activity: "Lunch at White Coffee & Restaurant",
          location: "Luxor, Karnak, Luxor, Luxor Governorate 1363024, Egypt",
          price_range: "Moderate (around 200 EGP)",
          time: "1:00 PM"
        },
        {
          activity: "Visit Karnak Temples",
          location: "Karnak, Luxor, Luxor Governorate, Egypt",
          price_range: "600 EGP",
          time: "3:00 PM"
        },
        {
          activity: "Dinner at El Hussein Restaurant",
          location: "Hilton St, New, Karnak, Luxor, Luxor Governorate 1363432, Egypt",
          price_range: "Moderate (around 200 EGP)",
          time: "7:00 PM"
        }
      ],
      approximate_cost: "1500 EGP"
    },
    {
      day: "Day 2",
      activities: [
        {
          activity: "Visit Valley of the Kings",
          location: "Luxor, Egypt",
          price_range: "750 EGP",
          time: "8:00 AM"
        },
        {
          activity: "Explore Nobles Art Gallery at Luxor temple",
          location: "Mabad Al Karnak, Luxor City, Luxor, Luxor Governorate 85111, Egypt",
          price_range: "Free",
          time: "11:00 AM"
        },
        {
          activity: "Lunch at Cafe & Restaurant Maratonga",
          location: "Unnamed Road, Al Bairat, Luxor, Luxor Governorate 85958, Egypt",
          price_range: "Inexpensive (around 200 EGP)",
          time: "1:00 PM"
        },
        {
          activity: "Visit Temple of Hatshepsut",
          location: "Luxor, Egypt",
          price_range: "440 EGP",
          time: "3:00 PM"
        },
        {
          activity: "Dinner at Arabia Cafe",
          location: "Luxor Bridge, Gazirat Al Awameyah, Luxor, Luxor Governorate 1362201, Egypt",
          price_range: "Moderate (around 200 EGP)",
          time: "7:00 PM"
        }
      ],
      approximate_cost: "1600 EGP"
    },
    {
      day: "Day 3",
      activities: [
        {
          activity: "Visit Luxor Museum",
          location: "Kornish Al Nile, Luxor City, Luxor, Luxor Governorate 1362503, Egypt",
          price_range: "400 EGP",
          time: "8:00 AM"
        },
        {
          activity: "Explore Gallery Bazaar",
          location: "MJMH+33J, Luxor City, Luxor, Luxor Governorate 1360130, Egypt",
          price_range: "Free",
          time: "11:00 AM"
        },
        {
          activity: "Lunch at Blend Cafe",
          location: "MJRR+F32, Omar Ali, Gazirat Al Awameyah, Luxor, Luxor Governorate 1362263, Egypt",
          price_range: "Inexpensive (around 200 EGP)",
          time: "1:00 PM"
        },
        {
          activity: "Visit Temple of Isis",
          location: "Luxor, Egypt",
          price_range: "100 EGP",
          time: "3:00 PM"
        },
        {
          activity: "Dinner at Nubian House",
          location: "Al Bairat, Luxor, Luxor Governorate 1345173, Egypt",
          price_range: "Inexpensive (around 200 EGP)",
          time: "7:00 PM"
        }
      ],
      approximate_cost: "1200 EGP"
    },
    {
      total_approximate_cost: "4300 EGP",
      notes: "The itinerary includes a mix of cultural sites, art galleries, and dining options. The approximate costs are based on the provided information and may vary depending on individual preferences and exchange rates. It is assumed that the visitor will purchase tickets for the cultural sites and pay for meals and transportation separately. The overall budget for the 3-day trip is 5000 EGP, which should be sufficient to cover all expenses."
    }
  ];
  