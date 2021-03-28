import React from 'react';
import Fakerator from 'fakerator'


const CommentDetail = (props) =>{
    const fakerator = Fakerator();
    return (
        <div className="comment">
            <a href="/" className="avatar"> <img alt="avatar" src='https://react.semantic-ui.com/images/avatar/small/matt.jpg'/></a>
            <div className="content">
                <a href="/" className="author">{props.author}</a>
                <div className="metadata">
                    <span className="date">{fakerator.date.month()} {props.timeAgo}</span>
                </div>
                <div className="text">{fakerator.entity.post().title}</div>
            </div>
       </div>
    );
}

export default CommentDetail;

