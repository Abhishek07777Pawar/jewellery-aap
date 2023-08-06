import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
export default function About() {
  return (
    <>
      <div className="sub_page">
        <div className="hero_area">
          {/* <!-- header section strats --> */}
          <Navbar />
          {/* <!-- end header section --> */}
        </div>
        {/* 
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

        < section className="about_section  layout_padding-bottom s" >
          {/* <div className="design-box">
        <img src="assets/images/design-2.png" alt="" />
      </div> */}
          <div className="container" data-aos="fade-right"
            data-aos-delay="300">
            <div className="row">
              <div className="col-md-8 mb-3 col-sm">
                <div className="detail-box">
                  
                    <h3><em>Founder</em></h3>
                 <h6>Ambika Jewellers -Kamanhalli</h6>


                  <p>Mr.Prakash,born with eye for detail and design started Ambika Jewellers in Kamanhalli Banglore honoured with the trust and support of our patrons ,he grew it to be trusted and reliable brand across Banglore.  </p>
                  <div>
                    {/* <!-- <a href=""> Read More </a> --> */}
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3 col-sm">
                <div className="img-box">
  

                  <img src="assets/images/chairman-image (1).png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="about_section layout_padding-bottom" >
          {/* <div className="design-box">
        <img src="assets/images/design-2.png" alt="" />
      </div> */}
          <div className="container" data-aos="fade-right"
            data-aos-delay="300">
            <div className="row">
            {/* <div className="heading_container"> */}
                    
                   
                  {/* </div> */}
              <div className="col-md-8 mb-3 col-sm">
              <h2>Director</h2>  <h5> Ambika Jewellers Kammanahalli</h5>
                <div className="detail-box">
              
                 
                  <p> Son of Mr.Prakash,Mr.GovindRaj,Mr.Ashok Kumar stepped in as the managing director of Ambika Jewellers with the vision for the brand that he executes admirably with in  a few years under his tutelage Ambika Jewellers opened in Kammanahalli Banglore most loved jewellery Ambika jewellers continues to grow under his steady leadership </p>
                  <div>
                    {/* <!-- <a href=""> Read More </a> --> */}
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-sm">
                <div className="img-box">
                <img src="assets/images/My_project__1_-removebg-preview.png" alt="" className="img-fluid" />
                </div>
              </div>
              {/* <div className="col-md-2 mb-3 col-sm">
                <div className="img-box">
                <img src="assets/images/about2-img.png" alt="" className="img-fluid" />
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* <!-- end about section --> */}




        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 mb-3 col-sm">
              <div className="card h-100">
                <div className="card-header  text-center">
                  Get to know us
                </div>
                <ul className="list-group list-group-flush text-center">

                  <a href="/">About us</a>
                  <a href="/">Brides of India</a>
                  <a href="/">Our stores</a>
                  <a href="/">CSR</a>
                  <a href="/">Blog</a>
                </ul>
              </div>
            </div>

            <div className="col-md-4 mb-3 col-sm">
              <div className="card h-100">
                <div className="card-header text-center">
                  Ambika promises
                </div>
                <ul className="list-group list-group-flush text-center">
                  <a href="/">Assured lifetime maintenance</a>
                  <a href="/">Your jewellery is insured</a>
                  <a href="/">7 days return policy</a>
                  <a href="/">Trusted and certified diamonds</a>
                  <a href="/">Complete transparency</a>
                  <a href="/">Easy exchange</a>
                  <a href="/">Zero deduction gold exchange</a>
                  <a href="/">BIS 916 Hallmarked Pure Gold</a>
                  <a href="/">Guarantee BuyBack</a>
                </ul>
              </div>
            </div>

            <div className="col-md-4 mb-3 col-sm">
              <div className="card h-100">
                <div className="card-header text-center">
                  Let us help you
                </div>
                <ul className="list-group list-group-flush text-center">
                  <a href="/">FAQ</a>
                  <a href="/">Track My Order</a>
                  <a href="/">Ring size Guide</a>
                  <a href="/">Bangle Size Guide</a>
                  <a href="/">Site Map</a>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-3 col-sm">
              <div className="card h-100">
                <div className="card-header text-center">
                  Policies
                </div>
                <ul className="list-group list-group-flush text-center">
                  <a href="/">Refund policy</a>
                  <a href="/">Buyback policy</a>
                  <a href="/">Exchange policy</a>
                  <a href="/">Privacy policy</a>
                  <a href="/">Cancellation policy</a>
                  <a href="/">Terms and service</a>
                </ul>
              </div>
            </div>

            <div className="col-md-4 mb-3 col-sm">
              <div className="card h-100">
                <div className="card-header text-center">
                  Useful Links
                </div>
                <ul className="list-group list-group-flush text-center">
                  <a href="/">Make to order</a>
                  <a href="/">Offers</a>
                  <a href="/">Build your custom jewellery</a>
                  <a href="/">Careers</a>
                </ul>
              </div>
            </div>

            <div className="col-md-4 mb-3 col-sm">
              <div className="card ">
                <div className="card-header text-center">
                  Customer service
                </div>
                <ul className="list-group list-group-flush text-center">
                  <a href="">
                    <img src="assets/images/phone.png" alt="" />
                    <span> +91 9449987873</span><br />
                    <img src="assets/images/phone.png" alt="" />
                    <span> +91 9449673500</span><br />
                    <img src="assets/images/phone.png" alt="" />
                    <span> +91 9738500095</span><br />
                    <span> &nbsp; &nbsp; &nbsp; &nbsp; 080-25421353</span><br />
                  </a>
                  <p>(8am-9pm ... mon-sun)</p>
                  <p>(Amavasya Holiday)</p>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- info section --> */}
        <section className="info_section">
          <div className="container">
            <div className="info_container">
              <div className="row">
                <div className="col-md-3 col-sm">
                  <div className="info_logo">
                    <a href="">
                      <img src="assets/images/logo.png" alt="" />
                      <span> Ambika Jewellry </span>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-sm">
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
                <div className="col-md-3 col-sm">
                  <div className="info_contact">
                    <a href="">
                      <img src="assets/images/phone.png" alt="" />
                      <span> +91 9449987873</span><br />
                      <img src="assets/images/phone.png" alt="" />
                      <span> +91 9449673500</span><br />
                      <img src="assets/images/phone.png" alt="" />
                      <span> +91 9738500095</span><br />
                      <span> &nbsp; &nbsp; &nbsp; &nbsp; 080-25421353</span><br />


                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-sm">
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
        </section>

        {/* <!-- end info_section -->

    <!-- footer section --> */}
        <Footer />
      </div>
    </>
  )
}
