import React, { useState } from "react";
import { blogData } from "../../blogData";
import BlogItem from "./BlogItem";
import "./BlogList.css";
import AddNewBlog from "./AddNewBlog";

const BlogList = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("authorSort");
  const [blogs, setBlogs] = useState(blogData);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = (e) => {
    setSelected(e.target.value);
  };

  const sortBlogs = (blogs) => {
    switch (selected) {
      case "authorSort":
        return blogs.sort((a, b) => a.authorName.localeCompare(b.authorName));
      case "titleSort":
        return blogs.sort((a, b) => a.blogTitle.localeCompare(b.blogTitle));
      case "newest":
        return blogs.sort(
          (a, b) => new Date(a.blogDate) - new Date(b.blogDate)
        );
      case "oldest":
        return blogs.sort(
          (a, b) => new Date(b.blogDate) - new Date(a.blogDate)
        );
      default:
        return blogs;
    }
  };

  const updateBlog = (updatedBlog) => {
    setBlogs(
      blogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <>
      <AddNewBlog blogs={blogs} setBlogs={setBlogs} />
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
          <div className="sortSelect">
            <label htmlFor="sort">Sıralama Yöntemi Seçiniz</label>
            <select name="sort" id="sort" onChange={handleSort}>
              <option value="authorSort">A'dan Z'ye (Yazar)</option>
              <option value="titleSort">A'dan Z'ye (Başlık)</option>
              <option value="newest">Eskiden Yeniye</option>
              <option value="oldest">Yeniden Eskiye</option>
            </select>
          </div>
        </div>
        <div className="blogGrid">
          {sortBlogs(
            blogs.filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.authorName.toLowerCase().includes(search) ||
                    item.blogTitle.toLowerCase().includes(search);
            })
          ).map((item) => {
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
                updateBlog={updateBlog}
                deleteBlog={deleteBlog} // deleteBlog işlevini burada iletin
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogList;
