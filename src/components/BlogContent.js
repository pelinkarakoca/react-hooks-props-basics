import React from "react";

function BlogContent(props) {
  console.log(props);
    if (!props.isPublished) {
      return null;
    }
    else {
      return (<div id="blog-content">
      <h3>{props.articleText}</h3>
      <p>{props.minutesToRead} minutes to read</p>
     </div>
     )
    }
}

export default BlogContent;
