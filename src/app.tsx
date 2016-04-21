import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BioComponent } from "./bio.component";
import { PhotoComponent } from "./photo.component";

import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'


class App extends Component<any,any> {
    active = "active";

      render() {
        return (
            <div>
                <div className="ui poiting menu">
                  <Link to="/" className="item" activeClassName={this.active}><i className="ui home icon"/> Home </Link>
                  <Link to="/bio" className="item" activeClassName={this.active}> Bio </Link>
                  <Link to="/photo" className="item" activeClassName={this.active}> Photos </Link>
                  <div className="right menu">
                    <div className="item">
                      <div className="ui transparent icon input">
                        <input type="text" placeholder="Search users..."/> <i className="search link icon"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ui bottom attached segment">
                    {this.props.children}
                </div>
            </div>
        );
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BioComponent}/>
      <Route path="/bio" component={BioComponent}/>
      <Route path="/photo" component={PhotoComponent}/>
    </Route>
  </Router>
), document.getElementById('react'))
