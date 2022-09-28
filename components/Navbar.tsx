import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import moment from "moment";
import {
  usePostQueryQuery,
  useGetAllCategoriesQuery,
} from "../generated/index";
import { useTrail, animated } from "react-spring";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 2,
    },
  },
};

const item = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Navbar = () => {
  const { data: categoriesData } = useGetAllCategoriesQuery({});

  const [cat, setCat] = useState<number | undefined | null>();

  const { data } = usePostQueryQuery({
    variables: {
      categoryId: cat,
    },
  });
  const config = { tension: 500, friction: 80 };
  const trail = useTrail(data?.posts?.nodes ? data.posts.nodes.length : 0, {
    config,
    opacity: 1,
    width: 200,
    from: { opacity: 0, width: 55 },
  });

  return (
    <>
      <div
        id="theme-header"
        className="theme-header header-layout-3 main-nav-dark main-nav-default-dark main-nav-below main-nav-boxed has-stream-item top-nav-active top-nav-light top-nav-default-light top-nav-above has-shadow has-normal-width-logo mobile-header-default"
      >
        <div className="main-nav-wrapper" style={{ height: 60 }}>
          <nav
            id="main-nav"
            data-skin="search-in-main-nav"
            className="main-nav header-nav live-search-parent fixed fixed-top unpinned-no-transition fixed-not-bottom"
            aria-label="Navigation principale"
          >
            <div className="container">
              <div className="main-menu-wrapper">
                <div id="menu-components-wrap">
                  <div className="main-menu main-menu-wrap tie-alignleft">
                    <div id="main-nav-menu" className="main-menu header-menu">
                      <ul
                        id="menu-tielabs-main-menu"
                        className="menu"
                        role="menubar"
                      >
                        {/*BK-start-menu-Accueil*/}
                        <li
                          id="menu-item-978"
                          className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-978 tie-current-menu"
                        >
                          <Link href="/">
                            <a>Accueil</a>
                          </Link>
                        </li>
                        {/*BK-end-menu-Accueil*/}

                        {/* BK-start-submenu-monde */}
                        <li
                          id="menu-item-979"
                          className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-979 mega-menu mega-cat "
                          data-id={2}
                        >
                          <a href="#">Monde</a>
                          <div className="mega-menu-block menu-sub-content">
                            <div className="mega-menu-content">
                              <div className="mega-cat-wrapper">
                                <ul className="mega-cat-sub-categories cats-vertical">
                                  <li className="mega-all-link">
                                    <a
                                      data-id={""}
                                      className={
                                        !cat || cat === undefined
                                          ? "active"
                                          : undefined
                                      }
                                      onMouseEnter={() => {
                                        setCat(undefined);
                                      }}
                                    >
                                      Tout
                                    </a>
                                  </li>
                                  {categoriesData?.categories?.nodes
                                    ?.slice(0, 4)
                                    .map((categ) => {
                                      return (
                                        <li
                                          className="mega-sub-cat-75"
                                          key={categ?.categoryId}
                                        >
                                          <a
                                            data-id={categ?.categoryId}
                                            className={
                                              categ?.categoryId === cat
                                                ? "active"
                                                : undefined
                                            }
                                            onMouseEnter={() => {
                                              setCat(categ?.categoryId);
                                            }}
                                          >
                                            {categ?.name}
                                          </a>
                                        </li>
                                      );
                                    })}
                                </ul>
                                <div className="mega-cat-content mega-cat-sub-exists vertical-post">
                                  <div className="mega-ajax-content mega-cat-posts-container clearfix">
                                    <motion.ul
                                      className="container"
                                      variants={container}
                                      initial="hidden"
                                      animate="visible"
                                    >
                                      {data?.posts?.nodes
                                        ?.slice(0, 5)
                                        .map((post) => {
                                          return (
                                            <motion.li
                                              key={post?.slug}
                                              variants={item}
                                              className="mega-menu-post is-trending tie-standard tie-animate-slideInUp"
                                            >
                                              <div className="post-thumbnail">
                                                <a
                                                  className="post-thumb"
                                                  //   href={`/posts/${post.slug}`}
                                                >
                                                  <Image
                                                    width={500}
                                                    height={300}
                                                    src={
                                                      post?.featuredImage?.node
                                                        ?.sourceUrl || ""
                                                    }
                                                    className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                                                    alt=""
                                                    loading="lazy"
                                                  />
                                                </a>
                                              </div>
                                              {/* .post-thumbnail /*/}
                                              <div className="post-details">
                                                <h3 className="post-box-title kawther">
                                                  <a
                                                    className="mega-menu-link"
                                                    // href={`/posts/${post.slug}`}
                                                  >
                                                    {post?.title}
                                                  </a>
                                                </h3>
                                                <div className="post-meta clearfix">
                                                 
                                                  <span className="date meta-item tie-icon">
                                                    {moment(post?.date).format(
                                                      "DD MMMM YYYY"
                                                    )}
                                                  </span>
                                                </div>
                                                {/* .post-meta */}
                                              </div>
                                            </motion.li>
                                          );
                                        })}
                                    </motion.ul>
                                  </div>
                                </div>
                              </div>
                              {/* .mega-cat-Wrapper */}
                            </div>
                            {/* .mega-menu-content */}
                          </div>
                          {/* .mega-menu-block */}
                        </li>
                        {/* BK-start-submenu-sport */}
                        <li
                          id="menu-item-980"
                          className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-980 mega-menu mega-cat "
                          data-id={2}
                        >
                          <a href="#">Sport</a>
                          <div className="mega-menu-block menu-sub-content">
                            <div className="mega-menu-content">
                              <div className="mega-cat-wrapper">
                                <ul className="mega-cat-sub-categories cats-horizontal">
                                  <li className="mega-all-link">
                                    <a
                                      data-id={""}
                                      className={
                                        !cat || cat === undefined
                                          ? "active"
                                          : undefined
                                      }
                                      onMouseEnter={() => {
                                        setCat(undefined);
                                      }}
                                    >
                                      Tout
                                    </a>
                                  </li>
                                  {categoriesData?.categories?.nodes
                                    ?.slice(0, 4)
                                    .map((categ) => {
                                      return (
                                        <li key={categ?.categoryId}>
                                          <a
                                            data-id={categ?.categoryId}
                                            className={
                                              categ?.categoryId === cat
                                                ? "active"
                                                : ""
                                            }
                                            onMouseEnter={() => {
                                              setCat(categ?.categoryId);
                                            }}
                                          >
                                            {categ?.name}
                                          </a>
                                        </li>
                                      );
                                    })}
                                </ul>
                                <div className="mega-cat-content mega-cat-sub-exists horizontal-posts">
                                  <div className="mega-ajax-content mega-cat-posts-container clearfix">
                                    {/* BK-post-in-menu-Sport*/}
                                    <motion.ul
                                      className="container"
                                      variants={container}
                                      initial="hidden"
                                      animate="visible"
                                    >
                                      {data?.posts?.nodes
                                        ?.slice(0, 5)
                                        .map((post) => {
                                          return (
                                            <motion.li
                                              variants={item}
                                              key={post?.slug}
                                              className="mega-menu-post tie-video tie-animate-slideInUp"
                                            >
                                              <div className="post-thumbnail">
                                                <a
                                                  className="post-thumb"
                                                  // href={`/posts/${post.slug}`}
                                                >
                                                  <Image
                                                    width={390}
                                                    height={220}
                                                    src={
                                                      post?.featuredImage?.node
                                                        ?.sourceUrl || ""
                                                    }
                                                    className="attachment-jannah-image-large size-jannah-image-large wp-post-image"
                                                    alt=""
                                                    loading="lazy"
                                                  />
                                                </a>
                                              </div>
                                              {/* .post-thumbnail /*/}
                                              <div className="post-details">
                                                <h3 className="post-box-title kawther">
                                                  <a
                                                    className="mega-menu-link"
                                                    // href={`/posts/${post.slug}` }
                                                  >
                                                    {post?.title}
                                                  </a>
                                                </h3>
                                                <div className="post-meta clearfix">
                                                  <span className="date meta-item tie-icon">
                                                    {moment(post?.date).format(
                                                      "DD MMMM YYYY"
                                                    )}
                                                  </span>
                                                </div>
                                                {/* .post-meta */}
                                              </div>
                                            </motion.li>
                                          );
                                        })}
                                    </motion.ul>
                                    {/* BK-post-in-menu-sport */}
                                  </div>
                                  {/* .mega-ajax-content */}
                                </div>
                                {/* .mega-cat-content */}
                              </div>
                              {/* .mega-cat-Wrapper */}
                            </div>
                            {/* .mega-menu-content */}
                          </div>
                          {/* .mega-menu-block */}
                        </li>

                        {/* BK-start-submenu-tech */}
                        <li
                          id="menu-item-981"
                          className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-981 mega-menu mega-recent-featured "
                        >
                          <a href="#">Tech</a>
                          <div className="mega-menu-block menu-sub-content">
                            <div className="mega-menu-content">
                              <div className="mega-ajax-content">
                                {/* bk-first post */}
                                {data?.posts?.nodes?.slice(0, 1).map((post) => {
                                  return (
                                    <div
                                      key={post?.slug}
                                      className="mega-recent-post tie-thumb tie-animate-slideInUp"
                                    >
                                      <div className="post-thumbnail">
                                        <a
                                          className="post-thumb"
                                          // href={`/posts/${post?.slug}`}
                                         >
                                          <Image
                                            width={780}
                                            height={470}
                                            src={
                                              post?.featuredImage?.node
                                                ?.sourceUrl || ""
                                            }
                                            className="attachment-jannah-image-post size-jannah-image-post wp-post-image"
                                            alt=""
                                            loading="lazy"
                                          />
                                        </a>
                                      </div>
                                      {/* .post-thumbnail /*/}
                                      <div className="post-meta clearfix">
                                        <span className="author-meta single-author no-avatars">
                                          <span className="meta-item meta-author-wrapper meta-author-1">
                                            <span className="meta-author">
                                              <a
                                               className="author-name tie-icon"
                                               >
                                                {post?.author?.node?.name}
                                              </a>
                                            </span>
                                          </span>
                                        </span>
                                        <span className="date meta-item tie-icon">
                                          {moment(post?.date).format(
                                            "DD MMMM YYYY"
                                          )}
                                        </span>
                                        <div className="tie-alignright">
                                          <span className="meta-comment tie-icon meta-item fa-before">
                                            {post?.commentCount}
                                          </span>
                                          <span className="meta-views meta-item hot">
                                            <span
                                              className="tie-icon-fire"
                                              aria-hidden="true"
                                            />
                                            2&nbsp;060{" "}
                                          </span>
                                        </div>
                                      </div>
                                      {/* .post-meta */}
                                      <h3 className="post-box-title">
                                        <a
                                          className="mega-menu-link"
                                          //   href={`/posts/${post.slug}`}
                                        >
                                          {post?.title}
                                        </a>
                                      </h3>
                                    </div>
                                  );
                                })}
                                {/* bk-first post */}
                                {/* mega-recent-post */}
                                <div className="mega-check-also">
                                  <ul>
                                    {trail.slice(1, 7).map((props, index) => {
                                      return (
                                        <li
                                          key={
                                            data?.posts?.nodes?.[index]?.slug
                                          }
                                          className="mega-menu-post tie-map tie-animate-slideInUp"
                                        >
                                          <animated.div style={props}>
                                            <div className="post-thumbnail">
                                              <a
                                                className="post-thumb"
                                                //    href={`/posts/${post.slug}`}
                                              >
                                                <Image
                                                  width={110}
                                                  height={75}
                                                  src={
                                                    data?.posts?.nodes?.[index]
                                                      ?.featuredImage?.node
                                                      ?.sourceUrl || ""
                                                  }
                                                  className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                                  alt=""
                                                  loading="lazy"
                                                />
                                              </a>
                                            </div>
                                            {/* .post-thumbnail /*/}
                                            <div className="post-details">
                                              <h3 className="post-box-title">
                                                <a
                                                  className="mega-menu-link"
                                                  //  href={`/posts/${post.slug}`}
                                                >
                                                  {
                                                    data?.posts?.nodes?.[index]
                                                      ?.title
                                                  }
                                                </a>
                                              </h3>
                                              <div className="post-meta clearfix">
                                                <span className="date meta-item tie-icon">
                                                  {moment(
                                                    data?.posts?.nodes?.[index]
                                                      ?.date
                                                  ).format("DD MMMM YYYY")}
                                                </span>
                                              </div>
                                              {/* .post-meta */}
                                            </div>
                                          </animated.div>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                                {/* mega-check-also */}
                              </div>
                              {/* .mega-ajax-content */}
                            </div>
                            {/* .mega-menu-content */}
                          </div>
                        </li>
                        {/* BK-start-submenu-styledevie */}
                        <li
                          id="menu-item-982"
                          className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-982 menu-item-has-icon mega-menu mega-recent-featured "
                          data-id={21}
                          data-icon="true"
                        >
                          <a href="#">
                            <span
                              aria-hidden="true"
                              className="tie-menu-icon fas fa-coffee"
                            />
                            Style de vie
                          </a>
                          <div className="mega-menu-block menu-sub-content">
                            <ul className="mega-recent-featured-list sub-list">
                              {data?.posts?.nodes?.slice(0, 5).map((post) => {
                                return (
                                  <li
                                    key={post?.slug}
                                    id="menu-item-983"
                                    className="menu-item menu-item-type-post_type menu-item-object-post menu-item-983"
                                  >
                                    <a
                                    //   href={`/posts/${post.slug}`}
                                    >
                                      {post?.title}
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                            <div className="mega-menu-content media-overlay">
                              <div className="mega-ajax-content">
                                <div className="mega-ajax-content">
                                  {data?.posts?.nodes
                                    ?.slice(5, 6)
                                    .map((post) => {
                                      return (
                                        <div
                                          key={post?.slug}
                                          className="mega-recent-post tie-slider tie-animate-slideInUp"
                                        >
                                          <div className="post-thumbnail">
                                            <a className="post-thumb">
                                              {/* href={`/posts/${post.slug}`} */}
                                              {/* {post?.title} */}

                                              <div className="post-thumb-overlay-wrap">
                                                <div className="post-thumb-overlay">
                                                  <span className="tie-icon tie-media-icon" />
                                                </div>
                                              </div>
                                              <Image
                                                width={780}
                                                height={470}
                                                src={
                                                  post?.featuredImage?.node
                                                    ?.sourceUrl || ""
                                                }
                                                className="attachment-jannah-image-post size-jannah-image-post wp-post-image"
                                                alt=""
                                                loading="lazy"
                                              />
                                            </a>
                                          </div>
                                          {/* .post-thumbnail /*/}
                                          <div className="post-meta clearfix">
                                            <span className="author-meta single-author no-avatars">
                                              <span className="meta-item meta-author-wrapper meta-author-1">
                                                <span className="meta-author">
                                                  <a
                                                    // href={`/posts/${post.slug}`}
                                                    className="author-name tie-icon"
                                                  >
                                                    {post?.author?.node?.name}
                                                  </a>
                                                </span>
                                              </span>
                                            </span>
                                            <span className="date meta-item tie-icon">
                                              {moment(post?.date).format(
                                                "DD MMMM YYYY"
                                              )}
                                            </span>
                                            <div className="tie-alignright">
                                              <span className="meta-comment tie-icon meta-item fa-before">
                                                {post?.commentCount}
                                              </span>
                                              <span className="meta-views meta-item hot">
                                                <span
                                                  className="tie-icon-fire"
                                                  aria-hidden="true"
                                                />
                                                3&nbsp;980{" "}
                                              </span>
                                            </div>
                                          </div>
                                          {/* .post-meta */}
                                          <h3 className="post-box-title">
                                            <a
                                              className="mega-menu-link"
                                              //  href={`/posts/${post.slug}`}
                                            >
                                              {post?.title}
                                            </a>
                                          </h3>
                                        </div>
                                      );
                                    })}
                                  {/* mega-recent-post */}

                                  <div className="mega-check-also">
                                    <ul>
                                      {data?.posts?.nodes
                                        ?.slice(6, 9)
                                        .map((post) => {
                                          return (
                                            <li
                                              key={post?.slug}
                                              className="mega-menu-post tie-map tie-animate-slideInUp"
                                            >
                                              <div className="post-thumbnail">
                                                <a
                                                  className="post-thumb"
                                                  //  href={`/posts/${post.slug}`}
                                                >
                                                  <Image
                                                    width={110}
                                                    height={75}
                                                    src={
                                                      post?.featuredImage?.node
                                                        ?.sourceUrl || ""
                                                    }
                                                    className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"
                                                    alt=""
                                                    loading="lazy"
                                                  />
                                                </a>
                                              </div>
                                              {/* .post-thumbnail /*/}
                                              <div className="post-details">
                                                <h3 className="post-box-title">
                                                  <a
                                                    className="mega-menu-link"
                                                    // href={`/posts/${post.slug}`}
                                                  >
                                                    {post?.title}
                                                  </a>
                                                </h3>
                                                <div className="post-meta clearfix">
                                                  <span className="date meta-item tie-icon">
                                                    {moment(post?.date).format(
                                                      "DD MMMM YYYY"
                                                    )}
                                                  </span>
                                                </div>
                                                {/* .post-meta */}
                                              </div>
                                            </li>
                                          );
                                        })}
                                    </ul>
                                  </div>
                                  {/* mega-check-also */}
                                </div>
                              </div>
                              {/* .mega-ajax-content */}
                            </div>
                            {/* .mega-menu-content */}
                          </div>
                          {/* .mega-menu-block */}
                        </li>
                        {/* BK-start-submenu-plus */}
                        <li
                          id="menu-item-988"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-988 mega-menu mega-links mega-links-4col "
                        >
                          <a href="#">Plus</a>
                          <div className="mega-menu-block menu-sub-content">
                            <ul className="sub-menu-columns">
                              <li
                                id="menu-item-989"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-989 mega-link-column "
                              >
                                <a className="mega-links-head" href="#">
                                  Titre menu #1
                                </a>
                                <ul className="sub-menu-columns-item">
                                  <li
                                    id="menu-item-990"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-990"
                                  >
                                    <a href="#">
                                      {" "}
                                      <span
                                        aria-hidden="true"
                                        className="mega-links-default-icon"
                                      />
                                      Sous-Menu #1
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-991"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-991"
                                  >
                                    <a href="#">
                                      {" "}
                                      <span
                                        aria-hidden="true"
                                        className="mega-links-default-icon"
                                      />
                                      Sous-Menu #2
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-992"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-992"
                                  >
                                    <a href="#">
                                      {" "}
                                      <span
                                        aria-hidden="true"
                                        className="mega-links-default-icon"
                                      />
                                      Sous-Menu #3
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-993"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-993"
                                  >
                                    <a href="#">
                                      {" "}
                                      <span
                                        aria-hidden="true"
                                        className="mega-links-default-icon"
                                      />
                                      Sous-Menu #4
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-994"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-994"
                                  >
                                    <a href="#">
                                      {" "}
                                      <span
                                        aria-hidden="true"
                                        className="mega-links-default-icon"
                                      />
                                      Sous-Menu #5
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li
                                id="menu-item-995"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-995 mega-link-column "
                              >
                                <a className="mega-links-head" href="#">
                                  Titre menu #2
                                </a>
                                <ul className="sub-menu-columns-item">
                                  <li
                                    id="menu-item-996"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-996"
                                  >
                                    <a href="#">
                                      {" "}
                                      <span
                                        aria-hidden="true"
                                        className="mega-links-default-icon"
                                      />
                                      Sous-Menu #1
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-997"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-997"
                                  >
                                    <a href="#">
                                      {" "}
                                      <span
                                        aria-hidden="true"
                                        className="mega-links-default-icon"
                                      />
                                      Sous-Menu #2
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-998"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-998"
                                  >
                                    <a href="#">
                                      {" "}
                                      <span
                                        aria-hidden="true"
                                        className="mega-links-default-icon"
                                      />
                                      Sous-Menu #3
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-999"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-999"
                                  >
                                    <a href="#">
                                      {" "}
                                      <span
                                        aria-hidden="true"
                                        className="mega-links-default-icon"
                                      />
                                      Sous-Menu #4
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-1000"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1000"
                                  >
                                    <a href="#">
                                      {" "}
                                      <span
                                        aria-hidden="true"
                                        className="mega-links-default-icon"
                                      />
                                      Sous-Menu #5
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li
                                id="menu-item-1001"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1001 mega-link-column "
                              >
                                <a className="mega-links-head" href="#">
                                  Titre menu #3
                                </a>
                                <ul className="sub-menu-columns-item">
                                  <li
                                    id="menu-item-1002"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1002"
                                  >
                                    <a href="#">
                                      {" "}
                                      <span
                                        aria-hidden="true"
                                        className="mega-links-default-icon"
                                      />
                                      Sous-Menu #1
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-1003"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1003"
                                  >
                                    <a href="#">
                                      {" "}
                                      <span
                                        aria-hidden="true"
                                        className="mega-links-default-icon"
                                      />
                                      Sous-Menu #2
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-1004"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1004"
                                  >
                                    <a href="#">
                                      {" "}
                                      <span
                                        aria-hidden="true"
                                        className="mega-links-default-icon"
                                      />
                                      Sous-Menu #3
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-1005"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1005"
                                  >
                                    <a href="#">
                                      {" "}
                                      <span
                                        aria-hidden="true"
                                        className="mega-links-default-icon"
                                      />
                                      Sous-Menu #4
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-1006"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1006"
                                  >
                                    <a href="#">
                                      {" "}
                                      <span
                                        aria-hidden="true"
                                        className="mega-links-default-icon"
                                      />
                                      Sous-Menu #5
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li
                                id="menu-item-1007"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1007 mega-link-column "
                              >
                                <a className="mega-links-head" href="#">
                                  Titre menu #4
                                </a>
                                <ul className="sub-menu-columns-item">
                                  <li
                                    id="menu-item-1008"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1008"
                                  >
                                    <a href="#">
                                      {" "}
                                      <span
                                        aria-hidden="true"
                                        className="mega-links-default-icon"
                                      />
                                      Sous-Menu #1
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-1009"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1009"
                                  >
                                    <a href="#">
                                      {" "}
                                      <span
                                        aria-hidden="true"
                                        className="mega-links-default-icon"
                                      />
                                      Sous-Menu #2
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-1010"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1010"
                                  >
                                    <a href="#">
                                      {" "}
                                      <span
                                        aria-hidden="true"
                                        className="mega-links-default-icon"
                                      />
                                      Sous-Menu #3
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-1011"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1011"
                                  >
                                    <a href="#">
                                      {" "}
                                      <span
                                        aria-hidden="true"
                                        className="mega-links-default-icon"
                                      />
                                      Sous-Menu #4
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-1012"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1012"
                                  >
                                    <a href="#">
                                      {" "}
                                      <span
                                        aria-hidden="true"
                                        className="mega-links-default-icon"
                                      />
                                      Sous-Menu #5
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          {/* .mega-menu-block */}
                        </li>
                        {/* BK-start-acheter maintenant */}
                        <li
                          id="menu-item-1013"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1013"
                        >
                          <a title="Acheter maintenant!" target="true" href="#">
                            Acheter maintenant!
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* .main-menu.tie-alignleft /*/}
                  <ul className="components">
                    {/* BK-bloc-recherche */}
                    <li
                      className="search-bar menu-item custom-menu-link"
                      aria-label="Rerchercher"
                    >
                      <form method="get" id="search" action="#/">
                        <input
                          id="search-input"
                          className="is-ajax-search"
                          inputMode="search"
                          type="text"
                          name="s"
                          title="Rechercher"
                          placeholder="Rechercher"
                          autoComplete="off"
                        />
                        <button id="search-submit" type="submit">
                          <span
                            className="tie-icon-search tie-search-icon"
                            aria-hidden="true"
                          />
                          <span className="screen-reader-text">Rechercher</span>
                        </button>
                      </form>
                    </li>
                    {/* BK-icon-random */}
                    <li className="random-post-icon menu-item custom-menu-link">
                      <a
                        href="#"
                        className="random-post"
                        title="Article Aléatoire"
                        rel="nofollow"
                      >
                        <span className="tie-icon-random" aria-hidden="true" />
                        <span className="screen-reader-text">
                          Article Aléatoire
                        </span>
                      </a>
                    </li>
                  </ul>
                  {/* Components */}
                </div>
                {/* #menu-components-wrap /*/}
              </div>
              {/* .main-menu-wrapper /*/}
            </div>
            {/* .container /*/}
          </nav>
          {/* #main-nav /*/}
        </div>
      </div>
    </>
  );
};

export default Navbar;
