import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { usePostQueryQuery } from "../generated/index";
import { Trending } from "../components/Trending";
import { Topbar } from "../components/Topbar";
import { Logobar } from "../components/Logobar";
import { Mainslide } from "../components/Mainslide";
import Navbar from "../components/Navbar";

function Home() {
  //   const { data,error, loading} =  usePostQueryQuery();
  // console.log(data)
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error || !data) {
  //   return <div>ERROR</div>;
  // }
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>My TS Jannah</title>
        <link
          rel="stylesheet"
          id="taqyeem-buttons-style-css"
          href="css/style.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="tie-css-base-css"
          href="css/base.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="tie-css-styles-css"
          href="css/style.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="tie-css-widgets-css"
          href="css/widgets.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="tie-css-helpers-css"
          href="fonts/helpers.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="tie-fontawesome5-css"
          href="fonts/fontawesome.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="tie-css-ilightbox-css"
          href="css/skin.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="tie-css-shortcodes-css"
          href="css/shortcodes.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="taqyeem-styles-css"
          href="css/taqyeem.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="dashicons-css"
          href="fonts/dashicons.css"
          type="text/css"
          media="all"
        />

        <meta name="description" content="  version clean" />
        <meta name="theme-color" content="#0088ff" />
        <link rel="stylesheet" href="css/typo.css" media="all" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       
      </Head>

      <div className="background-overlay">
        <div id="tie-container" className="site tie-container">
          <div id="tie-wrapper">
            {/* BK-bloc-start-header*/}
            <Topbar></Topbar>
            <Logobar></Logobar>
            <Navbar></Navbar>
            {/* BK-end-bloc-header*/}
            {/* BK-bloc-start-slide*/}
            <Mainslide></Mainslide>
            {/* BK-bloc-end-slide */}
            <div
              id="tiepost-1020-section-749"
              className="section-wrapper container normal-width without-background"
            >
              <div
                className="section-item sidebar-right has-sidebar"
                style={{}}
              >
                <div className="container-normal">
                  <div className="tie-row main-content-row">
                    <div
                      className="main-content tie-col-md-8 tie-col-xs-12"
                      role="main"
                    >
                      {/* BK-bloc-start-Trending News */}
                      <Trending></Trending>
                      {/* .mag-box /*/}
                      {/* BK-bloc-start-sports */}
                      <div
                        id="tie-block_1160"
                        className="mag-box big-post-top-box has-first-big-post box-dark-skin dark-skin has-custom-color"
                        data-current={1}
                      >
                        <div className="container-wrapper">
                          <div className="mag-box-title the-global-title">
                            <h3>Sports </h3>
                            <div className="tie-alignright">
                              <div className="mag-box-options">
                                <ul
                                  className="mag-box-filter-links is-flex-tabs"
                                  style={{ opacity: 1 }}
                                >
                                  <li>
                                    <a
                                      href="#"
                                      className="block-ajax-term block-all-term active"
                                    >
                                      Tout
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-id={2}
                                      className="block-ajax-term"
                                    >
                                      Monde
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-id={10}
                                      className="block-ajax-term"
                                    >
                                      Voyage
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-id={14}
                                      className="block-ajax-term"
                                    >
                                      Jeux
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-id={15}
                                      className="block-ajax-term"
                                    >
                                      Alimentation
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-id={18}
                                      className="block-ajax-term"
                                    >
                                      Business
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-id={19}
                                      className="block-ajax-term"
                                    >
                                      Tech
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-id={21}
                                      className="block-ajax-term"
                                    >
                                      Style de vie
                                    </a>
                                  </li>
                                </ul>
                                <ul className="slider-arrow-nav">
                                  <li>
                                    <a
                                      className="block-pagination prev-posts pagination-disabled"
                                      href="#"
                                    >
                                      <span
                                        className="tie-icon-angle-left"
                                        aria-hidden="true"
                                      />
                                      <span className="screen-reader-text">
                                        Page précédente
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="block-pagination next-posts"
                                      href="#"
                                    >
                                      <span
                                        className="tie-icon-angle-right"
                                        aria-hidden="true"
                                      />
                                      <span className="screen-reader-text">
                                        Page suivante
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* .mag-box-options /*/}
                            </div>
                            {/* .tie-alignright /*/}
                          </div>
                          {/* .mag-box-title /*/}
                          <div className="mag-box-container clearfix">
                            <ul className="posts-items posts-list-container">
                              <li className="post-item  tie-video">
                                <a
                                  aria-label="La persuasion est souvent plus efficace que la force"
                                  href="#/2022/04/21/la-persuasion-est-souvent-plus-efficace-que-la-force-2/"
                                  className="post-thumb"
                                >
                                  <span className="post-cat-wrap">
                                    <span className="post-cat tie-cat-21">
                                      Style de vie
                                    </span>
                                  </span>
                                  <img
                                    width={390}
                                    height={220}
                                    src="images/2-390x220.jpg"
                                    className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="post-details">
                                  <div className="post-meta clearfix">
                                    <span className="author-meta single-author no-avatars">
                                      <span className="meta-item meta-author-wrapper meta-author-1">
                                        <span className="meta-author">
                                          <a
                                            href="#"
                                            className="author-name tie-icon"
                                            title="webmaster"
                                          >
                                            webmaster
                                          </a>
                                        </span>
                                      </span>
                                    </span>
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                    <div className="tie-alignright">
                                      <span className="meta-comment tie-icon meta-item fa-before">
                                        1
                                      </span>
                                      <span className="meta-views meta-item hot">
                                        <span
                                          className="tie-icon-fire"
                                          aria-hidden="true"
                                        />{" "}
                                        3&nbsp;211
                                      </span>
                                    </div>
                                  </div>
                                  {/* .post-meta */}
                                  <h2 className="post-title">
                                    <a href="#">
                                      La persuasion est souvent plus efficace
                                      que la force
                                    </a>
                                  </h2>
                                  <p className="post-excerpt">
                                    Stay focused and remember we design the best
                                    WordPress News and Magazine Themes. It’s the
                                    ones closest to you that want to…
                                  </p>
                                  <a className="more-link button" href="#">
                                    Lire la suite »
                                  </a>
                                </div>
                                {/* .post-details /*/}
                              </li>
                              {/* .first-post */}
                              <li className="post-item  tie-slider">
                                <a
                                  aria-label="Une hirondelle ne fait pas le printemps"
                                  href="#"
                                  className="post-thumb"
                                >
                                  <img
                                    width={220}
                                    height={150}
                                    src="images/4-220x150.jpg"
                                    className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="post-details">
                                  <div className="post-meta clearfix">
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                  </div>
                                  {/* .post-meta */}
                                  <h2 className="post-title">
                                    <a href="#">
                                      Une hirondelle ne fait pas le printemps
                                    </a>
                                  </h2>
                                </div>
                                {/* .post-details /*/}
                              </li>
                              <li className="post-item  tie-slider">
                                <a
                                  aria-label="Astuce du jour: That man again"
                                  href="#"
                                  className="post-thumb"
                                >
                                  <img
                                    width={220}
                                    height={150}
                                    src="images/9-220x150.jpg"
                                    className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="post-details">
                                  <div className="post-meta clearfix">
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                  </div>
                                  {/* .post-meta */}
                                  <h2 className="post-title">
                                    <a href="#">
                                      Astuce du jour: That man again
                                    </a>
                                  </h2>
                                </div>
                                {/* .post-details /*/}
                              </li>
                              <li className="post-item  tie-map">
                                <a
                                  aria-label="Les fans de Hibs et de Ross County en finale"
                                  href="#"
                                  className="post-thumb"
                                >
                                  <img
                                    width={220}
                                    height={150}
                                    src="images/12-220x150.jpg"
                                    className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="post-details">
                                  <div className="post-meta clearfix">
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                  </div>
                                  {/* .post-meta */}
                                  <h2 className="post-title">
                                    <a href="#">
                                      Les fans de Hibs et de Ross County en
                                      finale
                                    </a>
                                  </h2>
                                </div>
                                {/* .post-details /*/}
                              </li>
                              <li className="post-item  tie-video">
                                <a
                                  aria-label="Spieth en danger de rater la coupe"
                                  href="#"
                                  className="post-thumb"
                                >
                                  <img
                                    width={220}
                                    height={150}
                                    src="images/17-220x150.jpg"
                                    className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="post-details">
                                  <div className="post-meta clearfix">
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                  </div>
                                  {/* .post-meta */}
                                  <h2 className="post-title">
                                    <a href="#">
                                      Spieth en danger de rater la coupe
                                    </a>
                                  </h2>
                                </div>
                                {/* .post-details /*/}
                              </li>
                            </ul>
                            <div className="clearfix" />
                          </div>
                          {/* .mag-box-container /*/}
                        </div>
                        {/* .container-wrapper /*/}
                      </div>
                      {/* .mag-box /*/}
                      {/*
									
*/}
                      {/* BK-bloc-start-Racing */}
                      <div
                        id="tie-block_1810"
                        className="mag-box tie-col-sm-6 half-box has-first-big-post has-custom-color first-half-box"
                        data-current={1}
                      >
                        <div className="container-wrapper">
                          <div className="mag-box-title the-global-title">
                            <h3>Racing </h3>
                            <div className="tie-alignright">
                              <div className="mag-box-options">
                                <ul className="slider-arrow-nav">
                                  <li>
                                    <a
                                      className="block-pagination prev-posts pagination-disabled"
                                      href="#"
                                    >
                                      <span
                                        className="tie-icon-angle-left"
                                        aria-hidden="true"
                                      />
                                      <span className="screen-reader-text">
                                        Page précédente
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="block-pagination next-posts"
                                      href="#"
                                    >
                                      <span
                                        className="tie-icon-angle-right"
                                        aria-hidden="true"
                                      />
                                      <span className="screen-reader-text">
                                        Page suivante
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* .mag-box-options /*/}
                            </div>
                            {/* .tie-alignright /*/}
                          </div>
                          {/* .mag-box-title /*/}
                          <div className="mag-box-container clearfix">
                            <ul className="posts-items posts-list-container">
                              <li className="post-item  tie-slider">
                                <a
                                  aria-label="Une hirondelle ne fait pas le printemps"
                                  href="#"
                                  className="post-thumb"
                                >
                                  <span className="post-cat-wrap">
                                    <span className="post-cat tie-cat-21">
                                      Style de vie
                                    </span>
                                  </span>
                                  <img
                                    width={390}
                                    height={220}
                                    src="images/4-390x220.jpg"
                                    className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="post-details">
                                  <div className="post-meta clearfix">
                                    <span className="author-meta single-author no-avatars">
                                      <span className="meta-item meta-author-wrapper meta-author-1">
                                        <span className="meta-author">
                                          <a
                                            href="#"
                                            className="author-name tie-icon"
                                            title="webmaster"
                                          >
                                            webmaster
                                          </a>
                                        </span>
                                      </span>
                                    </span>
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                    <div className="tie-alignright">
                                      <span className="meta-comment tie-icon meta-item fa-before">
                                        1
                                      </span>
                                      <span className="meta-views meta-item hot">
                                        <span
                                          className="tie-icon-fire"
                                          aria-hidden="true"
                                        />{" "}
                                        3&nbsp;919
                                      </span>
                                    </div>
                                  </div>
                                  {/* .post-meta */}
                                  <h2 className="post-title">
                                    <a href="#">
                                      Une hirondelle ne fait pas le printemps
                                    </a>
                                  </h2>
                                  <p className="post-excerpt">
                                    Stay focused and remember we design the best
                                    WordPress News and Magazine Themes. It’s the
                                    ones closest to you that…
                                  </p>
                                  <a className="more-link button" href="#">
                                    Lire la suite »
                                  </a>
                                </div>
                                {/* .post-details /*/}
                              </li>
                              {/* .first-post */}
                              <li className="post-item  tie-video">
                                <a
                                  aria-label="La persuasion est souvent plus efficace que la force"
                                  href="#"
                                  className="post-thumb"
                                >
                                  <img
                                    width={220}
                                    height={150}
                                    src="images/2-220x150.jpg"
                                    className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="post-details">
                                  <div className="post-meta clearfix">
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                  </div>
                                  {/* .post-meta */}
                                  <h2 className="post-title">
                                    <a href="#">
                                      La persuasion est souvent plus efficace
                                      que la force
                                    </a>
                                  </h2>
                                </div>
                                {/* .post-details /*/}
                              </li>
                              <li className="post-item  tie-video">
                                <a
                                  aria-label="Spieth en danger de rater la coupe"
                                  href="#"
                                  className="post-thumb"
                                >
                                  <img
                                    width={220}
                                    height={150}
                                    src="images/17-220x150.jpg"
                                    className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="post-details">
                                  <div className="post-meta clearfix">
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                  </div>
                                  {/* .post-meta */}
                                  <h2 className="post-title">
                                    <a href="#">
                                      Spieth en danger de rater la coupe
                                    </a>
                                  </h2>
                                </div>
                                {/* .post-details /*/}
                              </li>
                            </ul>
                            <div className="clearfix" />
                          </div>
                          {/* .mag-box-container /*/}
                        </div>
                        {/* .container-wrapper /*/}
                      </div>
                      {/* .mag-box /*/}
                      {/* BK-end-bloc-start-Racing */}
                      {/*
									
								*/}
                      {/* BK-bloc-start-LifeStyle */}
                      <div
                        id="tie-block_304"
                        className="mag-box tie-col-sm-6 half-box has-first-big-post has-custom-color second-half-box"
                        data-current={1}
                      >
                        <div className="container-wrapper">
                          <div className="mag-box-title the-global-title">
                            <h3>LifeStyle </h3>
                            <div className="tie-alignright">
                              <div className="mag-box-options">
                                <ul className="slider-arrow-nav">
                                  <li>
                                    <a
                                      className="block-pagination prev-posts pagination-disabled"
                                      href="#"
                                    >
                                      <span
                                        className="tie-icon-angle-left"
                                        aria-hidden="true"
                                      />
                                      <span className="screen-reader-text">
                                        Page précédente
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="block-pagination next-posts"
                                      href="#"
                                    >
                                      <span
                                        className="tie-icon-angle-right"
                                        aria-hidden="true"
                                      />
                                      <span className="screen-reader-text">
                                        Page suivante
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* .mag-box-options /*/}
                            </div>
                            {/* .tie-alignright /*/}
                          </div>
                          {/* .mag-box-title /*/}
                          <div className="mag-box-container clearfix">
                            <ul className="posts-items posts-list-container">
                              <li className="post-item  tie-slider">
                                <a
                                  aria-label="Une hirondelle ne fait pas le printemps"
                                  href="#"
                                  className="post-thumb"
                                >
                                  <span className="post-cat-wrap">
                                    <span className="post-cat tie-cat-21">
                                      Style de vie
                                    </span>
                                  </span>
                                  <img
                                    width={390}
                                    height={220}
                                    src="images/4-390x220.jpg"
                                    className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="post-details">
                                  <div className="post-meta clearfix">
                                    <span className="author-meta single-author no-avatars">
                                      <span className="meta-item meta-author-wrapper meta-author-1">
                                        <span className="meta-author">
                                          <a
                                            href="#"
                                            className="author-name tie-icon"
                                            title="webmaster"
                                          >
                                            webmaster
                                          </a>
                                        </span>
                                      </span>
                                    </span>
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                    <div className="tie-alignright">
                                      <span className="meta-comment tie-icon meta-item fa-before">
                                        1
                                      </span>
                                      <span className="meta-views meta-item hot">
                                        <span
                                          className="tie-icon-fire"
                                          aria-hidden="true"
                                        />{" "}
                                        3&nbsp;919
                                      </span>
                                    </div>
                                  </div>
                                  {/* .post-meta */}
                                  <h2 className="post-title">
                                    <a href="#/">
                                      Une hirondelle ne fait pas le printemps
                                    </a>
                                  </h2>
                                  <p className="post-excerpt">
                                    Stay focused and remember we design the best
                                    WordPress News and Magazine Themes. It’s the
                                    ones closest to you that…
                                  </p>
                                  <a className="more-link button" href="#">
                                    Lire la suite »
                                  </a>
                                </div>
                                {/* .post-details /*/}
                              </li>
                              {/* .first-post */}
                              <li className="post-item  tie-video">
                                <a
                                  aria-label="La persuasion est souvent plus efficace que la force"
                                  href="#"
                                  className="post-thumb"
                                >
                                  <img
                                    width={220}
                                    height={150}
                                    src="images/2-220x150.jpg"
                                    className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="post-details">
                                  <div className="post-meta clearfix">
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                  </div>
                                  {/* .post-meta */}
                                  <h2 className="post-title">
                                    <a href="#">
                                      La persuasion est souvent plus efficace
                                      que la force
                                    </a>
                                  </h2>
                                </div>
                                {/* .post-details /*/}
                              </li>
                              <li className="post-item  tie-video">
                                <a
                                  aria-label="Spieth en danger de rater la coupe"
                                  href="#"
                                  className="post-thumb"
                                >
                                  <img
                                    width={220}
                                    height={150}
                                    src="images/17-220x150.jpg"
                                    className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="post-details">
                                  <div className="post-meta clearfix">
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                  </div>
                                  {/* .post-meta */}
                                  <h2 className="post-title">
                                    <a href="#">
                                      Spieth en danger de rater la coupe
                                    </a>
                                  </h2>
                                </div>
                                {/* .post-details /*/}
                              </li>
                            </ul>
                            <div className="clearfix" />
                          </div>
                          {/* .mag-box-container /*/}
                        </div>
                        {/* .container-wrapper /*/}
                      </div>
                      {/* .mag-box /*/}
                      {/* BK-end-bloc-start-LifeStyle */}
                      {/* 
									
                          */}
                      <div className="clearfix half-box-clearfix" />
                    </div>
                    {/* .main-content /*/}
                    {/* BK-bloc-start-followus */}
                    <aside
                      className="sidebar tie-col-md-4 tie-col-xs-12 normal-side is-sticky"
                      aria-label="Sidebar Principale"
                      style={{
                        position: "relative",
                        overflow: "visible",
                        boxSizing: "border-box",
                        minHeight: 1,
                      }}
                    >
                      <div
                        className="theiaStickySidebar"
                        style={{
                          paddingTop: 0,
                          paddingBottom: 1,
                          position: "static",
                          transform: "none",
                        }}
                      >
                        <div
                          id="social-statistics-2"
                          className="container-wrapper widget social-statistics-widget"
                        >
                          <div className="widget-title the-global-title">
                            <div className="the-subtitle">
                              Follow Us
                              <span className="widget-title-icon tie-icon" />
                            </div>
                          </div>
                          <div className="social-counter-total">
                            {" "}
                            <span className="tie-icon-heart" />
                            <span className="counter-total-text">
                              Join <strong>13M</strong>
                              Followers
                            </span>
                          </div>
                          <ul className="solid-social-icons two-cols transparent-icons Arqam-Lite">
                            <li className="social-icons-item">
                              {" "}
                              <a
                                className="facebook-social-icon"
                                href="#"
                                rel="nofollow noopener"
                                target="_blank"
                              >
                                {" "}
                                <span className="counter-icon tie-icon-facebook" />{" "}
                                <span className="followers">
                                  {" "}
                                  <span className="followers-num">1.3M</span>
                                  <span className="followers-name">
                                    Fans
                                  </span>{" "}
                                </span>{" "}
                              </a>{" "}
                            </li>
                            <li className="social-icons-item">
                              {" "}
                              <a
                                className="twitter-social-icon"
                                href="#"
                                rel="nofollow noopener"
                                target="_blank"
                              >
                                {" "}
                                <span className="counter-icon tie-icon-twitter" />{" "}
                                <span className="followers">
                                  {" "}
                                  <span className="followers-num">1,203</span>
                                  <span className="followers-name">
                                    Followers
                                  </span>{" "}
                                </span>{" "}
                              </a>
                            </li>
                            <li className="social-icons-item">
                              {" "}
                              <a
                                className="youtube-social-icon"
                                href="#"
                                rel="nofollow noopener"
                                target="_blank"
                              >
                                {" "}
                                <span className="counter-icon tie-icon-youtube" />{" "}
                                <span className="followers">
                                  {" "}
                                  <span className="followers-num">50,100</span>
                                  <span className="followers-name">
                                    Followers
                                  </span>{" "}
                                </span>{" "}
                              </a>
                            </li>
                            <li className="social-icons-item">
                              {" "}
                              <a
                                className="vimeo-social-icon"
                                href="#"
                                rel="nofollow noopener"
                                target="_blank"
                              >
                                {" "}
                                <span className="counter-icon tie-icon-vimeo" />{" "}
                                <span className="followers">
                                  {" "}
                                  <span className="followers-num">1,471</span>
                                  <span className="followers-name">
                                    Subscribers
                                  </span>{" "}
                                </span>{" "}
                              </a>
                            </li>
                            <li className="social-icons-item">
                              {" "}
                              <a
                                className="dribbble-social-icon"
                                href="#"
                                rel="nofollow noopener"
                                target="_blank"
                              >
                                {" "}
                                <span className="counter-icon tie-icon-dribbble" />{" "}
                                <span className="followers">
                                  {" "}
                                  <span className="followers-num">63</span>
                                  <span className="followers-name">
                                    Followers
                                  </span>{" "}
                                </span>{" "}
                              </a>
                            </li>
                            <li className="social-icons-item">
                              {" "}
                              <a
                                className="behance-social-icon"
                                href="#"
                                rel="nofollow noopener"
                                target="_blank"
                              >
                                {" "}
                                <span className="counter-icon tie-icon-behance" />{" "}
                                <span className="followers">
                                  {" "}
                                  <span className="followers-num">65,128</span>
                                  <span className="followers-name">
                                    Followers
                                  </span>{" "}
                                </span>{" "}
                              </a>
                            </li>
                            <li className="social-icons-item">
                              {" "}
                              <a
                                className="instagram-social-icon"
                                href="#"
                                rel="nofollow noopener"
                                target="_blank"
                              >
                                {" "}
                                <span className="counter-icon tie-icon-instagram" />{" "}
                                <span className="followers">
                                  {" "}
                                  <span className="followers-num">4,4k+</span>
                                  <span className="followers-name">
                                    Followers
                                  </span>{" "}
                                </span>{" "}
                              </a>
                            </li>
                            <li className="social-icons-item">
                              {" "}
                              <a
                                className="github-social-icon"
                                href="#"
                                rel="nofollow noopener"
                                target="_blank"
                              >
                                {" "}
                                <span className="counter-icon tie-icon-github" />{" "}
                                <span className="followers">
                                  {" "}
                                  <span className="followers-num">2</span>
                                  <span className="followers-name">
                                    Followers
                                  </span>{" "}
                                </span>{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* BK-end-bloc-start-followus */}
                        {/* BK-bloc-start-widget*/}
                        {/* .widget /*/}
                        <div
                          id="tie-weather-widget-2"
                          className="widget tie-weather-widget"
                        >
                          <div
                            id="tie-weather-widget-13"
                            className="widget tie-weather-widget"
                          >
                            <div className="widget-title the-global-title">
                              <div className="the-subtitle">
                                Weather
                                <span className="widget-title-icon tie-icon" />
                              </div>
                            </div>
                            <span
                              className="tie-weather-user-location has-title"
                              data-options="{'location':'Cairo','units':'C','forecast_days':'5','custom_name':'Cairo','animated':'true'}"
                            >
                              <span className="tie-icon-gps" />
                            </span>
                            <div
                              id="tie-weather-cairo"
                              className="weather-wrap is-animated"
                            >
                              <div className="weather-icon-and-city">
                                <div className="weather-icon">
                                  <div className="icon-moon" />
                                </div>
                                <div className="weather-name the-subtitle">
                                  Cairo
                                </div>
                                <div className="weather-desc">Clear Sky</div>
                              </div>
                              <div className="weather-todays-stats">
                                <div className="weather-current-temp">
                                  {" "}
                                  21 <sup>℃</sup>{" "}
                                </div>
                                <div className="weather-more-todays-stats">
                                  <div className="weather_highlow">
                                    {" "}
                                    <span
                                      aria-hidden="true"
                                      className="tie-icon-thermometer-half"
                                    />{" "}
                                    21º - 13º
                                  </div>
                                  <div className="weather_humidty">
                                    {" "}
                                    <span
                                      aria-hidden="true"
                                      className="tie-icon-raindrop"
                                    />{" "}
                                    <span className="screen-reader-text" /> 35%{" "}
                                  </div>
                                  <div className="weather_wind">
                                    {" "}
                                    <span
                                      aria-hidden="true"
                                      className="tie-icon-wind"
                                    />{" "}
                                    <span className="screen-reader-text" /> 5.14
                                    km/h
                                  </div>
                                </div>
                              </div>
                              <div className="weather-forecast small-weather-icons weather_days_5">
                                <div className="weather-forecast-day">
                                  <div className="weather-icon">
                                    <div className="icon-moon" />
                                  </div>
                                  <div className="weather-forecast-day-temp">
                                    21<sup>℃</sup>
                                  </div>
                                  <div className="weather-forecast-day-abbr">
                                    Sun
                                  </div>
                                </div>
                                <div className="weather-forecast-day">
                                  <div className="weather-icon">
                                    <div className="icon-sun" />
                                  </div>
                                  <div className="weather-forecast-day-temp">
                                    24<sup>℃</sup>
                                  </div>
                                  <div className="weather-forecast-day-abbr">
                                    Mon
                                  </div>
                                </div>
                                <div className="weather-forecast-day">
                                  <div className="weather-icon">
                                    <div className="icon-cloud" />
                                    <div className="icon-cloud-behind" />
                                    <div className="icon-basecloud-bg" />
                                    <div className="icon-sun-animi" />
                                  </div>
                                  <div className="weather-forecast-day-temp">
                                    28<sup>℃</sup>
                                  </div>
                                  <div className="weather-forecast-day-abbr">
                                    Tue
                                  </div>
                                </div>
                                <div className="weather-forecast-day">
                                  <div className="weather-icon">
                                    <div className="icon-cloud" />
                                    <div className="icon-cloud-behind" />
                                    <div className="icon-basecloud-bg" />
                                    <div className="icon-sun-animi" />
                                  </div>
                                  <div className="weather-forecast-day-temp">
                                    28<sup>℃</sup>
                                  </div>
                                  <div className="weather-forecast-day-abbr">
                                    Wed
                                  </div>
                                </div>
                                <div className="weather-forecast-day">
                                  <div className="weather-icon">
                                    <div className="icon-cloud" />
                                    <div className="icon-cloud-behind" />
                                    <div className="icon-basecloud-bg" />
                                    <div className="icon-sun-animi" />
                                  </div>
                                  <div className="weather-forecast-day-temp">
                                    30<sup>℃</sup>
                                  </div>
                                  <div className="weather-forecast-day-abbr">
                                    Thu
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* BK-bloc-start-widget*/}
                        {/* .widget /*/}
                        <div className="container-wrapper tabs-container-wrapper tabs-container-3">
                          <div className="widget tabs-widget">
                            <div className="widget-container">
                              <div className="tabs-widget">
                                <div className="tabs-wrapper">
                                  <ul className="tabs">
                                    <li className="active">
                                      <a href="#">Récent</a>
                                    </li>
                                    <li>
                                      <a href="#">Populaire</a>
                                    </li>
                                    <li>
                                      <a href="#">Commentaires</a>
                                    </li>
                                  </ul>
                                  {/* ul.tabs-menu /*/}
                                  {/* */}
                                  <div
                                    id="widget_tabs-2-recent"
                                    className="tab-content tab-content-recent"
                                  >
                                    <ul className="tab-content-elements">
                                      <li className="widget-single-post-item widget-post-list tie-slider">
                                        <div className="post-widget-thumbnail">
                                          <a
                                            aria-label="Une hirondelle ne fait pas le printemps"
                                            href="#"
                                            className="post-thumb"
                                          >
                                            <img
                                              width={220}
                                              height={150}
                                              src="images/4-220x150.jpg"
                                              className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                              alt=""
                                              loading="lazy"
                                            />
                                          </a>
                                        </div>
                                        {/* post-alignleft /*/}
                                        <div className="post-widget-body ">
                                          <a
                                            className="post-title the-subtitle"
                                            href="#"
                                          >
                                            Une hirondelle ne fait pas le
                                            printemps
                                          </a>
                                          <div className="post-meta">
                                            <span className="date meta-item tie-icon">
                                              il y a 1 heure
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="widget-single-post-item widget-post-list tie-video">
                                        <div className="post-widget-thumbnail">
                                          <a
                                            aria-label="La persuasion est souvent plus efficace que la force"
                                            href="#"
                                            className="post-thumb"
                                          >
                                            <img
                                              width={220}
                                              height={150}
                                              src="images/2-220x150.jpg"
                                              className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                              alt=""
                                              loading="lazy"
                                            />
                                          </a>
                                        </div>
                                        {/* post-alignleft /*/}
                                        <div className="post-widget-body ">
                                          <a
                                            className="post-title the-subtitle"
                                            href="#"
                                          >
                                            La persuasion est souvent plus
                                            efficace que la force
                                          </a>
                                          <div className="post-meta">
                                            <span className="date meta-item tie-icon">
                                              il y a 1 heure
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="widget-single-post-item widget-post-list tie-video">
                                        <div className="post-widget-thumbnail">
                                          <a
                                            aria-label="Spieth en danger de rater la coupe"
                                            href="#"
                                            className="post-thumb"
                                          >
                                            <img
                                              width={220}
                                              height={150}
                                              src="images/17-220x150.jpg"
                                              className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                              alt=""
                                              loading="lazy"
                                            />
                                          </a>
                                        </div>
                                        {/* post-alignleft /*/}
                                        <div className="post-widget-body ">
                                          <a
                                            className="post-title the-subtitle"
                                            href="#"
                                          >
                                            Spieth en danger de rater la coupe
                                          </a>
                                          <div className="post-meta">
                                            <span className="date meta-item tie-icon">
                                              il y a 1 heure
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="widget-single-post-item widget-post-list tie-map">
                                        <div className="post-widget-thumbnail">
                                          <a
                                            aria-label="Les fans de Hibs et de Ross County en finale"
                                            href="#"
                                            className="post-thumb"
                                          >
                                            <img
                                              width={220}
                                              height={150}
                                              src="images/12-220x150.jpg"
                                              className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                              alt=""
                                              loading="lazy"
                                            />
                                          </a>
                                        </div>
                                        {/* post-alignleft /*/}
                                        <div className="post-widget-body ">
                                          <a
                                            className="post-title the-subtitle"
                                            href="#"
                                          >
                                            Les fans de Hibs et de Ross County
                                            en finale
                                          </a>
                                          <div className="post-meta">
                                            <span className="date meta-item tie-icon">
                                              il y a 1 heure
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="widget-single-post-item widget-post-list tie-slider">
                                        <div className="post-widget-thumbnail">
                                          <a
                                            aria-label="Astuce du jour: That man again"
                                            href="#"
                                            className="post-thumb"
                                          >
                                            <img
                                              width={220}
                                              height={150}
                                              src="images/9-220x150.jpg"
                                              className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                              alt=""
                                              loading="lazy"
                                            />
                                          </a>
                                        </div>
                                        {/* post-alignleft /*/}
                                        <div className="post-widget-body ">
                                          <a
                                            className="post-title the-subtitle"
                                            href="#/"
                                          >
                                            Astuce du jour: That man again
                                          </a>
                                          <div className="post-meta">
                                            <span className="date meta-item tie-icon">
                                              il y a 1 heure
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* .tab-content#recent-posts-tab /*/}
                                  <div
                                    id="widget_tabs-2-popular"
                                    className="tab-content tab-content-popular"
                                  >
                                    <ul className="tab-content-elements">
                                      <li className="widget-single-post-item widget-post-list">
                                        <div className="post-widget-body no-small-thumbs">
                                          <a
                                            className="post-title the-subtitle"
                                            href="#"
                                          >
                                            Bonjour tout le monde&nbsp;!
                                          </a>
                                          <div className="post-meta">
                                            <span className="date meta-item tie-icon">
                                              il y a 1 jour
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="widget-single-post-item widget-post-list tie-video">
                                        <div className="post-widget-thumbnail">
                                          <a
                                            aria-label="Après tout est dit et fait, plus est dit que fait"
                                            href="#"
                                            className="post-thumb"
                                          >
                                            <img
                                              width={220}
                                              height={150}
                                              src="images/16-220x150.jpg"
                                              className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                              alt=""
                                              loading="lazy"
                                            />
                                          </a>
                                        </div>
                                        {/* post-alignleft /*/}
                                        <div className="post-widget-body ">
                                          <a
                                            className="post-title the-subtitle"
                                            href="#"
                                          >
                                            Après tout est dit et fait, plus est
                                            dit que fait
                                          </a>
                                          <div className="post-meta">
                                            <span className="date meta-item tie-icon">
                                              il y a 1 heure
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="widget-single-post-item widget-post-list tie-map">
                                        <div className="post-widget-thumbnail">
                                          <a
                                            aria-label="La connaissance est le pouvoir"
                                            href="#"
                                            className="post-thumb"
                                          >
                                            <img
                                              width={220}
                                              height={150}
                                              src="images/5-220x150.jpg"
                                              className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                              alt=""
                                              loading="lazy"
                                            />
                                          </a>
                                        </div>
                                        {/* post-alignleft /*/}
                                        <div className="post-widget-body ">
                                          <a
                                            className="post-title the-subtitle"
                                            href="#"
                                          >
                                            La connaissance est le pouvoir
                                          </a>
                                          <div className="post-meta">
                                            <span className="date meta-item tie-icon">
                                              il y a 1 heure
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="widget-single-post-item widget-post-list tie-audio">
                                        <div className="post-widget-thumbnail">
                                          <a
                                            aria-label="Le Futur du Possible"
                                            href="#"
                                            className="post-thumb"
                                          >
                                            <img
                                              width={220}
                                              height={150}
                                              src="images/12-220x150.jpg"
                                              className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                              alt=""
                                              loading="lazy"
                                            />
                                          </a>
                                        </div>
                                        {/* post-alignleft /*/}
                                        <div className="post-widget-body ">
                                          <a
                                            className="post-title the-subtitle"
                                            href="#"
                                          >
                                            Le Futur du Possible
                                          </a>
                                          <div className="post-meta">
                                            <span className="date meta-item tie-icon">
                                              il y a 1 heure
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="widget-single-post-item widget-post-list tie-video">
                                        <div className="post-widget-thumbnail">
                                          <a
                                            aria-label="Le patron de Xbox parle du prix du projet Scorpio"
                                            href="#"
                                            className="post-thumb"
                                          >
                                            <img
                                              width={220}
                                              height={150}
                                              src="images/7-220x150.jpg"
                                              className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                              alt=""
                                              loading="lazy"
                                            />
                                          </a>
                                        </div>
                                        {/* post-alignleft /*/}
                                        <div className="post-widget-body ">
                                          <a
                                            className="post-title the-subtitle"
                                            href="#"
                                          >
                                            Le patron de Xbox parle du prix du
                                            projet Scorpio
                                          </a>
                                          <div className="post-meta">
                                            <span className="date meta-item tie-icon">
                                              il y a 1 heure
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* .tab-content#popular-posts-tab /*/}
                                  <div
                                    id="widget_tabs-2-comments"
                                    className="tab-content tab-content-comments"
                                  >
                                    <ul className="tab-content-elements">
                                      <li>
                                        <div
                                          className="post-widget-thumbnail"
                                          style={{ width: 70 }}
                                        >
                                          <a className="author-avatar" href="#">
                                            {/* a voir srcset */}
                                            <img
                                              alt="Photo de Ivy Torres"
                                              src="images/29dfc19f0f889f9a43e44e733fcfda08.png"
                                              srcSet="http://2.gravatar.com/avatar/29dfc19f0f889f9a43e44e733fcfda08?s=140&d=mm&r=g 2x"
                                              className="avatar avatar-70 photo"
                                              height={70}
                                              width={70}
                                              loading="lazy"
                                            />
                                          </a>
                                        </div>
                                        <div className="comment-body ">
                                          <a
                                            className="comment-author"
                                            href="#"
                                          >
                                            Ivy Torres{" "}
                                          </a>
                                          <p>
                                            Hi, this is a comment. To get
                                            started with moderating, editi...
                                          </p>
                                        </div>
                                      </li>
                                      <li>
                                        <div
                                          className="post-widget-thumbnail"
                                          style={{ width: 70 }}
                                        >
                                          <a className="author-avatar" href="#">
                                            <img
                                              alt="Photo de Ivy Torres"
                                              src="images/e05af84a6e643439bce73748d070b265.png"
                                              srcSet="http://2.gravatar.com/avatar/e05af84a6e643439bce73748d070b265?s=140&d=mm&r=g 2x"
                                              className="avatar avatar-70 photo"
                                              height={70}
                                              width={70}
                                              loading="lazy"
                                            />{" "}
                                          </a>
                                        </div>
                                        <div className="comment-body ">
                                          <a
                                            className="comment-author"
                                            href="#"
                                          >
                                            Ivy Torres{" "}
                                          </a>
                                          <p>
                                            Hi, this is a comment. To get
                                            started with moderating, editi...
                                          </p>
                                        </div>
                                      </li>
                                      <li>
                                        <div
                                          className="post-widget-thumbnail"
                                          style={{ width: 70 }}
                                        >
                                          <a className="author-avatar" href="#">
                                            <img
                                              alt="Photo de Ivy Torres"
                                              src="images/fca66cb608807fbf69551120ed3d9a63.png"
                                              srcSet="http://0.gravatar.com/avatar/fca66cb608807fbf69551120ed3d9a63?s=140&d=mm&r=g 2x"
                                              className="avatar avatar-70 photo"
                                              height={70}
                                              width={70}
                                              loading="lazy"
                                            />{" "}
                                          </a>
                                        </div>
                                        <div className="comment-body ">
                                          <a
                                            className="comment-author"
                                            href="#"
                                          >
                                            Ivy Torres{" "}
                                          </a>
                                          <p>
                                            Hi, this is a comment. To get
                                            started with moderating, editi...
                                          </p>
                                        </div>
                                      </li>
                                      <li>
                                        <div
                                          className="post-widget-thumbnail"
                                          style={{ width: 70 }}
                                        >
                                          <a className="author-avatar" href="#">
                                            <img
                                              alt="Photo de Ashlee Merritt"
                                              src="images/df53e43a250d8261985d919c27b3f7b0.png"
                                              srcSet="http://1.gravatar.com/avatar/df53e43a250d8261985d919c27b3f7b0?s=140&d=mm&r=g 2x"
                                              className="avatar avatar-70 photo"
                                              height={70}
                                              width={70}
                                              loading="lazy"
                                            />{" "}
                                          </a>
                                        </div>
                                        <div className="comment-body ">
                                          <a
                                            className="comment-author"
                                            href="#"
                                          >
                                            Ashlee Merritt{" "}
                                          </a>
                                          <p>
                                            Hi, this is a comment. To get
                                            started with moderating, editi...
                                          </p>
                                        </div>
                                      </li>
                                      <li>
                                        <div
                                          className="post-widget-thumbnail"
                                          style={{ width: 70 }}
                                        >
                                          <a className="author-avatar" href="#">
                                            <img
                                              alt="Photo de Ernest Baker"
                                              src="images/4c6915621f0b1dcb2f07820cf474d478.png"
                                              srcSet="http://1.gravatar.com/avatar/4c6915621f0b1dcb2f07820cf474d478?s=140&d=mm&r=g 2x"
                                              className="avatar avatar-70 photo"
                                              height={70}
                                              width={70}
                                              loading="lazy"
                                            />{" "}
                                          </a>
                                        </div>
                                        <div className="comment-body ">
                                          <a
                                            className="comment-author"
                                            href="#"
                                          >
                                            Ernest Baker{" "}
                                          </a>
                                          <p>
                                            Hi, this is a comment. To get
                                            started with moderating, editi...
                                          </p>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* .tab-content#comments-tab /*/}
                                </div>
                                {/* .tabs-wrapper-animated /*/}
                              </div>
                              {/* .tabs-widget /*/}
                            </div>
                            {/* .widget-container /*/}
                          </div>
                          {/* .tabs-widget /*/}
                        </div>
                        {/* .container-wrapper /*/}
                      </div>
                      {/* .theiaStickySidebar /*/}
                    </aside>
                    {/* .sidebar /*/}
                  </div>
                  {/* .main-content-row */}
                </div>
                {/* .container /*/}
              </div>
              {/* .section-item /*/}
            </div>
            {/* .tiepost-1020-section-749 /*/}
            {/* BK-bloc-start-Trending News */}
            <div
              id="tiepost-1020-section-8509"
              className="section-wrapper container-full without-background"
            >
              <div className="section-item full-width" style={{}}>
                <div className="container">
                  <div className="tie-row main-content-row">
                    <div className="main-content tie-col-md-12">
                      <section
                        id="tie-block_3032"
                        className="slider-area mag-box media-overlay"
                      >
                        <div className="slider-area-inner">
                          <div
                            id="tie-main-slider-9-block_3032"
                            className="tie-main-slider main-slider grid-2-big boxed-slider grid-slider-wrapper tie-slick-slider-wrapper"
                            data-slider-id={9}
                            data-speed={3000}
                          >
                            <div className="main-slider-inner">
                              <div className="containerblock_3032">
                                <div className="tie-slick-slider slick-initialized slick-slider">
                                  <ul className="tie-slider-nav">
                                    <li className="slick-arrow" style={{}}>
                                      <span className="tie-icon-angle-left" />
                                    </li>
                                    <li className="slick-arrow" style={{}}>
                                      <span className="tie-icon-angle-right" />
                                    </li>
                                  </ul>
                                  <div
                                    aria-live="polite"
                                    className="slick-list draggable"
                                  >
                                    <div
                                      className="slick-track"
                                      style={{
                                        opacity: 1,
                                        width: 4680,
                                        transform:
                                          "translate3d(-1170px, 0px, 0px)",
                                      }}
                                      role="listbox"
                                    >
                                      <div
                                        className="slide slick-slide slick-cloned"
                                        data-slick-index={-1}
                                        id=""
                                        aria-hidden="true"
                                        style={{ width: 1170 }}
                                        tabIndex={-1}
                                      >
                                        <div
                                          style={{
                                            backgroundImage:
                                              "url(images/7-780x470.jpg)",
                                          }}
                                          className="grid-item slide-id-975 tie-slide-3 tie-video"
                                        >
                                          <a
                                            href="#"
                                            className="all-over-thumb-link"
                                            aria-label="Spieth en danger de rater la coupe"
                                            tabIndex={-1}
                                          />
                                          <div className="thumb-overlay">
                                            <span className="tie-icon tie-media-icon" />
                                            <span className="post-cat-wrap">
                                              <a
                                                className="post-cat tie-cat-21"
                                                href="#"
                                                tabIndex={-1}
                                              >
                                                Style de vie
                                              </a>
                                            </span>
                                            <div className="thumb-content">
                                              <div className="thumb-meta">
                                                <span className="date meta-item tie-icon">
                                                  il y a 1 heure
                                                </span>
                                              </div>
                                              <h2 className="thumb-title">
                                                <a href="#" tabIndex={-1}>
                                                  Spieth en danger de rater la
                                                  coupe
                                                </a>
                                              </h2>
                                              <div className="thumb-desc">
                                                Stay focused and remember we
                                                design the best WordPress News
                                                and Magazine Themes. It’s the
                                                ones closest to you that…
                                              </div>
                                              {/* .thumb-desc */}
                                            </div>{" "}
                                            {/* .thumb-content /*/}
                                          </div>
                                          {/* .thumb-overlay /*/}
                                        </div>
                                        {/* .slide || .grid-item /*/}
                                        <div
                                          style={{
                                            backgroundImage:
                                              "url(images/15-780x470.jpg)",
                                          }}
                                          className="grid-item slide-id-974 tie-slide-4 tie-map"
                                        >
                                          <a
                                            href="#"
                                            className="all-over-thumb-link"
                                            aria-label="Les fans de Hibs et de Ross County en finale"
                                            tabIndex={-1}
                                          />
                                          <div className="thumb-overlay">
                                            <span className="tie-icon tie-media-icon" />
                                            <span className="post-cat-wrap">
                                              <a
                                                className="post-cat tie-cat-21"
                                                href="#"
                                                tabIndex={-1}
                                              >
                                                Style de vie
                                              </a>
                                            </span>
                                            <div className="thumb-content">
                                              <div className="thumb-meta">
                                                <span className="date meta-item tie-icon">
                                                  il y a 1 heure
                                                </span>
                                              </div>
                                              <h2 className="thumb-title">
                                                <a href="#" tabIndex={-1}>
                                                  Les fans de Hibs et de Ross
                                                  County en finale
                                                </a>
                                              </h2>
                                              <div className="thumb-desc">
                                                Stay focused and remember we
                                                design the best WordPress News
                                                and Magazine Themes. It’s the
                                                ones closest to you that…
                                              </div>
                                              {/* .thumb-desc */}
                                            </div>{" "}
                                            {/* .thumb-content /*/}
                                          </div>
                                          {/* .thumb-overlay /*/}
                                        </div>
                                        {/* .slide || .grid-item /*/}
                                      </div>
                                      <div
                                        className="slide slick-slide slick-current slick-active"
                                        data-slick-index={0}
                                        aria-hidden="false"
                                        style={{ width: 1170 }}
                                        tabIndex={-1}
                                        role="option"
                                        data-aria-describedby="slick-slide10"
                                      >
                                        <div
                                          style={{
                                            backgroundImage:
                                              "url(images/1-780x470.jpg)",
                                          }}
                                          className="grid-item slide-id-977 tie-slide-1 tie-slider"
                                        >
                                          <a
                                            href="#"
                                            className=" all-over-thumb-link"
                                            aria-label="Une hirondelle ne fait pas le printemps"
                                            tabIndex={0}
                                          />
                                          <div className="thumb-overlay">
                                            <span className="tie-icon tie-media-icon" />
                                            <span className="post-cat-wrap">
                                              <a
                                                className="post-cat tie-cat-21"
                                                href="#"
                                                tabIndex={0}
                                              >
                                                Style de vie
                                              </a>
                                            </span>
                                            <div className="thumb-content">
                                              <div className="thumb-meta">
                                                <span className="date meta-item tie-icon">
                                                  il y a 1 heure
                                                </span>
                                              </div>
                                              <h2 className="thumb-title">
                                                <a href="#" tabIndex={0}>
                                                  Une hirondelle ne fait pas le
                                                  printemps
                                                </a>
                                              </h2>
                                              <div className="thumb-desc">
                                                Stay focused and remember we
                                                design the best WordPress News
                                                and Magazine Themes. It’s the
                                                ones closest to you that…
                                              </div>
                                              {/* .thumb-desc */}
                                            </div>{" "}
                                            {/* .thumb-content /*/}
                                          </div>
                                          {/* .thumb-overlay /*/}
                                        </div>
                                        {/* .slide || .grid-item /*/}
                                        <div
                                          style={{
                                            backgroundImage:
                                              "url(images/14-780x470.jpg)",
                                          }}
                                          className="grid-item slide-id-976 tie-slide-2 tie-video"
                                        >
                                          <a
                                            href="#"
                                            className="all-over-thumb-link"
                                            aria-label="La persuasion est souvent plus efficace que la force"
                                            tabIndex={0}
                                          />
                                          <div className="thumb-overlay">
                                            <span className="tie-icon tie-media-icon" />
                                            <span className="post-cat-wrap">
                                              <a
                                                className="post-cat tie-cat-21"
                                                href="#"
                                                tabIndex={0}
                                              >
                                                Style de vie
                                              </a>
                                            </span>
                                            <div className="thumb-content">
                                              <div className="thumb-meta">
                                                <span className="date meta-item tie-icon">
                                                  il y a 1 heure
                                                </span>
                                              </div>
                                              <h2 className="thumb-title">
                                                <a href="#" tabIndex={0}>
                                                  La persuasion est souvent plus
                                                  efficace que la force
                                                </a>
                                              </h2>
                                              <div className="thumb-desc">
                                                Stay focused and remember we
                                                design the best WordPress News
                                                and Magazine Themes. It’s the
                                                ones closest to you that…
                                              </div>
                                              {/* .thumb-desc */}
                                            </div>{" "}
                                            {/* .thumb-content /*/}
                                          </div>
                                          {/* .thumb-overlay /*/}
                                        </div>
                                        {/* .slide || .grid-item /*/}
                                      </div>
                                      <div
                                        className="slide slick-slide"
                                        data-slick-index={1}
                                        aria-hidden="true"
                                        style={{ width: 1170 }}
                                        tabIndex={-1}
                                        role="option"
                                        data-aria-describedby="slick-slide11"
                                      >
                                        <div
                                          style={{
                                            backgroundImage:
                                              "url(images/7-780x470.jpg)",
                                          }}
                                          className="grid-item slide-id-975 tie-slide-3 tie-video"
                                        >
                                          <a
                                            href="#"
                                            className="all-over-thumb-link"
                                            aria-label="Spieth en danger de rater la coupe"
                                            tabIndex={-1}
                                          />
                                          <div className="thumb-overlay">
                                            <span className="tie-icon tie-media-icon" />
                                            <span className="post-cat-wrap">
                                              <a
                                                className="post-cat tie-cat-21"
                                                href="#"
                                                tabIndex={-1}
                                              >
                                                Style de vie
                                              </a>
                                            </span>
                                            <div className="thumb-content">
                                              <div className="thumb-meta">
                                                <span className="date meta-item tie-icon">
                                                  il y a 1 heure
                                                </span>
                                              </div>
                                              <h2 className="thumb-title">
                                                <a href="#" tabIndex={-1}>
                                                  Spieth en danger de rater la
                                                  coupe
                                                </a>
                                              </h2>
                                              <div className="thumb-desc">
                                                Stay focused and remember we
                                                design the best WordPress News
                                                and Magazine Themes. It’s the
                                                ones closest to you that…
                                              </div>
                                              {/* .thumb-desc */}
                                            </div>{" "}
                                            {/* .thumb-content /*/}
                                          </div>
                                          {/* .thumb-overlay /*/}
                                        </div>
                                        {/* .slide || .grid-item /*/}
                                        <div
                                          style={{
                                            backgroundImage:
                                              "url(images/15-780x470.jpg)",
                                          }}
                                          className="grid-item slide-id-974 tie-slide-4 tie-map"
                                        >
                                          <a
                                            href="#"
                                            className="all-over-thumb-link"
                                            aria-label="Les fans de Hibs et de Ross County en finale"
                                            tabIndex={-1}
                                          />
                                          <div className="thumb-overlay">
                                            <span className="tie-icon tie-media-icon" />
                                            <span className="post-cat-wrap">
                                              <a
                                                className="post-cat tie-cat-21"
                                                href="#"
                                                tabIndex={-1}
                                              >
                                                Style de vie
                                              </a>
                                            </span>
                                            <div className="thumb-content">
                                              <div className="thumb-meta">
                                                <span className="date meta-item tie-icon">
                                                  il y a 1 heure
                                                </span>
                                              </div>
                                              <h2 className="thumb-title">
                                                <a href="#" tabIndex={-1}>
                                                  Les fans de Hibs et de Ross
                                                  County en finale
                                                </a>
                                              </h2>
                                              <div className="thumb-desc">
                                                Stay focused and remember we
                                                design the best WordPress News
                                                and Magazine Themes. It’s the
                                                ones closest to you that…
                                              </div>
                                              {/* .thumb-desc */}
                                            </div>{" "}
                                            {/* .thumb-content /*/}
                                          </div>
                                          {/* .thumb-overlay /*/}
                                        </div>
                                        {/* .slide || .grid-item /*/}
                                      </div>
                                      <div
                                        className="slide slick-slide slick-cloned"
                                        data-slick-index={2}
                                        id=""
                                        aria-hidden="true"
                                        style={{ width: 1170 }}
                                        tabIndex={-1}
                                      >
                                        <div
                                          style={{
                                            backgroundImage:
                                              "url(images/1-780x470.jpg)",
                                          }}
                                          className="grid-item slide-id-977 tie-slide-1 tie-slider"
                                        >
                                          <a
                                            href="#"
                                            className="all-over-thumb-link"
                                            aria-label="Une hirondelle ne fait pas le printemps"
                                            tabIndex={-1}
                                          />
                                          <div className="thumb-overlay">
                                            <span className="tie-icon tie-media-icon" />
                                            <span className="post-cat-wrap">
                                              <a
                                                className="post-cat tie-cat-21"
                                                href="#"
                                                tabIndex={-1}
                                              >
                                                Style de vie
                                              </a>
                                            </span>
                                            <div className="thumb-content">
                                              <div className="thumb-meta">
                                                <span className="date meta-item tie-icon">
                                                  il y a 1 heure
                                                </span>
                                              </div>
                                              <h2 className="thumb-title">
                                                <a href="#" tabIndex={-1}>
                                                  Une hirondelle ne fait pas le
                                                  printemps
                                                </a>
                                              </h2>
                                              <div className="thumb-desc">
                                                Stay focused and remember we
                                                design the best WordPress News
                                                and Magazine Themes. It’s the
                                                ones closest to you that…
                                              </div>
                                              {/* .thumb-desc */}
                                            </div>{" "}
                                            {/* .thumb-content /*/}
                                          </div>
                                          {/* .thumb-overlay /*/}
                                        </div>
                                        {/* .slide || .grid-item /*/}
                                        <div
                                          style={{
                                            backgroundImage:
                                              "url(images/14-780x470.jpg)",
                                          }}
                                          className="grid-item slide-id-976 tie-slide-2 tie-video"
                                        >
                                          <a
                                            href="#"
                                            className="all-over-thumb-link"
                                            aria-label="La persuasion est souvent plus efficace que la force"
                                            tabIndex={-1}
                                          />
                                          <div className="thumb-overlay">
                                            <span className="tie-icon tie-media-icon" />
                                            <span className="post-cat-wrap">
                                              <a
                                                className="post-cat tie-cat-21"
                                                href="#"
                                                tabIndex={-1}
                                              >
                                                Style de vie
                                              </a>
                                            </span>
                                            <div className="thumb-content">
                                              <div className="thumb-meta">
                                                <span className="date meta-item tie-icon">
                                                  il y a 1 heure
                                                </span>
                                              </div>
                                              <h2 className="thumb-title">
                                                <a href="#" tabIndex={-1}>
                                                  La persuasion est souvent plus
                                                  efficace que la force
                                                </a>
                                              </h2>
                                              <div className="thumb-desc">
                                                Stay focused and remember we
                                                design the best WordPress News
                                                and Magazine Themes. It’s the
                                                ones closest to you that…
                                              </div>
                                              {/* .thumb-desc */}
                                            </div>{" "}
                                            {/* .thumb-content /*/}
                                          </div>
                                          {/* .thumb-overlay /*/}
                                        </div>
                                        {/* .slide || .grid-item /*/}
                                      </div>
                                    </div>
                                  </div>{" "}
                                  {/* .slide */}
                                  {/* .slide */}
                                </div>
                                {/* .tie-slick-slider /*/}
                              </div>
                              {/* container /*/}
                            </div>
                            {/* .main-slider-inner  /*/}
                          </div>
                          {/* .main-slider /*/}
                        </div>
                        {/* .slider-area-inner */}
                      </section>
                      {/* .slider-area */}
                    </div>
                    {/* .main-content /*/}
                  </div>
                  {/* .main-content-row /*/}
                </div>
                {/* .container /*/}
              </div>
              {/* .section-item /*/}
            </div>
            {/* .tiepost-1020-section-8509 /*/}
            {/* BK-bloc-end-Trending News */}
            {/* BK-bloc-start-Technology */}
            <div
              id="tiepost-1020-section-6559"
              className="section-wrapper container normal-width without-background"
            >
              <div
                className="section-item sidebar-right has-sidebar"
                style={{}}
              >
                <div className="container-normal">
                  <div className="tie-row main-content-row">
                    <div
                      className="main-content tie-col-md-8 tie-col-xs-12"
                      role="main"
                    >
                      <div
                        id="tie-block_611"
                        className="mag-box big-post-left-box has-first-big-post has-custom-color"
                        data-current={1}
                      >
                        <div className="container-wrapper">
                          <div className="mag-box-title the-global-title">
                            <h3>Technology </h3>
                            <div className="tie-alignright">
                              <div className="mag-box-options">
                                <ul
                                  className="mag-box-filter-links is-flex-tabs"
                                  style={{ opacity: 1 }}
                                >
                                  <li>
                                    <a
                                      href="#"
                                      className="block-ajax-term block-all-term active"
                                    >
                                      Tout
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-id={2}
                                      className="block-ajax-term"
                                    >
                                      Monde
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-id={10}
                                      className="block-ajax-term"
                                    >
                                      Voyage
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-id={14}
                                      className="block-ajax-term"
                                    >
                                      Jeux
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-id={15}
                                      className="block-ajax-term"
                                    >
                                      Alimentation
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-id={18}
                                      className="block-ajax-term"
                                    >
                                      Business
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-id={19}
                                      className="block-ajax-term"
                                    >
                                      Tech
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-id={21}
                                      className="block-ajax-term"
                                    >
                                      Style de vie
                                    </a>
                                  </li>
                                </ul>
                                <ul className="slider-arrow-nav">
                                  <li>
                                    <a
                                      className="block-pagination prev-posts pagination-disabled"
                                      href="#"
                                    >
                                      <span
                                        className="tie-icon-angle-left"
                                        aria-hidden="true"
                                      />
                                      <span className="screen-reader-text">
                                        Page précédente
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="block-pagination next-posts"
                                      href="#"
                                    >
                                      <span
                                        className="tie-icon-angle-right"
                                        aria-hidden="true"
                                      />
                                      <span className="screen-reader-text">
                                        Page suivante
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* .mag-box-options /*/}
                            </div>
                            {/* .tie-alignright /*/}
                          </div>
                          {/* .mag-box-title /*/}
                          <div className="mag-box-container clearfix">
                            <ul className="posts-items posts-list-container">
                              <li className="post-item  tie-video">
                                <a
                                  aria-label="La persuasion est souvent plus efficace que la force"
                                  href="#"
                                  className="post-thumb"
                                >
                                  <span className="post-cat-wrap">
                                    <span className="post-cat tie-cat-21">
                                      Style de vie
                                    </span>
                                  </span>
                                  <img
                                    width={390}
                                    height={220}
                                    src="images/2-390x220.jpg"
                                    className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="post-details">
                                  <div className="post-meta clearfix">
                                    <span className="author-meta single-author no-avatars">
                                      <span className="meta-item meta-author-wrapper meta-author-1">
                                        <span className="meta-author">
                                          <a
                                            href="#"
                                            className="author-name tie-icon"
                                            title="webmaster"
                                          >
                                            webmaster
                                          </a>
                                        </span>
                                      </span>
                                    </span>
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                    <div className="tie-alignright">
                                      <span className="meta-comment tie-icon meta-item fa-before">
                                        1
                                      </span>
                                      <span className="meta-views meta-item hot">
                                        <span
                                          className="tie-icon-fire"
                                          aria-hidden="true"
                                        />{" "}
                                        3&nbsp;211
                                      </span>
                                    </div>
                                  </div>
                                  {/* .post-meta */}
                                  <h2 className="post-title">
                                    <a href="#">
                                      La persuasion est souvent plus efficace
                                      que la force
                                    </a>
                                  </h2>
                                  <p className="post-excerpt">
                                    Stay focused and remember we design the best
                                    WordPress News and Magazine Themes. It’s the
                                    ones closest to you that want to…
                                  </p>
                                  <a className="more-link button" href="#">
                                    Lire la suite »
                                  </a>
                                </div>
                                {/* .post-details /*/}
                              </li>
                              {/* .first-post */}
                              <li className="post-item  tie-slider">
                                <a
                                  aria-label="Une hirondelle ne fait pas le printemps"
                                  href="#"
                                  className="post-thumb"
                                >
                                  <img
                                    width={220}
                                    height={150}
                                    src="images/4-220x150.jpg"
                                    className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="post-details">
                                  <div className="post-meta clearfix">
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                  </div>
                                  {/* .post-meta */}
                                  <h2 className="post-title">
                                    <a href="#">
                                      Une hirondelle ne fait pas le printemps
                                    </a>
                                  </h2>
                                </div>
                                {/* .post-details /*/}
                              </li>
                              <li className="post-item  tie-slider">
                                <a
                                  aria-label="Astuce du jour: That man again"
                                  href="#"
                                  className="post-thumb"
                                >
                                  <img
                                    width={220}
                                    height={150}
                                    src="images/9-220x150.jpg"
                                    className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="post-details">
                                  <div className="post-meta clearfix">
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                  </div>
                                  {/* .post-meta */}
                                  <h2 className="post-title">
                                    <a href="#">
                                      Astuce du jour: That man again
                                    </a>
                                  </h2>
                                </div>
                                {/* .post-details /*/}
                              </li>
                              <li className="post-item  tie-map">
                                <a
                                  aria-label="Les fans de Hibs et de Ross County en finale"
                                  href="#"
                                  className="post-thumb"
                                >
                                  <img
                                    width={220}
                                    height={150}
                                    src="images/12-220x150.jpg"
                                    className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="post-details">
                                  <div className="post-meta clearfix">
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                  </div>
                                  {/* .post-meta */}
                                  <h2 className="post-title">
                                    <a href="#">
                                      Les fans de Hibs et de Ross County en
                                      finale
                                    </a>
                                  </h2>
                                </div>
                                {/* .post-details /*/}
                              </li>
                              <li className="post-item  tie-video">
                                <a
                                  aria-label="Spieth en danger de rater la coupe"
                                  href="#"
                                  className="post-thumb"
                                >
                                  <img
                                    width={220}
                                    height={150}
                                    src="images/17-220x150.jpg"
                                    className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="post-details">
                                  <div className="post-meta clearfix">
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                  </div>
                                  {/* .post-meta */}
                                  <h2 className="post-title">
                                    <a href="#">
                                      Spieth en danger de rater la coupe
                                    </a>
                                  </h2>
                                </div>
                                {/* .post-details /*/}
                              </li>
                            </ul>
                            <div className="clearfix" />
                          </div>
                          {/* .mag-box-container /*/}
                        </div>
                        {/* .container-wrapper /*/}
                      </div>
                      {/* .mag-box /*/}
                      {/*
									
*/}
                      {/* BK-bloc-vidéo*/}
                      <div
                        id="tie-block_1837"
                        className="mag-box miscellaneous-box first-post-gradient has-first-big-post media-overlay has-custom-color"
                        data-current={1}
                      >
                        <div className="container-wrapper">
                          <div className="mag-box-title the-global-title">
                            <h3>Videos </h3>
                            <div className="tie-alignright">
                              <div className="mag-box-options">
                                <ul className="slider-arrow-nav">
                                  <li>
                                    <a
                                      className="block-pagination prev-posts pagination-disabled"
                                      href="#"
                                    >
                                      <span
                                        className="tie-icon-angle-left"
                                        aria-hidden="true"
                                      />
                                      <span className="screen-reader-text">
                                        Page précédente
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="block-pagination next-posts"
                                      href="#"
                                    >
                                      <span
                                        className="tie-icon-angle-right"
                                        aria-hidden="true"
                                      />
                                      <span className="screen-reader-text">
                                        Page suivante
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* .mag-box-options /*/}
                            </div>
                            {/* .tie-alignright /*/}
                          </div>
                          {/* .mag-box-title /*/}
                          <div className="mag-box-container clearfix">
                            <ul className="posts-items posts-list-container">
                              <li className="post-item tie-slider">
                                <a
                                  aria-label="Une hirondelle ne fait pas le printemps"
                                  href="#"
                                  className="post-thumb"
                                >
                                  <div className="post-thumb-overlay-wrap">
                                    <div className="post-thumb-overlay">
                                      <span className="tie-icon tie-media-icon" />
                                    </div>
                                  </div>
                                  <img
                                    width={780}
                                    height={470}
                                    src="images/1-780x470.jpg"
                                    className="attachment-jannah-image-post size-jannah-image-post wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="clearfix" />
                                <div className="post-overlay">
                                  <div className="post-content">
                                    <a className="post-cat tie-cat-21" href="#">
                                      Style de vie
                                    </a>
                                    <h2 className="post-title">
                                      <a href="#">
                                        Une hirondelle ne fait pas le printemps
                                      </a>
                                    </h2>
                                    <div className="thumb-meta">
                                      <div className="post-meta clearfix">
                                        <span className="author-meta single-author no-avatars">
                                          <span className="meta-item meta-author-wrapper meta-author-1">
                                            <span className="meta-author">
                                              <a
                                                href="#"
                                                className="author-name tie-icon"
                                                title="webmaster"
                                              >
                                                webmaster
                                              </a>
                                            </span>
                                          </span>
                                        </span>
                                        <span className="date meta-item tie-icon">
                                          il y a 1 heure
                                        </span>
                                        <div className="tie-alignright">
                                          <span className="meta-comment tie-icon meta-item fa-before">
                                            1
                                          </span>
                                          <span className="meta-views meta-item hot">
                                            <span
                                              className="tie-icon-fire"
                                              aria-hidden="true"
                                            />
                                            3&nbsp;919{" "}
                                          </span>
                                        </div>
                                      </div>
                                      {/* .post-meta */}
                                    </div>
                                    {/* .thumb-meta */}
                                  </div>
                                  {/* .post-content */}
                                </div>
                                {/* .post-overlay */}
                              </li>
                              <li className="post-item tie-video">
                                <a
                                  aria-label="La persuasion est souvent plus efficace que la force"
                                  href="#"
                                  className="post-thumb"
                                >
                                  <div className="post-thumb-overlay-wrap">
                                    <div className="post-thumb-overlay">
                                      <span className="tie-icon tie-media-icon" />
                                    </div>
                                  </div>
                                  <img
                                    width={390}
                                    height={220}
                                    src="images/2-390x220.jpg"
                                    className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="clearfix" />
                                <div className="post-overlay">
                                  <div className="post-content">
                                    <div className="post-meta clearfix">
                                      <span className="date meta-item tie-icon">
                                        il y a 1 heure
                                      </span>
                                      <div className="tie-alignright">
                                        <span className="meta-comment tie-icon meta-item fa-before">
                                          1
                                        </span>
                                      </div>
                                    </div>
                                    {/* .post-meta */}
                                    <h2 className="post-title">
                                      <a href="#">
                                        La persuasion est souvent plus efficace
                                        que la force
                                      </a>
                                    </h2>
                                    <div className="post-meta" />
                                  </div>
                                  {/* .post-content */}
                                </div>
                                {/* .post-overlay */}
                              </li>
                              <li className="post-item tie-video">
                                <a
                                  aria-label="Spieth en danger de rater la coupe"
                                  href="#"
                                  className="post-thumb"
                                >
                                  <div className="post-thumb-overlay-wrap">
                                    <div className="post-thumb-overlay">
                                      <span className="tie-icon tie-media-icon" />
                                    </div>
                                  </div>
                                  <img
                                    width={390}
                                    height={220}
                                    src="images/17-390x220.jpg"
                                    className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="clearfix" />
                                <div className="post-overlay">
                                  <div className="post-content">
                                    <div className="post-meta clearfix">
                                      <span className="date meta-item tie-icon">
                                        il y a 1 heure
                                      </span>
                                      <div className="tie-alignright">
                                        <span className="meta-comment tie-icon meta-item fa-before">
                                          1
                                        </span>
                                      </div>
                                    </div>
                                    {/* .post-meta */}
                                    <h2 className="post-title">
                                      <a href="#">
                                        Spieth en danger de rater la coupe
                                      </a>
                                    </h2>
                                    <div className="post-meta" />
                                  </div>
                                  {/* .post-content */}
                                </div>
                                {/* .post-overlay */}
                              </li>
                              <li className="post-item tie-map">
                                <a
                                  aria-label="Les fans de Hibs et de Ross County en finale"
                                  href="#"
                                  className="post-thumb"
                                >
                                  <img
                                    width={390}
                                    height={220}
                                    src="images/12-390x220.jpg"
                                    className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="clearfix" />
                                <div className="post-overlay">
                                  <div className="post-content">
                                    <div className="post-meta clearfix">
                                      <span className="date meta-item tie-icon">
                                        il y a 1 heure
                                      </span>
                                      <div className="tie-alignright">
                                        <span className="meta-comment tie-icon meta-item fa-before">
                                          1
                                        </span>
                                      </div>
                                    </div>
                                    {/* .post-meta */}
                                    <h2 className="post-title">
                                      <a href="#">
                                        Les fans de Hibs et de Ross County en
                                        finale
                                      </a>
                                    </h2>
                                    <div className="post-meta" />
                                  </div>
                                  {/* .post-content */}
                                </div>
                                {/* .post-overlay */}
                              </li>
                            </ul>
                            <div className="clearfix" />
                          </div>
                          {/* .mag-box-container /*/}
                        </div>
                        {/* .container-wrapper /*/}
                      </div>
                      {/* BK-end-bloc-vidéo*/}
                      {/* .mag-box /*/}
                      {/*
									
								*/}
                      {/* BK-bannere-publicitaire*/}
                      <div
                        id="tie-block_2223"
                        className="mag-box stream-item-mag stream-item content-only"
                      >
                        <div className="container-wrapper">
                          <a
                            href="#"
                            title=""
                            target="_blank"
                            rel="nofollow noopener"
                          >
                            <img
                              src="images/1.jpg"
                              alt=""
                              width={728}
                              height={90}
                            />
                          </a>
                        </div>
                        {/* .container-wrapper /*/}
                      </div>
                      {/* .mag-box /*/}
                      {/* BK-end-bannere-publicitaire*/}
                      <div
                        id="tie-s_1441"
                        className="mag-box big-posts-box has-custom-color"
                        data-current={1}
                      >
                        <div className="container-wrapper">
                          <div className="mag-box-title the-global-title">
                            <h3>What s new</h3>
                          </div>
                          {/* .mag-box-title /*/}
                          <div className="mag-box-container clearfix">
                            <ul className="posts-items posts-list-container">
                              <li className="post-item  post-977 post type-post status-publish format-standard has-post-thumbnail category-tie-life-style tag-classique tie-slider">
                                <a
                                  aria-label="Une hirondelle ne fait pas le printemps"
                                  href="#"
                                  className="post-thumb"
                                >
                                  <span className="post-cat-wrap">
                                    <span className="post-cat tie-cat-21">
                                      Style de vie
                                    </span>
                                  </span>
                                  <img
                                    width={390}
                                    height={220}
                                    src="images/4-390x220.jpg"
                                    className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="post-details">
                                  <div className="post-meta clearfix">
                                    <span className="author-meta single-author no-avatars">
                                      <span className="meta-item meta-author-wrapper meta-author-1">
                                        <span className="meta-author">
                                          <a
                                            href="#"
                                            className="author-name tie-icon"
                                            title="webmaster"
                                          >
                                            webmaster
                                          </a>
                                        </span>
                                      </span>
                                    </span>
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                    <div className="tie-alignright">
                                      <span className="meta-comment tie-icon meta-item fa-before">
                                        1
                                      </span>
                                      <span className="meta-views meta-item hot">
                                        <span
                                          className="tie-icon-fire"
                                          aria-hidden="true"
                                        />{" "}
                                        3&nbsp;919
                                      </span>
                                    </div>
                                  </div>
                                  {/* .post-meta */}
                                  <h2 className="post-title">
                                    <a href="#">
                                      Une hirondelle ne fait pas le printemps
                                    </a>
                                  </h2>
                                  <p className="post-excerpt">
                                    Stay focused and remember we design the best
                                    WordPress News and Magazine Themes. It’s the
                                    ones closest to you that…
                                  </p>
                                </div>
                              </li>
                              <li className="post-item  post-976 post type-post status-publish format-standard has-post-thumbnail category-tie-life-style tag-equipe tie-video">
                                <a
                                  aria-label="La persuasion est souvent plus efficace que la force"
                                  href="#"
                                  className="post-thumb"
                                >
                                  <span className="post-cat-wrap">
                                    <span className="post-cat tie-cat-21">
                                      Style de vie
                                    </span>
                                  </span>
                                  <img
                                    width={390}
                                    height={220}
                                    src="images/2-390x220.jpg"
                                    className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="post-details">
                                  <div className="post-meta clearfix">
                                    <span className="author-meta single-author no-avatars">
                                      <span className="meta-item meta-author-wrapper meta-author-1">
                                        <span className="meta-author">
                                          <a
                                            href="#"
                                            className="author-name tie-icon"
                                            title="webmaster"
                                          >
                                            webmaster
                                          </a>
                                        </span>
                                      </span>
                                    </span>
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                    <div className="tie-alignright">
                                      <span className="meta-comment tie-icon meta-item fa-before">
                                        1
                                      </span>
                                      <span className="meta-views meta-item hot">
                                        <span
                                          className="tie-icon-fire"
                                          aria-hidden="true"
                                        />{" "}
                                        3&nbsp;211
                                      </span>
                                    </div>
                                  </div>
                                  {/* .post-meta */}
                                  <h2 className="post-title">
                                    <a href="#">
                                      La persuasion est souvent plus efficace
                                      que la force
                                    </a>
                                  </h2>
                                  <p className="post-excerpt">
                                    Stay focused and remember we design the best
                                    WordPress News and Magazine Themes. It’s the
                                    ones closest to you that…
                                  </p>
                                </div>
                              </li>
                              <li className="post-item  post-975 post type-post status-publish format-standard has-post-thumbnail category-tie-life-style tag-alimentation tie-video">
                                <a
                                  aria-label="Spieth en danger de rater la coupe"
                                  href="#"
                                  className="post-thumb"
                                >
                                  <span className="post-cat-wrap">
                                    <span className="post-cat tie-cat-21">
                                      Style de vie
                                    </span>
                                  </span>
                                  <img
                                    width={390}
                                    height={220}
                                    src="images/17-390x220.jpg"
                                    className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="post-details">
                                  <div className="post-meta clearfix">
                                    <span className="author-meta single-author no-avatars">
                                      <span className="meta-item meta-author-wrapper meta-author-1">
                                        <span className="meta-author">
                                          <a
                                            href="#"
                                            className="author-name tie-icon"
                                            title="webmaster"
                                          >
                                            webmaster
                                          </a>
                                        </span>
                                      </span>
                                    </span>
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                    <div className="tie-alignright">
                                      <span className="meta-comment tie-icon meta-item fa-before">
                                        1
                                      </span>
                                      <span className="meta-views meta-item hot">
                                        <span
                                          className="tie-icon-fire"
                                          aria-hidden="true"
                                        />{" "}
                                        2&nbsp;922
                                      </span>
                                    </div>
                                  </div>
                                  {/* .post-meta */}
                                  <h2 className="post-title">
                                    <a href="#">
                                      Spieth en danger de rater la coupe
                                    </a>
                                  </h2>
                                  <p className="post-excerpt">
                                    Stay focused and remember we design the best
                                    WordPress News and Magazine Themes. It’s the
                                    ones closest to you that…
                                  </p>
                                </div>
                              </li>
                              <li className="post-item  post-974 post type-post status-publish format-standard has-post-thumbnail category-tie-life-style tag-couleur tie-map">
                                <a
                                  aria-label="Les fans de Hibs et de Ross County en finale"
                                  href="#"
                                  className="post-thumb"
                                >
                                  <span className="post-cat-wrap">
                                    <span className="post-cat tie-cat-21">
                                      Style de vie
                                    </span>
                                  </span>
                                  <img
                                    width={390}
                                    height={220}
                                    src="images/12-390x220.jpg"
                                    className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                                <div className="post-details">
                                  <div className="post-meta clearfix">
                                    <span className="author-meta single-author no-avatars">
                                      <span className="meta-item meta-author-wrapper meta-author-1">
                                        <span className="meta-author">
                                          <a
                                            href="#"
                                            className="author-name tie-icon"
                                            title="webmaster"
                                          >
                                            webmaster
                                          </a>
                                        </span>
                                      </span>
                                    </span>
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                    <div className="tie-alignright">
                                      <span className="meta-comment tie-icon meta-item fa-before">
                                        1
                                      </span>
                                      <span className="meta-views meta-item hot">
                                        <span
                                          className="tie-icon-fire"
                                          aria-hidden="true"
                                        />{" "}
                                        4&nbsp;188
                                      </span>
                                    </div>
                                  </div>
                                  {/* .post-meta */}
                                  <h2 className="post-title">
                                    <a href="#">
                                      Les fans de Hibs et de Ross County en
                                      finale
                                    </a>
                                  </h2>
                                  <p className="post-excerpt">
                                    Stay focused and remember we design the best
                                    WordPress News and Magazine Themes. It’s the
                                    ones closest to you that…
                                  </p>
                                </div>
                              </li>
                            </ul>
                            <div className="clearfix" />
                          </div>
                          {/* .mag-box-container /*/}
                          <a
                            className="block-pagination next-posts show-more-button load-more-button"
                            data-text="Charger plus"
                          >
                            Charger plus
                          </a>
                        </div>
                        {/* .container-wrapper /*/}
                      </div>
                      {/* .mag-box /*/}
                    </div>
                    {/* .main-content /*/}
                    <aside
                      className="sidebar tie-col-md-4 tie-col-xs-12 normal-side is-sticky"
                      aria-label="Sidebar Principale"
                      style={{
                        position: "relative",
                        overflow: "visible",
                        boxSizing: "border-box",
                        minHeight: 1,
                      }}
                    >
                      <div
                        className="theiaStickySidebar"
                        style={{
                          paddingTop: 0,
                          paddingBottom: 1,
                          position: "static",
                          transform: "none",
                        }}
                      >
                        <div
                          id="posts-list-widget-6"
                          className="container-wrapper widget posts-list"
                        >
                          <div className="widget-title the-global-title">
                            <div className="the-subtitle">
                              Most Viewed
                              <span className="widget-title-icon tie-icon" />
                            </div>
                          </div>
                          <div className="widget-posts-list-container posts-list-counter">
                            <ul className="posts-list-items widget-posts-wrapper">
                              <li className="widget-single-post-item widget-post-list tie-audio">
                                <div className="post-widget-thumbnail">
                                  <a
                                    aria-label="Les appartements vacants augmentent pour la première fois en 6 ans"
                                    href="#"
                                    className="post-thumb"
                                  >
                                    <img
                                      width={220}
                                      height={150}
                                      src="images/11-220x150.jpg"
                                      className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                      alt=""
                                      loading="lazy"
                                    />
                                  </a>
                                </div>
                                {/* post-alignleft /*/}
                                <div className="post-widget-body ">
                                  <a
                                    className="post-title the-subtitle"
                                    href="#"
                                  >
                                    Les appartements vacants augmentent pour la
                                    première fois en 6 ans
                                  </a>
                                  <div className="post-meta">
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="widget-single-post-item widget-post-list tie-video">
                                <div className="post-widget-thumbnail">
                                  <a
                                    aria-label="Le patron de Xbox parle du prix du projet Scorpio"
                                    href="#"
                                    className="post-thumb"
                                  >
                                    <img
                                      width={220}
                                      height={150}
                                      src="images/12-220x150.jpg"
                                      className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                      alt=""
                                      loading="lazy"
                                    />
                                  </a>
                                </div>
                                {/* post-alignleft /*/}
                                <div className="post-widget-body ">
                                  <a
                                    className="post-title the-subtitle"
                                    href="#"
                                  >
                                    Le patron de Xbox parle du prix du projet
                                    Scorpio
                                  </a>
                                  <div className="post-meta">
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="widget-single-post-item widget-post-list tie-audio">
                                <div className="post-widget-thumbnail">
                                  <a
                                    aria-label="Quinoa nouvelles recettes, feta et salade de fèves"
                                    href="#"
                                    className="post-thumb"
                                  >
                                    <img
                                      width={220}
                                      height={150}
                                      src="images/15-220x150.jpg"
                                      className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                      alt=""
                                      loading="lazy"
                                    />
                                  </a>
                                </div>
                                {/* post-alignleft /*/}
                                <div className="post-widget-body ">
                                  <a
                                    className="post-title the-subtitle"
                                    href="#"
                                  >
                                    Quinoa nouvelles recettes, feta et salade de
                                    fèves
                                  </a>
                                  <div className="post-meta">
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="widget-single-post-item widget-post-list tie-thumb">
                                <div className="post-widget-thumbnail">
                                  <a
                                    aria-label="Ce que nous voyons quand on regarde des photo de voyage"
                                    href="#"
                                    className="post-thumb"
                                  >
                                    <img
                                      width={220}
                                      height={150}
                                      src="images/7-220x150.jpg"
                                      className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                      alt=""
                                      loading="lazy"
                                    />
                                  </a>
                                </div>
                                {/* post-alignleft /*/}
                                <div className="post-widget-body ">
                                  <a
                                    className="post-title the-subtitle"
                                    href="#"
                                  >
                                    Ce que nous voyons quand on regarde des
                                    photo de voyage
                                  </a>
                                  <div className="post-meta">
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="widget-single-post-item widget-post-list tie-map">
                                <div className="post-widget-thumbnail">
                                  <a
                                    aria-label="Le guide ultime des tisanes"
                                    href="#"
                                    className="post-thumb"
                                  >
                                    <img
                                      width={220}
                                      height={150}
                                      src="images/7-220x150.jpg"
                                      className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                      alt=""
                                      loading="lazy"
                                    />
                                  </a>
                                </div>
                                {/* post-alignleft /*/}
                                <div className="post-widget-body ">
                                  <a
                                    className="post-title the-subtitle"
                                    href="#"
                                  >
                                    Le guide ultime des tisanes
                                  </a>
                                  <div className="post-meta">
                                    <span className="date meta-item tie-icon">
                                      il y a 1 heure
                                    </span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="clearfix" />
                        </div>
                        {/* .widget /*/}
                      </div>
                      <div
                        id="tie-newsletter-2"
                        className="container-wrapper widget subscribe-widget"
                      >
                        <div className="widget-inner-wrap">
                          <span
                            className="tie-icon-envelope newsletter-icon"
                            aria-hidden="true"
                          />
                          <div className="subscribe-widget-content">
                            <h4>With Product You Purchase</h4>
                            <h3>
                              Subscribe to our mailing list to get the new
                              updates!
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                          </div>
                          <div id="mc_embed_signup-tie-newsletter-2">
                            <form
                              action="#"
                              method="post"
                              id="mc-embedded-subscribe-form-tie-newsletter-2"
                              name="mc-embedded-subscribe-form"
                              className="subscribe-form validate"
                              target="_blank"
                            >
                              <div className="mc-field-group">
                                <label
                                  className="screen-reader-text"
                                  htmlFor="mce-EMAIL-tie-newsletter-2"
                                >
                                  Entrez votre adresse Email
                                </label>
                                <input
                                  type="email"
                                  defaultValue=""
                                  id="mce-EMAIL-tie-newsletter-2"
                                  placeholder="Entrez votre adresse Email"
                                  name="EMAIL"
                                  className="subscribe-input required email"
                                />
                              </div>
                              <input
                                type="submit"
                                defaultValue="S'abonner"
                                name="subscribe"
                                className="button subscribe-submit"
                              />
                            </form>
                          </div>
                        </div>
                        {/* .widget-inner-wrap /*/}
                        <div className="clearfix" />
                      </div>
                      {/* .widget /*/}
                      <div
                        id="tie-widget-categories-1"
                        className="container-wrapper widget widget_categories tie-widget-categories"
                      >
                        <div className="widget-title the-global-title">
                          <div className="the-subtitle">
                            Categories
                            <span className="widget-title-icon tie-icon" />
                          </div>
                        </div>
                        <ul>
                          <li className="cat-item cat-counter tie-cat-item-2">
                            <a
                              href="#"
                              title="WordPress est un de mes outils de blogs préférés et je partage des trucs et astuces pour utiliser WordPress ici."
                            >
                              Monde
                            </a>
                            <span>32</span>
                          </li>
                          <li className="cat-item cat-counter tie-cat-item-21">
                            <a
                              href="#"
                              title="WordPress est un de mes outils de blogs préférés et je partage des trucs et astuces pour utiliser WordPress ici."
                            >
                              Style de vie
                            </a>{" "}
                            <span>10</span>
                          </li>
                          <li className="cat-item cat-counter tie-cat-item-19">
                            <a
                              href="#"
                              title="WordPress est un de mes outils de blogs préférés et je partage des trucs et astuces pour utiliser WordPress ici."
                            >
                              Tech
                            </a>
                            <span>8</span>
                          </li>
                          <li className="cat-item cat-counter tie-cat-item-18">
                            <a
                              href="#"
                              title="WordPress est un de mes outils de blogs préférés et je partage des trucs et astuces pour utiliser WordPress ici."
                            >
                              Business
                            </a>
                            <span>7</span>
                          </li>
                          <li className="cat-item cat-counter tie-cat-item-1">
                            <a href="#">Non classé</a> <span>1</span>
                          </li>
                        </ul>
                        <div className="clearfix" />
                      </div>
                      {/* .widget /*/}
                    </aside>
                  </div>
                  {/* .theiaStickySidebar /*/}
                  {/* .sidebar /*/}
                </div>
                {/* .main-content-row */}
              </div>
              {/* .container /*/}
            </div>
            {/* BK-bloc-start-Technology */}
            {/* .section-item /*/}
          </div>
          {/* .tiepost-1020-section-6559 /*/}
          {/* BK-footer */}
          <footer
            id="footer"
            className="site-footer dark-skin dark-widgetized-area"
          >
            <div id="footer-widgets-container">
              <div className="container">
                <div className="footer-widget-area ">
                  <div className="tie-row">
                    {/* BK-Most Viewed Posts-footer*/}
                    <div className="tie-col-md-3 normal-side">
                      <div
                        id="posts-list-widget-1"
                        className="container-wrapper widget posts-list"
                      >
                        <div className="widget-title the-global-title">
                          <div className="the-subtitle">
                            Most Viewed Posts
                            <span className="widget-title-icon tie-icon" />
                          </div>
                        </div>
                        <div className="widget-posts-list-container timeline-widget">
                          <ul className="posts-list-items widget-posts-wrapper">
                            <li className="widget-single-post-item">
                              <a href="#">
                                <span className="date meta-item tie-icon">
                                  il y a 1 heure
                                </span>
                                <h3>
                                  Les appartements vacants augmentent pour la
                                  première fois en 6 ans
                                </h3>
                              </a>
                            </li>
                            <li className="widget-single-post-item">
                              <a href="#">
                                <span className="date meta-item tie-icon">
                                  il y a 1 heure
                                </span>
                                <h3>
                                  Le patron de Xbox parle du prix du projet
                                  Scorpio
                                </h3>
                              </a>
                            </li>
                            <li className="widget-single-post-item">
                              <a href="#">
                                <span className="date meta-item tie-icon">
                                  il y a 1 heure
                                </span>
                                <h3>
                                  Quinoa nouvelles recettes, feta et salade de
                                  fèves
                                </h3>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="clearfix" />
                      </div>
                      {/* .widget /*/}
                    </div>
                    {/* BK-end-Most Viewed Posts-footer*/}
                    {/* .tie-col /*/}
                    {/* BK-last-postes-footer*/}
                    <div className="tie-col-md-3 normal-side">
                      <div
                        id="posts-list-widget-2"
                        className="container-wrapper widget posts-list"
                      >
                        <div className="widget-title the-global-title">
                          <div className="the-subtitle">
                            Last Modified Posts
                            <span className="widget-title-icon tie-icon" />
                          </div>
                        </div>
                        <div className="widget-posts-list-container posts-pictures-widget">
                          <div className="tie-row widget-posts-wrapper">
                            <div className="widget-single-post-item tie-col-xs-4 tie-video">
                              <a
                                aria-label="La persuasion est souvent plus efficace que la force"
                                href="#"
                                className="post-thumb"
                              >
                                <img
                                  width={390}
                                  height={220}
                                  src="images/2-390x220.jpg"
                                  className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                                  alt=""
                                  loading="lazy"
                                />
                              </a>
                            </div>
                            <div className="widget-single-post-item tie-col-xs-4 tie-slider">
                              <a
                                aria-label="Astuce du jour: That man again"
                                href="#"
                                className="post-thumb"
                              >
                                <img
                                  width={390}
                                  height={220}
                                  src="images/9-390x220.jpg"
                                  className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                                  alt=""
                                  loading="lazy"
                                  srcSet="images/9-390x220.jpg 390w,
																images/9-390x220.jpg 300w,
																images/9-390x220.jpg 768w, 
																images/9-390x220.jpg 1024w"
                                  sizes="(max-width: 390px) 100vw, 390px"
                                />
                              </a>
                            </div>
                            <div className="widget-single-post-item tie-col-xs-4 tie-video">
                              <a
                                aria-label="Spieth en danger de rater la coupe"
                                href="#"
                                className="post-thumb"
                              >
                                <img
                                  width={390}
                                  height={220}
                                  src="images/17-390x220.jpg"
                                  className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                                  alt=""
                                  loading="lazy"
                                />
                              </a>
                            </div>
                            <div className="widget-single-post-item tie-col-xs-4 tie-map">
                              <a
                                aria-label="Les fans de Hibs et de Ross County en finale"
                                href="#"
                                className="post-thumb"
                              >
                                <img
                                  width={390}
                                  height={220}
                                  src="images/12-390x220.jpg"
                                  className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                                  alt=""
                                  loading="lazy"
                                />
                              </a>
                            </div>
                            <div className="widget-single-post-item tie-col-xs-4 tie-slider">
                              <a
                                aria-label="Une hirondelle ne fait pas le printemps"
                                href="#"
                                className="post-thumb"
                              >
                                <img
                                  width={390}
                                  height={220}
                                  src="images/4-390x220.jpg"
                                  className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                                  alt=""
                                  loading="lazy"
                                />
                              </a>
                            </div>
                            <div className="widget-single-post-item tie-col-xs-4 tie-audio">
                              <a
                                aria-label="Je sais que ça fait mal de dire au revoir, mais il est temps pour moi de prendre mon envol"
                                href="#"
                                className="post-thumb"
                              >
                                <img
                                  width={390}
                                  height={220}
                                  src="images/8-390x220.jpg"
                                  className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                                  alt=""
                                  loading="lazy"
                                  srcSet="images/8-390x220.jpg 390w,
																images/8-390x220.jpg 300w,
																images/8-390x220.jpg 768w,
																images/8-390x220.jpg 1024w"
                                  sizes="(max-width: 390px) 100vw, 390px"
                                />
                              </a>
                            </div>
                            <div className="widget-single-post-item tie-col-xs-4 tie-slider">
                              <a
                                aria-label="Les nouveaux personnages de Heroes of the storm apportent des portails"
                                href="#"
                                className="post-thumb"
                              >
                                <img
                                  width={390}
                                  height={220}
                                  src="images/12-390x220.jpg"
                                  className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                                  alt=""
                                  loading="lazy"
                                />
                              </a>
                            </div>
                            <div className="widget-single-post-item tie-col-xs-4 tie-map">
                              <a
                                aria-label="Le guide ultime des tisanes"
                                href="#"
                                className="post-thumb"
                              >
                                <img
                                  width={390}
                                  height={220}
                                  src="images/7-390x220.jpg"
                                  className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                                  alt=""
                                  loading="lazy"
                                />
                              </a>
                            </div>
                            <div className="widget-single-post-item tie-col-xs-4 tie-thumb">
                              <a
                                aria-label="Ce que nous voyons quand on regarde des photo de voyage"
                                href="#"
                                className="post-thumb"
                              >
                                <img
                                  width={390}
                                  height={220}
                                  src="images/7-390x220.jpg"
                                  className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                                  alt=""
                                  loading="lazy"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="clearfix" />
                      </div>
                      {/* .widget /*/}
                    </div>
                    {/* .tie-col /*/}
                    {/* BK-end-last-postes-footer*/}
                    {/* BK-tags-footer*/}
                    <div className="tie-col-md-3 normal-side">
                      <div
                        id="tag_cloud-1"
                        className="container-wrapper widget widget_tag_cloud"
                      >
                        <div className="widget-title the-global-title">
                          <div className="the-subtitle">
                            Tags
                            <span className="widget-title-icon tie-icon" />
                          </div>
                        </div>
                        <div className="tagcloud">
                          <a
                            href="#"
                            className="tag-cloud-link tag-link-12 tag-link-position-1"
                            style={{ fontSize: "17.333333333333pt" }}
                            aria-label="Alimentation (4 éléments)"
                          >
                            Alimentation
                          </a>
                          <a
                            href="#"
                            className="tag-cloud-link tag-link-9 tag-link-position-2"
                            style={{ fontSize: "15pt" }}
                            aria-label="Business (3 éléments)"
                          >
                            Business
                          </a>
                          <a
                            href="#"
                            className="tag-cloud-link tag-link-7 tag-link-position-3"
                            style={{ fontSize: "22pt" }}
                            aria-label="Classique (7 éléments)"
                          >
                            Classique
                          </a>
                          <a
                            href="#"
                            className="tag-cloud-link tag-link-3 tag-link-position-4"
                            style={{ fontSize: "22pt" }}
                            aria-label="Contenu (7 éléments)"
                          >
                            Contenu
                          </a>
                          <a
                            href="#"
                            className="tag-cloud-link tag-link-20 tag-link-position-5"
                            style={{ fontSize: "12.2pt" }}
                            aria-label="Couleur (2 éléments)"
                          >
                            Couleur
                          </a>
                          <a
                            href="#"
                            className="tag-cloud-link tag-link-16 tag-link-position-6"
                            style={{ fontSize: "17.333333333333pt" }}
                            aria-label="Jeux (4 éléments)"
                          >
                            Jeux
                          </a>
                          <a
                            href="#"
                            className="tag-cloud-link tag-link-4 tag-link-position-7"
                            style={{ fontSize: "19.2pt" }}
                            aria-label="Monde (5 éléments)"
                          >
                            Monde
                          </a>
                          <a
                            href="#/"
                            className="tag-cloud-link tag-link-8 tag-link-position-8"
                            style={{ fontSize: "19.2pt" }}
                            aria-label="Style de vie (5 éléments)"
                          >
                            Style de vie
                          </a>
                          <a
                            href="#"
                            className="tag-cloud-link tag-link-17 tag-link-position-9"
                            style={{ fontSize: "12.2pt" }}
                            aria-label="Tech (2 éléments)"
                          >
                            Tech
                          </a>
                          <a
                            href="#"
                            className="tag-cloud-link tag-link-13 tag-link-position-10"
                            style={{ fontSize: "8pt" }}
                            aria-label="Timeline (1 élément)"
                          >
                            Timeline
                          </a>
                          <a
                            href="#"
                            className="tag-cloud-link tag-link-6 tag-link-position-11"
                            style={{ fontSize: "19.2pt" }}
                            aria-label="Voyage (5 éléments)"
                          >
                            Voyage
                          </a>
                          <a
                            href="#"
                            className="tag-cloud-link tag-link-5 tag-link-position-12"
                            style={{ fontSize: "22pt" }}
                            aria-label="À propos (7 éléments)"
                          >
                            À propos
                          </a>
                          <a
                            href="#"
                            className="tag-cloud-link tag-link-11 tag-link-position-13"
                            style={{ fontSize: "19.2pt" }}
                            aria-label="Équipe (5 éléments)"
                          >
                            Équipe
                          </a>
                        </div>
                        <div className="clearfix" />
                      </div>
                      {/* .widget /*/}
                    </div>
                    {/* BK-end-tags-footer*/}
                    {/* .tie-col /*/}
                    {/* BK-Followus-footer*/}
                    <div className="tie-col-md-3 normal-side">
                      <div
                        id="latest_tweets_widget-1"
                        className="container-wrapper widget latest-tweets-widget"
                      >
                        <div className="widget-title the-global-title">
                          <div className="the-subtitle">
                            <a href="#" rel="nofollow noopener">
                              Follow us
                            </a>
                            <span className="widget-title-icon tie-icon" />
                          </div>
                        </div>
                        <ul>
                          <li className="slide">
                            <div className="twitter-icon-wrap">
                              {" "}
                              <span
                                className="tie-icon-twitter"
                                aria-hidden="true"
                              />{" "}
                            </div>
                            <div className="tweetaya-body">
                              <p>
                                Coming Soon, Stay Tuned{" "}
                                <a
                                  href="https://twitter.com/#search?q=jannah"
                                  target="_blank"
                                  rel="nofollow noopener"
                                >
                                  #jannah
                                </a>{" "}
                                <a
                                  href="https://twitter.com/#search?q=big_update"
                                  target="_blank"
                                  rel="nofollow noopener"
                                >
                                  #big_update
                                </a>{" "}
                                <a
                                  href="https://twitter.com/#search?q=jannah5"
                                  target="_blank"
                                  rel="nofollow noopener"
                                >
                                  #jannah5
                                </a>{" "}
                                <a
                                  href="https://twitter.com/#search?q=wordpress"
                                  target="_blank"
                                  rel="nofollow noopener"
                                >
                                  #wordpress
                                </a>{" "}
                                <a
                                  href="//t.co/IQsH1hLnMr"
                                  target="_blank"
                                  rel="nofollow noopener"
                                >
                                  https://t.co/IQsH1hLnMr
                                </a>
                              </p>
                              <span className="tweetaya-meta">
                                <a
                                  href="https://twitter.com/tielabs/status/1294166595321962497"
                                  title="2020/08/14 06:58:55"
                                  target="_blank"
                                  rel="nofollow noopener"
                                >
                                  2020/08/14
                                </a>
                              </span>
                            </div>
                          </li>
                          <li className="slide">
                            <div className="twitter-icon-wrap">
                              {" "}
                              <span
                                className="tie-icon-twitter"
                                aria-hidden="true"
                              />{" "}
                            </div>
                            <div className="tweetaya-body">
                              <p>
                                Our new plugin WPCOVID-19 helps WordPress sites’
                                owners to display Coronavirus real-time data
                                easily on their sites…{" "}
                                <a
                                  href="//t.co/953KekMqq0"
                                  target="_blank"
                                  rel="nofollow noopener"
                                >
                                  https://t.co/953KekMqq0
                                </a>
                              </p>
                              <span className="tweetaya-meta">
                                <a
                                  href="https://twitter.com/tielabs/status/1251797716822360066"
                                  title="2020/04/19 09:00:07"
                                  target="_blank"
                                  rel="nofollow noopener"
                                >
                                  2020/04/19
                                </a>
                              </span>
                            </div>
                          </li>
                        </ul>
                        <div className="clearfix" />
                      </div>
                      {/* .widget /*/}
                    </div>{" "}
                    {/* BK-end-Followus-footer*/}
                    {/* .tie-col /*/}
                  </div>
                  {/* .tie-row /*/}
                </div>
                {/* .footer-widget-area /*/}
                {/* BK-widget-footer*/}
                <div className="footer-widget-area ">
                  <div className="tie-row">
                    {/* BK-logoblanc-footer*/}
                    <div className="tie-col-sm-4 normal-side">
                      <div
                        id="author-bio-widget-1"
                        className="container-wrapper widget aboutme-widget"
                      >
                        <div className="about-author about-content-wrapper">
                          <img
                            alt=""
                            src="images/logo-blanc.png"
                            style={{ marginTop: 15, marginBottom: 0 }}
                            className="about-author-img"
                            width={280}
                            height={47}
                          />
                          <div className="aboutme-widget-content"></div>
                          <div className="clearfix" />
                        </div>
                        {/* .about-widget-content */}
                        <div className="clearfix" />
                      </div>
                      {/* .widget /*/}
                    </div>
                    {/* .tie-col /*/}
                    {/* BK-end-logoblanc-footer*/}
                    {/* BK-descriptif-footer*/}
                    <div className="tie-col-sm-4 normal-side">
                      <div
                        id="author-bio-widget-2"
                        className="container-wrapper widget aboutme-widget"
                      >
                        <div className="about-author about-content-wrapper">
                          <div className="aboutme-widget-content">
                            Jannah is a Clean Responsive WordPress Newspaper,
                            Magazine, News and Blog theme. Packed with options
                            that allow you to completely customize your website
                            to your needs.
                          </div>
                          <div className="clearfix" />
                        </div>
                        {/* .about-widget-content */}
                        <div className="clearfix" />
                      </div>
                      {/* .widget /*/}
                    </div>
                    {/* BK-end-descriptif-footer*/}
                    {/* .tie-col /*/}
                    {/* BK-Newsletter-footer*/}
                    <div className="tie-col-sm-4 normal-side">
                      <div
                        id="tie-newsletter-1"
                        className="container-wrapper widget subscribe-widget"
                      >
                        <div className="widget-inner-wrap">
                          <div id="mc_embed_signup-tie-newsletter-1">
                            <form
                              action="#"
                              method="post"
                              id="mc-embedded-subscribe-form-tie-newsletter-1"
                              name="mc-embedded-subscribe-form"
                              className="subscribe-form validate"
                              target="_blank"
                            >
                              <div className="mc-field-group">
                                <label
                                  className="screen-reader-text"
                                  htmlFor="mce-EMAIL-tie-newsletter-1"
                                >
                                  Entrez votre adresse Email
                                </label>
                                <input
                                  type="email"
                                  defaultValue=""
                                  id="mce-EMAIL-tie-newsletter-1"
                                  placeholder="Entrez votre adresse Email"
                                  name="EMAIL"
                                  className="subscribe-input required email"
                                />
                              </div>
                              <input
                                type="submit"
                                defaultValue="S'abonner"
                                name="subscribe"
                                className="button subscribe-submit"
                              />
                            </form>
                          </div>
                        </div>
                        {/* .widget-inner-wrap /*/}
                        <div className="clearfix" />
                      </div>
                      {/* .widget /*/}
                    </div>
                    {/* .tie-col /*/}
                    {/* BK-end-Newsletter-footer*/}
                    <div className=" normal-side"></div>
                    {/* .tie-col /*/}
                  </div>
                  {/* .tie-row /*/}
                </div>
                {/* .footer-widget-area /*/}
              </div>
              {/* .container /*/}
            </div>
            {/* #Footer-widgets-container /*/}
            {/* #Footer-widgets-container /*/}
            {/* BK- /*/}
            <div id="site-info" className="site-info site-info-layout-2">
              <div className="container">
                <div className="tie-row">
                  <div className="tie-col-md-12">
                    {/* BK-Copyright-footer*/}
                    <div className="copyright-text copyright-text-first">
                      © Copyright 2022, Tous droits réservés &nbsp;|&nbsp;{" "}
                      <span
                        style={{ color: "red" }}
                        className="tie-icon-heart"
                      />
                      <a href="#" target="_blank" rel="nofollow noopener">
                        Jannah Thème par TieLabs
                      </a>{" "}
                      | Hébergé par{" "}
                      <a href="#" target="_blank" rel="nofollow noopener">
                        SiteGround
                      </a>
                    </div>
                    {/* BK-end-Copyright-footer*/}
                    {/* BK-footer-menu */}
                    <div className="footer-menu">
                      <ul id="menu-tielabs-secondry-menu" className="menu">
                        <li
                          id="menu-item-1014"
                          className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1014 tie-current-menu"
                        >
                          <a href="#/" aria-current="page">
                            Accueil
                          </a>
                        </li>
                        <li
                          id="menu-item-1015"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1015"
                        >
                          <a href="#">À propos</a>
                        </li>
                        <li
                          id="menu-item-1016"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1016"
                        >
                          <a href="#">Équipe</a>
                        </li>
                        <li
                          id="menu-item-1017"
                          className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1017"
                        >
                          <a href="#">Monde</a>
                        </li>
                        <li
                          id="menu-item-1018"
                          className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1018"
                        >
                          <a href="#">Tech</a>
                        </li>
                        <li
                          id="menu-item-1019"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1019"
                        >
                          <a title="Acheter maintenant!" href="#">
                            Acheter maintenant!
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* BK-end-footer-menu */}
                    {/* BK-footer-social-icons */}
                    <ul className="social-icons">
                      <li className="social-icons-item">
                        <a
                          className="social-link facebook-social-icon"
                          rel="external noopener nofollow"
                          target="_blank"
                          href="#"
                        >
                          <span className="tie-social-icon tie-icon-facebook" />
                          <span className="screen-reader-text">Facebook</span>
                        </a>
                      </li>
                      <li className="social-icons-item">
                        <a
                          className="social-link twitter-social-icon"
                          rel="external noopener nofollow"
                          target="_blank"
                          href="#"
                        >
                          <span className="tie-social-icon tie-icon-twitter" />
                          <span className="screen-reader-text">Twitter</span>
                        </a>
                      </li>
                      <li className="social-icons-item">
                        <a
                          className="social-link youtube-social-icon"
                          rel="external noopener nofollow"
                          target="_blank"
                          href="#"
                        >
                          <span className="tie-social-icon tie-icon-youtube" />
                          <span className="screen-reader-text">YouTube</span>
                        </a>
                      </li>
                      <li className="social-icons-item">
                        <a
                          className="social-link instagram-social-icon"
                          rel="external noopener nofollow"
                          target="_blank"
                          href="#"
                        >
                          <span className="tie-social-icon tie-icon-instagram" />
                          <span className="screen-reader-text">Instagram</span>
                        </a>
                      </li>
                    </ul>
                    {/* BK-footer-social-icons */}
                  </div>
                  {/* .tie-col /*/}
                </div>
                {/* .tie-row /*/}
              </div>
              {/* .container /*/}
            </div>
            {/* #site-info /*/}
          </footer>
          {/* BK-end-footer */}
          {/* #footer /*/}
          {/* BK-go-to-top-button */}
          <a
            id="go-to-top"
            className="go-to-top-button show-top-button"
            href="#tie-body"
          >
            <span className="tie-icon-angle-up" />
            <span className="screen-reader-text">
              Bouton retour en haut de la page
            </span>
          </a>
          {/* BK-end-go-to-top-button */}
        </div>
        {/* #tie-wrapper /*/}
      </div>
    </>
  );
}

export default Home;
