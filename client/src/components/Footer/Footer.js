import React from 'react';
import './Footer.css';
import Logo from "../../assets/images/cropftsadclogo.png";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedin} from "react-icons/fa";

function Footer() {
  return (
    <div className='footer-container dark:bg-dark_primary'>
      <section className='footer-subscription'>
        <p className='footer-subscription-text'>
        The Federation of Taiwanese Student Association in Washington DC
        </p>
        <p className='footer-subscription-text'>
        大華府地區臺灣同學會聯合會
        </p>
{/*         <p className='footer-subscription-heading'>
          Join Us by checking out our social media!
        </p>
 */}
{/*         <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
          </form>
        </div> */}
      </section>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo inline-block align-top'>
            <Link to='/' className='social-logo'>
              <img src={Logo} alt='FTSADC_logo' className="h-12" />
            </Link>
          </div>
          <small className='website-rights'>FTSADC © 2023</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='https://www.facebook.com/ftsadc2022'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebookF />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='https://www.instagram.com/ftsadc/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link linkedin'
              to='https://www.linkedin.com/company/ftsadc/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
