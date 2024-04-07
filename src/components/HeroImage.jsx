import IonIcon from "@reacticons/ionicons";
import { useState } from "react";

function HeroImage() {
  const [imageNo, setImageNo] = useState(1);
  return (
    <div className="hero-image-container">
      <figure>
        <img src={`/images/hero-slide-${imageNo}.jpg`} alt="" />
        <div className="img-buttons">
          <IonIcon
            name="arrow-back"
            onClick={() => {
              if (imageNo === 1) return;
              setImageNo(imageNo - 1);
            }}
            className="img-icons"
          />
          {imageNo === 2 && <IonIcon name="play" className="img-icons" />}
          <IonIcon
            name="arrow-forward"
            className="img-icons"
            onClick={() => {
              if (imageNo === 3) return;
              setImageNo(imageNo + 1);
            }}
          />
        </div>
      </figure>
    </div>
  );
}

export default HeroImage;
