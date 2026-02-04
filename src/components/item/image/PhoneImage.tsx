/* eslint-disable @next/next/no-img-element */
interface PhoneImageProps {
  src: string;
  alt: string;
}

const PhoneImage = ({ src, alt }: PhoneImageProps) => {
  return (
    <div className="grid-img">
      <img src={src} alt={alt} />
    </div>
  );
};

export default PhoneImage;