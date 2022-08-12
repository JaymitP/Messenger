import Image from "next/image";
import PropTypes from "prop-types";

const Avatar = ({ src, shape }) => {
  return (
    <div className="w-12 items-center">
      <Image
        className={`${shape}`}
        src={src}
        width={40}
        height={40}
        layout="responsive"
      />
    </div>
  );
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
