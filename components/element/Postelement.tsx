import React from "react";
import {PostQueryQuery } from "../../generated/index";
import moment from 'moment'
import Image from "next/image";
import Link from "next/link";



type PostelementProps = {
  data: PostQueryQuery | undefined;
  }

 export const Postelement: React.FC<PostelementProps> = (props) => {
   
 const {data} = props;

    return (
          
      <>
       {data?.posts?.nodes?.slice(0, 1).map((post) => {
    
        return (
          <li  
            className="post-item tie-video fade-in-image"
            key={post?.slug}
          >
            <div
              className="big-thumb-left-box-inner"
              style={{
                backgroundImage: `url(${post?.featuredImage?.node?.sourceUrl})`,
              }}
            >
              <a
                // aria-label={post?.title}
                href={`/posts/${post?.slug}`}
                className="post-thumb"
              />
              <div className="post-overlay">
                <div className="post-content">
                  <a className="post-cat tie-cat-21" href="#">
                    {post?.categories?.nodes?.map(id=>id?.name)}
              
                  </a>
                  <h2 className="post-title">
                    <a href={`/posts/${post?.slug}`}>{post?.title}</a>
                  </h2>
                  <div className="thumb-meta">
                    <div className="post-meta clearfix">
                      <span className="author-meta single-author no-avatars">
                        <span className="meta-item meta-author-wrapper meta-author-1">
                          <span className="meta-author">
                            <a
                              href=""
                              className="author-name tie-icon"
                              title="webmaster"
                            >
                              {post?.author?.node?.name}
                            </a>
                          </span>
                        </span>
                      </span>
                      <span className="date meta-item tie-icon">
                        {moment(post?.date).format("DD MMMM YYYY")}
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
                          3&nbsp;211{" "}
                        </span>
                      </div>
                    </div>
                    {/* .post-meta */}
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
            })}
     </>
          )
    
  };