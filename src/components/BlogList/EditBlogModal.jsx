import React from "react";
import "./EditBlogModal.css";
import Button from "../UI/Button";

const EditBlogModal = ({ editData, handleEditChange, handleUpdate, onClose }) => {
  return (
    <div className="modal">
      <div className="modalContent">
        <h2>Blog Gönderisini Düzenle</h2>
        <form>
          <div className="inputArea">
            <label htmlFor="authorName">Yazar Adı</label>
            <input
              type="text"
              id="authorName"
              name="authorName"
              value={editData.authorName}
              onChange={handleEditChange}
            />
          </div>
          <div className="inputArea">
            <label htmlFor="authorImage">Yazar Görseli</label>
            <input
              type="text"
              id="authorImage"
              name="authorImage"
              value={editData.authorImage}
              onChange={handleEditChange}
            />
          </div>
          <div className="inputArea">
            <label htmlFor="blogTitle">Blog Başlığı</label>
            <input
              type="text"
              id="blogTitle"
              name="blogTitle"
              value={editData.blogTitle}
              onChange={handleEditChange}
            />
          </div>
          <div className="inputArea">
            <label htmlFor="blogContent">Blog Yazısı</label>
            <textarea
              id="blogContent"
              name="blogContent"
              value={editData.blogContent}
              onChange={handleEditChange}
            ></textarea>
          </div>
          <div className="inputArea">
            <label htmlFor="blogCategory">Blog Kategorisi</label>
            <input
              type="text"
              id="blogCategory"
              name="blogCategory"
              value={editData.blogCategory}
              onChange={handleEditChange}
            />
          </div>
          <Button btnColor={"success"} btnSize={"md"} onClick={handleUpdate}>
            Güncelle
          </Button>
          <Button btnColor={"danger"} btnSize={"md"} onClick={onClose}>
            İptal
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditBlogModal;
