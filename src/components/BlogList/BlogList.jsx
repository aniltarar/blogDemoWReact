import React from "react";
import { blogData } from "../../blogData";
import BlogItem from "./BlogItem";
import "./BlogList.css";
const BlogList = () => {
  return (
    <>
      <div className="listWrapper">
        <div className="listHeader">
          <h1 style={{ textAlign: "center" }}>All Posts</h1>
          <hr />
        </div>
        <div className="blogGrid">
          <BlogItem />
        </div>
      </div>
    </>
  );
};

export default BlogList;
