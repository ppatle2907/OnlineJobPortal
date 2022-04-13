import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div>
      <div class="container">
        <section class="contact-page-section">
          <div class="auto-container">
            <div class="row clearfix">
              <div class="contact-column col-lg-4 col-md-12 col-sm-12 order-2">
                <div class="inner-column">
                  <div class="sec-title">
                    <h2>Contact Info</h2>
                  </div>
                  <ul class="contact-info">
                    <li>
                      <span class="icon fa fa-map-marker"></span>
                      <p>
                        <strong>123, Any Street,</strong>
                      </p>
                      <p>2nd Floor, Pune ,India 110021</p>
                    </li>

                    <li>
                      <span class="icon fa fa-phone"></span>
                      <p>
                        <strong>Call Us</strong>
                      </p>
                      <p>+91 1234 123 123</p>
                    </li>

                    <li>
                      <span class="icon fa fa-envelope"></span>
                      <p>
                        <strong>Mail Us</strong>
                      </p>
                      <p>
                        <a href="mailto:support@example.com">
                          Support@example.com
                        </a>
                      </p>
                    </li>
                  </ul>

                  <ul class="social-icon-two social-icon-colored">
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="form-column col-lg-8 col-md-12 col-sm-12">
                <div class="inner-column">
                  <div class="contact-form">
                    <div class="sec-title">
                      <h2>Get in Touch</h2>
                    </div>
                    <form method="post" action="" id="contact-form">
                      <div class="row clearfix">
                        <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="text"
                            name="username"
                            placeholder="Name"
                            required=""
                          />
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            required=""
                          />
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required=""
                          />
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required=""
                          />
                        </div>

                        <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                          <textarea
                            name="message"
                            placeholder="Message"
                          ></textarea>
                        </div>

                        <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                          <button
                            class="btn btn-primary"
                            type="submit"
                            name="submit-form"
                          >
                            <span class="btn-title">Submit Now</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContactUs
