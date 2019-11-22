import React, { Component } from 'react'
import { ListItem, List, Collapse } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const menuItems =[ 
  {
  "name": "Cars & Trucks",
  "children": [
    {
      "name": "All",
      "url": "/"
    },
    {
      "name": "Owner",
      "url": "/"
    },
    {
      "name": "Dealer",
      "url": "/"
    }
  ]
  },
  {
    "name": "Model Year",
    "children":  [
      {
        "name": "2019",
        "url": "/"
      },
      {
        "name": "2018",
        "url": "/"
      },
      {
        "name": "2017",
        "url": "/"
      }
   ]
  },
  {
    "name": "Condition",
    "children":  [
      {
        "name": "New",
        "url": "/"
      },
      {
        "name": "Refurbished",
        "url": "/"
      },
      {
        "name": "Fairly Used",
        "url": "/"
      }
    ]
    },
]

const styles = {
  list: {
    // width: 250,
  },
  links: {
    textDecoration:'none',
  },
};
class SidebarNav extends Component {
  constructor( props ) {
    super( props )
    this.state = {}
  }
// this method sets the current state of a menu item i.e whether it is in expanded or collapsed or a collapsed state
handleClick( item ) {
    this.setState( prevState => ( 
      { [ item ]: !prevState[ item ] } 
    ) )
  }
// if the menu item doesn't have any child, this method simply returns a clickable menu item that redirects to any location and if there is no child this method uses recursion to go until the last level of children and then returns the item by the first condition.
handler( children ) {
    const { classes } = this.props
    const { state } = this
return children.map( ( subOption ) => {
      if ( !subOption.children ) {
        return (
          <div key={ subOption.name }>
            <ListItem 
              button 
              key={ subOption.name }>
              <Link 
                to={ subOption.url }
                className={ classes.links }>
                <ListItemText 
                  inset 
                  primary={ subOption.name } 
                />
              </Link>
            </ListItem>
          </div>
        )
      }
      return (
        <div key={ subOption.name }>
          <ListItem 
            button 
            onClick={ () => this.handleClick( subOption.name ) }>
            <ListItemText 
              inset 
              primary={ subOption.name } />
            { state[ subOption.name ] ? 
              <ExpandLess /> :
              <ExpandMore />
            }
          </ListItem>
          <Collapse 
            in={ state[ subOption.name ] } 
            timeout="auto" 
            unmountOnExit
          >
            { this.handler( subOption.children ) }
          </Collapse>
        </div>
      )
    } )
  }
render() {
    const { classes, drawerOpen, menuOptions } = this.props
    return (
      <div className={classes.list}>
          <div>
            <List>
            { this.handler( menuItems ) }
            </List>
          </div>
      </div>
    )
  }
}

// SidebarNav.propTypes = {
//   className: PropTypes.string,
//   pages: PropTypes.array.isRequired
// };

export default withStyles(styles)(SidebarNav)
