import React, { useContext, useEffect, useMemo, useState } from 'react';
import styles from './Cities.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { citiess } from "../../assets/assets";
import { AppContext } from '../Context/AppContext';

function Cities() {
  const { cities, setCities } = useContext(AppContext)
  const [deletingCity, setDeletingCity] = useState(null);
  const navigate = useNavigate();


  const handleDelete = (id) => {
    axios.delete(`https://travelguide.runasp.net/api/Governorates/${id}`)
      .then(() => {
        setCities(prevCities => prevCities.filter(city => city.id !== id));
        setDeletingCity(null);
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
  };

  const handleEdit = (id) => {
    navigate('/edit', { state: { id: id } });
  };

  const memoizedCities = useMemo(() => {
    return cities.map((city) => (
      <div className="" key={city.id}>
        <div className={`card ${styles.card}`}>
          <img className={`card-img-top ${styles.card_img}`} src={city.imageUrl} alt={city.name} />
          <div className="card-body">
            <h5 className="card-title">{city.name}</h5>
            <p className="card-text">{city.description}</p>
            <div className={styles.buttons_container}>
              <button className={styles.del_btn} onClick={() => setDeletingCity(city.id)}>Delete</button>
              <button className={styles.edit_btn} onClick={() => handleEdit(city.id)}>Edit</button>
            </div>
          </div>
        </div>
      </div>
    ))
  }, [cities]);

  return (
    <div className={styles.main_container}>
      <div className="row">
        {deletingCity && (
          <div className={styles.delete_container}>
            <div className={styles.delete_msg}>
              <p>Are you sure you want to delete this city?</p>
              <button className="btn btn-danger me-2" onClick={() => handleDelete(deletingCity)}>Yes</button>
              <button className="btn btn-secondary" onClick={() => setDeletingCity(null)}>Cancel</button>
            </div>
          </div>
        )}
      </div>


      {memoizedCities}
      {/* {cities.map((city) => (
        <div className="" key={city.id}>
          <div className={`card ${styles.card}`}>
            <img className={`card-img-top ${styles.card_img}`} src={city.imageUrl} alt={city.name} />
            <div className="card-body">
              <h5 className="card-title">{city.name}</h5>
              <p className="card-text">{city.description}</p>
              <div className={styles.buttons_container}>
                <button className={styles.del_btn} onClick={() => setDeletingCity(city.id)}>Delete</button>
                <button className={styles.edit_btn} onClick={() => handleEdit(city.id)}>Edit</button>
              </div>
            </div>
          </div>
        </div>
      ))} */}


    </div>
  );
}

export default Cities;
