import React from "react";
import {PostQueryQuery } from "../../generated/index";
import moment from 'moment'
import { useTrail, animated } from "react-spring";
import Loader from "react-loader-spinner";
import Image from "next/image";



type MinipostProps = {
  data: PostQueryQuery | undefined;
  index: number;
  item: number;
 

  }

 export const Minipost: React.FC<MinipostProps> = (props) => {
   
 const {data, index, item} = props;
 
    return (
          <>
       <li
            key={data?.posts?.nodes?.[index]?.slug}  
            className="post-item tie-slider"
          >
            
            <animated.div
               style={ item }      
              >
               <div
                className="post-thumb" >
    
            
    
              {data?.posts?.nodes?.[index]?.featuredImage?.node?.sourceUrl && (
                <a href={`/posts/${data?.posts?.nodes?.[index]?.slug}`}>
                <Image
                  src={data?.posts?.nodes?.[index]?.featuredImage?.node?.sourceUrl || ""}
                  className="attachment-jannah-image-small size-jannah-image-small tie-small-image wp-post-image"                       
                  alt="post2"
                  width={110}
                  height={75}
                  
                />
                </a>
              )}
               </div>
               <div className="post-details">
              <div className="post-meta clearfix">
                <span className="date meta-item tie-icon">
                  {moment(data?.posts?.nodes?.[index]?.date).format("DD MMMM YYYY")}
                </span>
              </div>
              {/* .post-meta **/}
              <h2 className="post-title">
                <a href={`/posts/${data?.posts?.nodes?.[index]?.slug}`}>< span dangerouslySetInnerHTML={{__html: data?.posts?.nodes?.[index]?.title || "" }}/></a>
    
              </h2>
               </div>
            {/* .post-details /**/}
            </animated.div>
          
          </li>
      </>
          )
    
  };