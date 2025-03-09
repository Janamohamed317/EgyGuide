import React, { useEffect, useState } from 'react';
import styles from './Cities.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { cities } from "../../assets/assets";

function Cities() {
  const [citie, setCities] = useState([]);
  const [deletingCity, setDeletingCity] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3002/cities/')
      .then(res => {
        setCities(res.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3002/cities/${id}`)
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

  return (
    <div className= {styles.main_container}>
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

      <div className="row ">
        {cities.map((city) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={city.id}>
            <div className={`card ${styles.card}`}>
              <img className={`card-img-top ${styles.card_img}`} src={city.image} alt={city.name} />
              <div className="card-body">
                <h5 className="card-title">{city.name}</h5>
                <p className="card-text">about el city</p>
                <div className={styles.buttons_container}>
                  <button className={styles.del_btn} onClick={() => setDeletingCity(city.id)}>Delete</button>
                  <button className={styles.edit_btn} onClick={() => handleEdit(city.id)}>Edit</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cities;
