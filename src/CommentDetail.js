import React from "react";
import faker from "faker";

const CommentDetail = () => {
  return (
      <div className={"comment"}>
          <a href={"/"} className={"avatar"}>
              <img alt={"avatar"} src={faker.image.image()}/>
          </a>
          <div className={"content"}>
              <a href={"/"} className={"author"}>
                  Sam
              </a>
          </div>
          <div className={"metadata"}>
              <span className={"date"}>Today at 6:00PM</span>
          </div>
          <div className={"text"}>Nice Blog Post!</div>
      </div>
  );
};

export default CommentDetail; //makes available to outside files to render