import React from 'react';
import {SearchOutlined, WavesOutlined, Texture, ControlPoint, NotificationsOutlined,  EventNoteOutlined, PieChartOutlined, ForumOutlined, PeopleOutlineOutlined, HomeOutlined, WorkOutline, ShoppingCartOutlined, AccountCircleOutlined, LocalShippingOutlined, ArrowDropDownOutlined} from '@material-ui/icons';

function MobileTwo() {
  return (
    <div className="mobile-main-div">
        <div className="mobile-child-div">
      <div className="mobile-div-1">
          <div className="header">
             <HomeOutlined className="icon-1"/>
             <WavesOutlined className="icon-2"/>
             <NotificationsOutlined  className="icon-3"/>
          </div>
          <div className="mobile-div-1-2">  
              <span className="first-child">20 159.52   </span>
              <span className="second-child">  USD </span>
              <ArrowDropDownOutlined className="third-child"/>
          </div>
          <div className="mobile-div-1-3">
              <span>Balance  </span>
              <span>+ 1284.33</span>
          </div>
          <div className="mobile-div-1-4">
              <div className="first-son">
                  <p>BTC</p>
                  <p>40%</p>
                  <p>+ 5%</p>
              </div>
              <div className="second-son">
                  <p>BTC</p>
                  <p>67%</p>
                  <p>+ 3%</p>
              </div>
              <div className="third-son">
              <ControlPoint/>
              <span>Add Funds</span>
              </div>
              <div className="fourth-son">
              <select>
                  <option selected >Dynamic</option>
              </select>
              </div>
             
              </div>
              
          </div>
      </div>
      </div>
  );
}

export default MobileTwo;