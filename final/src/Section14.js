import "./Section.css";

export default function Section14() {
  return (
    <section className="homes_bg m-0"
      style={{
        backgroundImage: 'url("/image/home2.png")',
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className="container">
        <div className="col-lg-12 col-sm-12 col-xs-12  ">
          <div className="row">
            <div className="home_content hc_pts text-center">
              <h1>
                Get smart <span className="text-decoration-underline">opportunity for </span> your best future
              </h1>
              <p style={{ color: "#888" }}
>
                It is a long established fact that reader will be distracted
                readable content of a page when.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12">
            
            <div className="home_subs">
              <form className="d-flex justify-content-center" action="https://wpdemothemes.com/edusion/" class="banner_subs">
               <input type="text" class="form-controls home_si" name="s" placeholder="Search your course here" required="required"  />
               <input type="hidden" name="post_type" value="courses" />        

                <button type="submit" class="subscribe__btns">Search<i class="fa fa-paper-plane"></i> </button>
              </form>
             
            </div>
          </div>
        </div>
         <div class="foot_social text-center">
                <ul class=" text-center">
                  <p style={{marginRight:"10px",}} > Popular Topic:</p>
                  <li>
                    <a href="#">Business</a>{" ,"}
                  </li>
                  <li>
                    <a href="#">Data Science</a> {" ,"}
                  </li>
                  <li>
                    <a href="#">Digital Program</a> {" ,"}
                  </li>
                  <li>
                    <a href="#">Finance</a>
                  </li>
                </ul>
              </div>
      </div>
    </section>
  );
}
