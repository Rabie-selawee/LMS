import "./App.css";

export default function Footer() {
  return (
    <section className="m">
      <footer class="footer section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-xs-12">
              <div class="single_footer about_widget">
                <a href="#">
                  <img src="/image/logo3.png" alt="Edusion" />
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  vitae risus nec dui venenatis dignissim.
                </p>

                <div class="foot_social">
                  <span>Connect with: </span>
                  <ul>
                    <li>
                      <a href="#">
                        <i class="ti-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="ti-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="ti-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="ti-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-lg-8 col-md-12 col-xs-12">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                  <div class="single_footer">
                    <h4>Courses</h4>
                    <ul>
                      <li>
                        <a href="#">Creative Writing</a>
                      </li>
                      <li>
                        <a href="#">Digital Marketing</a>
                      </li>
                      <li>
                        <a href="#">SEO Business</a>
                      </li>
                      <li>
                        <a href="#">Social Marketing</a>
                      </li>
                      <li>
                        <a href="#">Graphic Design</a>
                      </li>
                      <li>
                        <a href="#">Website Development</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                  <div class="single_footer">
                    <h4>Company</h4>
                    <ul>
                      <li>
                        <a href="/AboutUs">About us</a>
                      </li>
                      <li>
                        <a href="#">Knowledge Base</a>
                      </li>
                      <li>
                        <a href="#">Affiliate Program</a>
                      </li>
                      <li>
                        <a href="#">Community</a>
                      </li>
                      <li>
                        <a href="#">Market API</a>
                      </li>
                      <li>
                        <a href="#">Support Team</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                  <div class="single_footer">
                    <h4>Contact Info</h4>
                    <div class="sf_contact">
                      <span class="ti-mobile"></span>
                      <div>
                        <h3>Phone Number</h3>
                        <p>+88 457 845 695</p>
                      </div>
                    </div>
                    <div class="sf_contact">
                      <span class="ti-email"></span>
                      <div>
                        <h3>Email Address</h3>
                        <p>example@yourmail.com</p>
                      </div>
                    </div>
                    <div class="sf_contact">
                      <span class="ti-map"></span>
                      <div>
                        <h3>Location</h3>
                        <p>California, USA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row footer-btm fc">
            <div class="col-lg-6 col-sm-6 col-xs-12">
              <div class="footer_copyright">
                <p>© 2025 Edusion. All Rights Reserved</p>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6 col-xs-12">
              <div class="footer_menu">
                <ul>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Special</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
