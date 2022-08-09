import Image from "next/image";
import PropTypes from "prop-types";

const Avatar = ({ src, shape }) => {
  console.log(src);
  return <Image className={`${shape}`} src={src} width={50} height={50} />;
};

Avatar.defaultProps = {
  src: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
  shape: "rounded-full",
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  shape: PropTypes.string,
};

export default Avatar;
