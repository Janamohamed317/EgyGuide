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

export const citiess =
    [
        {
            id: 1,
            name: "Ain El Sokhna",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Ain_sokhna_porto.jpg",
            description: "Ain El Sokhna is a popular Red Sea resort town located just 120 km from Cairo, making it a perfect weekend getaway. It is known for its soft sandy beaches, warm waters year-round, and luxury resorts. Visitors can enjoy swimming, snorkeling, kitesurfing, and fishing, while the nearby Galala Mountain offers scenic views and adventure activities. Ain El Sokhna is also home to natural hot springs, adding to its appeal as a relaxation spot.",
            topPlaces: [
                {
                    id: 1,
                    name: "Porto Sokhna",
                    imageUrl: "https://lacosta-realestate.com/wp-content/uploads/2024/03/Porto-Sokhna-Resort-3.jpg"
                }
            ]
        },
        {
            id: 2,
            name: "Alexandria",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Citadel_of_qaitbay.jpg/1280px-Citadel_of_qaitbay.jpg",
            description: "Alexandria, the \"Pearl of the Mediterranean,\" is a historic coastal city founded by Alexander the Great. It features the modern Bibliotheca Alexandrina, the medieval Qaitbay Citadel, and scenic Mediterranean views along its Corniche.",
            topPlaces: []
        },
        {
            id: 4,
            name: "Cairo",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/db/Cairo_From_Tower_%28cropped%29.jpg",
            description: "Cairo, Egypt's capital, is a bustling metropolis blending ancient and modern attractions. It houses the Egyptian Museum, Islamic Cairo's mosques, and lively markets like Khan El Khalili. Along the Nile, visitors can enjoy a mix of historical landmarks and modern city life.",
            topPlaces: []
        },
        {
            id: 5,
            name: "Beni Suef",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/Beni-Suef_University_main_bldg.jpg",
            description: "Located along the Nile, Beni Suef is a center for agriculture, limestone production, and modern cement industries.",
            topPlaces: []
        },
        {
            id: 6,
            name: "Beheira",
            imageUrl: "https://bwadc.com.eg/ws/en/wp-content/uploads/2018/06/opera.jpg",
            description: "Beheira is an agricultural powerhouse, known for its citrus and cotton farms. The city of Rashid (Rosetta) is famous for the Rosetta Stone, which helped decipher Egyptian hieroglyphs. The region also has important archaeological sites and ancient mosques.",
            topPlaces: []
        },
        {
            id: 7,
            name: "Aswan",
            imageUrl: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRmslLM-YfPc6n06LQ3CcS1oSP2UUBhkCqgsuyVwDqXsPw7v8-MqgjPbvasU7xpkvObbezEYicIE-KFIC04DbTM-9aLNDiEK575sUm58Q",
            description: "Aswan is a city of breathtaking landscapes, Nubian culture, and ancient monuments. Highlights include the Philae Temple, the Aswan High Dam, and the beautiful Nubian villages along the Nile.",
            topPlaces: []
        },
        {
            id: 8,
            name: "Assiut",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/January_25th_Bridge_%D9%83%D9%88%D8%A8%D8%B1%D9%8A_25_%D9%8A%D9%86%D8%A7%D9%8A%D8%B1_-_panoramio.jpg/1200px-January_25th_Bridge_%D9%83%D9%88%D8%A8%D8%B1%D9%8A_25_%D9%8A%D9%86%D8%A7%D9%8A%D8%B1_-_panoramio.jpg",
            description: "Assiut is a cultural and economic hub, home to one of Egypt's top universities. It also has significant Christian monasteries like Deir el-Muharraq.",
            topPlaces: []
        },
        {
            id: 9,
            name: "Dahab",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Blue_Hole_2005.JPG/1280px-Blue_Hole_2005.JPG",
            description: "A laid-back beach town on the Red Sea, Dahab is famous for diving at the Blue Hole, windsurfing, and its bohemian vibe. The town's relaxed cafés, golden beaches, and Bedouin culture make it a favorite for backpackers and adventure seekers.",
            topPlaces: []
        },
        {
            id: 10,
            name: "Dakhlia",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9_%D8%A7%D9%84%D8%AF%D9%82%D9%87%D9%84%D9%8A%D8%A9_-_%D8%A7%D9%84%D9%85%D9%86%D8%B5%D9%88%D8%B1%D8%A9.jpg/1280px-%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9_%D8%A7%D9%84%D8%AF%D9%82%D9%87%D9%84%D9%8A%D8%A9_-_%D8%A7%D9%84%D9%85%D9%86%D8%B5%D9%88%D8%B1%D8%A9.jpg",
            description: "The capital, Mansoura, is a major university city and medical hub. The governorate is known for its agricultural production and is home to Lake Manzala, an important fishing area.",
            topPlaces: []
        },
        {
            id: 11,
            name: "Damietta",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/%D9%85%D9%87%D9%86%D9%87_%D8%B5%D9%8A%D8%AF_%D8%A7%D9%84%D8%A7%D8%B3%D9%85%D8%A7%D9%84%D9%83_%28Fishing%29.jpg/1920px-%D9%85%D9%87%D9%86%D9%87_%D8%B5%D9%8A%D8%AF_%D8%A7%D9%84%D8%A7%D8%B3%D9%85%D8%A7%D9%84%D9%83_%28Fishing%29.jpg",
            description: "Damietta is known for its furniture industry and scenic Mediterranean beaches. The city also has ancient mosques and modern industrial zones.",
            topPlaces: []
        },
        {
            id: 12,
            name: "El Gouna",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/El_Gouna_Yachts_01.jpg/1280px-El_Gouna_Yachts_01.jpg",
            description: "El Gouna is a modern resort town with pristine beaches, turquoise lagoons, and upscale resorts. It's a hotspot for kitesurfing, diving, and wakeboarding, while Abu Tig Marina and Downtown offer lively dining and nightlife. Known for its eco-friendly design and the El Gouna Film Festival, it's a perfect mix of relaxation and adventure.",
            topPlaces: []
        },
        {
            id: 13,
            name: "Fayoum",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Faiyum_Oasis_by_Zorbey_Tun%C3%A7er.jpg/420px-Faiyum_Oasis_by_Zorbey_Tun%C3%A7er.jpg",
            description: "Fayoum is a natural wonder, home to the UNESCO-listed Wadi El-Hitan (Valley of the Whales), Lake Qarun, and the Hawara Pyramid.",
            topPlaces: []
        },
        {
            id: 14,
            name: "Gharbia",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Tanta-1.jpg/1200px-Tanta-1.jpg",
            description: "Tanta, the capital of Gharbia, is famous for the annual Moulid of Sayyid Ahmed Al-Badawi, one of Egypt's largest religious festivals. The governorate is also known for producing high-quality cotton.",
            topPlaces: []
        },
        {
            id: 15,
            name: "Giza",
            imageUrl: "https://www.touristegypt.com/wp-content/uploads/2023/03/giza-pyramids-cairo-egypt-with-palm-1024x634.jpg",
            description: "Giza is world-famous for the Great Pyramids of Giza, the last remaining wonder of the ancient world. The Sphinx and the upcoming Grand Egyptian Museum add to its historical significance. The city also has modern urban areas, shopping centers, and scenic views along the Nile.",
            topPlaces: []
        },
        {
            id: 16,
            name: "Hurghada",
            imageUrl: "https://images.squarespace-cdn.com/content/v1/5f7f580e2a273179f84ceaee/6af9a594-801b-4118-93a0-ad0288b3991e/hurghada-islands.jpg",
            description: "A popular beach and diving destination, Hurghada features family-friendly resorts, lively nightlife, and coral reefs. Visitors can explore Giftun Island, El Dahar's markets, and top snorkeling spots along the Red Sea.",
            topPlaces: []
        },
        {
            id: 17,
            name: "Ismailia",
            imageUrl: "https://cdn.bookaway.com/media/files/672d13bee74991699485eb38.jpeg?quality=50&width=2000",
            description: "Nicknamed the \"City of Beauty and Enchantment,\" Ismailia is located along the Suez Canal and is famous for its lush green landscapes and Lake Timsah. The city has a mix of old colonial buildings and modern developments.",
            topPlaces: []
        },
        {
            id: 18,
            name: "Kafr El Sheikh",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Main_building_of_Kafr_El-Sheikh_Governorate.JPG",
            description: "A coastal governorate, Kafr El Sheikh is a major center for fish farming and agriculture. It includes Burullus Lake, an important ecological site.",
            topPlaces: []
        },
        {
            id: 19,
            name: "Luxor",
            imageUrl: "https://www.osiristours.com/wp-content/uploads/2018/07/maxresdefault.jpg",
            description: "Luxor, often called the \"world greatest open-air museum,\" is home to the Karnak Temple, Luxor Temple, and the Valley of the Kings, where Tutankhamun's tomb was discovered.",
            topPlaces: []
        },
        {
            id: 20,
            name: "Marsa Alam",
            imageUrl: "https://www.egiptoexclusivo.com/wp-content/uploads/2023/07/marsa-alam-coast.jpg",
            description: "A secluded paradise, Marsa Alam is known for pristine coral reefs, Dolphin House, and Wadi El Gemal National Park. Its eco-friendly resorts and remote beaches make it perfect for a quiet escape.",
            topPlaces: []
        },
        {
            id: 21,
            name: "Matrouh",
            imageUrl: "https://betamedia.experienceegypt.eg/media/experienceegypt/img/Original/2022/8/8/2022_8_8_23_41_29_70.jpeg",
            description: "A coastal paradise, Matrouh is famous for Marsa Mat rouh's crystal-clear beaches like Agiba Beach and Cleopatra's Bath. The governorate also includes Siwa Oasis, a historic desert town known for its Amun Oracle Temple, hot springs, and salt lakes.",
            topPlaces: []
        },
        {
            id: 22,
            name: "Menoufia",
            imageUrl: "https://play-lh.googleusercontent.com/49OOvFNwfohX9VRwLK2B7bXPFDj-aAmChkj11HyQVotVd4VlHgo9JsoEtjynHGHQ3cU=w526-h296-rw",
            description: "A governorate with high literacy rates, Menoufia has a strong educational system and is an agricultural hub. The city of Shebin El-Kom is the administrative capital.",
            topPlaces: []
        },
        {
            id: 23,
            name: "Minya",
            imageUrl: "https://english.ahram.org.eg/Media/News/2023/1/17/41_2023-638095900658528007-852.jpg",
            description: "Minya features Beni Hassan's rock-cut tombs and Tell el-Amarna, the former capital of Pharaoh Akhenaten. The city has a vibrant university and industrial sector.",
            topPlaces: []
        },
        {
            id: 24,
            name: "North Coast (Sahel)",
            imageUrl: "https://www.imtilak.net/uploads/posts/abae490339e6ee5f00a85a0776767daeNmO684.webp",
            description: "The North Coast (Sahel) is Egypt's top summer destination, known for its turquoise Mediterranean waters, white sandy beaches, and luxury resorts.",
            topPlaces: []
        },
        {
            id: 25,
            name: "North Sinai",
            imageUrl: "https://beta.sis.gov.eg/media/381346/wonderful-picture-palm-trees-beach-al-arish-northern-egypt-784462-44.jpg",
            description: "Arish, the capital, is known for its Mediterranean beaches. North Sinai has historical significance but is also a sensitive military area.",
            topPlaces: []
        },
        {
            id: 26,
            name: "Nuweiba",
            imageUrl: "https://betamedia.experienceegypt.eg/media/experienceegypt/img/Original/2022/8/7/2022_8_7_17_58_35_613.jpg",
            description: "A quiet coastal retreat, Nuweiba is known for beach camps, turquoise waters, and a peaceful Bedouin atmosphere.",
            topPlaces: []
        },
        {
            id: 27,
            name: "Port Said",
            imageUrl: "https://mediaim.expedia.com/destination/1/15e816d45c63d1d944528680ce106807.jpg",
            description: "Port Said, located at the northern entrance of the Suez Canal, is known for its colonial architecture and free trade zone.",
            topPlaces: []
        },
        {
            id: 28,
            name: "Qalyubia",
            imageUrl: "https://i0.wp.com/landioustravel.com/wp-content/uploads/2022/06/Qalyubia-Governorate-e1654740835866.jpg?fit=1200%2C675&ssl=1",
            description: "Part of Greater Cairo, Qalyubia is an agricultural and industrial hub. The governorate's capital, Banha, is known for its vast banana and mango farms.",
            topPlaces: []
        },
        {
            id: 29,
            name: "Qena",
            imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/2f/76/05/photo0jpg.jpg?w=600&h=-1&s=1",
            description: "Qena is best known for Dendera Temple, one of the best-preserved temples in Egypt, dedicated to Hathor. The governorate is also a major producer of sugar and ceramics.",
            topPlaces: []
        },
        {
            id: 30,
            name: "Red Sea",
            imageUrl: "https://www.scenenow.com/Content/Admin/Uploads/Articles/ArticlesMainPhoto/57832/48f26554-a759-4461-b08e-a654afa4a44a.jpg",
            description: "This coastal region is home to Hurghada, Marsa Alam, and stunning coral reefs. It is a prime destination for diving, snorkeling, and beach tourism.",
            topPlaces: []
        },
        {
            id: 31,
            name: "Sharm El Sheikh",
            imageUrl: "https://www.youregypttours.com/storage/796/1657002004.jpg",
            description: "A top Red Sea resort, Sharm El Sheikh is famous for luxury resorts, coral reefs, and nightlife. It offers world-class diving at Ras Mohammed, vibrant Naama Bay, and easy access to Mount Sinai and St. Catherine's Monastery.",
            topPlaces: []
        },
        {
            id: 32,
            name: "Sharqia",
            imageUrl: "https://admin.ask-aladdin.com/photos/egypt/articles/Suez-askaladdin.webp",
            description: "One of Egypt's largest agricultural regions, Sharqia is known for the ancient city of Bubastis, a center of worship for the goddess Bastet. The city of Zagazig serves as its administrative center.",
            topPlaces: []
        },
        {
            id: 33,
            name: "Siwa Oasis",
            imageUrl: "https://lh3.googleusercontent.com/proxy/QyszF2WFaxgzZv7i3ordHKliMhtOkHykgvcEyLz33pwmJ0Toh-zDEHDBkXj9RygC5qlS7nmG9pJjEK8kC2m9VIrjTQbKF6T2VdzxMAk",
            description: "One of Egypt's most stunning oases, known for its desert landscapes, salt lakes, and hot springs. Key attractions include the Temple of Amun, the Mountain of the Dead, and Shali Fortress. It's a perfect destination for relaxation and experiencing authentic Bedouin culture.",
            topPlaces: []
        },
        {
            id: 34,
            name: "Sohag",
            imageUrl: "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/mandators/49581/file-manager/sohag,-sohag-city,-sohag-travel.jpg",
            description: "A significant historical site, Sohag houses the Abydos Temple, an important center of ancient Egyptian religious practices.",
            topPlaces: []
        },
        {
            id: 35,
            name: "South Sinai",
            imageUrl: "https://static.zawya.com/view/acePublic/alias/contentid/OTQ4MDNmNzYtNThiZS00/1/1337428439.webp",
            description: "A tourist hotspot, South Sinai features Sharm El Sheikh, Dahab, and St. Catherine's Monastery at the foot of Mount Sinai. The governorate is also a top diving destination.",
            topPlaces: []
        },
        {
            id: 36,
            name: "Suez",
            imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/73/ed/0c/canale-di-suez.jpg?w=900&h=500&s=1",
            description: "Suez is a major port city at the southern entrance of the Suez Canal. It has historical significance as a strategic naval base and played a key role in Egypt's wars. Visitors can explore Suez Canal viewpoints and enjoy Red Sea beaches nearby.",
            topPlaces: []
        },
        {
            id: 37,
            name: "Taba",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f1/%D9%82%D9%84%D8%B9%D8%A9_%D8%B5%D9%84%D8%A7%D8%AD_%D8%A7%D9%84%D8%AF%D9%8A%D9%86_%D8%A7%D9%84%D8%A3%D9%8A%D9%88%D8%A8%D9%8A_%D8%A8%D8%B7%D8%A7%D8%A8%D8%A7.jpg",
            description: "A scenic border town near Israel, Taba boasts luxury resorts, clear waters, and dramatic mountains. It's a gateway to Pharaoh's Island, Castle Zaman, and the stunning landscapes of Taba Protected Area.",
            topPlaces: []
        },
        {
            id: 38,
            name: "New Valley",
            imageUrl: "https://admin.ask-aladdin.com/photos/egypt/articles/new-valley-governorate-1-askaladdin.webp",
            description: "The largest but least populated governorate, New Valley is known for Dakhla, Kharga, and Farafra Oases. It is rich in desert landscapes, ancient tombs, and hot springs.",
            topPlaces: []
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