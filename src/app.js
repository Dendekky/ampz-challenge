import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main/Main';
import MobileOne from './mobile/mobileOne'
import MobileTwo from './mobile/mobileTwo';
import DesktopTwo from './Main/desktopTwo';

export default class App extends React.Component {
     render() {
       const App = () => (
         <div>
           <Switch>
             <Route exact path='/' component={Main}/>
             <Route path='/desktop2' component={DesktopTwo} />
             <Route path='/mobile1' component={MobileOne}/>
             <Route path='/mobile2' component={MobileTwo}/>
           </Switch>
         </div>
       )
       return (
         <Switch>
           <App/>
         </Switch>
       );
     }
   }
   