import React from 'react';
import ReactDOM from 'react-dom';
import faker from "faker";
import CommentDetail from "./CommentDetail"; //renders file

const App = () => {
    return (
      <div className={"ui container comments"}>
         {/* to show component in another component use jsx tag*/}
         <CommentDetail
             author={"Sam"}
             timeAgo={"Today at 4:45PM"}
             comment={"This is a comment"}
             avatar={faker.image.image()}
         />
         <CommentDetail
             author={"Alex"}
             timeAgo={"Today at 2:00"}
             comment={"Hey nice"}
             avatar={faker.image.image()}
         />
         <CommentDetail
             author={"Jane"}
             timeAgo={"Yesterday at 5:00PM"}
             comment={"bad"}
             avatar={faker.image.image()}
         />
      </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

//https://semantic-ui.com/views/comment.html : google semantic ui cdn