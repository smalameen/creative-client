import React from 'react';
import { Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Reviews = ({data}) => {
 


  // const {loggInUser, setLoggedInUser} = props;

  const historyService = useHistory();

  const handleServiceButton = () => {
    const url = `/service`;
    historyService.push(url);
  };

  const historyOrder = useHistory();

  const handleOrderButton = () => {
    
    const url = `/customer`;
    historyOrder.push(url);
  };


    return (
      <div>

      <h1>Hi</h1>
    </div>
    );
};

export default Reviews;