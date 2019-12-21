import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg" />
      {props.message}
      <div>
  <span>Like: </span>{props.likesCount}
      </div>
    </div>
  );
};

export default Post;
