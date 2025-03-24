import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Profile.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { AppContext } from '../Context/AppContext';
import CameraModal from '../CameraModal/CameraModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
function Profile() {
    const location = useLocation();
    const { username } = location.state || { username: 'Guest' }; // Default to 'Guest' if no username is passed
    const [profileImage, setProfileImage] = useState(null);
    const [followers, setFollowers] = useState(0);
    const [following, setFollowing] = useState(0);
    const { setCameraClicked, cameraClicked } = useContext(AppContext);


    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <Navbar />
            {cameraClicked && <CameraModal />}
            <div className={styles.profileContainer}>
                {/* الجزء الأيسر: Profile */}
                <div className={styles.profileSection}>
                    <div className={styles.profileHeader}>
                        <div className={styles.profileImageContainer}>
                            <input
                                type="file"
                                id="profileImageInput"
                                className={styles.profileImageInput}
                                onChange={handleImageUpload}
                            />
                            <label htmlFor="profileImageInput" className={styles.profileImageLabel}>
                                {profileImage ? (
                                    <img src={profileImage} alt="Profile" className={styles.profileImage} />
                                ) : (
                                    <div className={styles.profileImagePlaceholder}>Add profile picture</div>
                                )}
                            </label>
                        </div>
                        <div className={styles.profileInfo}>
                            <h2 className={styles.profileName}>{username}</h2>
                            <p className={styles.profileUsername}>@{username.toLowerCase()}</p>
                            <div className={styles.profileStats}>
                                <div className={styles.profileStat}>
                                    <span className={styles.profileStatNumber}>{followers}</span>
                                    <span className={styles.profileStatLabel}>FOLLOWERS</span>
                                </div>
                                <div className={styles.profileStat}>
                                    <span className={styles.profileStatNumber}>{following}</span>
                                    <span className={styles.profileStatLabel}>FOLLOWING</span>
                                </div>
                            </div>
                            <div className={styles.profileActions}>
                                <button className={styles.profileButton}>Edit</button>
                                <button className={styles.profileButton}>Share</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* الجزء الأيمن: الخريطة */}
                <div className={styles.mapSection}>
                    <iframe
                        width="100%"
                        height="300px" // تم تصغير ارتفاع الخريطة
                        src="https://www.openstreetmap.org/export/embed.html?bbox=31.2356,30.0443,31.2358,30.0445&layer=mapnik"
                        style={{ border: 'none', borderRadius: '10px' }}
                        title="OpenStreetMap"
                    ></iframe>
                </div>
            </div>
            <div className='d-flex justify-content-end'>
                <FontAwesomeIcon icon={faCamera} className='camera_icon' onClick={() => setCameraClicked(true)} />
            </div>

            <Footer />
        </>

    );
}

export default Profile;