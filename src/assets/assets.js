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
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faPhone, faEnvelope, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core'

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

};


export const governorates = [
    "Alexandria",
    "Aswan",
    "Asyut",
    "Beheira",
    "Beni Suef",
    "Cairo",
    "Dakahlia",
    "Damietta",
    "Faiyum",
    "Gharbia",
    "Giza",
    "Ismailia",
    "Kafr El Sheikh",
    "Luxor",
    "Matrouh",
    "Minya",
    "Monufia",
    "New Valley (El Wadi El Gedid)",
    "North Sinai",
    "Port Said",
    "Qalyubia",
    "Qena",
    "Red Sea",
    "Sharqia",
    "Sohag",
    "South Sinai",
    "Suez"
];

export const cities = [
    {
        id: 1,
        name: "Luxor",
        image: luxor,
        about: 'sad sdsdf a fghfs sjsdfsdf df',
        top: [
            {
                name: "Alexandria",
                image: alex,
            },
            {
                name: "Alexandria",
                image: alex,
            },
            {
                name: "Alexandria",
                image: alex,
            },
            {
                name: "Alexandria",
                image: alex,
            }

        ]
    },
    {
        id: 2,
        name: "Cairo",
        image: cairo,
        about: 'sad sdsdf a fghfs sjsdfsdf',
        top: [
            {
                name: "Alexandria",
                image: alex,
            },
            {
                name: "Alexandria",
                image: alex,
            },
            {
                name: "Alexandria",
                image: alex,
            },
            {
                name: "Alexandria",
                image: alex,
            }

        ]
    },
    {
        id: 3,
        name: "Aswan",
        image: aswan,
        about: 'sad sdsdf a fghfs sjsdf',
        top: [
            {
                name: "Alexandria",
                image: alex,
            },
            {
                name: "Alexandria",
                image: alex,
            },
            {
                name: "Alexandria",
                image: alex,
            },
            {
                name: "Alexandria",
                image: alex,
            }

        ]
    },
    {
        id: 4,
        name: "Hurghada",
        image: hurgahda,
        about: 'sad sdsdf a fghfs sjsdfsdf df',
        top: [
            {
                name: "Alexandria",
                image: alex,
            },
            {
                name: "Alexandria",
                image: alex,
            },
            {
                name: "Alexandria",
                image: alex,
            },
            {
                name: "Alexandria",
                image: alex,
            }

        ]
    },
    {
        id: 5,
        name: "Alexandria",
        image: alex,
        about: 'sad sdsdf a fghfs sjsdfsdf df',
        top: [
            {
                name: "Alexandria",
                image: alex,
            },
            {
                name: "Alexandria",
                image: alex,
            },
            {
                name: "Alexandria",
                image: alex,
            },
            {
                name: "Alexandria",
                image: alex,
            }

        ]
    },
    {
        id: 6,
        name: "Marsa Alam",
        image: marsa_alam,
        about: 'sad sdsdf a fghfs sjsdfsdf df',
        top: [
            {
                name: "Alexandria",
                image: alex,
            },
            {
                name: "Alexandria",
                image: alex,
            },
            {
                name: "Alexandria",
                image: alex,
            },
            {
                name: "Alexandria",
                image: alex,
            }

        ]
    },
    {
        id: 7,
        name: "Dahab",
        image: dahab,
        about: 'sad sdsdf a fghfs sjsdfsdf',
        top: [
            {
                name: "Alexandria",
                image: alex,
            },
            {
                name: "Alexandria",
                image: alex,
            },
            {
                name: "Alexandria",
                image: alex,
            },
            {
                name: "Alexandria",
                image: alex,
            }

        ]
    }
];


export const users_list = [
    { name: "jjjj", id: 1, trips: ['Cairo'], email: 'aaaaaa@g.com' },

    { name: "aaaaa", id: 2, trips: ['Alex', 'Cairo'], email: 'aaaa@d' },

    { name: "hhhhhhhhh", id: 3, trips: ['Alex', 'Cairo', 'Luxor'], email: 'aaaaaaaa' },

    { name: "uuuuuu", id: 4, trips: [], email: 'aaaaaaaa' },

    { name: "yyyy", id: 5, trips: [], email: 'aaaaaaaa' },


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