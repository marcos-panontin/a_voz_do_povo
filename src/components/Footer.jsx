import LinkedinIcon from '../../public/images/icons/linkedin.svg';
import GithubIcon from '../../public/images/icons/github.svg';

function Footer() {
  return (
    <footer className="bg-blue-700 text-white text-center font-bold text-xs py-1 w-full">
      <div className="flex items-center justify-center">
        <span>Desenvolvido por Marcos Panontin</span>
        <a
          href="https://www.linkedin.com/in/marcos-panontin/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 text-red-500 hover:text-red-600"
        >
          <img className="h-6" src={LinkedinIcon} alt="Linkedin Icon" />
        </a>
        <a
          href="https://github.com/marcos-panontin"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 text-red-500 hover:text-red-600"
        >
          <img className="h-6" src={GithubIcon} alt="Github Icon" />

        </a>
      </div>
    </footer>
  );
}

export default Footer;
