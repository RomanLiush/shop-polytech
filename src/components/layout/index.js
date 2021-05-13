import React from 'react';
import Sidebar from '../sidebar';

// import { Switch, Route } from 'react-router';

// import Auto from '../../components/autos';
// import Inputt from '../inputttt';
//
// const routes = (
//   <Switch>
//     <Route path={'/'} component={Auto} exact/>
//     <Route path={'/inp'} component={Inputt} />
//   </Switch>
// )

const Layout = ({children}) => (
  <div className={'view-container'}>
    <div className={'container'}>
      <div className={'row'}>
        <div className={'col-md-3'}>
          <Sidebar />
        </div>
        <div className={'col-md-9'}>
          {children}
        </div>
      </div>
    </div>
  </div>
)

export default Layout;
