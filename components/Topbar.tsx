import React from "react";
import { usePostQueryQuery} from '../generated/index'; 
import Typewriter from 'typewriter-effect';
import { useState } from "react";
import moment from "moment";


export const Topbar = () => {
   
    moment.locale('fr', {
        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),});
    var day = moment().format("dddd, MMMM DD YYYY");

    
    // const {data} =  useTitlepostQuery();
    // console.log(data)

    const [filters, setFilters] = useState<{
     
        after: string | undefined| null;
        before: string | undefined| null;
        first: number | undefined| null;
        last: number | undefined| null;
      }>({
      
        after: undefined,
        before: undefined,
        first: 20,
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
  
return(
    <div>
                <nav
            id="top-nav"
            className="has-date-breaking-components top-nav header-nav has-breaking-news"
            aria-label="Navigation secondaire"
          >
            <div className="container">
              <div className="topbar-wrapper">
                {/* bk-alignleft */}
                <div className="topbar-today-date tie-icon">
                {day}
                </div>
                {/* bk-aligncenter */}
                <div className="tie-alignleft">
                  <div className="breaking controls-is-active">
                    <span className="breaking-title">
                      <span
                        className="tie-icon-bolt breaking-icon"
                        aria-hidden="true"
                      />
                      <span className="breaking-title-text">Breaking News</span>
                    </span>
                    <div
                      id="ticker-wrapper-1650550123722"
                      className="ticker-wrapper has-js ticker-dir-left"
                    >
                      <div id="ticker-1650550123722" className="ticker">
                      <Typewriter
            options={{
              strings: data?.posts?.nodes ? data?.posts?.nodes?.map((post) => post?.title) : null,
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
              delay:30,
              cursor:"_",
            //   pasteString:"<a href={`/posts/${post.slug}`}></a>"
             
            }}
          />
                        <div
                          id="ticker-swipe-1650550123722"
                          className="ticker-swipe"
                          style={{ marginLeft: 400 }}
                        >
                        
                        </div>
                      </div>
                      <ul
                        id="ticker-controls-1650550123722"
                        className="breaking-news-nav slider-arrow-nav "


                      >
                        <li
                      
                          id="prev-1650550123722"
                          className="jnt-prev controls"
                          onClick={() => {
                            handleUpdateFilters(undefined, "after")
                            handleUpdateFilters(data?.posts?.pageInfo?.startCursor, "before")
                            handleUpdateFilters(1, "last")
                            handleUpdateFilters(undefined, "first")
    
                          }}
                          
                        />
                        <li
                        
                          id="next-1650550123722"
                          className="jnt-next controls"
                         
                          onClick={() => {
                            handleUpdateFilters(data?.posts?.pageInfo?.endCursor, "after")
                            handleUpdateFilters(undefined, "before")
                            handleUpdateFilters(undefined, "last")
                            handleUpdateFilters(1, "first")
    
                          }}
                        />
                      </ul>
                    </div>
                  </div>
                  {/* #breaking /*/}
                </div>
                {/* .tie-alignleft /*/}
                {/* bk-alignright */}
                <div className="tie-alignright">
                  <ul className="components">
                    <li className="side-aside-nav-icon menu-item custom-menu-link">
                      <a href="#">
                        <span className="tie-icon-navicon" aria-hidden="true" />
                        <span className="screen-reader-text">
                          Sidebar (barre latérale)
                        </span>
                      </a>
                    </li>
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
                    <li className=" popup-login-icon menu-item custom-menu-link">
                      <a href="#" className="lgoin-btn tie-popup-trigger">
                        <span className="tie-icon-author" aria-hidden="true" />
                        <span className="screen-reader-text">
                          Connexion
                        </span>{" "}
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
                        className="social-link facebook-social-icon"
                        rel="external noopener nofollow"
                        target="_blank"
                        href="#"
                      >
                        <span className="tie-social-icon tie-icon-facebook" />
                        <span className="screen-reader-text">Facebook</span>
                      </a>
                    </li>
                  </ul>
                  {/* Components */}
                </div>
                {/* .tie-alignright /*/}
              </div>
              {/* .topbar-wrapper /*/}
            </div>
            {/* .container /*/}
          </nav>
    </div>

)

};