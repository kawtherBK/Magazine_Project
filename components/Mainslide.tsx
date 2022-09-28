import React from "react";
import { usePostQueryQuery} from '../generated/index'; 
import { useState } from "react";
import moment from "moment";
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'

export const Mainslide = () => {
 
  moment.locale('fr');
var day = moment().format("dddd, MMMM DD YYYY");

// console.log(data)

const [filters, setFilters] = useState<{
 
    after: string | undefined| null;
    before: string | undefined| null;
    first: number | undefined| null;
    last: number | undefined| null;
  }>({
  
    after: undefined,
    before: undefined,
    first: 5,
    last: undefined
  })
  
  const handleUpdateFilters= (value: string | number | undefined | null, key: keyof typeof filters ) => {
    setFilters((prevState) => ({...prevState, [key]: value}))
  }
  
    const { data } =  usePostQueryQuery({
         variables: {
          last: filters.last,
          first: filters.first,
          before: filters.before,
          after: filters.after,
          
         }
        });
 
 
  return (
    <div
    id="tiepost-1020-section-3286"
    className="section-wrapper container-full without-background"
  >
    <div className="section-item is-first-section full-width">
      <div className="container">
        <div className="tie-row main-content-row">
          <div className="main-content tie-col-md-12">
            <section id="tie-block_1354" className="slider-area mag-box">
              <div className="slider-area-inner">
                <div
                  id="tie-main-slider-14-block_1354"
                  className="tie-main-slider main-slider grid-5-first-big grid-5-slider boxed-slider grid-slider-wrapper tie-slick-slider-wrapper"
                  data-slider-id={14}
                  data-speed={3000}
                >
                  <div className="main-slider-inner">
                    <div className="containerblock_1354">
                      <div className="tie-slick-slider slick-initialized slick-slider">
                        <ul className="tie-slider-nav">
                          <li
                             onClick={() => {
                              handleUpdateFilters(undefined, "after")
                              handleUpdateFilters(data?.posts?.pageInfo?.startCursor, "before")
                              handleUpdateFilters(5, "last")
                              handleUpdateFilters(undefined, "first")
      
                            }}
                            style={
                              data?.posts?.pageInfo?.hasPreviousPage !== true
                                ? {
                                    pointerEvents: "none",
                                    opacity: "0.3",
                                  }
                                : {}
                            }
                            className="slick-arrow"
                          >
                            <span className="tie-icon-angle-left" />
                          </li>
                          <li
                            style={
                              data?.posts?.pageInfo?.hasNextPage !== true
                                ? {
                                    pointerEvents: "none",
                                    opacity: "0.3",
                                  }
                                : {}
                            }
                            onClick={() => {
                              handleUpdateFilters(data?.posts?.pageInfo?.endCursor, "after")
                              handleUpdateFilters(undefined, "before")
                              handleUpdateFilters(undefined, "last")
                              handleUpdateFilters(5
                                
                                , "first")
      
                            }}
                            className="slick-arrow"
                          >
                            <span className="tie-icon-angle-right" />
                          </li>
                        </ul>
                        
                        <div
                          aria-live="polite"
                          className="slick-list draggable "
                        >
                          <div
                            className="slick-track"
                            style={{
                              opacity: 1,
                              width: 4680,
                              transform: "translate3d(-1170px, 0px, 0px)",
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
                                 backgroundImage:"url(/images/1-780x470.jpg)",
                                }}
                                className="grid-item slide-id-971 tie-slide-6 tie-audio"
                              >
                                <a
                                  href="#"
                                  aria-label="Le patron de Xbox parle du prix du projet Scorpio"
                                  tabIndex={-1}
                                />
                                <div className="thumb-overlay">
                                  <span className="post-cat-wrap">
                                    <a
                                      className="post-cat tie-cat-20"
                                      href=""
                                      tabIndex={-1}
                                    >
                                      Style de vie
                                    </a>
                                  </span>
                                  <div className="thumb-content">
                                    <div className="thumb-meta">
                                      <span className="date meta-item tie-icon">
                                        il y a 2 semaines
                                      </span>
                                    </div>
                                    <h2 className="thumb-title">
                                      <a
                                        href=""
                                        tabIndex={-1}
                                      >
                                        Le patron de Xbox parle du prix du
                                        projet Scorpio
                                      </a>
                                    </h2>
                                    <div className="thumb-desc">
                                      Stay focused and remember we design the
                                      best WordPress News and Magazine Themes.
                                      It’s the…
                                    </div>
                                    {/* .thumb-desc */}
                                  </div>{" "}
                                  {/* .thumb-content /*/}
                                </div>
                                {/* .thumb-overlay /*/}
                              </div>
                              {/* .slide || .grid-item /*/}

                              {/* .slide || .grid-item /*/}

                              {/* .slide || .grid-item /*/}

                              {/* .slide || .grid-item /*/}

                              {/* .slide || .grid-item /*/}
                            </div>
                         

                              
                            <div
                              className="slider-content slide slick-slide slick-current slick-active slider-image"
                              data-slick-index={0}
                              aria-hidden="false"
                              style={{ width: 1170 }}
                              tabIndex={-1}
                              role="option"
                              data-aria-describedby="slick-slide00"
                              >
                              {data?.posts?.nodes?.slice(0, 1).map((post,index) => {
                                return (
                                  <div
                                    key={index}
                                    style={{
                                      backgroundImage: `url(${post?.featuredImage?.node?.sourceUrl})`,
                                      }}
                                        className="grid-item slide-id-976 tie-slide-1 tie-thumb slider-image"
                                      >
                                    <a
                                     
                                      // href={`/posts/${post?.slug}`}
                                      className="all-over-thumb-link"
                                      
                                     
                                    />
                                    <div className="thumb-overlay">
                                      <span className="post-cat-wrap">
                                        <a
                                          className="post-cat tie-cat-20"
                                          href="#"
                                          tabIndex={0}
                                        >
                                          {post?.categories?.nodes?.map(id=>id?.name)}
                                        </a>
                                      </span>
                                      <div className="thumb-content">
                                        <div className="thumb-meta">
                                          <span className="date meta-item tie-icon">
                                            {moment(post?.date).format(
                                              "DD MMMM YYYY"
                                            )}
                                          </span>
                                        </div>
                                        <h2 className="thumb-title">
                                          <a
                                            // href={`/posts/${post?.slug}`}
                                            tabIndex={0}
                                          >
                                            {post?.title}
                                          </a>
                                        </h2>
                                       
                                       
                                        <div className="thumb-desc" 
                                         dangerouslySetInnerHTML={{__html: post?.excerpt ||""}} />
                                  
                                        {/* .thumb-desc */}
                                      </div>{" "}
                                      {/* .thumb-content /*/}
                                    </div>
                                    {/* .thumb-overlay /*/}
                                  </div>
                                );
                              })}
                              {/* .slide || .grid-item /*/}
                              {data?.posts?.nodes?.slice(1, 5).map((post,index) => {
                                return (
                                  <div
                                    key={index}
                                    style={{
                                      backgroundImage: `url(${post?.featuredImage?.node?.sourceUrl})`,
                                    }}
                                    className="grid-item slide-id-975 tie-slide-2 tie-audio "
                                  >
                                    <a
                                      href="#"
                                      className="all-over-thumb-link"
                                      aria-label="Spieth en danger de rater la coupe"
                                      tabIndex={0}
                                    />
                                    <div className="thumb-overlay">
                                      <span className="post-cat-wrap">
                                        <a
                                          className="post-cat tie-cat-20"
                                          href=""
                                          tabIndex={0}
                                        >
                                         {post?.categories?.nodes?.map(id=>id?.name)}
                                        </a>
                                      </span>
                                      <div className="thumb-content">
                                        <div className="thumb-meta">
                                          <span className="date meta-item tie-icon">
                                            {moment(post?.date).format(
                                              "DD MMMM YYYY"
                                            )}
                                          </span>
                                        </div>
                                        <h2 className="thumb-title">
                                          <a href="" tabIndex={0}>
                                            {post?.title}
                                          </a>
                                        </h2>
                                        
                                       < div className="thumb-desc"  dangerouslySetInnerHTML={{__html: post?.excerpt ||""}} />
                                     
                                        
                                        
                                        {/* .thumb-desc */}
                                      </div>{" "}
                                      {/* .thumb-content /*/}
                                    </div>
                                    {/* .thumb-overlay /*/}
                                  </div>
                                );
                              })}
                              {/* .slide || .grid-item /*/}

                              {/* .slide || .grid-item /*/}

                              {/* .slide || .grid-item /*/}

                              {/* .slide || .grid-item /*/}
                            </div>
                            
                            
                          </div>
                        </div>
                        
                        {/* .slide */} {/* .slide */}
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
  );
};
