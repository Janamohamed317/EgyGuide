import React from 'react'
import footer from './Footer.module.css'
import { useNavigate } from 'react-router-dom';
import { contact_icons, social_icons, Quick_Links } from '../../assets/assets'

function Footer() {
  const navigate = useNavigate();
  return (
    <div className={footer.main_container}>
      <div className='d-flex flex-column align-items-center mb-5'>
        <div className='d-flex flex-column gap-2 '>
          <span className='display-6'>EGYGuide</span>
          <span className='lead'>Enhancing your exploration of Egypt with ease and convenience.</span>
        </div>
        <hr className={footer.br_line} />
        <div className='d-flex py-4 gap-4'>
          {social_icons.map((icon) => (
            <div key={icon.id} className={footer.social_icon}>
              {icon.icon}
            </div>
          ))}
        </div>
      </div>



      <div className='d-flex flex-column gap-2 mb-5 '>
        <h3>Quick Links</h3>
        {Quick_Links.map((link) => (
          <div key={link.id} className={footer.quick_link}>
            <span
              className='lead'
              onClick={() => navigate(link.path)}
              style={{ cursor: 'pointer' }}
            >
              {link.icon} {link.text}
            </span>
          </div>
        ))}

      </div>



      <div className='d-flex flex-column gap-2'>
        <span className='h3'>Contact Us</span>
        {
          contact_icons.map((icon) => (
            <div className='d-flex gap-2 align-items-center lead' key={icon.id}>
              {icon.icon}
              <span>{icon.text}</span>
            </div>
          ))
        }

      </div>


    </div>

  )
}

export default Footer