import Card from "./Card";

function CaseStudies() {
  return (
    <section className="section case">
      <h4 className="section-header">Case studies</h4>
      <h2 className="section-heading">
        Check out some of our awesome projects with creative ideas and great
        design.
      </h2>
      <div className="case-cards">
        <Card imgNo={1} date="24 March 2024" feature="coding" />
        <Card imgNo={2} date="29 March 2024" feature="Workspace" />
        <Card imgNo={3} date="09 April 2024" feature="Meeting" />
      </div>
    </section>
  );
}

export default CaseStudies;
