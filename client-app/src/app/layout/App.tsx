import React, { useEffect, useContext } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './Loading';
import ActivityStore from '../stores/activityStore';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';

const App = () => {
    const activityStore = useContext(ActivityStore);

    useEffect(() => {
        activityStore.loadActivities();
    }, [activityStore]);

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading activities...' />;

    return (
        <>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>
                <Route path='/' component={HomePage} exact />
                <Route path='/activities' component={ActivityDashboard} />
                <Route path='/createActivity' component={ActivityForm} />
            </Container>
        </>
    );
};

export default observer(App);
