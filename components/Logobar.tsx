export const Logobar = () => {

return(
   <>
    <div className="container header-container">
        <div className="tie-row logo-row">
          <div className="logo-wrapper">
            <div className="tie-col-md-4 logo-container clearfix">
              {/* bk-icon-menu-mobile */}
              <div
                id="mobile-header-components-area_1"
                className="mobile-header-components"
              >
                <ul className="components">
                  <li className="mobile-component_menu custom-menu-link">
                    <a href="#" id="mobile-menu-icon" className="">
                      <span className="tie-mobile-menu-icon nav-icon is-layout-1" />
                      <span className="screen-reader-text">Menu</span>
                    </a>
                  </li>
                </ul>
              </div>



              {/* bk-logo */}
              <div id="logo" className="image-logo">
                <a title="Jannah" href="#">
                  <picture className="tie-logo-default tie-logo-picture">
                    <source
                      className="tie-logo-source-default tie-logo-source"
                      srcSet="/images/logo.png"
                    />
                    <img
                      className="tie-logo-img-default tie-logo-img"
                      src="/images/logo.png"
                      alt="Jannah"
                      width={299}
                      height={49}
                      style={{
                        maxHeight: "49px !important",
                        width: "auto",
                      }}
                    />
                  </picture>
                  <h1 className="h1-off">Jannah</h1>
                </a>
              </div>
              {/* bk-logo /*/}




              {/* bk-div-recherche-mobile */}
              <div
                id="mobile-header-components-area_2"
                className="mobile-header-components"
              >
                <ul className="components">
                  <li className="mobile-component_search custom-menu-link">
                    <a href="#" className="tie-search-trigger-mobile">
                      <span
                        className="tie-icon-search tie-search-icon"
                        aria-hidden="true"
                      />
                      <span className="screen-reader-text">Rechercher</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* .tie-col /*/}
          </div>
          {/* .logo-wrapper /*/}




          {/* bk-div-affiche-publicitaire */}
          <div className="tie-col-md-8 stream-item stream-item-top-wrapper">
            <div className="stream-item-top">
              <a
                href="#"
                title="Buy Jannah Theme"
                target="_blank"
                rel="nofollow noopener"
              >
                <img
                  src="/images/1.jpg"
                  alt="Buy Jannah Theme"
                  width={728}
                  height={91}
                />
              </a>
            </div>
          </div>
           {/* end.bk-div-affiche-publicitaire */}



           
          {/* .tie-col /*/}
        </div>
        {/* .tie-row /*/}
      </div>
   </>
)
        };