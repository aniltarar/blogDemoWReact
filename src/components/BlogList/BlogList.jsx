import React, { useState } from "react";
import { blogData } from "../../blogData";
import BlogItem from "./BlogItem";
import "./BlogList.css";
const BlogList = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="listWrapper">
        <div className="listHeader">
          <h1 style={{ textAlign: "center" }}>All Posts</h1>
          <hr />

          <input
            type="text"
            placeholder="Yazar veya Blog Başlığı aratın.."
            id="searchBox"
            onChange={handleSearch}
          />
        </div>
        <div className="blogGrid">
          {blogData
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.authorName.toLowerCase().includes(search) ||
                    item.blogTitle.toLowerCase().includes(search);
            })
            .map((item) => {
              return (
                <BlogItem
                  key={item.id}
                  id={item.id}
                  authorName={item.authorName}
                  authorImage={item.authorImage}
                  blogTitle={item.blogTitle}
                  blogContent={item.blogContent}
                  blogCategory={item.blogCategory}
                  blogDate={item.blogDate}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default BlogList;
