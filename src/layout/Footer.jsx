function Footer() {
  return (
    <footer className="text-gray-300 py-4 bg-[#08172E]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="px-5">
          <h2
            className="text-center text-2xl font-bold mb-2"
          >Contacto</h2>

          <p className="text-center text-lg font-medium md:text-justify">Secretaría Ejecutiva del Sistema Anticorrupción del Estado de Colima</p>

          <p className="text-center md:text-justify"><span className="font-bold text-lg block md:inline">Dirección: </span>Alfonso Michel #34, Jardines Vista Hermosa III, 28017 Colima, Col.</p>

          <p className="text-center md:text-justify">
            <span className="font-bold text-lg block md:inline">Teléfono: </span>
            <a
              href="tel:+523126883221"
              className="text-blue-500 underline hover:text-blue-700"
            >
              +52-312-6883221
            </a>
          </p>


          <p className="text-center md:text-justify">
            <span className="font-bold text-lg block md:inline">Correo: </span>
            <a
              href="mailto:sesaecolsaec@gmail.com"
              className="text-blue-500 underline hover:text-blue-700"
            >
              sesaecolsaec@gmail.com
            </a>
          </p>

          <p className="text-center md:text-justify"><span className="font-bold text-lg block md:inline">Días y horarios hábiles:</span> Lunes a Viernes de 09:00 AM a 3:00 PM</p>

        </div>

        <div>
          <h2
            className="text-center text-2xl font-bold mb-2"
          >Redes Sociales</h2>

          <div className="flex justify-center gap-2">
            <a
              href="https://www.facebook.com/Sesaecol"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#3498db] p-2 rounded-full hover:border-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z">
                  </path>
                </svg>
              </div>
            </a>

            <a
              href="https://www.instagram.com/sesaecol"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#E1306C] p-2 rounded-full hover:border-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" width="24" height="24">
                  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M16.5 7.5l0 .01"></path>
                </svg>
              </div>
            </a>

            <a
              href="https://x.com/sesaecol_saec"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#2d3436] p-2 rounded-full hover:border-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" width="24" height="24">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                </svg>
              </div>
            </a>

            <a
              href="https://www.youtube.com/@sesaecolsaec8318"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#d63031] p-2 rounded-full hover:border-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"></path>
                </svg>
              </div>
            </a>

          </div>
        </div>

        <div className="">
          <h2
            className="text-center text-2xl font-bold mb-2"
          >Ubicación</h2>
          <div className="flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470.81840591140497!2d-103.71647197841395!3d19.258553835103893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84255ab839e81bed%3A0x8bfa5ad3680e09a7!2sAlfonso%20Michel%2034%2C%20Jardines%20Vista%20Hermosa%20III%2C%2028017%20Colima%2C%20Col.!5e0!3m2!1ses-419!2smx!4v1769101615672!5m2!1ses-419!2smx"
              width="500"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div></div>
    </footer>
  );
}

export default Footer;
