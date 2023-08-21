import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faEnvelope, faLinkedin, faTelegram } from "../assets";

const SocialLinks = () => {
  return (
    <div className="w-full h-[100px] bg-grayscale-950 flex justify-center items-center gap-3 p-6">
      <a href="https://github.com/Kubatbek-A" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={faGithub}
        />
      </a>
      <a
        href="mailto:kubatabdrakhmanov@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={faEnvelope}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/kubatabdrakhmanov"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={faLinkedin}
        />
      </a>
      <a href="https://t.me/KubatAbdrakhmanov" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={faTelegram}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
