import React from "react";
import "./BlogItem.css";
const BlogItem = () => {
  return (
    <>
      <div className="blogItemCard">
        <div className="blogCardHeader">
          <img src="https://picsum.photos/id/214/100/100" alt="Author Image" />
          <h3>Author Name</h3>
        </div>
        
        <div className="blogCardContent">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            neque qui sequi sint explicabo fugiat tempore labore natus
            voluptate?
          </p>
        </div>
        <div className="blogCardFooter">
          <div className="leftFooter">
            <span>Blog Date</span>
            <span>Blog Category</span>
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
