import React from "react";
import "./BlogItem.css";
const BlogItem = ({id,authorName,authorImage,blogTitle,blogContent,blogCategory,blogDate}) => {
  return (
    <>
      <div className="blogItemCard">
        <div className="blogCardHeader">
          <img className="authorImage" src={authorImage} alt={ `${authorImage}'s image.`} />
          <h3>{authorName.slice(0,20)}</h3>
        </div>
        
        <div className="blogCardContent">
            <h4>{blogTitle}</h4>
          <p>
            {blogContent}
          </p>
        </div>
        <div className="blogCardFooter">
          <div className="leftFooter">
            <span>Post Paylaşım Tarihi : {blogDate}</span>
            <span>Post Kategorisi : {blogCategory}</span>
          </div>
          <div className="rigthFooter">
            <button>Düzenle</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
