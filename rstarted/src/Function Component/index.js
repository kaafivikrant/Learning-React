import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail.js';
import ApproveCard from '../src/ApproveCard';

const App = () => {
  return (
    <div className="ui container comments">
    <ApproveCard>
        <CommentDetail author="Vikrant" timeAgo = "Today at 4:45am"/>
    </ApproveCard>
    
    <ApproveCard>
        <CommentDetail author="KTM Dude" timeAgo = "Today at 8:45am"/>
    </ApproveCard>

    <ApproveCard>
        <CommentDetail author="Sanya" timeAgo = "Today at 5:45am"/>    
    </ApproveCard>
    
    <ApproveCard>
        <CommentDetail author="Nitin" timeAgo = "Today at 9:45am"/>
    </ApproveCard>
    
    <ApproveCard>
        <CommentDetail author="Random Chick" timeAgo = "Today at 4:45am"/>
    </ApproveCard>
      
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
