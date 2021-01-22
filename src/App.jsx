import React ,{Component,Suspense} from 'react'
import Navbar from './layout/header/navbar'
import Slider from './layout/header/slider'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
    
  } from "react-router-dom";    

import AllTask from './components/task/index'
import Task from './components/task/task'
import Etax from './components/task/e-tax'
import Dd from './components/task/dd'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: false
        }
    }

    finalToggler = (t) => {
        this.setState({
            toggle: t
        })
    }

    render() {
        let {match}=this.props
    
        return (
            <>
                <Slider finalToggler={this.state.toggle} />
                <div className={`main-panel ${this.state.toggle === true && 'main-panel-slide'}`} >
                    <Navbar finalToggler={this.finalToggler} />
                    <Suspense fallback={"loader"}>
                    <Router basename={process.env.REACT_APP_BASE_URL}>
                     <Switch>
                     
                                <Route exact
                                    path={`/dashboard`}
                                    render={props => (
                                        <Task
                                            {...props}
                                        />
                                    )}
                                />

                                <Route exact
                                    path={`/e-tax`}
                                    render={props => (
                                        <Etax
                                            {...props}
                                        />
                                    )}
                                />
                                <Route
                                    path={`/e-tax/jaivin`}
                                    render={props => (
                                        <Dd
                                            {...props}
                                        />
                                    )}
                                />
                                <Redirect from={`/`} to="/dashboard"/>
                                
                    </Switch>
                    </Router>
                    </Suspense>
                </div>
            </>

        )
    }
}

export default App




