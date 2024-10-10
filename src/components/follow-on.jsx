import {FaInstagram, FaLinkedin, FaXTwitter} from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.linkedin.com/in/mohit-raj-bansal-89674623a/">
          <FaLinkedin size={20} />
        </a>
        <a href="https://www.instagram.com/mohit_raj_bansal/">
          <FaInstagram size={20} />
        </a>
        <a href="https://x.com/MOHITRajBANSAL1">
          <FaXTwitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;
