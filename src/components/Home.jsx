import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

function Home() {
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
                        <h2>
                            Our Sample
                            <br />
                            Business Plans
                        </h2>
                        <p>Check out one of our business plan samples for yourself.</p>
                    </div>
                </div>
                <div className="plans">
                    {/* 		<div class="image">
			<img alt src="https://bplanwriter.com/wp-content/uploads/2024/01/pexels-andrea-piacquadio-3855599-copy.webp">
		</div> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-5">
                                <div className="plan-slider">
                                    <div
                                        thumbsslider=""
                                        className="swiper mySwiper swiper-initialized swiper-vertical swiper-backface-hidden swiper-thumbs"
                                    >
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-3e3599c9751a4c8d"
                                            aria-live="polite"
                                            style={{
                                                transform: "translate3d(0px, 0px, 0px)",
                                                transitionDuration: "0ms",
                                                transitionDelay: "0ms"
                                            }}
                                        >
                                            <div
                                                className="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active swiper-slide-thumb-active"
                                                role="group"
                                                aria-label="1 / 6"
                                                style={{ height: "53.3333px" }}
                                            >
                                                <div className="title">
                                                    <div className="icon-heading d-flex">
                                                        <i className="fa-solid fa-bullseye" />
                                                        <h3>EB-5 Business Plan </h3>
                                                    </div>
                                                    <i className="fa-solid fa-minus" />
                                                </div>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-next"
                                                role="group"
                                                aria-label="2 / 6"
                                                style={{ height: "53.3333px" }}
                                            >
                                                <div className="title">
                                                    <div className="icon-heading d-flex">
                                                        <i className="fa-solid fa-bullseye" />
                                                        <h3>Strategic Business Plan </h3>
                                                    </div>
                                                    <i className="fa-solid fa-minus" />
                                                </div>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-visible swiper-slide-fully-visible"
                                                role="group"
                                                aria-label="3 / 6"
                                                style={{ height: "53.3333px" }}
                                            >
                                                <div className="title">
                                                    <div className="icon-heading d-flex">
                                                        <i className="fa-solid fa-bullseye" />
                                                        <h3>Investor Business Plan </h3>
                                                    </div>
                                                    <i className="fa-solid fa-minus" />
                                                </div>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-visible swiper-slide-fully-visible"
                                                role="group"
                                                aria-label="4 / 6"
                                                style={{ height: "53.3333px" }}
                                            >
                                                <div className="title">
                                                    <div className="icon-heading d-flex">
                                                        <i className="fa-solid fa-bullseye" />
                                                        <h3>SBA Business Plan </h3>
                                                    </div>
                                                    <i className="fa-solid fa-minus" />
                                                </div>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-visible swiper-slide-fully-visible"
                                                role="group"
                                                aria-label="5 / 6"
                                                style={{ height: "53.3333px" }}
                                            >
                                                <div className="title">
                                                    <div className="icon-heading d-flex">
                                                        <i className="fa-solid fa-bullseye" />
                                                        <h3>L1 Visa Business Plan </h3>
                                                    </div>
                                                    <i className="fa-solid fa-minus" />
                                                </div>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-visible"
                                                role="group"
                                                aria-label="6 / 6"
                                                style={{ height: "53.3333px" }}
                                            >
                                                <div className="title">
                                                    <div className="icon-heading d-flex">
                                                        <i className="fa-solid fa-bullseye" />
                                                        <h3>E2 Visa Business Plan </h3>
                                                    </div>
                                                    <i className="fa-solid fa-minus" />
                                                </div>
                                            </div>
                                        </div>
                                        <span
                                            className="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-sm-7">
                                <div className="thumb-slider">
                                    <div className="swiper mySwiper2 swiper-initialized swiper-horizontal swiper-backface-hidden">
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-7a7d1f985957e62f"
                                            aria-live="polite"
                                            style={{
                                                transitionDuration: "0ms",
                                                transitionDelay: "0ms",
                                                transform: "translate3d(-260px, 0px, 0px)"
                                            }}
                                        >
                                            <div
                                                className="swiper-slide"
                                                role="group"
                                                aria-label="5 / 6"
                                                data-swiper-slide-index={4}
                                                style={{ width: 250, marginRight: 10 }}
                                            >
                                                <div className="image">
                                                    <a
                                                        href="https://bplanwriter.com/wp-content/uploads/2024/01/L1-Visa-Business-Plan-Sample-BPlanwriter.com__compressed.pdf"
                                                        target="_blank"
                                                    >
                                                        <picture>
                                                            <source
                                                                media="(min-width : 100px) and (max-width : 500px)"
                                                                width={212}
                                                                height={300}
                                                                srcSet="https://bplanwriter.com/wp-content/uploads/2024/01/L1-Visa-Business-Plan-Cover-Page-copy-212x300.webp"
                                                            />
                                                            <img
                                                                width={768}
                                                                height={1086}
                                                                src="https://bplanwriter.com/wp-content/uploads/2024/01/L1-Visa-Business-Plan-Cover-Page-copy-768x1086.webp"
                                                                alt=""
                                                                loading="lazy"
                                                            />
                                                        </picture>
                                                    </a>
                                                </div>
                                                <div className="link">
                                                    <a
                                                        className="btn-1"
                                                        href="https://bplanwriter.com/wp-content/uploads/2024/01/L1-Visa-Business-Plan-Sample-BPlanwriter.com__compressed.pdf"
                                                        target="_blank"
                                                    >
                                                        View Sample
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-prev"
                                                role="group"
                                                aria-label="6 / 6"
                                                data-swiper-slide-index={5}
                                                style={{ width: 250, marginRight: 10 }}
                                            >
                                                <div className="image">
                                                    <a
                                                        href="https://bplanwriter.com/wp-content/uploads/2024/01/E2-Visa-Business-Plan-by-BPlanwriter.com__compressed.pdf"
                                                        target="_blank"
                                                    >
                                                        <picture>
                                                            <source
                                                                media="(min-width : 100px) and (max-width : 500px)"
                                                                width={212}
                                                                height={300}
                                                                srcSet="https://bplanwriter.com/wp-content/uploads/2024/01/E2-Visa-Business-Plan-Cover-page-copy-212x300.webp"
                                                            />
                                                            <img
                                                                width={768}
                                                                height={1086}
                                                                src="https://bplanwriter.com/wp-content/uploads/2024/01/E2-Visa-Business-Plan-Cover-page-copy-768x1086.webp"
                                                                alt=""
                                                                loading="lazy"
                                                            />
                                                        </picture>
                                                    </a>
                                                </div>
                                                <div className="link">
                                                    <a
                                                        className="btn-1"
                                                        href="https://bplanwriter.com/wp-content/uploads/2024/01/E2-Visa-Business-Plan-by-BPlanwriter.com__compressed.pdf"
                                                        target="_blank"
                                                    >
                                                        View Sample
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-active"
                                                role="group"
                                                aria-label="1 / 6"
                                                data-swiper-slide-index={0}
                                                style={{ width: 250, marginRight: 10 }}
                                            >
                                                <div className="image">
                                                    <a
                                                        href="https://bplanwriter.com/wp-content/uploads/2024/01/EB5-Business-Plan-from-BPlanwriter.com__compressed.pdf"
                                                        target="_blank"
                                                    >
                                                        <picture>
                                                            <source
                                                                media="(min-width : 100px) and (max-width : 500px)"
                                                                width={212}
                                                                height={300}
                                                                srcSet="https://bplanwriter.com/wp-content/uploads/2024/01/EB5-Business-Plan-Cover-Page-copy-212x300.webp"
                                                            />
                                                            <img
                                                                width={768}
                                                                height={1086}
                                                                src="https://bplanwriter.com/wp-content/uploads/2024/01/EB5-Business-Plan-Cover-Page-copy-768x1086.webp"
                                                                alt=""
                                                                loading="lazy"
                                                            />
                                                        </picture>
                                                    </a>
                                                </div>
                                                <div className="link">
                                                    <a
                                                        className="btn-1"
                                                        href="https://bplanwriter.com/wp-content/uploads/2024/01/EB5-Business-Plan-from-BPlanwriter.com__compressed.pdf"
                                                        target="_blank"
                                                    >
                                                        View Sample
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-next"
                                                role="group"
                                                aria-label="2 / 6"
                                                data-swiper-slide-index={1}
                                                style={{ width: 250, marginRight: 10 }}
                                            >
                                                <div className="image">
                                                    <a
                                                        href="https://bplanwriter.com/wp-content/uploads/2024/01/Strategic-Cannabis-Business-Plan-by-BPlanwriter.com__compressed.pdf"
                                                        target="_blank"
                                                    >
                                                        <picture>
                                                            <source
                                                                media="(min-width : 100px) and (max-width : 500px)"
                                                                width={212}
                                                                height={300}
                                                                srcSet="https://bplanwriter.com/wp-content/uploads/2024/01/Strategic-Business-Plan-Cannabis-Cover-Page-copy-212x300.webp"
                                                            />
                                                            <img
                                                                width={768}
                                                                height={1086}
                                                                src="https://bplanwriter.com/wp-content/uploads/2024/01/Strategic-Business-Plan-Cannabis-Cover-Page-copy-768x1086.webp"
                                                                alt=""
                                                                loading="lazy"
                                                            />
                                                        </picture>
                                                    </a>
                                                </div>
                                                <div className="link">
                                                    <a
                                                        className="btn-1"
                                                        href="https://bplanwriter.com/wp-content/uploads/2024/01/Strategic-Cannabis-Business-Plan-by-BPlanwriter.com__compressed.pdf"
                                                        target="_blank"
                                                    >
                                                        View Sample
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="swiper-slide"
                                                role="group"
                                                aria-label="3 / 6"
                                                data-swiper-slide-index={2}
                                                style={{ width: 250, marginRight: 10 }}
                                            >
                                                <div className="image">
                                                    <a
                                                        href="https://bplanwriter.com/wp-content/uploads/2024/01/Sample-Investor-Business-Plan-by-BPlanwriter.com__compressed.pdf"
                                                        target="_blank"
                                                    >
                                                        <picture>
                                                            <source
                                                                media="(min-width : 100px) and (max-width : 500px)"
                                                                width={188}
                                                                height={300}
                                                                srcSet="https://bplanwriter.com/wp-content/uploads/2024/01/Investor-Business-Plan-Cover-Page-copy-188x300.webp"
                                                            />
                                                            <img
                                                                width={768}
                                                                height={1226}
                                                                src="https://bplanwriter.com/wp-content/uploads/2024/01/Investor-Business-Plan-Cover-Page-copy-768x1226.webp"
                                                                alt=""
                                                                loading="lazy"
                                                            />
                                                        </picture>
                                                    </a>
                                                </div>
                                                <div className="link">
                                                    <a
                                                        className="btn-1"
                                                        href="https://bplanwriter.com/wp-content/uploads/2024/01/Sample-Investor-Business-Plan-by-BPlanwriter.com__compressed.pdf"
                                                        target="_blank"
                                                    >
                                                        View Sample
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="swiper-slide"
                                                role="group"
                                                aria-label="4 / 6"
                                                data-swiper-slide-index={3}
                                                style={{ width: 250, marginRight: 10 }}
                                            >
                                                <div className="image">
                                                    <a
                                                        href="https://bplanwriter.com/wp-content/uploads/2024/01/SBA-Business-Plan-from-BPlanwriter.com__compressed.pdf"
                                                        target="_blank"
                                                    >
                                                        <picture>
                                                            <source
                                                                media="(min-width : 100px) and (max-width : 500px)"
                                                                width={212}
                                                                height={300}
                                                                srcSet="https://bplanwriter.com/wp-content/uploads/2024/01/SBA-Business-Plan-Cover-Page-copy-212x300.webp"
                                                            />
                                                            <img
                                                                width={768}
                                                                height={1086}
                                                                src="https://bplanwriter.com/wp-content/uploads/2024/01/SBA-Business-Plan-Cover-Page-copy-768x1086.webp"
                                                                alt=""
                                                                loading="lazy"
                                                            />
                                                        </picture>
                                                    </a>
                                                </div>
                                                <div className="link">
                                                    <a
                                                        className="btn-1"
                                                        href="https://bplanwriter.com/wp-content/uploads/2024/01/SBA-Business-Plan-from-BPlanwriter.com__compressed.pdf"
                                                        target="_blank"
                                                    >
                                                        View Sample
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                                            <span
                                                className="swiper-pagination-bullet swiper-pagination-bullet-active"
                                                tabIndex={0}
                                                role="button"
                                                aria-label="Go to slide 1"
                                                aria-current="true"
                                            />
                                            <span
                                                className="swiper-pagination-bullet"
                                                tabIndex={0}
                                                role="button"
                                                aria-label="Go to slide 2"
                                            />
                                            <span
                                                className="swiper-pagination-bullet"
                                                tabIndex={0}
                                                role="button"
                                                aria-label="Go to slide 3"
                                            />
                                            <span
                                                className="swiper-pagination-bullet"
                                                tabIndex={0}
                                                role="button"
                                                aria-label="Go to slide 4"
                                            />
                                            <span
                                                className="swiper-pagination-bullet"
                                                tabIndex={0}
                                                role="button"
                                                aria-label="Go to slide 5"
                                            />
                                            <span
                                                className="swiper-pagination-bullet"
                                                tabIndex={0}
                                                role="button"
                                                aria-label="Go to slide 6"
                                            />
                                        </div>
                                        <div
                                            className="swiper-button-prev"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Previous slide"
                                            aria-controls="swiper-wrapper-7a7d1f985957e62f"
                                        />
                                        <div
                                            className="swiper-button-next"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Next slide"
                                            aria-controls="swiper-wrapper-7a7d1f985957e62f"
                                        />
                                        <span
                                            className="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>

        </>
    )
}

export default Home