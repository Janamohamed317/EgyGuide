import React from 'react';
import styles from './Admin.module.css';
import { motion } from "motion/react"
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faEarthAfrica, faUsers, faPenToSquare ,faCircleExclamation} from '@fortawesome/free-solid-svg-icons';
function Admin() {

  const navigate = useNavigate()

  const handleClick = (name) => {
    navigate(`/Admin/${name}`);
  };


  return (
    <motion.div className={styles.main_container}>
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 3, delay: 1 } }}
        className={styles.admin_txt}>Welcome To Admin Dashboard <FontAwesomeIcon icon={faUserTie  } /> </motion.p>
      <motion.div className={styles.cards_container}>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { duration: 2, delay: 2 } }} onClick={() => handleClick('Govs ')}
          className={styles.card1} >
          <p>Governorates <FontAwesomeIcon icon={faEarthAfrica} /></p>
        </motion.div>
        <motion.div className={styles.card2} initial={{ scale: 0 }} animate={{ scale: 1, transition: { duration: 1.5, delay: 4 } }}
          onClick={() => handleClick('Users')}>
          <p>Users <FontAwesomeIcon icon={faUsers} /> </p>
        </motion.div>
        <motion.div className={styles.card3} initial={{ scale: 0 }} animate={{ scale: 1, transition: { duration: 1.5, delay: 5 } }}
          onClick={() => handleClick('Blogs')}>
          <p>Blogs <FontAwesomeIcon icon={faPenToSquare} /></p>
        </motion.div>
        <motion.div className={styles.card4} initial={{ scale: 0 }} animate={{ scale: 1, transition: { duration: 1.5, delay: 6 } }}
          onClick={() => handleClick('Reports')}>
          <p>Reports <FontAwesomeIcon icon={faCircleExclamation} /> </p>
        </motion.div>
       
      </motion.div>

    </motion.div>
  );
}

export default Admin;
