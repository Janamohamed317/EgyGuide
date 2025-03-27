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
            "id": 1,
            "name": "Ain El Sokhna",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/21/Ain_sokhna_porto.jpg",
            "description": "Ain El Sokhna is a popular Red Sea resort town located just 120 km from Cairo, making it a perfect weekend getaway. It is known for its soft sandy beaches, warm waters year-round, and luxury resorts. Visitors can enjoy swimming, snorkeling, kitesurfing, and fishing, while the nearby Galala Mountain offers scenic views and adventure activities. Ain El Sokhna is also home to natural hot springs, adding to its appeal as a relaxation spot.",
            "topPlaces": [
                {
                    "id": 1,
                    "name": "Porto Sokhna",
                    "imageUrl": "https://lacosta-realestate.com/wp-content/uploads/2024/03/Porto-Sokhna-Resort-3.jpg"
                },
                {
                    "id": 2,
                    "name": "il monte Galala",
                    "imageUrl": "https://pioneerproperty.net/en/wp-content/uploads/2021/10/il-monte-galala-ain-sokhna.jpg"
                },
                {
                    "id": 3,
                    "name": "Stella Di Mare Beach Resort",
                    "imageUrl": "https://stelladimare.com/wp-content/uploads/2022/03/Stella_Di_Mare_Grand_Hotel_Ain_Soukhna_Pool_3.jpg"
                },
                {
                    "id": 4,
                    "name": "Wind & Kite Surfing Spots",
                    "imageUrl": "https://scoopempire.com/wp-content/uploads/2019/04/kiteboardingrules.jpg"
                },
                {
                    "id": 5,
                    "name": "Natural Hot Springs",
                    "imageUrl": "https://sylviatours.com/Uploadfiles/City/1.jpg"
                }
            ]
        },
        {
            "id": 2,
            "name": "Alexandria",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Citadel_of_qaitbay.jpg/1280px-Citadel_of_qaitbay.jpg",
            "description": "Alexandria, the \"Pearl of the Mediterranean,\" is a historic coastal city founded by Alexander the Great. It features the modern Bibliotheca Alexandrina, the medieval Qaitbay Citadel, and scenic Mediterranean views along its Corniche.",
            "topPlaces": [
                {
                    "id": 10,
                    "name": "Bibliotheca Alexandrina",
                    "imageUrl": "https://cdn.archmedia.eu/cache/images/buildings/gallery/picture_7494_5.jpg-1920x450.jpg?algorithm=4&t=1642592617"
                },
                {
                    "id": 11,
                    "name": "Qaitbay Citadel",
                    "imageUrl": "https://images.memphistours.com/thumbs1/267669585_fortress%20in%20Alexandria.jpg"
                },
                {
                    "id": 12,
                    "name": "Montaza Palace & Gardens",
                    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Montaza_Palace_in_2020.jpg/1280px-Montaza_Palace_in_2020.jpg"
                },
                {
                    "id": 13,
                    "name": "Stanley Bridge",
                    "imageUrl": "https://thumbs.dreamstime.com/b/outstanding-stanley-bridge-considered-to-be-one-most-remarkable-city-landmarks-especially-beautiful-sunset-alexandria-109151954.jpg"
                },
                {
                    "id": 14,
                    "name": "Catacombs of Kom El Shoqafa",
                    "imageUrl": "https://static.wixstatic.com/media/243c32_6a1986f7f2ab43bc908dbdb50f4464d4~mv2.jpg/v1/fill/w_629,h_480,al_c/243c32_6a1986f7f2ab43bc908dbdb50f4464d4~mv2.jpg"
                }
            ]
        },
        {
            "id": 4,
            "name": "Cairo",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/db/Cairo_From_Tower_%28cropped%29.jpg",
            "description": "Cairo, Egypt's capital, is a bustling metropolis blending ancient and modern attractions. It houses the Egyptian Museum, Islamic Cairo's mosques, and lively markets like Khan El Khalili. Along the Nile, visitors can enjoy a mix of historical landmarks and modern city life.",
            "topPlaces": [
                {
                    "id": 15,
                    "name": "Cairo Tower",
                    "imageUrl": "https://i.pinimg.com/736x/28/38/4f/28384f73ad20cb8347a15a0f73518cb3.jpg"
                },
                {
                    "id": 16,
                    "name": "The Egyptian Museum",
                    "imageUrl": "https://cdn.getyourguide.com/img/tour/63e4e910b6888.png/146.jpg"
                },
                {
                    "id": 17,
                    "name": "The National Museum of Egyptian Civilization (nmec)",
                    "imageUrl": "https://www.urtrips.com/wp-content/uploads/2022/06/the-national-museum-of-egyptian-civilization-cairo3.jpg"
                },
                {
                    "id": 18,
                    "name": "Salah El Din Citadel & Mohamed Ali Mosque",
                    "imageUrl": "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/5b/73/78.jpg"
                },
                {
                    "id": 19,
                    "name": "Al-Muizz Street",
                    "imageUrl": "https://beautyegypt.com/wp-content/uploads/2019/04/p4.jpg"
                }
            ]
        },
        {
            "id": 5,
            "name": "Beni Suef",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/51/Beni-Suef_University_main_bldg.jpg",
            "description": "Located along the Nile, Beni Suef is a center for agriculture, limestone production, and modern cement industries.",
            "topPlaces": [
                {
                    "id": 20,
                    "name": "Meidum Pyramid",
                    "imageUrl": "https://www.globaltimes.cn/Portals/0/attachment/2024/2024-10-17/c11b84d8-eeba-4274-a1bc-004246a035a2.jpeg"
                },
                {
                    "id": 21,
                    "name": "Wadi Sannur Cave",
                    "imageUrl": "https://www.flyingcarpettours.com/files/xlarge/1236438053-Cueva-de-Sannur.jpg"
                },
                {
                    "id": 22,
                    "name": "Beni Suef Museum",
                    "imageUrl": "https://sis.gov.eg/Content/Upload/slider/920171215213598.jpg"
                }
            ]
        },
        {
            "id": 6,
            "name": "Beheira",
            "imageUrl": "https://bwadc.com.eg/ws/en/wp-content/uploads/2018/06/opera.jpg",
            "description": "Beheira is an agricultural powerhouse, known for its citrus and cotton farms. The city of Rashid (Rosetta) is famous for the Rosetta Stone, which helped decipher Egyptian hieroglyphs. The region also has important archaeological sites and ancient mosques.",
            "topPlaces": [
                {
                    "id": 23,
                    "name": "Rosetta (Rashid)",
                    "imageUrl": "https://www.egiptoexclusivo.com/wp-content/uploads/2023/06/destino-rosetta-o-rashid-egipto.jpg"
                },
                {
                    "id": 24,
                    "name": "Abu Mandour Mosque",
                    "imageUrl": "https://i0.wp.com/egypttimetravel.com/wp-content/uploads/2020/06/Rosetta-Egypt.jpg"
                },
                {
                    "id": 25,
                    "name": "Edku Lake",
                    "imageUrl": "https://blueline-travels.com/wp-content/uploads/2022/12/AM702035-1024x683.jpg"
                },
                {
                    "id": 26,
                    "name": "Damanhur Opera House",
                    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/%D8%AF%D8%A7%D8%B1_%D8%A3%D9%88%D8%A8%D8%B1%D8%A7_%D8%AF%D9%85%D9%86%D9%87%D9%88%D8%B1.jpg/640px-%D8%AF%D8%A7%D8%B1_%D8%A3%D9%88%D8%A8%D8%B1%D8%A7_%D8%AF%D9%85%D9%86%D9%87%D9%88%D8%B1.jpg"
                }
            ]
        },
        {
            "id": 7,
            "name": "Aswan",
            "imageUrl": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRmslLM-YfPc6n06LQ3CcS1oSP2UUBhkCqgsuyVwDqXsPw7v8-MqgjPbvasU7xpkvObbezEYicIE-KFIC04DbTM-9aLNDiEK575sUm58Q",
            "description": "Aswan is a city of breathtaking landscapes, Nubian culture, and ancient monuments. Highlights include the Philae Temple, the Aswan High Dam, and the beautiful Nubian villages along the Nile.",
            "topPlaces": [
                {
                    "id": 28,
                    "name": "Philae Temple",
                    "imageUrl": "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/mandators/49581/file-manager/philae-temple,-philae-island.jpg"
                },
                {
                    "id": 29,
                    "name": "Abu Simbel Temples",
                    "imageUrl": "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_teasers/322273/600x400-1-50-7c918f047931b1a634b772b7d4e2f4df.jpg"
                },
                {
                    "id": 30,
                    "name": "Nubian Village",
                    "imageUrl": "https://cdn.getyourguide.com/img/tour/8275037c01772425dde04c5f985d98ead309153ca6cf1bfa79de31f692581155.jpeg/68.jpg"
                },
                {
                    "id": 31,
                    "name": "Aswan High Dam",
                    "imageUrl": "https://www.luxorandaswan.com/images/15971864971Aswan-High-Dam.jpg"
                },
                {
                    "id": 32,
                    "name": "plants island",
                    "imageUrl": "https://media.gemini.media/img/Original/2024/1/6/2024_1_6_16_45_56_506.jpg"
                }
            ]
        },
        {
            "id": 8,
            "name": "Assiut",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/January_25th_Bridge_%D9%83%D9%88%D8%A8%D8%B1%D9%8A_25_%D9%8A%D9%86%D8%A7%D9%8A%D8%B1_-_panoramio.jpg/1200px-January_25th_Bridge_%D9%83%D9%88%D8%A8%D8%B1%D9%8A_25_%D9%8A%D9%86%D8%A7%D9%8A%D8%B1_-_panoramio.jpg",
            "description": "Assiut is a cultural and economic hub, home to one of Egypt's top universities. It also has significant Christian monasteries like Deir el-Muharraq.",
            "topPlaces": [
                {
                    "id": 33,
                    "name": "Meir Tombs",
                    "imageUrl": "https://images.squarespace-cdn.com/content/v1/6057ea63deb56a28d188d74e/1627149485654-AGKR75KU1K85T8VT4638/Take-a-trip-to-Meir-Monumental-Tombs_1575972797-1024x768.jpeg"
                },
                {
                    "id": 34,
                    "name": "Deir El-Muharraq Monastery",
                    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/SC_0357_1.jpg/949px-SC_0357_1.jpg"
                },
                {
                    "id": 35,
                    "name": "Prince Taz Palace",
                    "imageUrl": "https://egyptopia.com/shared/images/z/middle/z_palaceofemirtaz-_3992.jpg"
                },
                {
                    "id": 36,
                    "name": "Assiut Barrage",
                    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Assiut_Barrage_1.jpg"
                },
                {
                    "id": 37,
                    "name": "Dronka Monastery",
                    "imageUrl": "https://photos.wikimapia.org/p/00/00/85/86/72_big.jpg"
                }
            ]
        },
        {
            "id": 9,
            "name": "Dahab",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Blue_Hole_2005.JPG/1280px-Blue_Hole_2005.JPG",
            "description": "A laid-back beach town on the Red Sea, Dahab is famous for diving at the Blue Hole, windsurfing, and its bohemian vibe. The town's relaxed cafés, golden beaches, and Bedouin culture make it a favorite for backpackers and adventure seekers.",
            "topPlaces": [
                {
                    "id": 38,
                    "name": "The Blue Hole",
                    "imageUrl": "https://www.pelago.com/img/products/EG-Egypt/dahab-city-tour-blue-hole-desert-and-sea-excursion-from-sharm/705dabb9-bf1c-455a-9e9c-1063b0691c61_dahab-city-tour-blue-hole-desert-and-sea-excursion-from-sharm-xlarge.webp"
                },
                {
                    "id": 39,
                    "name": "Lighthouse Reef",
                    "imageUrl": "https://www.seadancerdivecenter.com/wp-content/uploads/2021/07/hero-sites-Lighthouse.jpg"
                },
                {
                    "id": 40,
                    "name": "Laguna Beach",
                    "imageUrl": "https://st.depositphotos.com/1327777/3795/i/450/depositphotos_37953173-stock-photo-child.jpg"
                },
                {
                    "id": 41,
                    "name": "Mount Sinai Trip",
                    "imageUrl": "https://www.egypttoursportal.com/images/2023/08/Best-Mount-Sinai-Tours-Packages-Egypt-Tours-Portal.jpg"
                },
                {
                    "id": 42,
                    "name": "Abu Galum Nature Reserve",
                    "imageUrl": "https://api.fustany.com/fustany/gallery/1/image/49348/places_to_visit_in_dahab_fustany_5.jpg"
                }
            ]
        },
        {
            "id": 10,
            "name": "Dakhlia",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9_%D8%A7%D9%84%D8%AF%D9%82%D9%87%D9%84%D9%8A%D8%A9_-_%D8%A7%D9%84%D9%85%D9%86%D8%B5%D9%88%D8%B1%D8%A9.jpg/1280px-%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9_%D8%A7%D9%84%D8%AF%D9%82%D9%87%D9%84%D9%8A%D8%A9_-_%D8%A7%D9%84%D9%85%D9%86%D8%B5%D9%88%D8%B1%D8%A9.jpg",
            "description": "The capital, Mansoura, is a major university city and medical hub. The governorate is known for its agricultural production and is home to Lake Manzala, an important fishing area.",
            "topPlaces": [
                {
                    "id": 43,
                    "name": "Mansoura National Museum",
                    "imageUrl": "https://www.vetogate.com/Upload/libfiles/533/0/276.jpg"
                },
                {
                    "id": 44,
                    "name": "El Senbellawein Lake",
                    "imageUrl": "https://www.nile.eg/wp-content/uploads/2019/10/112.jpg"
                },
                {
                    "id": 45,
                    "name": "Dakahlia Corniche",
                    "imageUrl": "https://www.mans.edu.eg/images/album/mansoura-city/mc-nile.jpg"
                }
            ]
        },
        {
            "id": 11,
            "name": "Damietta",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/%D9%85%D9%87%D9%86%D9%87_%D8%B5%D9%8A%D8%AF_%D8%A7%D9%84%D8%A7%D8%B3%D9%85%D8%A7%D9%84%D9%83_%28Fishing%29.jpg/1920px-%D9%85%D9%87%D9%86%D9%87_%D8%B5%D9%8A%D8%AF_%D8%A7%D9%84%D8%A7%D8%B3%D9%85%D8%A7%D9%84%D9%83_%28Fishing%29.jpg",
            "description": "Damietta is known for its furniture industry and scenic Mediterranean beaches. The city also has ancient mosques and modern industrial zones.",
            "topPlaces": [
                {
                    "id": 46,
                    "name": "Ras El Bar",
                    "imageUrl": "https://www.cairo24.com/Upload/libfiles/47/0/25.jpg"
                },
                {
                    "id": 47,
                    "name": "El Lesan Peninsula",
                    "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRk5PSdvvscpbBG9zsDPrsHdP-nQQ2dgC9ztqjmYGghh6zqfoTU"
                },
                {
                    "id": 48,
                    "name": "Damietta Port",
                    "imageUrl": "https://media.elbalad.news/2025/2/large/8351016650636202502121116531653.jpg"
                }
            ]
        },
        {
            "id": 12,
            "name": "El Gouna",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/El_Gouna_Yachts_01.jpg/1280px-El_Gouna_Yachts_01.jpg",
            "description": "El Gouna is a modern resort town with pristine beaches, turquoise lagoons, and upscale resorts. It's a hotspot for kitesurfing, diving, and wakeboarding, while Abu Tig Marina and Downtown offer lively dining and nightlife. Known for its eco-friendly design and the El Gouna Film Festival, it's a perfect mix of relaxation and adventure.",
            "topPlaces": [
                {
                    "id": 49,
                    "name": "Abu Tig Marina",
                    "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQhrjBNvtTq4-4TOR2dRT_SXuivBG3kfxYMxsIhPZWQ9f4xD89m"
                },
                {
                    "id": 50,
                    "name": "Sliders Cable Park",
                    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/428665176.jpg?k=67144fb668f294a4504f7c016905d1c4aa6bcdcf17dd416968c1a5c57c3be62e&o=&hp=1"
                },
                {
                    "id": 51,
                    "name": "Mangroovy Beach",
                    "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRkgBTdvmPiKZLfSxF02R42nci1oSBqlzKLPQxeu21US0ajs7PM"
                },
                {
                    "id": 52,
                    "name": "El Gouna Film Festival",
                    "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRHUDZKSjFwK6vyBnduJ-_qhBX4Gpwz9Uovkx1sJv28-JPzeL5d"
                },
                {
                    "id": 53,
                    "name": "Downtown El Gouna",
                    "imageUrl": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/58/13/66.jpg"
                }
            ]
        },
        {
            "id": 13,
            "name": "Fayoum",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Faiyum_Oasis_by_Zorbey_Tun%C3%A7er.jpg/420px-Faiyum_Oasis_by_Zorbey_Tun%C3%A7er.jpg",
            "description": "Fayoum is a natural wonder, home to the UNESCO-listed Wadi El-Hitan (Valley of the Whales), Lake Qarun, and the Hawara Pyramid.",
            "topPlaces": [
                {
                    "id": 54,
                    "name": "Wadi El Rayan Waterfalls",
                    "imageUrl": "https://scoopempire.com/wp-content/uploads/2018/08/Wadi-Rayan-2.jpg"
                },
                {
                    "id": 55,
                    "name": "Wadi El Hitan (Whale Valley)",
                    "imageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQThEFxGeXEFQlCOhwNu7hRQu2uKCW5nLz0L-ye-Dq_66dX7MjA"
                },
                {
                    "id": 56,
                    "name": "Tunis Village",
                    "imageUrl": "https://media-cdn.tripadvisor.com/media/photo-s/08/fe/d1/64/lazib-inn-resort-spa.jpg"
                },
                {
                    "id": 57,
                    "name": "Qarun Lake",
                    "imageUrl": "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/7f/b1/ca.jpg"
                },
                {
                    "id": 58,
                    "name": "SandBoarding",
                    "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR5Zf0JB4Mls90HupnsIZ43e2kZEiP0Gfu1JuH2pQYw0AjtFMPd"
                }
            ]
        },
        {
            "id": 14,
            "name": "Gharbia",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Tanta-1.jpg/1200px-Tanta-1.jpg",
            "description": "Tanta, the capital of Gharbia, is famous for the annual Moulid of Sayyid Ahmed Al-Badawi, one of Egypt's largest religious festivals. The governorate is also known for producing high-quality cotton.",
            "topPlaces": [
                {
                    "id": 59,
                    "name": "El-Sayed Ahmed Al-Badawi Mosque",
                    "imageUrl": "https://arabicodyssey.com/images/eg/TantaMosq.jpg"
                },
                {
                    "id": 60,
                    "name": "Tanta Museum​",
                    "imageUrl": "https://betamedia.experienceegypt.eg/media/experienceegypt/img/Original/2022/7/21/2022_7_21_0_29_53_678.jpg"
                },
                {
                    "id": 61,
                    "name": "Tanta Market",
                    "imageUrl": "https://sceneeats.com/Content/Admin/Uploads/Articles/ArticlesMainPhoto/3318/9522c759-04a6-4e7a-94c5-dfc7521e42f4.jpg"
                },
                {
                    "id": 62,
                    "name": "Billy Beez Mall of Tanta",
                    "imageUrl": "https://d26czciiy2b0rz.cloudfront.net/uploads/medium/copy-1716810954-copy-1702811149-Billy-Web-1684137711.jpg"
                },
                {
                    "id": 63,
                    "name": "El-Mahalla Stadium",
                    "imageUrl": "https://misralbalad.com/wp-content/uploads/2024/11/FB_IMG_1730808940026.jpg"
                }
            ]
        },
        {
            "id": 15,
            "name": "Giza",
            "imageUrl": "https://www.touristegypt.com/wp-content/uploads/2023/03/giza-pyramids-cairo-egypt-with-palm-1024x634.jpg",
            "description": "Giza is world-famous for the Great Pyramids of Giza, the last remaining wonder of the ancient world. The Sphinx and the upcoming Grand Egyptian Museum add to its historical significance. The city also has modern urban areas, shopping centers, and scenic views along the Nile.",
            "topPlaces": [
                {
                    "id": 64,
                    "name": "Great Pyramid of Giza",
                    "imageUrl": "https://www.sfari.com/wp-content/uploads/2023/02/%D8%A7%D9%8A%D9%86-%D8%AA%D9%82%D8%B9-%D9%85%D8%B5%D8%B1-%D9%88%D9%83%D9%85-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D9%81%D8%A7%D8%AA-%D8%A8%D9%8A%D9%86-%D8%A7%D9%84%D9%85%D8%AF%D9%86-%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D8%A9.jpg"
                },
                {
                    "id": 65,
                    "name": "The Sphinx",
                    "imageUrl": "https://www.mobtada.com/uploads/images/2023/02/16760185490.jpg"
                },
                {
                    "id": 66,
                    "name": "Saqqara (Step Pyramid of Djoser)",
                    "imageUrl": "https://cdn.mos.cms.futurecdn.net/JkEtvqd7dJpBZ5ASYv4CdM.jpg"
                },
                {
                    "id": 67,
                    "name": "Dahshur (Red & Bent Pyramids)",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22x96mIqY7gXXFZFdBeRuvf0jhRBzBd68RRJW8YpjkFgurUgV"
                },
                {
                    "id": 68,
                    "name": "Grand Egyptian Museum (GEM)",
                    "imageUrl": "https://www.travelandleisure.com/thmb/SyW2YQj4zszjQ6ZM73yOpX9f3t8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-grand-egyptian-museum-EGYPTMUSE0125-9119d995120a42c7a90acf8067227664.jpg"
                }
            ]
        },
        {
            "id": 16,
            "name": "Hurghada",
            "imageUrl": "https://images.squarespace-cdn.com/content/v1/5f7f580e2a273179f84ceaee/6af9a594-801b-4118-93a0-ad0288b3991e/hurghada-islands.jpg",
            "description": "A popular beach and diving destination, Hurghada features family-friendly resorts, lively nightlife, and coral reefs. Visitors can explore Giftun Island, El Dahar's markets, and top snorkeling spots along the Red Sea.",
            "topPlaces": [
                {
                    "id": 69,
                    "name": "Giftun Island",
                    "imageUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLfs3-AUCJpdUzDAEyGtYQG8OV65_g7TsQ51xVrwQQBb69f6H6"
                },
                {
                    "id": 70,
                    "name": "Hurghada Grand Aquarium",
                    "imageUrl": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/b6/68/2d.jpg"
                },
                {
                    "id": 71,
                    "name": "Sahl Hasheesh",
                    "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTPfW4s5T8OYvhb60TwtfXb6SuxgYMDhkK2Mby7uNYzgAVI2k7z"
                },
                {
                    "id": 72,
                    "name": "Makadi Bay",
                    "imageUrl": "https://www.tripsinegypt.com/wp-content/uploads/2020/04/Makadi-Bay-Hurghada-Trips-in-Egypt.jpg"
                },
                {
                    "id": 73,
                    "name": "Hurghada Marina",
                    "imageUrl": "http://cf.bstatic.com/xdata/images/hotel/max1024x768/401067558.jpg?k=795c46d575f799c3d695ca23e27c803a6dd6e44d99ea23a82dab2378b3d5364a&o=&hp=1"
                }
            ]
        },
        {
            "id": 17,
            "name": "Ismailia",
            "imageUrl": "https://cdn.bookaway.com/media/files/672d13bee74991699485eb38.jpeg?quality=50&width=2000",
            "description": "Nicknamed the \"City of Beauty and Enchantment,\" Ismailia is located along the Suez Canal and is famous for its lush green landscapes and Lake Timsah. The city has a mix of old colonial buildings and modern developments.",
            "topPlaces": [
                {
                    "id": 74,
                    "name": "Temsah Lake",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsK_PNteIfvOBgiV2CJaVd3rBegxG6UJ8GugxLuJ3fF5XbTTxp"
                },
                {
                    "id": 75,
                    "name": "Ismailia Museum",
                    "imageUrl": "https://english.ahram.org.eg/Media/News/2017/3/4/2017-636241919969244172-924.png"
                },
                {
                    "id": 76,
                    "name": "Fanara Beach",
                    "imageUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRfxaXnlrAjLcfd40H-wmCsgCYSRN_mWDKq5LUrlB0IbB_TrKVf"
                },
                {
                    "id": 77,
                    "name": "De Lesseps House",
                    "imageUrl": "https://maximig.com/wp-content/uploads/2023/12/de-lesspes-3.jpg"
                },
                {
                    "id": 78,
                    "name": "Fayed Resort Area",
                    "imageUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR48PX-IExy5NElCXt8vG2B5KSu7rk5on8L-PpmqDyUF01mjVVl"
                }
            ]
        },
        {
            "id": 18,
            "name": "Kafr El Sheikh",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Main_building_of_Kafr_El-Sheikh_Governorate.JPG",
            "description": "A coastal governorate, Kafr El Sheikh is a major center for fish farming and agriculture. It includes Burullus Lake, an important ecological site.",
            "topPlaces": [
                {
                    "id": 79,
                    "name": "Burullus Lake",
                    "imageUrl": "https://watanimg.elwatannews.com/old_news_images/large/26453_660_Lanscape.jpg"
                },
                {
                    "id": 80,
                    "name": "Sakha Church",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3rrX0b315jk5gEQPMkyb2Yc01VrZxICEUgOCl7Iv6QD10lQKi"
                },
                {
                    "id": 81,
                    "name": "Kafr El Sheikh University Museum",
                    "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHb6oTHe4-_J1QgXBHLw6aWn_-11RDtRlP6vmEf5F2lfLwxj3h"
                },
                {
                    "id": 82,
                    "name": "Desouk Mosque",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRadguedsO12tNxo-5HSx5lMHltOdNpRAh2-smikKBaE1iok1gr"
                }
            ]
        },
        {
            "id": 19,
            "name": "Luxor",
            "imageUrl": "https://www.osiristours.com/wp-content/uploads/2018/07/maxresdefault.jpg",
            "description": "Luxor, often called the \"world greatest open-air museum,\" is home to the Karnak Temple, Luxor Temple, and the Valley of the Kings, where Tutankhamun's tomb was discovered.",
            "topPlaces": [
                {
                    "id": 83,
                    "name": "Karnak Temple",
                    "imageUrl": "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/mandators/49581/file-manager/karnak-temple,the-hypostyle-hall.jpg"
                },
                {
                    "id": 84,
                    "name": "Valley of the Kings",
                    "imageUrl": "https://egyptra.pro/uploads/products/67229d40419a5.jpg"
                },
                {
                    "id": 85,
                    "name": "Hatshepsut Temple",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0NLobphTrKpyISkxy81i3TLUjf4XA6MxbCA9r9rCBHtCbBIXScdckL0uczYjjZ5oB8q4&usqp=CAU"
                },
                {
                    "id": 86,
                    "name": "Luxor Temple",
                    "imageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ9iMdySxPPBf7fqrJdxF0ItVetcEMHSCyAZHVtfAUh4zRD4HbP"
                },
                {
                    "id": 87,
                    "name": "Hot Air Balloon Ride",
                    "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQyI4CXYzGhcPVET5gn4EXtebzxaHsKXovBULrQQ0PJQFh-JRhm"
                }
            ]
        },
        {
            "id": 20,
            "name": "Marsa Alam",
            "imageUrl": "https://www.egiptoexclusivo.com/wp-content/uploads/2023/07/marsa-alam-coast.jpg",
            "description": "A secluded paradise, Marsa Alam is known for pristine coral reefs, Dolphin House, and Wadi El Gemal National Park. Its eco-friendly resorts and remote beaches make it perfect for a quiet escape.",
            "topPlaces": [
                {
                    "id": 88,
                    "name": "Sharm El Luli",
                    "imageUrl": "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_galleries/195589/900x600-1-50-38803b1c3c1dcf027f6b570350896fb4.jpg"
                },
                {
                    "id": 89,
                    "name": "Dolphin House",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCFTjmEeHlyqS1cGRi96onlFWg_utQGjEVA&s"
                },
                {
                    "id": 90,
                    "name": "Wadi El Gemal National Park",
                    "imageUrl": "https://www.egypttoursgate.com/uploads/article/wadi-el-gemal-park.jpg"
                },
                {
                    "id": 91,
                    "name": "Elphinstone Reef",
                    "imageUrl": "https://outdoortrip-web.s3.eu-central-1.amazonaws.com/1459-diving-at-elphinstone-reef-for-experienced-divers/diving-at-elphinstone-reef-for-experienced-divers.5ce2aec8a3a3b.jpg"
                },
                {
                    "id": 92,
                    "name": "lazuli hotel",
                    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/293585915.jpg?k=b4f0350a524a69fcd47cc091da9ff2be9f097b1ce6bcbddff4b2b1b4fe50f220&o=&hp=1"
                }
            ]
        },
        {
            "id": 21,
            "name": "Matrouh",
            "imageUrl": "https://betamedia.experienceegypt.eg/media/experienceegypt/img/Original/2022/8/8/2022_8_8_23_41_29_70.jpeg",
            "description": "A coastal paradise, Matrouh is famous for Marsa Matrouh's crystal-clear beaches like Agiba Beach and Cleopatra's Bath. The governorate also includes Siwa Oasis, a historic desert town known for its Amun Oracle Temple, hot springs, and salt lakes.",
            "topPlaces": [
                {
                    "id": 93,
                    "name": "Agiba Beach",
                    "imageUrl": "https://betamedia.experienceegypt.eg/media/experienceegypt/img/Original/2022/9/27/2022_9_27_19_37_4_281.jpg"
                },
                {
                    "id": 94,
                    "name": "Cleopatra's Bath",
                    "imageUrl": "https://gate.ahram.org.eg/Media/News/2022/11/12/19_2022-638038458572389337-238.jpg"
                },
                {
                    "id": 95,
                    "name": "Rommel Cave Museum",
                    "imageUrl": "https://egyptopia.com/shared/images/z/big/z_rommel-museum-x-_4339.jpg"
                },
                {
                    "id": 96,
                    "name": "Almaza Bay",
                    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491550401.jpg?k=616debe29ab33ca7c2efb1591f3a87a7ea6348b5940eca7f5c0751566d49d94d&o=&hp=1"
                },
                {
                    "id": 97,
                    "name": "Marsa Matrouh Corniche",
                    "imageUrl": "https://halla-matrouh-premium-mersa-matruh-eg-51762.albooked.com/data/Photos/OriginalPhoto/15814/1581486/1581486831/Halla-Matrouh-Sea-View-Apartment-Mersa-Matruh-Exterior.JPEG"
                }
            ]
        },
        {
            "id": 22,
            "name": "Menoufia",
            "imageUrl": "https://play-lh.googleusercontent.com/49OOvFNwfohX9VRwLK2B7bXPFDj-aAmChkj11HyQVotVd4VlHgo9JsoEtjynHGHQ3cU=w526-h296-rw",
            "description": "A governorate with high literacy rates, Menoufia has a strong educational system and is an agricultural hub. The city of Shebin El-Kom is the administrative capital.",
            "topPlaces": [
                {
                    "id": 98,
                    "name": "Sidi Shebl Mosque",
                    "imageUrl": "https://egyptian-gazette.com/media/2023/06/main-4-750x536.jpeg"
                },
                {
                    "id": 99,
                    "name": "Menoufia Tourist Tower",
                    "imageUrl": "https://khoroga.com/uploads/eed60dae08bb.jpg"
                },
                {
                    "id": 100,
                    "name": "Shebin El-Kom",
                    "imageUrl": "https://media.elwatannews.com/media/img/mediaarc/large/16161100841731680557.jpg"
                },
                {
                    "id": 101,
                    "name": "Menoufia University",
                    "imageUrl": "https://www.egypttoday.com/siteimages/Larg/202302110143524352.jpg"
                },
                {
                    "id": 102,
                    "name": "Agricultural Landscapes",
                    "imageUrl": "https://img.youm7.com/ArticleImgs/2023/12/3/5746124-%D8%B2%D8%B1%D8%A7%D8%B9%D8%A9-%D8%A7%D9%84%D8%A8%D8%B7%D8%A7%D8%B7%D8%B3-%D8%A8%D8%A3%D8%B1%D8%A6%D9%89-%D8%A7%D9%84%D9%85%D9%86%D9%88%D9%81%D9%8A%D8%A9.jpg"
                }
            ]
        },
        {
            "id": 23,
            "name": "Minya",
            "imageUrl": "https://english.ahram.org.eg/Media/News/2023/1/17/41_2023-638095900658528007-852.jpg",
            "description": "Minya features Beni Hassan's rock-cut tombs and Tell el-Amarna, the former capital of Pharaoh Akhenaten. The city has a vibrant university and industrial sector.",
            "topPlaces": [
                {
                    "id": 103,
                    "name": "Beni Hassan Tombs",
                    "imageUrl": "https://egyptiancoffins.org/images/beni-hasan/benihasan.jpg"
                },
                {
                    "id": 104,
                    "name": "Tuna El-Gebel",
                    "imageUrl": "https://www.egypttoday.com/siteimages/Larg/12382.jpg"
                },
                {
                    "id": 105,
                    "name": "Tell El-Amarna ",
                    "imageUrl": "https://egyptopia.com/shared/images/z/big/z_akhetatun-_4267.jpg"
                },
                {
                    "id": 106,
                    "name": "Frazer Tombs",
                    "imageUrl": "https://betamedia.experienceegypt.eg/media/experienceegypt/img/Original/2022/8/9/2022_8_9_4_8_28_196.jpg"
                },
                {
                    "id": 107,
                    "name": "Minya Corniche",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaK6wwoQw8CQ0s8ECYNIPtezzrvLh6zmkWaw&s"
                }
            ]
        },
        {
            "id": 24,
            "name": "North Coast (Sahel)",
            "imageUrl": "https://www.imtilak.net/uploads/posts/abae490339e6ee5f00a85a0776767daeNmO684.webp",
            "description": "The North Coast (Sahel) is Egypt's top summer destination, known for its turquoise Mediterranean waters, white sandy beaches, and luxury resorts.",
            "topPlaces": [
                {
                    "id": 108,
                    "name": "Sidi Abdel Rahman (Marassi)",
                    "imageUrl": "https://www.concept.com.eg/wp-content/uploads/2022/07/16.jpg"
                },
                {
                    "id": 109,
                    "name": "Hacienda Bay",
                    "imageUrl": "https://www.propertyfinder.eg/property/3cb876d34e2ccaf85bfb96c628b372d8/668/452/MODE/7fd6b1/6875681-58645o.jpg?ctr=eg"
                },
                {
                    "id": 110,
                    "name": "La Vista Bay",
                    "imageUrl": "https://lavista.com.eg/wp-content/uploads/2023/10/6.png"
                },
                {
                    "id": 111,
                    "name": "Alamein City",
                    "imageUrl": "https://greekreporter.com/wp-content/uploads/2024/03/New-Alamein-city-on-the-north-coast-of-Egypt.-Credit-Johan5885.-CC-BY-1.0-Wikimedia-Commons-Johan5885.jpg"
                },
                {
                    "id": 112,
                    "name": "Lakeyard",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAv3x0LuSOfLHqbxyE8xtvDRU8J5ulfUyvawoGHNlV2K8FZ5-Fc2FgOejZZIRALThmA0o&usqp=CAU"
                }
            ]
        },
        {
            "id": 25,
            "name": "North Sinai",
            "imageUrl": "https://beta.sis.gov.eg/media/381346/wonderful-picture-palm-trees-beach-al-arish-northern-egypt-784462-44.jpg",
            "description": "Arish, the capital, is known for its Mediterranean beaches. North Sinai has historical significance but is also a sensitive military area.",
            "topPlaces": [
                {
                    "id": 113,
                    "name": "Al-Arish Beach",
                    "imageUrl": "https://travel2egypt.org/wp-content/uploads/2024/03/9bedf7a8f26f77fe18728665da9751c8-1.jpg"
                },
                {
                    "id": 114,
                    "name": "Al-Arish Museum",
                    "imageUrl": "https://images.trvl-media.com/lodging/1000000/10000/1100/1052/16f1f75a_y.jpg"
                },
                {
                    "id": 115,
                    "name": "Zaraniq Natural Reserve​",
                    "imageUrl": "https://www.sis.gov.eg/Content/Upload/slider/1020202021135958.jpg"
                },
                {
                    "id": 116,
                    "name": "Bedouin Market",
                    "imageUrl": "https://www.shutterstock.com/image-photo/colorful-bright-souvenir-market-siwa-600nw-2144242257.jpg"
                },
                {
                    "id": 117,
                    "name": "Al-Arish Port",
                    "imageUrl": "https://www.arabcont.com/Images/ProjectImage/Aresh4.jpg"
                }
            ]
        },
        {
            "id": 26,
            "name": "Nuweiba",
            "imageUrl": "https://betamedia.experienceegypt.eg/media/experienceegypt/img/Original/2022/8/7/2022_8_7_17_58_35_613.jpg",
            "description": "A quiet coastal retreat, Nuweiba is known for beach camps, turquoise waters, and a peaceful Bedouin atmosphere.",
            "topPlaces": [
                {
                    "id": 118,
                    "name": "Colored Canyon",
                    "imageUrl": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/8d/d1/2c.jpg"
                },
                {
                    "id": 119,
                    "name": "Castle Zaman",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5l0gBUBZIYbu_4kBQYBe8hIcUDltcUFzgQ&s"
                },
                {
                    "id": 120,
                    "name": "Abu Galum Reserve",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpMr7Zf8OdKsKGBptzGAHQ5pOUjgGwMbLPg&s"
                },
                {
                    "id": 121,
                    "name": "Tarabin Beach",
                    "imageUrl": "https://media-cdn.tripadvisor.com/media/photo-s/01/62/ee/3e/tarabin.jpg"
                }
            ]
        },
        {
            "id": 27,
            "name": "Port Said",
            "imageUrl": "https://mediaim.expedia.com/destination/1/15e816d45c63d1d944528680ce106807.jpg",
            "description": "Port Said, located at the northern entrance of the Suez Canal, is known for its colonial architecture and free trade zone.",
            "topPlaces": [
                {
                    "id": 122,
                    "name": "Suez Canal Entrance",
                    "imageUrl": "https://www.mediastorehouse.com/p/690/suez-canal-entrance-lake-timsah-c-22335354.jpg.webp"
                },
                {
                    "id": 123,
                    "name": "Ferdinand de Lesseps Statue",
                    "imageUrl": "https://digitalcollections.aucegypt.edu/digital/api/singleitem/image/p15795coll21/938/default.jpg"
                },
                {
                    "id": 124,
                    "name": "Al-Gameel Beach",
                    "imageUrl": "https://nasseryouthmovement.net/uploads/images/2022/05/image_750x_62799cc54e18a.jpg"
                },
                {
                    "id": 125,
                    "name": "Port Said Military Museum",
                    "imageUrl": "https://www.mod.gov.eg/extras/photoMuseumPics/27/%D9%85%D8%AA%D8%AD%D9%81-%D8%A8%D9%88%D8%B1-%D8%B3%D8%B9%D9%8A%D8%AF-%D8%A7%D9%84%D8%AD%D8%B1%D8%A8%D9%89.jpg"
                },
                {
                    "id": 126,
                    "name": "Port Said Lighthouse",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRziFkDxi8edMQSZogV6DnCRXLO19cY4JF1IB66yEd3Wu6kGViutIBwei2FYvHmonO6R-o&usqp=CAU"
                }
            ]
        },
        {
            "id": 28,
            "name": "Qalyubia",
            "imageUrl": "https://i0.wp.com/landioustravel.com/wp-content/uploads/2022/06/Qalyubia-Governorate-e1654740835866.jpg?fit=1200%2C675&ssl=1",
            "description": "Part of Greater Cairo, Qalyubia is an agricultural and industrial hub. The governorate's capital, Banha, is known for its vast banana and mango farms.",
            "topPlaces": [
                {
                    "id": 127,
                    "name": "Banha Gardens",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSsQxhxeL7WecTvXa9g1t6S05ZglzgakFYWkkypqeKOXplChLd_GOlvHaU32CzSpm5coo&usqp=CAU"
                },
                {
                    "id": 128,
                    "name": "Great Mosque of Banha",
                    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Naser_mosque.jpg/200px-Naser_mosque.jpg"
                },
                {
                    "id": 129,
                    "name": "Banha Corniche",
                    "imageUrl": "https://i.pinimg.com/736x/58/bc/ae/58bcae3603eff3c33b35a88718d28dd3.jpg"
                }
            ]
        },
        {
            "id": 29,
            "name": "Qena",
            "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/2f/76/05/photo0jpg.jpg?w=600&h=-1&s=1",
            "description": "Qena is best known for Dendera Temple, one of the best-preserved temples in Egypt, dedicated to Hathor. The governorate is also a major producer of sugar and ceramics.",
            "topPlaces": [
                {
                    "id": 130,
                    "name": "Dendera Temple Complex",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEFckRj8TCKDZedhXmvn8VCU3wKVIE8O-BQ&s"
                },
                {
                    "id": 131,
                    "name": "Qena Corniche",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJi7hgmh7Ci64IAABqiVnIWqLCmx6PXZZ7-w&s"
                },
                {
                    "id": 132,
                    "name": "Al-Ashraf Mosque",
                    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Cairo_-_Sultan_Ashref_Barsbey_Mosque_Exterior.jpg"
                },
                {
                    "id": 133,
                    "name": "Monastery of the cross and anba shenouda",
                    "imageUrl": "https://watanimg.elwatannews.com/image_archive/original_lower_quality/20543585201551618055.jpg"
                },
                {
                    "id": 134,
                    "name": "Nag Hammadi Bridge",
                    "imageUrl": "https://www.presidency.eg/media/102493/%D9%83%D9%88%D8%A8%D8%B1%D9%8A-%D9%86%D8%AC%D8%B9-%D8%AD%D9%85%D8%A7%D8%AF%D9%8Ajpg.jpg"
                }
            ]
        },
        {
            "id": 30,
            "name": "Red Sea",
            "imageUrl": "https://www.scenenow.com/Content/Admin/Uploads/Articles/ArticlesMainPhoto/57832/48f26554-a759-4461-b08e-a654afa4a44a.jpg",
            "description": "This coastal region is home to Hurghada, Marsa Alam, and stunning coral reefs. It is a prime destination for diving, snorkeling, and beach tourism.",
            "topPlaces": [
                {
                    "id": 135,
                    "name": "Giftun Island",
                    "imageUrl": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/10/3f/5d/0c.jpg"
                },
                {
                    "id": 136,
                    "name": "Dolphin House",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCFTjmEeHlyqS1cGRi96onlFWg_utQGjEVA&s"
                },
                {
                    "id": 137,
                    "name": "El Gouna",
                    "imageUrl": "https://www.elgouna.com/_next/image?url=%2Fimages%2Fhotels%2Fall-hotels-header-mob-1.webp&w=3840&q=75"
                },
                {
                    "id": 138,
                    "name": "Sharm El Luli",
                    "imageUrl": "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_galleries/195589/900x600-1-50-38803b1c3c1dcf027f6b570350896fb4.jpg"
                },
                {
                    "id": 139,
                    "name": "Makadi Water World",
                    "imageUrl": "https://accesspointeg.com/wp-content/uploads/2023/01/b9-1.png"
                }
            ]
        },
        {
            "id": 31,
            "name": "Sharm El Sheikh",
            "imageUrl": "https://www.youregypttours.com/storage/796/1657002004.jpg",
            "description": "A top Red Sea resort, Sharm El Sheikh is famous for luxury resorts, coral reefs, and nightlife. It offers world-class diving at Ras Mohammed, vibrant Naama Bay, and easy access to Mount Sinai and St. Catherine's Monastery.",
            "topPlaces": [
                {
                    "id": 140,
                    "name": "Ras Mohammed National Park",
                    "imageUrl": "https://sharmzone.com/uploads/images/2022/03/image_750x_621f5c85ee644.jpg"
                },
                {
                    "id": 141,
                    "name": "Naama Bay",
                    "imageUrl": "https://www.onedaysharm.com/wp-content/uploads/2022/03/Untitled-o.photoshop.jpg"
                },
                {
                    "id": 142,
                    "name": "Soho Square",
                    "imageUrl": "https://d1eslbuxori8y2.cloudfront.net/savoygroup-sharm.com-1676013518/cms/cache/v2/657ef9580ebf9.jpg/1919x1079/fit/80/07bc049d803562f17c460766fb6e7ce8.jpg"
                },
                {
                    "id": 143,
                    "name": "Shark's Bay",
                    "imageUrl": "https://www.holidayhypermarket.co.uk/wp-content/uploads/2019/04/HH_Sharks_Bay_shutterstock_1840738711-2.png"
                },
                {
                    "id": 144,
                    "name": "Sahaba Mosque",
                    "imageUrl": "https://hurghadaexcursion.com/wp-content/uploads/2023/02/Sahaba-Mosque-1024x678-1-1024x1024.webp"
                }
            ]
        },
        {
            "id": 32,
            "name": "Sharqia",
            "imageUrl": "https://admin.ask-aladdin.com/photos/egypt/articles/Suez-askaladdin.webp",
            "description": "One of Egypt's largest agricultural regions, Sharqia is known for the ancient city of Bubastis, a center of worship for the goddess Bastet. The city of Zagazig serves as its administrative center.",
            "topPlaces": [
                {
                    "id": 145,
                    "name": "Sharqia Agricultural Museum",
                    "imageUrl": "https://www.cairotoptours.com/storage/2669/conversions/The%20site%20museum%20of%20Tel%20Basta%20in%20Zagazig-webp.webp"
                },
                {
                    "id": 146,
                    "name": "Zagazig University Museum",
                    "imageUrl": "https://www.timeshighereducation.com/cms-academic/sites/default/files/migrated_institution_images/header_image_auc.jpg"
                }
            ]
        },
        {
            "id": 33,
            "name": "Siwa Oasis",
            "imageUrl": "https://lh3.googleusercontent.com/proxy/QyszF2WFaxgzZv7i3ordHKliMhtOkHykgvcEyLz33pwmJ0Toh-zDEHDBkXj9RygC5qlS7nmG9pJjEK8kC2m9VIrjTQbKF6T2VdzxMAk",
            "description": "One of Egypt's most stunning oases, known for its desert landscapes, salt lakes, and hot springs. Key attractions include the Temple of Amun, the Mountain of the Dead, and Shali Fortress. It's a perfect destination for relaxation and experiencing authentic Bedouin culture.",
            "topPlaces": [
                {
                    "id": 147,
                    "name": "Shali Fortress",
                    "imageUrl": "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/mandators/56119/cms/562473/940x500-1-50-d7a961e2f1c0fc8dd3b7f71532b6dca9.jpg"
                },
                {
                    "id": 148,
                    "name": "Cleopatra's Spring",
                    "imageUrl": "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/mandators/41668/cms/562188/940x500-1-50-7249e9cf516e1ca176979237f1ffe4d8.jpg"
                },
                {
                    "id": 149,
                    "name": "The Great Sand Sea",
                    "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/e2/8a/39/safari-trip.jpg?w=1200&h=-1&s=1"
                },
                {
                    "id": 150,
                    "name": "Salt Lakes",
                    "imageUrl": "https://www.magnificentworld.com/wp-content/uploads/2020/06/Siwa-Oasis-of-Egypt.jpg"
                },
                {
                    "id": 151,
                    "name": "Temple of the Oracle of Amun",
                    "imageUrl": "https://mlrhpz8jmuut.i.optimole.com/cb:lD8R.5019e/w:auto/h:auto/q:mauto/f:best/ig:avif/id:04171cff8b5e3ef1774cb12322074c69/https://www.egypttoursplus.com/Temple-of-Amun-view-to-the-north-Aghurmi-Siwa-Photo-by-Roland-Unger.jpg"
                }
            ]
        },
        {
            "id": 34,
            "name": "Sohag",
            "imageUrl": "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/mandators/49581/file-manager/sohag,-sohag-city,-sohag-travel.jpg",
            "description": "A significant historical site, Sohag houses the Abydos Temple, an important center of ancient Egyptian religious practices.",
            "topPlaces": [
                {
                    "id": 152,
                    "name": "Abydos Temple",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6mWwdAQQgWDkCYtawFkQX_beBvPRY0SrVK3bxecA8BtBCXhDJlbeX8NM2jWSfnJFlTU&usqp=CAU"
                },
                {
                    "id": 153,
                    "name": "White Monastery",
                    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6e/WhiteMonasteryCourtEast.jpg"
                },
                {
                    "id": 154,
                    "name": "Red Monastery",
                    "imageUrl": "https://d1b3667xvzs6rz.cloudfront.net/2020/05/1-8.jpg"
                },
                {
                    "id": 155,
                    "name": "Sohag National Museum",
                    "imageUrl": "https://english.ahram.org.eg/Media/News/2018/8/10/2018-636695208312049451-204.jpg"
                },
                {
                    "id": 156,
                    "name": "Akhmim Open-Air Museum",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNP1BJ8X-pqiTBjJr09B_U_aK70XOaPQccAQ&s"
                }
            ]
        },
        {
            "id": 35,
            "name": "South Sinai",
            "imageUrl": "https://static.zawya.com/view/acePublic/alias/contentid/OTQ4MDNmNzYtNThiZS00/1/1337428439.webp",
            "description": "A tourist hotspot, South Sinai features Sharm El Sheikh, Dahab, and St. Catherine's Monastery at the foot of Mount Sinai. The governorate is also a top diving destination.",
            "topPlaces": [
                {
                    "id": 157,
                    "name": "Ras Mohammed National Park",
                    "imageUrl": "https://sharmzone.com/uploads/images/2022/03/image_750x_621f5c85ee644.jpg"
                },
                {
                    "id": 158,
                    "name": "The Blue Hole (Dahab)",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGAPTbkgPi0gyd2BkwqCkUw9iN1j1rsnvrw&s"
                },
                {
                    "id": 159,
                    "name": "Mount Sinai & St. Catherine's Monastery",
                    "imageUrl": "https://images.memphistours.com/large/b5c009b9e4b64f6c740003e29bbdf738.jpg"
                },
                {
                    "id": 160,
                    "name": "Naama Bay (Sharm El Sheikh)",
                    "imageUrl": "https://www.onedaysharm.com/wp-content/uploads/2022/03/Untitled-o.photoshop.jpg"
                },
                {
                    "id": 161,
                    "name": "Pharaoh's Island & Salah El-Din Fortress (Taba)",
                    "imageUrl": "https://betamedia.experienceegypt.eg/media/experienceegypt/img/Original/2022/8/8/2022_8_8_22_14_39_289.jpeg"
                }
            ]
        },
        {
            "id": 36,
            "name": "Suez",
            "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/73/ed/0c/canale-di-suez.jpg?w=900&h=500&s=1",
            "description": "Suez is a major port city at the southern entrance of the Suez Canal. It has historical significance as a strategic naval base and played a key role in Egypt's wars. Visitors can explore Suez Canal viewpoints and enjoy Red Sea beaches nearby.",
            "topPlaces": [
                {
                    "id": 162,
                    "name": "Suez Canal Bridge (Al Salam Bridge)",
                    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Suez_Canal_Bridge.jpg"
                },
                {
                    "id": 163,
                    "name": "Moses Springs",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZk88zMDBI5zWWiVwxGtReWwMi-0fVKqZIQ&s"
                },
                {
                    "id": 164,
                    "name": "Ain Sokhna Beaches",
                    "imageUrl": "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6a/ab/0b.jpg"
                },
                {
                    "id": 165,
                    "name": "Suez National Museum",
                    "imageUrl": "https://www.egypttoday.com/siteimages/Larg/20211128030219219.jpg"
                },
                {
                    "id": 166,
                    "name": "Ataqa Mountain",
                    "imageUrl": "https://i.pinimg.com/474x/8b/1b/69/8b1b69685c620e24177759d0946aa87d.jpg"
                }
            ]
        },
        {
            "id": 37,
            "name": "Taba",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f1/%D9%82%D9%84%D8%B9%D8%A9_%D8%B5%D9%84%D8%A7%D8%AD_%D8%A7%D9%84%D8%AF%D9%8A%D9%86_%D8%A7%D9%84%D8%A3%D9%8A%D9%88%D8%A8%D9%8A_%D8%A8%D8%B7%D8%A7%D8%A8%D8%A7.jpg",
            "description": "A scenic border town near Israel, Taba boasts luxury resorts, clear waters, and dramatic mountains. It's a gateway to Pharaoh's Island, Castle Zaman, and the stunning landscapes of Taba Protected Area.",
            "topPlaces": [
                {
                    "id": 167,
                    "name": "Pharaoh's Island & Salah El-Din Fortress",
                    "imageUrl": "https://betamedia.experienceegypt.eg/media/experienceegypt/img/Original/2022/8/8/2022_8_8_22_14_39_289.jpeg"
                },
                {
                    "id": 168,
                    "name": "Taba Heights",
                    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/428664130.jpg?k=4f1621d7f40460e9e18d76a7d39d3b80012b76c06f186426d93eae845f5e1eb8&o=&hp=1"
                },
                {
                    "id": 169,
                    "name": "Fjord Bay",
                    "imageUrl": "https://www.worldbeachguide.com/photos/large/fjord-bay-evening-light.jpg"
                },
                {
                    "id": 170,
                    "name": "Castle Zaman",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5l0gBUBZIYbu_4kBQYBe8hIcUDltcUFzgQ&s"
                }
            ]
        },
        {
            "id": 38,
            "name": "New Valley",
            "imageUrl": "https://admin.ask-aladdin.com/photos/egypt/articles/new-valley-governorate-1-askaladdin.webp",
            "description": "The largest but least populated governorate, New Valley is known for Dakhla, Kharga, and Farafra Oases. It is rich in desert landscapes, ancient tombs, and hot springs.",
            "topPlaces": [
                {
                    "id": 171,
                    "name": "New Valley (Kharga, Dakhla, Farafra, Bahariya Oases)",
                    "imageUrl": "https://www.worldtouradvice.com/files/xlarge/23118916-Farafra,-Kharga-and-Dakhla-Safari-Tours.jpg"
                },
                {
                    "id": 172,
                    "name": "White Desert",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTY40BrRI6uwkNZ6Ak0CBd1igmOY6DNYl5NQ&s"
                },
                {
                    "id": 173,
                    "name": "Black Desert",
                    "imageUrl": "https://www.plenglish.com/wp-content/uploads/2021/09/desierto-negro-egipcio.jpg"
                },
                {
                    "id": 174,
                    "name": "Ain El Serw Oasis (Dakhla)",
                    "imageUrl": "https://www.cairotoptours.com/storage/774/conversions/El%20Dakhla%20Oasis-webp.webp"
                },
                {
                    "id": 175,
                    "name": "Temple of Hibis (Kharga)",
                    "imageUrl": "https://thearabweekly.com/sites/default/files/styles/article_image_800x450_/public/2018/12/Hibis-Temple-in-Kharga-oases-in-Egypt-western-desert-Ahmed-Megahid.jpg?itok=FEn-U8Yl"
                },
                {
                    "id": 176,
                    "name": "Crystal Mountain",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5EzxMQKm_OEIP37SCIEvWwbx4mbnWSt5h5Q&s"
                }
            ]
        }
    ]


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