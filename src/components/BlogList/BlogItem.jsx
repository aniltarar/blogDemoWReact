import React, { useState } from "react";
import "./BlogItem.css";
import Button from "../UI/Button";
import EditBlogModal from "./EditBlogModal";

const BlogItem = ({
  id,
  authorName,
  authorImage,
  blogTitle,
  blogContent,
  blogCategory,
  blogDate,
  updateBlog,
  deleteBlog, // deleteBlog işlevini burada alıyoruz
}) => {
  const [show, setShow] = useState(false);

  const [editData, setEditData] = useState({
    id,
    authorName,
    authorImage,
    blogTitle,
    blogContent,
    blogCategory,
    blogDate,
  });

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    updateBlog(editData);
    setShow(false);
  };

  const handleDelete = () => {
    deleteBlog(id);
  };

  return (
    <>
      <div className="blogItemCard">
        <div className="blogCardHeader">
          <img
            className="authorImage"
            src={authorImage}
            alt={`${authorImage}'s image.`}
          />
          <h3>{authorName.slice(0, 20)}</h3>
        </div>

        <div className="blogCardContent">
          <h4>{blogTitle}</h4>
          <p>{blogContent}</p>
        </div>
        <div className="blogCardFooter">
          <div className="leftFooter">
            <span>Post Paylaşım Tarihi : {blogDate}</span>
            <span>Post Kategorisi : {blogCategory}</span>
          </div>
          <div className="rightFooter">
            <Button
              btnSize={"md"}
              btnColor={"warning"}
              onClick={() => setShow(true)}
            >
              Düzenle
            </Button>
            <Button btnSize={"md"} btnColor={"danger"} onClick={handleDelete}>
              Sil
            </Button>
          </div>
        </div>
      </div>

      {show && (
        <EditBlogModal
          editData={editData}
          handleEditChange={handleEditChange}
          handleUpdate={handleUpdate}
          onClose={() => setShow(false)}
        />
      )}
    </>
  );
};

export default BlogItem;
