import "./Section.css";
export default function Section2() {
  const data = ["Quality Education","Experienced Teachers","Delicious Food",];


  const items=data.map((item, index) => (
        <div className="about-card" key={index}>
          <h3>{item}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
          <a href="#" className="cta">
            <span>Explore Courses</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </div>))
        
  return (
    <div className="about-section " >
      
{items}
    </div>
  );
}
