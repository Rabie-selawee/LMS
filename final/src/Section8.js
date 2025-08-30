import "./Section.css";

export default function Section8() {
  return (
    <>
   
    <section className="newsletter_area section-padding my-5">
  <div className="container">
    <div className="row text-center">
      <div className="col-lg-6 offset-lg-3 col-sm-12 col-xs-12">
        <div className="subs_form">
          <h3>Subscribe to our newsletter, We don't make any spam.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor enim minim</p>
          <div className="home_subs">
            <form className="d-flex justify-content-center">
              <input
                type="text"
                name="EMAIL"
                className="form-control "
                placeholder="Enter your Email Address"
                required
              />
              <button type="submit" className="subscribe__btn ">
                <i className="fa fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  );
}
