import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import FeatureBox from './feature-box';
import ProductCollection from './product-collection';
import BlogSection from './blog-section';
import SpecialCollection from './special-collection';
import CategoryBanner from './category-banner';
import InfoBox from './info-box';
import Carousel from '../features/carousel';
import NewsletterModal from '../features/modal/newsletter-modal';

import { setParallax } from '../../utils';

import { demoData } from '../../mock-data/data';
import { owlSetting4, owlSetting5, owlSetting7, owlSetting8 } from '../../utils/settings';

export default function HomePage () {
    useEffect( () => {
        if ( document.querySelector( ".parallax" ) ) {
            document.addEventListener( "scroll", setParallax );
        }

        document.querySelector( '.menu' ) && document.querySelector( '.menu' ).firstChild.classList.add( 'active' );
        document.querySelector( '.mobile-menu' ) && document.querySelector( '.mobile-menu' ).firstChild.classList.add( 'active' );
    } )

    return (
        <>
            <Helmet>
                <title>Porto React Ecommerce - Demo 1 Page </title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Demo 1 Page</h1>

            <div className="main">
                <Carousel addClass="home-slider owl-carousel owl-theme owl-carousel-lazy show-nav-hover nav-big mb-2 text-uppercase" settings={ owlSetting4 }>
                    <div className="home-slide home-slide1 banner">
                        <img className="owl-lazy slide-bg" src={ `${process.env.PUBLIC_URL}/assets/images/demo/lazy.png` } data-src={ `${process.env.PUBLIC_URL}/assets/images/demo/slider/slide-1.jpg` } alt="slider" />
                        <div className="container">
                            <div className="banner-layer banner-layer-middle">
                                <h4 className="text-transform-none m-b-3">Find the Boundaries. Push Through!</h4>
                                <h2 className="text-transform-none mb-0">Summer Sale</h2>
                                <h3 className="m-b-3">70% Off</h3>
                                <h5 className="d-inline-block mb-0">
                                    Starting At
                                            <b className="coupon-sale-text text-white bg-secondary align-middle">$<em className="align-text-top">199</em>99</b>
                                </h5>

                                <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` } className="btn btn-dark btn-lg ls-10">Shop Now!</Link>
                            </div>
                        </div>
                    </div>

                    <div className="home-slide home-slide2 banner banner-md-vw">
                        <img className="owl-lazy slide-bg" src={ `${process.env.PUBLIC_URL}/assets/images/demo/lazy.png` } data-src={ `${process.env.PUBLIC_URL}/assets/images/demo/slider/slide-2.jpg` } alt="slider" />
                        <div className="container">
                            <div className="banner-layer banner-layer-middle d-flex justify-content-center">
                                <div className="mx-auto">
                                    <h4 className="m-b-1">Extra</h4>
                                    <h3 className="m-b-2">20% off</h3>
                                    <h3 className="mb-2 heading-border">Accessories</h3>
                                    <h2 className="text-transform-none m-b-4">Summer Sale</h2>

                                    <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` } className="btn btn-block btn-dark">Shop All Sale</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>

                <div className="container">
                    <Carousel addClass="info-boxes-slider owl-carousel owl-theme mb-2" settings={ { ...owlSetting8, margin: 0 } }>
                        {
                            demoData.info.slice( 0, 3 ).map( ( item, index ) => (
                                <InfoBox addClass="info-box-icon-left" info={ item } key={ "info" + index } />
                            ) )
                        }
                    </Carousel>


                    <div className="banners-container">
                        <Carousel addClass="banners-slider owl-carousel owl-theme" settings={ owlSetting8 }>
                            <div className="banner banner1 banner-sm-vw">
                                <figure>
                                    <div className="lazy-overlay bg-3"></div>
                                    <LazyLoadImage
                                        alt="banner"
                                        src={ `${process.env.PUBLIC_URL}/assets/images/demo/banners/banner-1.jpg` }
                                        threshold={ 500 }
                                        effect="blur"
                                        width={ 370 }
                                        height={ 183 }
                                    />
                                </figure>
                                <div className="banner-layer banner-layer-middle">
                                    <h3 className="m-b-2">Porto Watches</h3>
                                    <h4 className="m-b-3 ls-10 text-primary"><sup className="text-dark"><del>20%</del></sup>30%<sup>OFF</sup></h4>
                                    <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` } className="btn btn-sm btn-dark ls-10">Shop Now</Link>
                                </div>
                            </div>

                            <div className="banner banner2 banner-sm-vw text-uppercase">
                                <figure>
                                    <div className="lazy-overlay bg-3"></div>
                                    <LazyLoadImage
                                        alt="banner"
                                        src={ `${process.env.PUBLIC_URL}/assets/images/demo/banners/banner-2.jpg` }
                                        threshold={ 500 }
                                        effect="blur"
                                        width={ 370 }
                                        height={ 183 }
                                    />
                                </figure>
                                <div className="banner-layer banner-layer-middle text-center">
                                    <div className="row align-items-lg-center">
                                        <div className="col-lg-7 text-lg-right">
                                            <h3 className="m-b-1">Deal Promos</h3>
                                            <h4 className="pb-4 pb-lg-0 mb-0 text-body">Starting at $99</h4>
                                        </div>
                                        <div className="col-lg-5 text-lg-left px-0 px-xl-3">
                                            <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` } className="btn btn-sm btn-dark ls-10">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="banner banner3 banner-sm-vw">
                                <figure>
                                    <div className="lazy-overlay bg-3"></div>
                                    <LazyLoadImage
                                        alt="banner"
                                        src={ `${process.env.PUBLIC_URL}/assets/images/demo/banners/banner-3.jpg` }
                                        threshold={ 500 }
                                        effect="blur"
                                        width={ 370 }
                                        height={ 183 }
                                    />
                                </figure>
                                <div className="banner-layer banner-layer-middle text-right">
                                    <h3 className="m-b-2">Handbags</h3>
                                    <h4 className="m-b-2 text-secondary text-uppercase">Starting at $99</h4>
                                    <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` } className="btn btn-sm btn-dark ls-10">Shop Now</Link>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
                <section className="featured-products-section">
                    <div className="container">
                        <ProductCollection type="featured" title="Featured Products" />
                    </div>
                </section>
                <div className="container">
                    <section className="new-products-section">
                        <div className="container">
                            <ProductCollection type="arrivals" title="New Arrivals" />

                            <div className="banner banner-big-sale mb-5" style={ { background: `#2A95CB center/cover url(${process.env.PUBLIC_URL}/assets/images/demo/banners/banner-4.jpg)` } }>
                                <div className="banner-content row align-items-center py-4 mx-0">
                                    <div className="col-md-9">
                                        <h2 className="text-white text-uppercase ls-n-20 mb-md-0 px-4">
                                            <b className="d-inline-block mr-4 mb-1 mb-md-0">Big Sale</b>
                                                    All new fashion brands items up to 70% off
                                                    <small className="text-transform-none align-middle">Online Purchases Only</small>
                                        </h2>
                                    </div>
                                    <div className="col-md-3 text-center text-md-right">
                                        <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` } className="btn btn-light btn-white btn-lg mr-3">View Sale</Link>
                                    </div>
                                </div>
                            </div>

                            <h2 className="section-title heading-border border-0 mb-5">Browse Categories</h2>

                            <Carousel addClass="categories-slider show-nav-hover nav-outer" settings={ owlSetting5 }>
                                {
                                    demoData.categories.map( ( item, index ) => (
                                        <CategoryBanner src={ item.src } key={ "categories" + index }>
                                            <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` }><h3>{ item.title }</h3></Link>
                                            <span><mark className="count">{ item.counts } products</mark></span>
                                        </CategoryBanner>
                                    ) )

                                }
                            </Carousel>
                        </div>
                    </section>
                </div>

                <section className="feature-boxes-container">
                    <div className="container">
                        <div className="row">
                            {
                                demoData.feature.map( ( item, index ) => (
                                    <div className="col-md-4" key={ "feature" + index }>
                                        <FeatureBox feature={ item } />
                                    </div>
                                ) )
                            }
                        </div>
                    </div>
                </section>

                <section className="promo-section bg-dark parallax" style={ { backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/demo/banners/banner-5.jpg')` } }>
                    <div className="promo-banner banner container text-uppercase">
                        <div className="banner-content row align-items-center text-center">
                            <div className="col-md-4 ml-xl-auto text-md-right">
                                <h2 className="mb-md-0 text-white">Top Fashion<br />Deals</h2>
                            </div>
                            <div className="col-md-4 col-xl-3 pb-4 pb-md-0">
                                <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` } className="btn btn-dark btn-black ls-10">View Sale</Link>
                            </div>
                            <div className="col-md-4 mr-xl-auto text-md-left">
                                <h4 className="mb-1 coupon-sale-text p-0 d-block ls-10 text-transform-none"><b>Exclusive COUPON</b></h4>
                                <h5 className="mb-2 coupon-sale-text text-white ls-10 p-0"><i className="ls-0">UP TO</i><b className="text-white bg-secondary">$100</b> OFF</h5>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <section className="blog-section">
                        <div className="container">
                            <h2 className="section-title heading-border border-0 mb-2">Latest News</h2>

                            <BlogSection />

                            <hr className="mt-0 m-b-5" />

                            <Carousel addClass="brands-slider images-center pb-2" settings={ owlSetting7 }>
                                {
                                    demoData.brands.map( ( item, index ) => (
                                        <div key={ "brand" + index }>
                                            <div className="lazy-overlay bg-transparent"></div>
                                            <LazyLoadImage
                                                alt="brannd"
                                                src={ `${process.env.PUBLIC_URL}/${item}` }
                                                threshold={ 500 }
                                                effect="blur"
                                                width={ 140 }
                                                height={ 60 }
                                            />
                                        </div>
                                    ) )
                                }
                            </Carousel>

                            <hr className="mt-4 m-b-5" />

                            <div className="product-widgets-container row mb-2 pb-2">
                                <SpecialCollection type="featured" title="Featured Products" />
                                <SpecialCollection type="top" title="Best Selling Products" />
                                <SpecialCollection type="latest" title="Latest Products" />
                                <SpecialCollection type="rated" title="Top Rated Products" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <NewsletterModal />
        </>
    )

}
