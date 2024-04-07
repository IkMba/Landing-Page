import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section className="services">
      <div className="service-header">
        <h4 className="section-header">What we do?</h4>
        <h2 className="section-heading">
          The service we offer is specifically designed to meet your needs
        </h2>
      </div>
      <div className="service-cards">
        <ServiceCard icon="call-outline" service="24/7 Support" />
        <ServiceCard
          icon="shield-checkmark-outline"
          service="Secure Payments"
        />
        <ServiceCard icon="cloud-download-outline" service="Daily Updates" />
        <ServiceCard icon="pie-chart-outline" service="Market Research" />
      </div>
    </section>
  );
}

export default Services;
