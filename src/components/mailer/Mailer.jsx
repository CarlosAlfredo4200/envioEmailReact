import React from 'react'
 import emailJs from '@emailjs/browser'    
const Mailer = () => {

    const handleSendEmail = (e) => {
        e.preventDefault();
        emailJs.sendForm('service_z8a2w1q','template_euv2tce', e.target,'N3e1-whV4JTikibSb')
        .then(res => console.log(res))
        .catch (error => console.log(error))
    }
  return (
    <div className='formulario'> 
        <form className='form' onSubmit={handleSendEmail}>
           <div>
            
            <label>Nombre</label>
            <input type="test"  name='username'/>
           </div>

           <div>

            <label>Correo</label>
            <input type="email"  name='email'/>
           </div>

           <div>

            <label>Mensaje</label>
             <textarea name='mensaje'></textarea>
           </div>

             <button>Enviar</button>
        </form>
    </div>
  )
}

export default Mailer