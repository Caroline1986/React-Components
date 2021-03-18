import React from 'react';
import ReactDOM from 'react-dom';
import faker from "faker";
import CommentDetail from "./CommentDetail"; //renders file
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className={"ui container comments"}>
           <ApprovalCard>
               <div>
                   <h4>Warning!</h4>
                   Are you sure you want to do this?
               </div>
           </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={"Sam"}
                    timeAgo={"Today at 4:45PM"}
                    comment={"This is a comment"}
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={"Alex"}
                    timeAgo={"Today at 2:00"}
                    comment={"Hey nice"}
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={"Jane"}
                    timeAgo={"Yesterday at 5:00PM"}
                    comment={"bad"}
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
        </div>
    );
};

// ReactDOM.render(<ImageApp/>, document.querySelector('#root'));

//https://semantic-ui.com/views/comment.html : google semantic ui cdn