import IonIcon from "@reacticons/ionicons";

function ServiceCard({ icon, service }) {
  return (
    <div className="card">
      <IonIcon name={icon} className="card-icon" />
      <h4>{service}</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos eius quasi
      </p>
      <a>
        <span>Learn more</span>
        <IonIcon name="arrow-forward-outline" className="icon-learn" />
      </a>
    </div>
  );
}

export default ServiceCard;
