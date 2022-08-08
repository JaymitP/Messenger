import Image from "next/image";

const Avatar = ({ src }) => {
  return <Image className="b rounded-full" src={src} width={50} height={50} />;
};

export default Avatar;
