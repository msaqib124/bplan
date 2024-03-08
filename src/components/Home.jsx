import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Thumbs } from 'swiper/modules';
import 'swiper/css/bundle';

const Home = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <section className="home-slider position-relative">
                <div className="home-slider-item">
                    <div className="home-slider-image">
                        <picture>
                            <source
                                media="(min-width : 100px) and (max-width : 500px)"
                                srcSet="https://bplanwriter.com/wp-content/uploads/2024/01/pexels-alexander-suhorucov-6457513-copy-768x512.webp"
                            />
                            <img
                                className="w-100 h-100 object-fit-cover"
                                src="https://bplanwriter.com/wp-content/uploads/2024/01/pexels-alexander-suhorucov-6457513-copy.webp"
                                alt=""
                            />
                        </picture>
                    </div>
                    <div className="home-slider-content-wrap position-absolute w-100">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-sm-12 col-12">
                                    <div className="home-slider-content">
                                        <h1>
                                            THE PROFESSIONAL BUSINESS
                                            <br />
                                            PLAN WRITERS
                                        </h1>
                                        <p>
                                            Let us Transform Your Ordinary Business Plan into a Much More
                                            Compelling one.
                                        </p>
                                        <p>
                                            Our Business Plan Writing Service is Just One Simple Click Away!
                                        </p>
                                        <div className="home-slider-btns">
                                            <a className="slider-btn" href="#consultation">
                                                Schedule free consultation
                                            </a>
                                            <a
                                                className="slider-btn"
                                                href="https://bplanwriter.com/contact/"
                                            >
                                                Contact Us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-sec pb-5">
                <div className="container">
                    <div className="counter">
                        <div className="items">
                            <div className="item">
                                <div className="icon">
                                    <i className="fa-solid fa-file-lines" />
                                </div>
                                <div className="content">
                                    <p>
                                        <span className="count">500</span>+
                                    </p>
                                    <p>Business plans written </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <i className="fa-solid fa-dollar-sign" />
                                </div>
                                <div className="content">
                                    <p>
                                        $<span className="count">50</span>M+
                                    </p>
                                    <p>Help raised capital/ financing for customer </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <i className="fa-solid fa-handshake" />
                                </div>
                                <div className="content">
                                    <p>
                                        <span className="count">10</span>
                                    </p>
                                    <p>Years in business </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="heading mt-5">
                        <h2>
                            Get Your Smart Business
                            <br />
                            Plan Made by Experts
                        </h2>
                        <p>
                            Welcome to the <strong>Professional Business Plan Writing Services</strong>, where
                            dedicated professional writers develop an exceptional business plans for
                            clients worldwide. We proudly inform you that numerous businesses and
                            individuals achieved their goals successfully by believing in us. No
                            matter for which industry you're seeking <strong>Business Plan Writing Services</strong>, our
                            <strong> Business plan writer</strong> has a deep understanding of
                            diverse markets and specializes in assembling the crucial data that can
                            help you hype the gross of your business almost beyond belief. With
                            years of experience, our <strong> Business plan writing company</strong>
                            has been serving and assisting clients in securing financing from banks
                            and investors, navigating franchise agreements, and even supporting
                            immigration visa applications. BPlanWriter is your trusted partner who
                            promises to craft compelling, customized business plans for anyone
                            willing to raise funds, establish a business, or expand its venture. Get
                            started today and embark on the journey to fulfil your entrepreneurial
                            dreams.
                        </p>
                    </div>
                </div>
            </section>

            <section
                className="type pt-5"
                style={{
                    backgroundImage:
                        'url("https://bplanwriter.com/wp-content/uploads/2024/01/Layer-828-copy.webp")'
                }}
            >
                <div className="container">
                    <div className="heading text-center text-light mb-5">
                        <h2>Types of Business Plans </h2>
                    </div>
                    <div className="row services custom-theme-posts">
                        <div className="col-lg-4 col-md-6 col-12 pb-4">
                            <div className="services-item p-4 overflow-hidden">
                                <div className="services-header">
                                    <div className="services-image">
                                        <picture>
                                            <source
                                                media="(min-width : 100px) and (max-width : 500px)"
                                                srcSet="https://bplanwriter.com/wp-content/uploads/2024/01/Icon8-copy-150x150.webp"
                                            />
                                            <img
                                                className="w-100 h-100 object-fit-cover"
                                                src="https://bplanwriter.com/wp-content/uploads/2024/01/Icon8-copy-150x150.webp"
                                                alt=""
                                            />
                                        </picture>
                                    </div>
                                    <h3 className="services-title">
                                        <a href="https://bplanwriter.com/services/strategic-business-plan/">
                                            Strategic Business Plan
                                        </a>
                                    </h3>
                                </div>
                                <div className="services-content mt-3">
                                    <div className="custom-theme-post-description">
                                        <p>
                                            A Strategic business plan is a highly detailed plan that clearly
                                            shows how a team, section or department will contribute to the
                                            organization's success.
                                        </p>
                                        <a
                                            href="https://bplanwriter.com/services/strategic-business-plan/"
                                            className="d-table mt-3 service-btn"
                                        >
                                            Explore <i className="far fa-long-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 pb-4">
                            <div className="services-item p-4 overflow-hidden">
                                <div className="services-header">
                                    <div className="services-image">
                                        <picture>
                                            <source
                                                media="(min-width : 100px) and (max-width : 500px)"
                                                srcSet="https://bplanwriter.com/wp-content/uploads/2024/01/Group-1646-copy-150x150.webp"
                                            />
                                            <img
                                                className="w-100 h-100 object-fit-cover"
                                                src="https://bplanwriter.com/wp-content/uploads/2024/01/Group-1646-copy-150x150.webp"
                                                alt=""
                                            />
                                        </picture>
                                    </div>
                                    <h3 className="services-title">
                                        <a href="https://bplanwriter.com/services/sba-business-plan/">
                                            SBA Business Plan
                                        </a>
                                    </h3>
                                </div>
                                <div className="services-content mt-3">
                                    <div className="custom-theme-post-description">
                                        <p>
                                            The SBA plan is a crucial document demonstrating your business's
                                            success in qualifying for loan approval from a Bank or Financial
                                            Institution.
                                        </p>
                                        <a
                                            href="https://bplanwriter.com/services/sba-business-plan/"
                                            className="d-table mt-3 service-btn"
                                        >
                                            Explore <i className="far fa-long-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 pb-4">
                            <div className="services-item p-4 overflow-hidden">
                                <div className="services-header">
                                    <div className="services-image">
                                        <picture>
                                            <source
                                                media="(min-width : 100px) and (max-width : 500px)"
                                                srcSet="https://bplanwriter.com/wp-content/uploads/2024/01/Icon10-copy-150x150.webp"
                                            />
                                            <img
                                                className="w-100 h-100 object-fit-cover"
                                                src="https://bplanwriter.com/wp-content/uploads/2024/01/Icon10-copy-150x150.webp"
                                                alt=""
                                            />
                                        </picture>
                                    </div>
                                    <h3 className="services-title">
                                        <a href="https://bplanwriter.com/services/pitch-deck/">
                                            Pitch Deck
                                        </a>
                                    </h3>
                                </div>
                                <div className="services-content mt-3">
                                    <div className="custom-theme-post-description">
                                        <p>
                                            Pitch Deck is a brief and visually compelling presentation that
                                            provides a quick overview of your business plan. A single
                                            slideshow demonstrates a winning impression.
                                        </p>
                                        <a
                                            href="https://bplanwriter.com/services/pitch-deck/"
                                            className="d-table mt-3 service-btn"
                                        >
                                            Explore <i className="far fa-long-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>{" "}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 pb-4">
                            <div className="services-item p-4 overflow-hidden">
                                <div className="services-header">
                                    <div className="services-image">
                                        <picture>
                                            <source
                                                media="(min-width : 100px) and (max-width : 500px)"
                                                srcSet="https://bplanwriter.com/wp-content/uploads/2021/10/Icon4-copy-150x150.webp"
                                            />
                                            <img
                                                className="w-100 h-100 object-fit-cover"
                                                src="https://bplanwriter.com/wp-content/uploads/2021/10/Icon4-copy-150x150.webp"
                                                alt=""
                                            />
                                        </picture>
                                    </div>
                                    <h3 className="services-title">
                                        <a href="https://bplanwriter.com/services/l1-visa-business-plan/">
                                            L1 Visa Business Plan
                                        </a>
                                    </h3>
                                </div>
                                <div className="services-content mt-3">
                                    <div className="custom-theme-post-description">
                                        <p>
                                            The L1 Visa allows transferring a foreign worker in an
                                            executive, managerial, or specialized knowledge position to the
                                            U.S. office. Our Immigration Business Plan will explain why
                                            there is a ground for your...
                                        </p>
                                        <a
                                            href="https://bplanwriter.com/services/l1-visa-business-plan/"
                                            className="d-table mt-3 service-btn"
                                        >
                                            Explore <i className="far fa-long-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 pb-4">
                            <div className="services-item p-4 overflow-hidden">
                                <div className="services-header">
                                    <div className="services-image">
                                        <picture>
                                            <source
                                                media="(min-width : 100px) and (max-width : 500px)"
                                                srcSet="https://bplanwriter.com/wp-content/uploads/2024/01/Icon6-copy-150x150.webp"
                                            />
                                            <img
                                                className="w-100 h-100 object-fit-cover"
                                                src="https://bplanwriter.com/wp-content/uploads/2024/01/Icon6-copy-150x150.webp"
                                                alt=""
                                            />
                                        </picture>
                                    </div>
                                    <h3 className="services-title">
                                        <a href="https://bplanwriter.com/services/investor-business-plan/">
                                            Investor Business Plan
                                        </a>
                                    </h3>
                                </div>
                                <div className="services-content mt-3">
                                    <div className="custom-theme-post-description">
                                        <p>
                                            Investor business plan highlights your business idea, operations
                                            and financial projections that will benefit all parties to gain
                                            the required capital from investors.
                                        </p>
                                        <a
                                            href="https://bplanwriter.com/services/investor-business-plan/"
                                            className="d-table mt-3 service-btn"
                                        >
                                            Explore <i className="far fa-long-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 pb-4">
                            <div className="services-item p-4 overflow-hidden">
                                <div className="services-header">
                                    <div className="services-image">
                                        <picture>
                                            <source
                                                media="(min-width : 100px) and (max-width : 500px)"
                                                srcSet="https://bplanwriter.com/wp-content/uploads/2024/01/Icon7-copy-150x150.webp"
                                            />
                                            <img
                                                className="w-100 h-100 object-fit-cover"
                                                src="https://bplanwriter.com/wp-content/uploads/2024/01/Icon7-copy-150x150.webp"
                                                alt=""
                                            />
                                        </picture>
                                    </div>
                                    <h3 className="services-title">
                                        <a href="https://bplanwriter.com/services/immigration-business-plan/">
                                            Immigration Business Plan
                                        </a>
                                    </h3>
                                </div>
                                <div className="services-content mt-3">
                                    <div className="custom-theme-post-description">
                                        <p>
                                            The Immigration Business Plan serves as an introduction to
                                            immigration offers. It presents that you and your business meet
                                            all the strict requirements for visa approval. We offer U.S.
                                            (L-1, E2, EB-5) immigration...
                                        </p>
                                        <a
                                            href="https://bplanwriter.com/services/immigration-business-plan/"
                                            className="d-table mt-3 service-btn"
                                        >
                                            Explore <i className="far fa-long-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>{" "}
                        </div>
                    </div>
                    <a className="btn-1" href="#consultation">
                        Schedule free consultation
                    </a>
                </div>
            </section>

            <section className="business-plan">
                <div className="heading">
                    <div className="container">
                        <h2>Our Sample<br />
                            Business Plans</h2>
                        Check out one of our business plan samples for yourself.
                    </div>
                </div>
                <div className="plans">
                    {/* <div className="image">
                        <img alt src="<?php echo $business_plan['image']['url'];?>"/>
                    </div>  */}
                    <div className="container">
                        <main>
                            <div className="row">
                                <div className="col-lg-4 col-sm-5">
                                    <div className="plan-slider">
                                        <Swiper
                                            className="mySwiper"
                                            modules={[Navigation, Pagination, A11y, Thumbs]}
                                            watchSlidesProgress
                                            onSwiper={setThumbsSwiper}
                                            direction='vertical'
                                            slidesPerView={6}
                                        >
                                            <SwiperSlide>
                                                <div className="title">
                                                    <div className="icon-heading d-flex">
                                                        <i className="fa-solid fa-bullseye"></i>
                                                        <h3>
                                                            EB-5 Business Plan
                                                        </h3>
                                                    </div>
                                                    <i className="fa-solid fa-minus"></i>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="title">
                                                    <div className="icon-heading d-flex">
                                                        <i className="fa-solid fa-bullseye"></i>
                                                        <h3>
                                                            Strategic Business Plan
                                                        </h3>
                                                    </div>
                                                    <i className="fa-solid fa-minus"></i>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="title">
                                                    <div className="icon-heading d-flex">
                                                        <i className="fa-solid fa-bullseye"></i>
                                                        <h3>
                                                            Investor Business Plan
                                                        </h3>
                                                    </div>
                                                    <i className="fa-solid fa-minus"></i>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="title">
                                                    <div className="icon-heading d-flex">
                                                        <i className="fa-solid fa-bullseye"></i>
                                                        <h3>
                                                            SBA Business Plan
                                                        </h3>
                                                    </div>
                                                    <i className="fa-solid fa-minus"></i>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="title">
                                                    <div className="icon-heading d-flex">
                                                        <i className="fa-solid fa-bullseye"></i>
                                                        <h3>
                                                            L1 Visa Business Plan
                                                        </h3>
                                                    </div>
                                                    <i className="fa-solid fa-minus"></i>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="title">
                                                    <div className="icon-heading d-flex">
                                                        <i className="fa-solid fa-bullseye"></i>
                                                        <h3>
                                                            E2 Visa Business Plan
                                                        </h3>
                                                    </div>
                                                    <i className="fa-solid fa-minus"></i>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-sm-7">
                                    <div className="thumb-slider">
                                        <Swiper
                                            className="mySwiper2"
                                            modules={[Navigation, Pagination, A11y, Thumbs]}
                                            thumbs={{ swiper: thumbsSwiper }}
                                            navigation={{
                                                nextEl: '.swiper-button-next',
                                                prevEl: '.swiper-button-prev'
                                            }}
                                            loop
                                            pagination={{ el: '.swiper-pagination', clickable: true }}
                                            slidesPerView={2}
                                            centeredSlides
                                            spaceBetween={10}
                                            breakpoints={{
                                                500: {
                                                    slidesPerView: 2,
                                                },
                                                1000: {
                                                    slidesPerView: 3,
                                                },
                                            }}
                                        >
                                            <SwiperSlide>
                                                <div className="image">
                                                    <a href="https://bplanwriter.com/wp-content/uploads/2024/01/EB5-Business-Plan-from-BPlanwriter.com__compressed.pdf" target="_blank">
                                                        <picture>
                                                            <source media="(min-width : 100px) and (max-width : 500px)" width="212" height="300" srcSet="https://bplanwriter.com/wp-content/uploads/2024/01/EB5-Business-Plan-Cover-Page-copy-212x300.webp" />
                                                            <img width="768" height="1086" src="https://bplanwriter.com/wp-content/uploads/2024/01/EB5-Business-Plan-Cover-Page-copy-768x1086.webp" alt="" loading="lazy" />
                                                        </picture>
                                                    </a>
                                                </div>
                                                <div className="link">
                                                    <a className="btn-1" href="https://bplanwriter.com/wp-content/uploads/2024/01/EB5-Business-Plan-from-BPlanwriter.com__compressed.pdf" target="_blank">View Sample</a>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="image">
                                                    <a href="https://bplanwriter.com/wp-content/uploads/2024/01/Strategic-Cannabis-Business-Plan-by-BPlanwriter.com__compressed.pdf" target="_blank">
                                                        <picture>
                                                            <source media="(min-width : 100px) and (max-width : 500px)" width="212" height="300" srcSet="https://bplanwriter.com/wp-content/uploads/2024/01/Strategic-Business-Plan-Cannabis-Cover-Page-copy-212x300.webp" />
                                                            <img width="768" height="1086" src="https://bplanwriter.com/wp-content/uploads/2024/01/Strategic-Business-Plan-Cannabis-Cover-Page-copy-768x1086.webp" alt="" loading="lazy" />
                                                        </picture>
                                                    </a>
                                                </div>
                                                <div className="link">
                                                    <a className="btn-1" href="https://bplanwriter.com/wp-content/uploads/2024/01/Strategic-Cannabis-Business-Plan-by-BPlanwriter.com__compressed.pdf" target="_blank">View Sample</a>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="image">
                                                    <a href="https://bplanwriter.com/wp-content/uploads/2024/01/Sample-Investor-Business-Plan-by-BPlanwriter.com__compressed.pdf" target="_blank">
                                                        <picture>
                                                            <source media="(min-width : 100px) and (max-width : 500px)" width="188" height="300" srcSet="https://bplanwriter.com/wp-content/uploads/2024/01/Investor-Business-Plan-Cover-Page-copy-188x300.webp" />
                                                            <img width="768" height="1226" src="https://bplanwriter.com/wp-content/uploads/2024/01/Investor-Business-Plan-Cover-Page-copy-768x1226.webp" alt="" loading="lazy" />
                                                        </picture>
                                                    </a>
                                                </div>
                                                <div className="link">
                                                    <a className="btn-1" href="https://bplanwriter.com/wp-content/uploads/2024/01/Sample-Investor-Business-Plan-by-BPlanwriter.com__compressed.pdf" target="_blank">View Sample</a>
                                                </div>
                                            </SwiperSlide>

                                            <SwiperSlide>
                                                <div className="image">
                                                    <a href="https://bplanwriter.com/wp-content/uploads/2024/01/SBA-Business-Plan-from-BPlanwriter.com__compressed.pdf" target="_blank">
                                                        <picture>
                                                            <source media="(min-width : 100px) and (max-width : 500px)" width="212" height="300" srcSet="https://bplanwriter.com/wp-content/uploads/2024/01/SBA-Business-Plan-Cover-Page-copy-212x300.webp" />
                                                            <img width="768" height="1086" src="https://bplanwriter.com/wp-content/uploads/2024/01/SBA-Business-Plan-Cover-Page-copy-768x1086.webp" alt="" loading="lazy" />
                                                        </picture>
                                                    </a>
                                                </div>
                                                <div className="link">
                                                    <a className="btn-1" href="https://bplanwriter.com/wp-content/uploads/2024/01/SBA-Business-Plan-from-BPlanwriter.com__compressed.pdf" target="_blank">View Sample</a>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="image">
                                                    <a href="https://bplanwriter.com/wp-content/uploads/2024/01/L1-Visa-Business-Plan-Sample-BPlanwriter.com__compressed.pdf" target="_blank">
                                                        <picture>
                                                            <source media="(min-width : 100px) and (max-width : 500px)" width="212" height="300" srcSet="https://bplanwriter.com/wp-content/uploads/2024/01/L1-Visa-Business-Plan-Cover-Page-copy-212x300.webp" />
                                                            <img width="768" height="1086" src="https://bplanwriter.com/wp-content/uploads/2024/01/L1-Visa-Business-Plan-Cover-Page-copy-768x1086.webp" alt="" loading="lazy" />
                                                        </picture>
                                                    </a>
                                                </div>
                                                <div className="link">
                                                    <a className="btn-1" href="https://bplanwriter.com/wp-content/uploads/2024/01/L1-Visa-Business-Plan-Sample-BPlanwriter.com__compressed.pdf" target="_blank">View Sample</a>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="image">
                                                    <a href="https://bplanwriter.com/wp-content/uploads/2024/01/E2-Visa-Business-Plan-by-BPlanwriter.com__compressed.pdf" target="_blank">
                                                        <picture>
                                                            <source media="(min-width : 100px) and (max-width : 500px)" width="212" height="300" srcSet="https://bplanwriter.com/wp-content/uploads/2024/01/E2-Visa-Business-Plan-Cover-page-copy-212x300.webp" />
                                                            <img width="768" height="1086" src="https://bplanwriter.com/wp-content/uploads/2024/01/E2-Visa-Business-Plan-Cover-page-copy-768x1086.webp" alt="" loading="lazy" />
                                                        </picture>
                                                    </a>
                                                </div>
                                                <div className="link">
                                                    <a className="btn-1" href="https://bplanwriter.com/wp-content/uploads/2024/01/E2-Visa-Business-Plan-by-BPlanwriter.com__compressed.pdf" target="_blank">View Sample</a>
                                                </div>
                                            </SwiperSlide>

                                            <div className="swiper-pagination"></div>
                                            <div className="swiper-button-prev"></div>
                                            <div className="swiper-button-next"></div>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </section>

            <section className="process py-5" style={{ backgroundImage: 'url(https://bplanwriter.com/wp-content/uploads/2024/01/pexels-cottonbro-studio-4065158-copy-scaled.webp)' }}>
                <div className="container">
                    <div className="heading text-center">
                        <h2>
                            Our Simple Process			</h2>
                    </div>
                    <div className="items">
                        <div className="item">
                            <div className="icon-title">
                                <div className="icon">
                                    <picture>
                                        <img width="183" height="295" className="w-100 h-100 object-fit-cover" src="https://bplanwriter.com/wp-content/uploads/2024/01/Path-21-copy.webp" alt="" loading="lazy" />
                                    </picture>
                                </div>
                                <h3>
                                    Explain						</h3>
                            </div>
                            <div className="content">
                                <p>
                                    Just call or write a detailed email about your business or complete our simple business plan information form, whatever is most convenient for you and send it to us.						</p>
                                <hr className="hr" style={{ borderTopColor: '#0a1a3d' }} />
                            </div>
                            <div className="image">
                                <picture>
                                    <img width="768" height="1140" className="w-100 h-100 object-fit-cover" src="https://bplanwriter.com/wp-content/uploads/2024/01/Group-6-copy-768x1140.webp" alt="" loading="lazy" />
                                </picture>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon-title">
                                <div className="icon">
                                    <picture>
                                        <img width="183" height="295" className="w-100 h-100 object-fit-cover" src="https://bplanwriter.com/wp-content/uploads/2024/01/Path-211-copy.webp" alt="" loading="lazy" />
                                    </picture>
                                </div>
                                <h3>
                                    Draft						</h3>
                            </div>
                            <div className="content">
                                <p>
                                    Our expert will review and request additional information and draft the initial business plan based on your information.						</p>
                                <hr className="hr" style={{ borderTopColor: '#2c4371' }} />
                            </div>
                            <div className="image">
                                <picture>
                                    <img width="756" height="1123" className="w-100 h-100 object-fit-cover" src="https://bplanwriter.com/wp-content/uploads/2024/01/Group-7-copy.webp" alt="" loading="lazy" />
                                </picture>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon-title">
                                <div className="icon">
                                    <picture>
                                        <img width="183" height="295" className="w-100 h-100 object-fit-cover" src="https://bplanwriter.com/wp-content/uploads/2024/01/Path-212-copy.webp" alt="" loading="lazy" />
                                    </picture>
                                </div>
                                <h3>
                                    Review Revise						</h3>
                            </div>
                            <div className="content">
                                <p>
                                    We will share the draft with you; you can discuss the changes with our expert. We will revise the plan based on your agreement, and you will receive your final plan within days.						</p>
                                <hr className="hr" style={{ borderTopColor: '#476ab3' }} />
                            </div>
                            <div className="image">
                                <picture>
                                    <img width="610" height="905" className="w-100 h-100 object-fit-cover" src="https://bplanwriter.com/wp-content/uploads/2024/01/Group-8-copy.webp" alt="" loading="lazy" />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonial py-5" style={{ backgroundImage: 'url(https://bplanwriter.com/wp-content/uploads/2024/01/Layer-39-copy-scaled.webp)' }}>
                <div className="container">
                    <div className="heading text-center pb-5">
                        <h2>
                            What Client Say <br /> About Our Services			</h2>
                    </div>
                    <Swiper
                        className="tes-items"
                        slidesPerView={1}
                        modules={[Navigation, Pagination]}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="item">
                                <div className="image">
                                    <picture>
                                        <img width="300" height="280" src="https://bplanwriter.com/wp-content/uploads/2024/01/photo-1568602471122-7832951cc4c5-copy-300x280.webp" alt="" loading="lazy" />
                                    </picture>
                                </div>
                                <div className="content">
                                    <p>Frank Bennett</p>
                                    <p></p>
                                    <svg id="Group_15" data-name="Group 15" xmlns="http://www.w3.org/2000/svg" width="40.345" height="24.445" viewBox="0 0 40.345 24.445">
                                        <path id="Path_528" data-name="Path 528" d="M-158.611,655.933c-.922-1.9-1.891-3.725-1.833-5.966a9.766,9.766,0,0,0,5.906-3.015,9.194,9.194,0,0,0,1.149-10.8,9.156,9.156,0,0,0-10.186-4.292,9.209,9.209,0,0,0-6.908,8.5,11.677,11.677,0,0,0,1.29,5.9C-166.9,650.817-163.057,653.7-158.611,655.933Z" transform="translate(192.489 -631.571)" fill="var(--c1)"></path>
                                        <path id="Path_529" data-name="Path 529" d="M-136.694,656.016c-.594-1.707-1.171-3.269-1.674-4.855-.254-.8-.032-1.233.965-1.441a9.1,9.1,0,0,0,7.137-10.575,9.227,9.227,0,0,0-9.769-7.541,9.022,9.022,0,0,0-8.389,9.116,13.357,13.357,0,0,0,1.034,4.973C-145.29,650.6-141.231,653.56-136.694,656.016Z" transform="translate(148.425 -631.571)" fill="var(--c1)"></path>
                                    </svg>
                                    <p>
                                        BPlanWriters' expertise and commitment to excellence are unmatched. Grateful for providing me with an outstanding draft business plan to meet my immigration business goals. I highly recommend their services.							</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <div className="image">
                                    <picture>
                                        <img width="300" height="200" src="https://bplanwriter.com/wp-content/uploads/2024/01/young-bearded-man-with-striped-shirt_273609-5677-copy-300x200.webp" alt="" loading="lazy"/>
                                    </picture>
                                </div>
                                <div className="content">
                                    <p>John Doe</p>
                                    <p></p>
                                    <svg id="Group_15" data-name="Group 15" xmlns="http://www.w3.org/2000/svg" width="40.345" height="24.445" viewBox="0 0 40.345 24.445">
                                        <path id="Path_528" data-name="Path 528" d="M-158.611,655.933c-.922-1.9-1.891-3.725-1.833-5.966a9.766,9.766,0,0,0,5.906-3.015,9.194,9.194,0,0,0,1.149-10.8,9.156,9.156,0,0,0-10.186-4.292,9.209,9.209,0,0,0-6.908,8.5,11.677,11.677,0,0,0,1.29,5.9C-166.9,650.817-163.057,653.7-158.611,655.933Z" transform="translate(192.489 -631.571)" fill="var(--c1)"></path>
                                        <path id="Path_529" data-name="Path 529" d="M-136.694,656.016c-.594-1.707-1.171-3.269-1.674-4.855-.254-.8-.032-1.233.965-1.441a9.1,9.1,0,0,0,7.137-10.575,9.227,9.227,0,0,0-9.769-7.541,9.022,9.022,0,0,0-8.389,9.116,13.357,13.357,0,0,0,1.034,4.973C-145.29,650.6-141.231,653.56-136.694,656.016Z" transform="translate(148.425 -631.571)" fill="var(--c1)"></path>
                                    </svg>
                                    <p>
                                        Collaborating with these professionals has been an absolute pleasure for me. I was stressed about my business improvisation. But thanks to BPlanWriter, they provided a structured methodology and critical elements that helped my company reach its objective.							</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <div className="image">
                                    <picture>
                                        <img width="300" height="300" src="https://bplanwriter.com/wp-content/uploads/2024/01/photo-1535713875002-d1d0cf377fde-copy-300x300.webp" alt="" loading="lazy"/>
                                    </picture>
                                </div>
                                <div className="content">
                                    <p>Kenneth V</p>
                                    <p></p>
                                    <svg id="Group_15" data-name="Group 15" xmlns="http://www.w3.org/2000/svg" width="40.345" height="24.445" viewBox="0 0 40.345 24.445">
                                        <path id="Path_528" data-name="Path 528" d="M-158.611,655.933c-.922-1.9-1.891-3.725-1.833-5.966a9.766,9.766,0,0,0,5.906-3.015,9.194,9.194,0,0,0,1.149-10.8,9.156,9.156,0,0,0-10.186-4.292,9.209,9.209,0,0,0-6.908,8.5,11.677,11.677,0,0,0,1.29,5.9C-166.9,650.817-163.057,653.7-158.611,655.933Z" transform="translate(192.489 -631.571)" fill="var(--c1)"></path>
                                        <path id="Path_529" data-name="Path 529" d="M-136.694,656.016c-.594-1.707-1.171-3.269-1.674-4.855-.254-.8-.032-1.233.965-1.441a9.1,9.1,0,0,0,7.137-10.575,9.227,9.227,0,0,0-9.769-7.541,9.022,9.022,0,0,0-8.389,9.116,13.357,13.357,0,0,0,1.034,4.973C-145.29,650.6-141.231,653.56-136.694,656.016Z" transform="translate(148.425 -631.571)" fill="var(--c1)"></path>
                                    </svg>
                                    <p>
                                        Excellent work; I appreciate your great efforts and attention to documentation that ensures compliance with the E2 visa application requirements. I've succeeded in the most complex visa procedure, and all that is due to the BPlanWriter's responsiveness and efficiency.							</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <div className="image">
                                    <picture>
                                        <img width="300" height="300" src="https://bplanwriter.com/wp-content/uploads/2024/02/test-1-300x300.png" alt="" loading="lazy"/>
                                    </picture>
                                </div>
                                <div className="content">
                                    <p>Patrick Stox</p>
                                    <p></p>
                                    <svg id="Group_15" data-name="Group 15" xmlns="http://www.w3.org/2000/svg" width="40.345" height="24.445" viewBox="0 0 40.345 24.445">
                                        <path id="Path_528" data-name="Path 528" d="M-158.611,655.933c-.922-1.9-1.891-3.725-1.833-5.966a9.766,9.766,0,0,0,5.906-3.015,9.194,9.194,0,0,0,1.149-10.8,9.156,9.156,0,0,0-10.186-4.292,9.209,9.209,0,0,0-6.908,8.5,11.677,11.677,0,0,0,1.29,5.9C-166.9,650.817-163.057,653.7-158.611,655.933Z" transform="translate(192.489 -631.571)" fill="var(--c1)"></path>
                                        <path id="Path_529" data-name="Path 529" d="M-136.694,656.016c-.594-1.707-1.171-3.269-1.674-4.855-.254-.8-.032-1.233.965-1.441a9.1,9.1,0,0,0,7.137-10.575,9.227,9.227,0,0,0-9.769-7.541,9.022,9.022,0,0,0-8.389,9.116,13.357,13.357,0,0,0,1.034,4.973C-145.29,650.6-141.231,653.56-136.694,656.016Z" transform="translate(148.425 -631.571)" fill="var(--c1)"></path>
                                    </svg>
                                    <p>
                                        It's been a great experience working with BPlanWriter. I was facing challenges while putting together a business plan. Thank you for the draft, which helped me take advantage of investing in the U.S. I successfully overcame the fundraising process by presenting a business plan to my potential investors.							</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </Swiper>
                </div>
            </section>

        </>
    );
};

export default Home;


