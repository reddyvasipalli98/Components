import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            
            <ApprovalCard>
                <CommentDetail author="Karthikeya" time="Today at 5:00 PM" imageUrl = {Faker.image.avatar()} comText="amazing!"/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));