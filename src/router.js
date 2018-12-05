import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom'

import App from './App'
import Admin from './admin'
import Login from './pages/login'
import Buttons from './pages/ui/buttons'
import FormLogin from './pages/form/login'
import NoMatch from './pages/noMatch'
import BasicTable from './pages/table/basicTable'

export default class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login} />
          <Route path="/admin" render={() => 
            <Admin>
              <Route path="/admin/ui/buttons" component={Buttons}/>
              <Route path="/admin/form/login" component={FormLogin}/>
              <Route path="/admin/table/basic" component={BasicTable}/>
              <Route component={NoMatch}/>
            </Admin>
          } />
          <Route path="/order" component={Admin}></Route>
        </App>
      </HashRouter>
    )
  }
}