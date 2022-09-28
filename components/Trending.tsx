import React from "react";
import {
  usePostQueryQuery,
  useGetAllCategoriesQuery,
} from "../generated/index";
import { useState } from "react";
import { Navcategories } from "./element/Navcategories";
import { Postelement } from "./element/Postelement";
import { useTrail, animated , useSpring} from "react-spring";
import Loader from "react-loader-spinner";
import Image from "next/image";
import { Minipost } from "./element/Minipost";


export const Trending = () => {
  const { data: categoriesData } = useGetAllCategoriesQuery({});

  const [filters, setFilters] = useState<{
    selectedCategorie: number | undefined | null;
    after: string | undefined | null;
    before: string | undefined | null;
    first: number | undefined | null;
    last: number | undefined | null;
  }>({
    selectedCategorie: undefined,
    after: undefined,
    before: undefined,
    first: 6,
    last: undefined,
  });

  const handleUpdateFilters = (
    value: string | number | undefined | null,
    key: keyof typeof filters
  ) => {
    setFilters((prevState) => ({ ...prevState, [key]: value }));
  };

  const { data, error, loading } = usePostQueryQuery({
    variables: {
      last: filters.last,
      first: filters.first,
      before: filters.before,
      after: filters.after,
      categoryId: filters.selectedCategorie,
    },
    onCompleted: (data) => {
      // setHasPreviousPage(data?.posts?.pageInfo?.hasPreviousPage)
      // setHasNextPage(data?.posts?.pageInfo?.hasNextPage)
      // console.log("hasPrevPage", data?.posts?.pageInfo?.hasPreviousPage)
      // console.log("hasNextPage", data?.posts?.pageInfo?.hasNextPage)
    },
  });
  const config = { tension: 280, friction: 50 };
  const trail = useTrail(data?.posts?.nodes ? data.posts.nodes.length : 0, {
    config,
    opacity: 1,
    width: 200,
    from: { opacity: 0, width: 55 },
  });
  
  

  return (
    
       <div
        id="tie-block_3151"
        className="mag-box big-post-left-box big-thumb-left-box first-post-gradient has-custom-color"
        data-current={1}
      >
        <div className="container-wrapper">
          <Navcategories
            data={data}
            categoriesData={categoriesData}
            handleUpdateFilters={handleUpdateFilters}
            filters={filters}
          />
          {/* .mag-box-title /*/}

          <div className="mag-box-container clearfix">
            {loading ? (
  
 <div style={{height: "470px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                Loading...
                </div>
   
             
            ) : (
              <ul className="posts-items posts-list-container container ">
                <Postelement data={data} />

                {trail.slice(1, 6).map((item, index) => {
                  return <Minipost data={data} index={index} item={item} />;
                })}
              </ul>
            )}

            {/* .mag-box-container /*/}
          </div>
          {/* .container-wrapper /*/}
        </div>
      </div>
  
 
     );
 
};
