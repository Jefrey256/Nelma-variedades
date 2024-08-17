import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <h4 className="mb-4">Entre em contato conosco:</h4>
        <div className="flex justify-center space-x-5"> {/* Adiciona 20px de espaço entre os ícones */}
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
          <a href="https://www.instagram.com/elielma_variedades?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://discord.gg/seu_discord" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FontAwesomeIcon icon={faDiscord} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
