import React, { useState } from "react";
import Wrapper from "../UI/Wrapper";
import "./AddNewBlog.css";
const AddNewBlog = ({ blogs, setBlogs }) => {
  let today = new Date();
  today = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`;
  const [blogData, setBlogData] = useState({
    id: blogs.length + 1,
    authorName: "",
    authorImage: "",
    blogTitle: "",
    blogContent: "",
    blogCategory: "",
    blogDate: today,
  });

  const inputChangeHandler = (e) => {
    setBlogData({ ...blogData, [event.target.name]: event.target.value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const newPost = {
      id: blogData.id,
      authorName: blogData.authorName,
      authorImage: blogData.authorImage,
      blogTitle: blogData.blogTitle,
      blogContent: blogData.blogContent,
      blogCategory: blogData.blogCategory,
      blogDate: blogData.blogDate,
    };

    setBlogData({
      id: blogData.length + 1,
      authorName: "",
      authorImage: "",
      blogTitle: "",
      blogContent: "",
      blogCategory: "",
      blogDate: today,
    });

    setBlogs((prevState) => [...prevState, newPost]);
  };

  return (
    <>
      <Wrapper>
        <div className="addNewBlogHeader">
          <h1>Yeni Blog Yazısı Ekle</h1>
          <hr />
        </div>
        <div className="addNewBlogBody">
          <form className="form" onSubmit={formSubmitHandler}>
            <div className="inputArea">
              <label htmlFor="authorNameInput">Yazar Adı</label>
              <input
                required
                onChange={inputChangeHandler}
                type="text"
                id="authorName"
                placeholder="Yazar Adı Giriniz."
                name="authorName"
                value={blogData.authorName}
              />
            </div>
            <div className="inputArea">
              <label htmlFor="authorImage">Yazar Görseli</label>
              <input
                required
                onChange={inputChangeHandler}
                type="text"
                id="authorImage"
                placeholder="Yazar Görseli Linki Giriniz."
                name="authorImage"
                value={blogData.authorImage}
              />
            </div>
            <div className="inputArea">
              <label htmlFor="blogTitle">Blog Başlığı</label>
              <input
                required
                onChange={inputChangeHandler}
                type="text"
                id="blogTitle"
                placeholder="Blog Başlığı Giriniz."
                name="blogTitle"
                value={blogData.blogTitle}
              />
            </div>
            <div className="inputArea">
              <label htmlFor="blogContent">Blog Yazısı</label>
              <textarea
                required
                onChange={inputChangeHandler}
                placeholder="Paylaşmak istediğiniz şeyi yazınız."
                id="blogContent"
                name="blogContent"
                value={blogData.blogContent}
              ></textarea>
            </div>
            <div className="inputArea">
              <label htmlFor="blogCategory">Blog Kategorisi</label>
              <input
                required
                onChange={inputChangeHandler}
                type="text"
                id="blogCategory"
                placeholder="Blog Kategorisini Giriniz."
                name="blogCategory"
                value={blogData.blogCategory}
              />
            </div>

            <button>Ekle</button>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default AddNewBlog;
