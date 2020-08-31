import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route, withRouter, RouteComponentProps } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

const App: React.FC<RouteComponentProps> = ({ location }) => {
    return (
        <>
            <Route path='/' component={HomePage} exact />
            <Route
                path={'/(.+)'}
                render={() => (
                    <>
                        <NavBar />
                        <Container style={{ marginTop: '7em' }}>
                            <Route path='/activities' component={ActivityDashboard} exact />
                            <Route path='/activities/:id' component={ActivityDetails} exact />
                            <Route
                                key={location.key}
                                path={['/createActivity', '/manage/:id']}
                                component={ActivityForm}
                                exact
                            />
                        </Container>
                    </>
                )}
            />
        </>
    );
};

export default withRouter(observer(App));
