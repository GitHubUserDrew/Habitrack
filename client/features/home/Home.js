import React from 'react';
import { useSelector } from 'react-redux';

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <div> 
        <div>
           <h3>Welcome, {username}! How are you today?</h3>
        </div>
        <br></br>
        <div> </div>
        <div> 
          <h4>Most recent Task: </h4>
          </div>
        <div>
          <h4>Most recent Note: </h4>
          </div>
        <div>
          <h4>Most recent Event: </h4>
          </div>
      </div>
    </div>
  );
};

export default Home;
