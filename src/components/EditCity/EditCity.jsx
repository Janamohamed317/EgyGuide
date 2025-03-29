import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./EditCity.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function EditCity() {
    const location = useLocation();
    const { id } = location.state || {};

    const [city, setCity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!id) {
            setError("City ID is missing!");
            setLoading(false);
            return;
        }
        fetchCity();
    }, [id]); 

    const fetchCity = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`http://travelguide.runasp.net/api/Governorates/${id}`);
            setCity(res.data);
        } catch (err) {
            setError("Failed to fetch city details.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p className="text-center">Loading city details...</p>;
    if (error) return <p className="text-center text-danger">{error}</p>;

    return (
        <div className={styles.main_container}>
            <div className="row">
                <div className="col-12">
                    <div className={styles.city}>
                        <div className={styles.city_img_container}>
                            <img src={city?.imageUrl} alt={city?.name} className={styles.city_img} />
                            <FontAwesomeIcon icon={faPenToSquare} className={styles.city_edit_icon} />
                        </div>
                        <div className={styles.city_name}>
                            <p>{city?.name}</p>
                            <FontAwesomeIcon icon={faPenToSquare} className={styles.icon} />
                        </div>
                        <div className={styles.city_about}>
                            <p>{city?.description}</p>
                            <FontAwesomeIcon icon={faPenToSquare} className={styles.icon} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Picks Section */}
            <div className="d-flex  mt-5 py-4  flex-column justify-content-center align-items-center">
                <h1 className={styles.top_title}>Top Picks</h1>
                <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                    {city?.topPlaces?.["$values"]?.length > 0 ? (
                        city.topPlaces["$values"].map((top) => (
                            <div key={top.id}>
                                <div className={`card ${styles.card1}`}>
                                    <img src={top.imageUrl} alt={top.name} className={`card-img-top ${styles.top_img}`} />
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center p-3">
                                            <h5 className="mb-0">{top.name}</h5>
                                            <FontAwesomeIcon icon={faPenToSquare} className={styles.icon} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No top places available.</p>
                    )}
                </div>

            </div>


        </div>
    );
}

export default EditCity;
