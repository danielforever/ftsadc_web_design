import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import ContactInfo from '../components/contact/contactInfo'

function ContactUs() {
  return (
    
    <>
      <ContactInfo />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      {/* <div style={{ marginBottom: '20px' }}>Sponsors (To Be Continued)</div>
      <div dangerouslySetInnerHTML={{ 
        __html: `
          <iframe src="https://giphy.com/embed/qgQUggAC3Pfv687qPC" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        ` 
      }} /> */}
    </div>
    </>
    
      
  )
}

export default ContactUs