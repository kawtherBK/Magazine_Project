import React from "react";
import { GetAllCategoriesQuery, PostQueryQuery } from "../../generated/index";

interface FilterType {
    selectedCategorie: number | undefined| null;
    after: string | undefined| null;
    before: string | undefined| null;
    first: number | undefined| null;
    last: number | undefined| null;
}

type NavCategoriesProps = {
  data: PostQueryQuery | undefined;
  filters: FilterType ;
  categoriesData: GetAllCategoriesQuery | undefined;
  handleUpdateFilters: (value: string | number | undefined | null, key: keyof FilterType) => void
}

 export const Navcategories: React.FC<NavCategoriesProps> = (props) => {
   
 const {data,categoriesData,filters, handleUpdateFilters} = props

    return (
          <div>
     <div className="mag-box-title the-global-title">
            <h3>Trending News </h3>
            <div className="tie-alignright">
              <div className="mag-box-options">
                <ul
                  className="mag-box-filter-links is-flex-tabs"
                  style={{ opacity: 1 }}
                >
                  <li>
                    <a
                      data-id={""}
                      className={
                        filters.selectedCategorie ? "active" : undefined
                      }
                      onClick={() => {
                        handleUpdateFilters(undefined, "selectedCategorie");
                      }}
                    >
                      Tout
                    </a>
                  </li>
                  {categoriesData?.categories?.nodes?.map((categ) => {
                    return (
                      <li key={categ?.categoryId}>
                        <a
                          data-id={categ?.categoryId}
                          className={
                            categ?.categoryId === filters.selectedCategorie
                              ? "active"
                              : undefined
                          }
                          onClick={() => {
                            handleUpdateFilters(
                              categ?.categoryId,
                              "selectedCategorie"
                            );
                          }}
                        >
                          {categ?.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <ul className="slider-arrow-nav">
                  <li>
                    <a
                      style={
                        data?.posts?.pageInfo?.hasPreviousPage !== true
                          ? {
                              pointerEvents: "none",
                              opacity: "0.3",
                            }
                          : {}
                      }
                      onClick={() => {
                        handleUpdateFilters(undefined, "after");
                        handleUpdateFilters(
                          data?.posts?.pageInfo?.startCursor,
                          "before"
                        );
                        handleUpdateFilters(6, "last");
                        handleUpdateFilters(undefined, "first");
                      }}
                      className="block-pagination prev-posts"
                    >
                      <span
                        className="tie-icon-angle-left"
                        aria-hidden="true"
                      ></span>
                      <span className="screen-reader-text">
                        Page précédente
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      style={
                        data?.posts?.pageInfo?.hasNextPage !== true
                          ? {
                              pointerEvents: "none",
                              opacity: "0.3",
                            }
                          : {}
                      }
                      onClick={() => {
                        handleUpdateFilters(
                          data?.posts?.pageInfo?.endCursor,
                          "after"
                        );
                        handleUpdateFilters(undefined, "before");
                        handleUpdateFilters(undefined, "last");
                        handleUpdateFilters(6, "first");
                      }}
                      className="block-pagination next-posts"
                    >
                      <span
                        className="tie-icon-angle-right"
                        aria-hidden="true"
                      />
                      <span className="screen-reader-text">Page suivante</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* .mag-box-options /*/}
            </div>
            {/* .tie-alignright /*/}
          </div>
          </div>
          
          )
    
  };