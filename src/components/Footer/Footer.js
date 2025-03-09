import React from 'react'
import footer from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faPhone, faEnvelope, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  return (
    <div className={footer.main_container}>
      <div className='row gx-0 align-items-start'>
        <div className='col-md-4 mr-5'>
          <div className='d-flex flex-column align-items-center'>
            <div className='d-flex flex-column gap-2'>
              <span className='display-6'>EGYGuide</span>
              <span className='lead'>Enhancing your exploration of Egypt with ease and convenience.</span>
            </div>
            <hr className={footer.br_line} />
            <div className='d-flex py-4 gap-4'>
              <FontAwesomeIcon
                icon={faFacebook}
                className={footer.social_icon}
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className={footer.social_icon}

              />
              <FontAwesomeIcon
                icon={faInstagram}
                className={footer.social_icon}
              />
            </div>


          </div>
        </div>

        <div className='col-md-4 py-5 py-md-0'>
          <div className='d-flex flex-column gap-2 align-items-center'>
            <h3>Quick Links</h3>
            <div className={footer.quick_link}>
              <span className='lead ' onClick={() => navigate('/Currency-Converter')}>  <FontAwesomeIcon
                icon={faChevronRight}
              /> Currency Converter</span>
            </div>
            <div className={footer.quick_link}>
              <span className='lead'>
                <FontAwesomeIcon
                  icon={faChevronRight}
                /> Blogs</span>
            </div>
            <div className={footer.quick_link}>
              <span className='lead' onClick={() => navigate('/trip-input')}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                /> Plan Your Trip</span>
            </div>
            <div className={footer.quick_link}>
              <span className='lead'>
                <FontAwesomeIcon
                  icon={faChevronRight}
                /> Explore Egypt</span>
            </div>
          </div>
        </div>

        <div className='col-md-4 py-5 py-md-0'>
          <div className='d-flex flex-column gap-2 align-items-center'>
            <span className='h3'>Contact Us</span>

            <div className='d-flex gap-2 align-items-center lead'>
              <FontAwesomeIcon
                icon={faPhone}
              />
              <span>+2146713156</span>
            </div>
            <div className='d-flex gap-2 align-items-center lead'>
              <FontAwesomeIcon
                icon={faEnvelope}
              />
              <span>EGYGuide@gmail.com</span>
            </div>
            <div className='d-flex gap-2 align-items-center lead'>
              <FontAwesomeIcon
                icon={faLocationPin}
              />
              <span>ay haga</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer