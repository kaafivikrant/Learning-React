import React from 'react';
import {Button, Card} from 'semantic-ui-react';

const ApproveCard = (props) =>{
    console.log(props);
    return(
    <Card>
        <div>{props.children}</div>
        <Card.Content extra>
            <div className='ui two buttons'>
            <Button basic color='green'>
                Approve
            </Button>
            <Button basic color='red'>
                Decline
            </Button>
            </div>
        </Card.Content>
    </Card>
    );
}

export default ApproveCard ;