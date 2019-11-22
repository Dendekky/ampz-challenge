import React from 'react';
import './desktopTwo.scss';
import {SearchOutlined, Texture, ControlPoint, NotificationsOutlined,  EventNoteOutlined, PieChartOutlined, ForumOutlined, PeopleOutlineOutlined, HomeOutlined, WorkOutline, ShoppingCartOutlined, AccountCircleOutlined, LocalShippingOutlined } from '@material-ui/icons';

function DesktopTwo() {
  return (
    <div className="main-div">
      <div className="father-div">
      <div className="child-div">
        <div className="top-icons">
          <ControlPoint className="top-icon" />
          <NotificationsOutlined className="top-icon"/>
          <Texture className="top-icon" />
        </div>
        <div className="header-div">
          <PieChartOutlined/>
          <h1>craigslist</h1>
        </div>
        <div>
          <input placeholder="Search in New Delhi"></input>
          <SearchOutlined className="search"/>
        </div>
        
        <hr/>
        <div className="icon-div">
                <div className="icon">
                  <HomeOutlined/>
                  <br/>
                  <p >Housing</p>
                </div>
                <div class="icon">
                  <WorkOutline/>
                  <br/>
                  <p >Jobs</p>
                </div>
                <div class="icon">
                  <ShoppingCartOutlined/>
                  <br/>
                  <p >For Sale</p>
                </div>
                <div class="icon">
                  <AccountCircleOutlined/>
                  <br/>
                  <p >Persons</p>
                </div>
                <div class="icon">
                  <LocalShippingOutlined/>
                  <br/>
                  <p >Services</p>
                </div>
                <div class="icon">
                  <PeopleOutlineOutlined/>
                  <br/>
                  <p >Community</p>
                </div>
                <div class="icon">
                  <ForumOutlined/>
                  <br/>
                  <p >Forums</p>
                </div>
                <div class="icon">
                  <EventNoteOutlined/>
                  <br/>
                  <p >Event Calendar</p>
                </div>
              </div>
              <div className="footer">
                <span>&copy;craiglist</span>
                <span>Terms</span>
                <span>Privacy</span>
              </div>
      </div>
      </div>
      
    </div>
  );
}

export default DesktopTwo;