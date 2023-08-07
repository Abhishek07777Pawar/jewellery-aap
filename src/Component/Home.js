import React from 'react'
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import InfoSec from './InfoSec';
import Footer from './Footer';
import Map from './Map';

function Home({ mouseHandle, setOpen, open }) {
  const text = `Wearing Beautiful Jewellery Makes Every Moment Great.       
  Jewellery make person look beautiful.`
  return (

    <div className="container-fluid">
      <div className="row hero_area">
        {/* <!-- header section starts --> */}
        <Navbar />
        {/* <Navbar2 mouseHandle={mouseHandle} setOpen={setOpen} open={open} /> */}


        {/* slider section */}

        <section
          className="slider_section position-relative"
          data-aos="fade-up"
          data-aos-delay="100"
          // data-aos-duration="100"
        >
          <div className="design-box">
            <img src="assets/images/design-1.png" alt="" />
          </div>
          <div className="slider_number-container d-none d-md-block ">
            <div className="number-box">
              <span> 01 </span>
              <hr />
              <span className="jwel">
                J <br />
                e <br />
                w <br />
                e <br />
                l <br />
                l <br />
                e <br />
                r <br />
                y
              </span>
              <hr />
              <span> 02 </span>
            </div>
          </div>
          {/* <div className="container-fluid"> */}
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              >

              </li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1">

              </li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2">

              </li>
            </ol>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail_box">

                      <h1>Ambika Jewellers</h1>
                      <p>
                        {text}
                      </p>
                      <div>
                        {/* <!-- <a href="">Shop Now</a> --> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm">
                    <div className="img-box">
                      <img src="assets/images/slider2-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6 col-sm">
                    <div className="detail_box">

                      <h1>Ambika Jewellers</h1>
                      <p>
                        {text}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm">
                    <div className="img-box">
                      <img src="assets/images/slider1-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>


              <div className="carousel-item ">
                <div className="row">
                  <div className="col-md-6 col-sm">
                    <div className="detail_box">

                      <h1>Ambika Jewellers</h1>
                      <p>
                        {text}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm">
                    <div className="img-box">
                      <img src="assets/images/slider3-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6 col-sm">
                    <div className="detail_box">
                      <h1>Ambika Jewellers</h1>
                      <p>
                        {text}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm">
                    <div className="img-box">
                      <img src="assets/images/about6-image.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>


              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6 col-sm">
                    <div className="detail_box">
                      <h1>Ambika Jewellers</h1>
                      <p>
                        {text}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm">
                    <div className="img-box">
                      <img src="assets/images/about-image.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6 col-sm">
                    <div className="detail_box">
                      <h1>Ambika Jewellers</h1>
                      <p>
                        {text}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm">
                    <div className="img-box">
                      <img src="assets/images/carasouel-kangan-image.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6 col-sm">
                    <div className="detail_box">
                      <h1>Ambika Jewellers</h1>
                      <p>
                        {text}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm">
                    <div className="img-box">
                      <img src="assets/images/carasouel-har-image-removebg-preview.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6 col-sm">
                    <div className="detail_box">
                      <h1>Ambika Jewellers</h1>
                      <p>
                        {text}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm">
                    <div className="img-box">
                      <img src="assets/images/carousel-ring-image-removebg-preview.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="detail_box">
                      <h1>Ambika Jewellers</h1>
                      <p>
                        {text}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="img-box">
                      <img src="assets/images/carousel-necklace-image-removebg-preview.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="detail_box">
                      <h1>Ambika Jewellers</h1>
                      <p>
                        {text}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="img-box">
                      <img src="assets/images/carousel-har3-image-removebg-preview.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="detail_box">
                      <h1>Ambika Jewellers</h1>
                      <p>
                        {text}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="img-box">
                      <img src="assets/images/carousel-women1-image-removebg-preview.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end slider section --> */}
      </div>
      {/* -----logo start----------- */}
      <div className="container" >
        <div className="row">
          <div className="col-md-3 mb-3 col-sm">
            <div className="d-flex flex-column align-items-center">
              <img style={{ height: "100px" }} src="assets/images/logo1-image.png.png" alt="" />
              <p>Assured Lifetime<br />Maintenance</p>
            </div>
          </div>
          <div className="col-md-1 mb-3 col-sm">
            <div className="d-flex flex-column align-items-center">
              <img style={{ height: "100px" }} src="assets/images/logo2-image.png.png" alt="" />
              <p>Easy<br />Exchange</p>
            </div>
          </div>
          <div className="col-md-2 mb-3 col-sm">
            <div className="d-flex flex-column align-items-center">
              <img style={{ height: "100px" }} src="assets/images/logo3-image.png.png" alt="" />
              <p>Your jewellery<br />Is Insured</p>
            </div>
          </div>
          <div className="col-md-2 mb-3 col-sm">
            <div className="d-flex flex-column align-items-center">
              <img style={{ height: "100px" }} src="assets/images/logo5-image.png.png" alt="" />
              <p>Zero Deduction<br /> Gold Exchange</p>
            </div>
          </div>
          <div className="col-md-2 mb-3 col-sm">
            <div className="d-flex flex-column align-items-center">
              <img style={{ height: "100px" }} src="assets/images/logo6-image.png" alt="" />
              <p>Assured Lifetime<br />Maintenance</p>
            </div>
          </div>



          <div className="col-md-2 mb-3 col-sm">
            <div className="d-flex flex-column align-items-center">
              <img style={{ height: "100px" }} src="assets/images/logo8-image.png" alt="" />
              <p>Tested & Certified<br />Diamonds</p>
            </div>
          </div>

        </div>
      </div>



      {/* ------------logo end---------- */}
      {/* 
  <!-- item section --> */}

      <div className="item_section layout_padding2"
        data-aos="fade-left"
        data-aos-delay="300">
        <div className="container">
          <div className="item_container">
            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="assets/images/i-111.png" alt="" />
              </div>
              <div className="name">
                <h5>Bracelet</h5>
              </div>
            </div>
            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="assets/images/p-22.png" alt="" />
              </div>
              <div className="name">
                <h5>Ring</h5>
              </div>
            </div>
            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="assets/images/earing-11.png" alt="" />
              </div>
              <div className="name">
                <h5>Earings</h5>
              </div>
            </div>
            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="assets/images/i-65.png" alt="" />
              </div>
              <div className="name">
                <h5>Pendent</h5>
              </div>
            </div>
            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="assets/images/necklace-11.png" alt="" />
              </div>
              <div className="name">
                <h5>Necklace</h5>
              </div>
            </div>
            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="assets/images/har-111.png" alt="" />
              </div>
              <div className="name">
                <h5>Har</h5>
              </div>
            </div>
            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="assets/images/mattal-11.png" alt="" />
              </div>
              <div className="name">
                <h5>Mattal</h5>
              </div>
            </div>
            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="assets/images/jhumki-11.png" alt="" />
              </div>
              <div className="name">
                <h5>Jumki</h5>
              </div>
            </div>

            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="assets/images/chain-11.png" alt="" />
              </div>
              <div className="name">
                <h5>Chains</h5>
              </div>
            </div>
            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="assets/images/kada-11.png" alt="" />
              </div>
              <div className="name">
                <h5>Kada</h5>
              </div>
            </div>
            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="assets/images/nose-11.png" alt="" />
              </div>
              <div className="name">
                <h5>Nose pin</h5>
              </div>
            </div>

            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="assets/images/i-33.png" alt="" />
              </div>
              <div className="name">
                <h5>Chokar</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- end item section -->

  <!-- about section --> */}
      <section className="about_section layout_padding2-top " >
        {/* <div className="design-box">
        <img src="assets/images/design-2.png" alt="" />
      </div> */}
        <div className="container-fluid" data-aos="fade-right"
          data-aos-delay="300">
          <div className="row">
            <div className="col-md-8 mb-3 col-sm">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Jewellery Shop</h2>
                </div>
                <p>
                  Ambika journey began in 1987, and has an outstanding heritage of precious metal expertise. Our experience along with creativity is converted into innovation— secret behind the Ambika jewellery charm. With unique designs and awe-inspiring craftsmanship, it is our passion to amaze you each time you visit our store. Thanks to your trust, loyalty, and love, we continue to be one of the leading jewellers in Kammanahalli .
                </p>
                <div>
                  {/* <!-- <a href=""> Read More </a> --> */}
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 col-sm">
              <div className="img-box">
                <img src="assets/images/about2-img.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end about section -->

  <!-- price section --> */}

      <section
        className="price_section layout_padding"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        <div className="container">
          <div className="heading_container">
            <h2>Our Jewellery Price</h2>
          </div>
          <div className="price_container">
            <div className="box">
              <div className="name">
                <h6>Diamond Ring</h6>
              </div>
              <div className="img-box">
                <img src="assets/images/p-11.png" alt="" />
              </div>
              <div className="detail-box">


              </div>
            </div>
            <div className="box">
              <div className="name">
                <h6>Gold Ring</h6>
              </div>
              <div className="img-box">
                <img src="assets/images/p-22.png" alt="" />
              </div>
              <div className="detail-box">


              </div>
            </div>
            <div className="box">
              <div className="name">
                <h6>Silver Ring</h6>
              </div>
              <div className="img-box">
                <img src="assets/images/p-33.png" alt="" />
              </div>
              <div className="detail-box">


              </div>
            </div>
          </div>

        </div>
      </section>

      {/* <!-- end price section -->

  <!-- ring section --> */}

      <section className="ring_section layout_padding">
        <div className="design-box">
          <img src="assets/images/design-1.png" alt="" />
        </div>
        <div className="container">
          <div className="ring_container layout_padding2">
            <div className="row">
              <div className="col-md-5">
                <div className="detail-box">
                  <h4>special</h4>
                  <h2>Wedding Ring</h2>

                </div>
              </div>
              <div className="col-md-7">
                <div className="img-box">
                  <img src="assets/images/ring-img.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end ring section -->

  <!-- client section --> */}

      <section className="client_section">
        <div className="container">
          <div className="heading_container">
            <h2>Testimonial</h2>
          </div>
          <h4 className="secondary_heading">What is says our customer</h4>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="client_container">

                  <div className="detail-box">
                    <p>
                      The Item was bought from Ambika jewellers is new design and
                      latest trends it's really very nice.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="client_container">

                  <div className="detail-box">
                    <p>
                      This is my first gold and diamond shopping and i am very
                      happy with this product.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="client_container">

                  <div className="detail-box">
                    <p>
                      The product are very nice and design are very unique.Theit
                      customers care is also.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>

      {/* <!-- end client section -->

  <!-- contact section --> */}

      {/* <section className="contact_section layout_padding"
  data-aos="fade-up"
data-aos-delay="300">
    <div className="design-box">
      <img src="assets/images/design-2.png" alt="" />
    </div>
    <div className="container">
      <div className="">
        <h2 className="">Contact Us</h2>
      </div>
    </div>
    <div className="container">
      <div className="row">
      
        <div className="col-md-12">
          <div className="map_container">
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.341618819231!2d77.63629377468779!3d13.013904113950174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1753c34c3565%3A0x5d85e36931c34c6!2sHPH%20Technology!5e0!3m2!1sen!2sin!4v1690782187754!5m2!1sen!2sin"
                width="1200"
                height="450"
                style={{border: "0",
                allowfullscreen:"",
                loading:"lazy",
                referrerpolicy:"no-referrer-when-downgrade"}}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
      <Map />

      {/* <!-- end contact section -->

  <!-- info section --> */}
      {/* <section className="info_section">
    <div className="container">
      <div className="info_container">
        <div className="row">
          <div className="col-md-3">
            <div className="info_logo">
              <a href="">
                <img src="assets/images/logo.png" alt="" />
                <span> Ambika Jewellry </span>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_contact">
            
               <a href="https://goo.gl/maps/TGZKd6an8BPjm8Dq8"> 
                <img src="assets/images/location.png" alt="" />
                <span>
                  Address - Address - #27 Nehru road, Kullappa circle, Kammanahalli,
                  Banglore 84
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_contact">
              <a href="">
                <img src="assets/images/phone.png" alt="" />
                <span> +91 9449987873</span><br/>
                <img src="assets/images/phone.png" alt="" />
                <span> +91 9449673500</span><br/>
                <img src="assets/images/phone.png" alt="" />
                <span> +91 9738500095</span><br/>
                <span> &nbsp; &nbsp; &nbsp; &nbsp; 080-25421353</span><br/>
                
                
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_contact">
              <a href="https://mail.google.com/">
                <img src="assets/images/mail.png" alt="" />
                <span> omgovindraj@gmail.com </span>
                <img src="assets/images/mail.png" alt="" />
                <span> ashoksen90@gmail.com </span>
              </a>
            </div>
          </div>
        </div>
      
        
      </div>
    </div>
  </section> */}
      <InfoSec />
      {/* <!-- end info_section -->

  <!-- footer section --> */}
      {/* <section className="container-fluid footer_section">
    <p>
      &copy; <span id="displayYear"></span> All Rights Reserved By
      <a href="https://html.design/">HPH Technologies</a>
    </p>
  </section> */}
      <Footer />
    </div>

  )
}
export default Home;