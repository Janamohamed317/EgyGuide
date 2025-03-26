// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import styles from './EditCity.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
// import { cities } from "../../assets/assets";
// function EditCity() {
//     const location = useLocation();
//     const { id: cityId } = location.state || {};

//     const city = cities.find(city => city.id === cityId);

//     if (!city) {
//         return <h2 className="text-center text-white">City not found</h2>;
//     }

//     return (
//         <div className={styles.main_container}>
//             <div className="row">
//                 <div className="col-12">
//                     <div className={styles.city}>
//                         <div className={styles.city_img_container}>
//                             <img src={city.image} alt={`${city.name}`} className={styles.city_img} />
//                             <FontAwesomeIcon
//                                 icon={faPenToSquare}
//                                 className={styles.city_edit_icon}
//                             />
//                         </div>
//                         <div className={styles.city_name}>
//                             <p>{city.name}</p>
//                             <FontAwesomeIcon
//                                 icon={faPenToSquare}
//                                 className={styles.icon}
//                             />
//                         </div>
//                         <div className={styles.city_about}>
//                             <p>{city.about}</p>
//                             <FontAwesomeIcon
//                                 icon={faPenToSquare}
//                                 className={styles.icon}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="row mt-5">
//                 <div className="col-12">
//                     <h1 className={styles.top_title}>Top Picks</h1>
//                     <div className="row">
//                         {city.top.map((top, index) => (
//                             <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
//                                 <div className={`card ${styles.card1}`}>
//                                     <img src={top.image} alt={`${top.name}`} className={`card-img-top ${styles.top_img}`} />
//                                     <div className="card-body">
//                                         <div className="d-flex justify-content-between align-items-center p-3">
//                                             <h5 className="mb-0">{top.name}</h5>
//                                             <FontAwesomeIcon
//                                                 icon={faPenToSquare}
//                                                 className={styles.icon}
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default EditCity;