import React from 'react';
import './mobileOne.scss';
import { IconButton } from '@material-ui/core';
import { SearchOutlined, Texture, ControlPoint, NotificationsOutlined,  EventNoteOutlined, PieChartOutlined, ForumOutlined, PeopleOutlineOutlined, HomeOutlined, WorkOutline, ShoppingCartOutlined, AccountCircleOutlined, LocalShippingOutlined } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Chart } from 'react-charts';

function MobileOne() {

    const data = React.useMemo(
        () => [
          {
            label: 'Series 1',
            data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
          },
          {
            label: 'Series 2',
            data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
          }
        ],
        []
      )
     
      const axes = React.useMemo(
        () => [
          { primary: true, type: 'linear', position: 'bottom' },
          { type: 'linear', position: 'left' }
        ],
        []
      )
    
  return (
    <div className="mobile-one-div">
        <div className="top-icons">
          <IconButton >
            <MenuIcon />
          </IconButton>
          <div className= "right-icons">
          <IconButton >
              <NotificationsIcon />
          </IconButton>
          <IconButton >
            <InputIcon />
          </IconButton>
          </div>
        </div>
              <div className="bit-display">
                <img
                className="bit-icon"
                alt="biticon"
                src={process.env.PUBLIC_URL + '/bitcoin.png'}
              />
              <div>
                  <h4>BTC</h4>
                  <p>Bitcoin</p>
                  <div>
                  <span>4  154.10</span>
                  <span>USD</span>
                  </div>
                  <ArrowDownwardIcon  />
                  <span>  -1342%</span>
              </div>
              </div>
              <div className="chart-title">
                  <span>Daily</span>
                  <span>Weekly</span>
                  <span>Monthly</span>
                  <span>Yearly</span>
            </div>
            <div
            style={{
                width: '350px',
                height: '150px',
                paddingLeft: '4px',
            }}
            >
            <Chart data={data} axes={axes} />
            </div>
            <div>
                <h4 className="market">Market Top</h4>
                <div className="bit-cards">
                    <div>
                        <h4>BTC</h4>
                    </div>
                    <div>
                        <h4>LTC</h4>
                    </div>
                    <div>
                        <h4>UTC</h4>
                    </div>
                </div>
            </div>
      </div>
  );
}

export default MobileOne;