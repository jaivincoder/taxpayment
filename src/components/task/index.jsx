import React, { Component } from 'react'
import {
    Route,Redirect
} from "react-router-dom";
import Task from './task'
import Etax from './e-tax'
import Dd from './dd'
// const Task = React.lazy(() =>
//     import(/* webpackChunkName: "add-organization" */ './task')
// );
// const Etax = React.lazy(() =>
//     import(/* webpackChunkName: "add-organization" */ './e-tax')
// );
// const Dd = React.lazy(() =>
//     import(/* webpackChunkName: "add-organization" */ './dd')
// );

class AllTask extends Component {
    render() {
        let { match } = this.props
        console.log(match.url)
        return (
            <>
                <Route 
                    path={`${match.url}/dashboard`}
                    render={props => (
                        <Task
                            {...props}
                        />
                    )}
                />
                
                <Route exact
                    path={`${match.url}/e-tax`}
                    render={props => (
                        <Etax
                            {...props}
                        />
                    )}
                />
                  <Route
                    path={`${match.url}/e-tax/jaivin`}
                    render={props => (
                        <Dd
                            {...props}
                        />
                    )}
                />
            </>
        )
    }
}
export default AllTask