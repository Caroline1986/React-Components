import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail"; //renders file

const App = () => {
    return (
      <div className={"ui container comments"}>
         {/* to show component in another component use jsx tag*/}
         <CommentDetail />
          <CommentDetail />
          <CommentDetail />
      </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

//https://semantic-ui.com/views/comment.html : google semantic ui cdn