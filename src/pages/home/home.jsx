import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from "./home.module.scss";
import './homestyle.css';

import It_KAm from './media/itKsm.jpg'


import delivery from './media/Fast Delivery_ Motion Graphics Works.mp4'
import HomeAddToBascet from './homeAddBasket';



import { useTranslation } from 'react-i18next';



export default function Home({ homeJ ,sethomeJ }) {


const { t } = useTranslation();


  return (
    <>


      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className={`carousel-inner ${s.myClasImg}`}>
          <div className="carousel-item active">
            <img src="https://static.myoas.net/v2/realme-narzo-30a/images/banner/bg-e464657e42.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.samsung.com/is/image/samsung/p5/africa_pt/business/smartphones/galaxy-s20/images/05_banner_1440.jpg?$ORIGIN_JPG$" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://mobile.dn.ua/wp-content/uploads/2019/04/bg-footer.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className={s.blur}>
        <marquee behavior="scroll" direction=""><p>{t("Store is Official sponsor Armenian cyber Army")} </p></marquee>
      </div>



      {/* one ------------------------------- */}


      <div className="products-box mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-all text-center">
                <h1>{t("Featured Products")}</h1>
                <p>{t("D")}</p>
              </div>
            </div>
          </div>
          <div className="row special-list">
            {homeJ.map((item) => {
              return (
                <>

                  <div className="col-lg-3 col-md-6 special-grid best-seller" key={item.id + 11}>
                    <div className="products-single fix">
                      <div className="box-img-hover">
                        <div className="type-lb">
                          <p className="sale">New</p>
                        </div>
                        <img src={item.picurl} className="img-fluid" alt="Image" />
                        <div className="mask-icon">
                          <ul>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                          </ul>
                          <a className="cart" ><HomeAddToBascet item={item} homeJ={homeJ} sethomeJ={sethomeJ}/></a>
                
                        </div>
                      </div>
                      <div className="why-text">
                        <h4>{item.model}</h4>
                        <h5> {item.price} $</h5>
                      </div>
                    </div>
                  </div>

                </>
              )
            })}

          </div>

        </div>
      </div>


      {/* one ------------------------------- */}

  


      {/* two ------------------------------- */}

      <div className="products-box mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-all text-center">
                <h1>{t("Accessories")}</h1>
                <p>{t("WearAccessoriesandBeInStyle")}</p>
              </div>
            </div>
          </div>
          <div className="row special-list">
            {homeJ.map((item) => {
              return (
                <>

                  <div className="col-lg-3 col-md-6 special-grid best-seller" key={item.id + 22}>
                    <div className="products-single fix">
                      <div className="box-img-hover">
                        <div className="type-lb">
                          <p className="sale">Sale</p>
                        </div>
                        <img src={item.picurl} className="img-fluid" alt="Image" />
                        <div className="mask-icon">
                          <ul>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                          </ul>
                          <a className="cart" ><HomeAddToBascet item={item} homeJ={homeJ} sethomeJ={sethomeJ}/></a>
                        </div>
                      </div>
                      <div className="why-text">
                        <h4>{item.model}</h4>
                        <h5> {item.price} $</h5>
                      </div>
                    </div>
                  </div>

                </>
              )
            })}

          </div>

        </div>
      </div>


      {/* two ------------------------------- */}












     

      <div className="services-box-main">
        <div className="container">
          <div className="row my-5">
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>{t("OUR MISSION")}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>{t("OUR VISION")}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>{t("OUR PHILOSOPHY")}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>{t("We are Trusted")}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>{t("We are Professional")}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>{t("OUR STORIES")}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </div>
          </div>

          <div className="row my-4">
            <div className="col-12">
              <h2 className="noo-sh-title">{t("The best employees of the month")}</h2>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="hover-team">
                <div className="our-team"> <img src={It_KAm} alt="" />
                  <div className="team-content">
                    <h3 className="title">{t("Димыч Кузюбердин")}</h3> <span className="post">{t("Web Developer")}</span> </div>
                  <ul className="social">
                    <li>
                      <a href="#" className="fab fa-facebook"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-twitter"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-google-plus"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-youtube"></a>
                    </li>
                  </ul>
                  <div className="icon"> <i className="fa fa-plus" aria-hidden="true"></i> </div>
                </div>
                <div className="team-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                </div>
                <hr className="my-0" /> </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="hover-team">
                <div className="our-team"> <img src="https://media.istockphoto.com/photos/man-with-hidden-face-picture-id155418467?k=6&m=155418467&s=612x612&w=0&h=K6Ci8StzIgKoJ-CYW5FcDjYy4Haf1LHezZ4FMpNoGCo=" alt="" />
                  <div className="team-content">
                    <h3 className="title">{t("Aram - forEach")}</h3> <span className="post">{t("Web Developer")}</span> </div>
                  <ul className="social">
                    <li>
                      <a href="#" className="fab fa-facebook"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-twitter"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-google-plus"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-youtube"></a>
                    </li>
                  </ul>
                  <div className="icon"> <i className="fa fa-plus" aria-hidden="true"></i> </div>
                </div>
                <div className="team-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                </div>
                <hr className="my-0" /> </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="hover-team">
                <div className="our-team"> <img src="https://irclaims.com.au/wp-content/uploads/sites/15/2018/07/iStock-179330652.jpg" alt="" />
                  <div className="team-content">
                    <h3 className="title">{t("Steve Thomas")}</h3> <span className="post">{t("SalesMan")}</span> </div>
                  <ul className="social">
                    <li>
                      <a href="#" className="fab fa-facebook"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-twitter"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-google-plus"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-youtube"></a>
                    </li>
                  </ul>
                  <div className="icon"> <i className="fa fa-plus" aria-hidden="true"></i> </div>
                </div>
                <div className="team-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                </div>
                <hr className="my-0" /> </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="hover-team">
                <div className="our-team"> <img src="https://www.sbpo.ru/loadfiles/moduls/doska/bigfoto/5dbc89872907cff19f8e08b03d4456f7.jpg" alt="" />
                  <div className="team-content">
                    <h3 className="title">{t("Lia")}</h3> <span className="post">{t("Stool pigeo")}n</span> </div>
                  <ul className="social">
                    <li>
                      <a href="#" className="fab fa-facebook"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-twitter"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-google-plus"></a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-youtube"></a>
                    </li>
                  </ul>
                  <div className="icon"> <i className="fa fa-plus" aria-hidden="true"></i> </div>
                </div>
                <div className="team-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                </div>
                <hr className="my-0" /> </div>
            </div>
          </div>

        </div>
      </div>










      <div className={s.delivery}>
        <h1>{t("We have a fast delivery servise")}</h1>
        <div>
          <video src={delivery} controls loop muted autoPlay></video>
        </div>
      </div>



      <div className={s.map}>

      </div>


    </>
  )
}