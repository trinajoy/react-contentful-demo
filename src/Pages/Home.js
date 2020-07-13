import React, { Component } from 'react'
import Slider1 from '../images/slider_one.jpg'
import Slider2 from '../images/slider-img2.jpg'
import Slider3 from '../images/slider-img3.jpg'
import './main.css'

class Home extends Component {
  render() {
    return (
      <div>
        <h1> Home </h1>
        {/* carousel start  */}
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
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Slider1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Slider2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Slider3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* carousel end  */}
        <section id="feature">
          <div className="container text-center pt-4">
            <h2> Features </h2>
            <p className="lead">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-laptop"> </i>
                  <h2> Fresh and Clean</h2>
                  <h3>
                    Publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum.
                  </h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-comment"> </i>
                  <h2> Comments </h2>
                  <h3>
                    Publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum.
                  </h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-code"> </i>
                  <h2> Code </h2>
                  <h3>
                    Publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum.
                  </h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-camera"> </i>
                  <h2> Camera </h2>
                  <h3>
                    Publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum.
                  </h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-link"> </i>
                  <h2> Link </h2>
                  <h3>
                    Publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum.
                  </h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-address-book"> </i>
                  <h2> Address </h2>
                  <h3>
                    Publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container text-center pt-4">
            <h2> Portfolio </h2>
            <p className="lead">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>
          <div className="container">
            <input type="checkbox" id="pic-1" />
            <label htmlFor="pic-1" className="lightbox">
              <img src="http://unsplash.it/800/600?image=1" alt="" />
            </label>
            <input type="checkbox" id="pic-2" />
            <label htmlFor="pic-2" className="lightbox">
              <img src="http://unsplash.it/800/600?image=20" alt="" />
            </label>
            <input type="checkbox" id="pic-3" />
            <label htmlFor="pic-3" className="lightbox">
              <img src="http://unsplash.it/800/600?image=21" alt="" />
            </label>
            <input type="checkbox" id="pic-4" />
            <label htmlFor="pic-4" className="lightbox">
              <img src="http://unsplash.it/800/600?image=42" alt="" />
            </label>
            <input type="checkbox" id="pic-5" />
            <label htmlFor="pic-5" className="lightbox">
              <img src="http://unsplash.it/800/600?image=48" alt="" />
            </label>
            <input type="checkbox" id="pic-6" />
            <label htmlFor="pic-6" className="lightbox">
              <img src="http://unsplash.it/800/600?image=60" alt="" />
            </label>
            <input type="checkbox" id="pic-7" />
            <label htmlFor="pic-7" className="lightbox">
              <img src="http://unsplash.it/800/600?image=201" alt="" />
            </label>
            <input type="checkbox" id="pic-8" />
            <label htmlFor="pic-8" className="lightbox">
              <img src="http://unsplash.it/800/600?image=7" alt="" />
            </label>
            <input type="checkbox" id="pic-9" />
            <label htmlFor="pic-9" className="lightbox">
              <img src="http://unsplash.it/800/600?image=119" alt="" />
            </label>
            <input type="checkbox" id="pic-10" />
            <label htmlFor="pic-10" className="lightbox">
              <img src="http://unsplash.it/800/600?image=180" alt="" />
            </label>
            <input type="checkbox" id="pic-11" />
            <label htmlFor="pic-11" className="lightbox">
              <img src="http://unsplash.it/800/600?image=96" alt="" />
            </label>
            <input type="checkbox" id="pic-12" />
            <label htmlFor="pic-12" className="lightbox">
              <img src="http://unsplash.it/800/600?image=24" alt="" />
            </label>
            <div className="grid">
              <label htmlFor="pic-1" className="grid-item">
                <img src="http://unsplash.it/400/300?image=1" alt="" />
              </label>
              <label htmlFor="pic-2" className="grid-item">
                <img src="http://unsplash.it/400/300?image=20" alt="" />
              </label>
              <label htmlFor="pic-3" className="grid-item">
                <img src="http://unsplash.it/400/300?image=21" alt="" />
              </label>
              <label htmlFor="pic-4" className="grid-item">
                <img src="http://unsplash.it/400/300?image=42" alt="" />
              </label>
              <label htmlFor="pic-5" className="grid-item">
                <img src="http://unsplash.it/400/300?image=48" alt="" />
              </label>
              <label htmlFor="pic-6" className="grid-item">
                <img src="http://unsplash.it/400/300?image=60" alt="" />
              </label>
              <label htmlFor="pic-7" className="grid-item">
                <img src="http://unsplash.it/400/300?image=201" alt="" />
              </label>
              <label htmlFor="pic-8" className="grid-item">
                <img src="http://unsplash.it/400/300?image=7" alt="" />
              </label>
              <label htmlFor="pic-9" className="grid-item">
                <img src="http://unsplash.it/400/300?image=119" alt="" />
              </label>
              <label htmlFor="pic-10" className="grid-item">
                <img src="http://unsplash.it/400/300?image=180" alt="" />
              </label>
              <label htmlFor="pic-11" className="grid-item">
                <img src="http://unsplash.it/400/300?image=96" alt="" />
              </label>
              <label htmlFor="pic-12" className="grid-item">
                <img src="http://unsplash.it/400/300?image=24" alt="" />
              </label>
            </div>
          </div>
        </section>
        <section id="faqs">
          <div className="container text-center pt-4">
            <h2> FAQ's</h2>
            <p className="lead">
              Publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="container mt-10">
            <div className="col-md-12">
              <div
                className="panel-group"
                id="accordion3"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingOne3">
                    <h4 className="panel-title">
                      <a
                        role="button"
                        className="collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion3"
                        href="#collapseOne3"
                        aria-expanded="true"
                        aria-controls="collapseOne3"
                      >
                        Section 1
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseOne3"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingOne3"
                  >
                    <div className="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent nisl lorem, dictum id pellentesque at,
                        vestibulum ut arcu. Curabitur erat libero, egestas eu
                        tincidunt ac, rutrum ac justo. Vivamus condimentum
                        laoreet lectus, blandit posuere tortor aliquam vitae.
                        Curabitur molestie eros.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingTwo3">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion3"
                        href="#collapseTwo3"
                        aria-expanded="false"
                        aria-controls="collapseTwo3"
                      >
                        Section 2
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseTwo3"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo3"
                  >
                    <div className="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent nisl lorem, dictum id pellentesque at,
                        vestibulum ut arcu. Curabitur erat libero, egestas eu
                        tincidunt ac, rutrum ac justo. Vivamus condimentum
                        laoreet lectus, blandit posuere tortor aliquam vitae.
                        Curabitur molestie eros.{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingThree3">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion3"
                        href="#collapseThree3"
                        aria-expanded="false"
                        aria-controls="collapseThree3"
                      >
                        Section 3
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseThree3"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree3"
                  >
                    <div className="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent nisl lorem, dictum id pellentesque at,
                        vestibulum ut arcu. Curabitur erat libero, egestas eu
                        tincidunt ac, rutrum ac justo. Vivamus condimentum
                        laoreet lectus, blandit posuere tortor aliquam vitae.
                        Curabitur molestie eros.{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="spacer"></div>
      </div>
    )
  }
}

export default Home
