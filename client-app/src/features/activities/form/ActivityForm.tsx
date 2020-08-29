import React, { useState, FormEvent } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import { v4 as uuid } from 'uuid';

interface IProps {
    setEditMode: (editMode: boolean) => void;
    activity: IActivity;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
}

const ActivityForm: React.FC<IProps> = ({
    setEditMode,
    activity: initialFormState,
    createActivity,
    editActivity,
}) => {
    const intializeForm = () => {
        if (initialFormState) {
            return initialFormState;
        } else {
            return {
                id: '',
                title: '',
                category: '',
                description: '',
                date: '',
                city: '',
                venue: '',
            };
        }
    };

    const [activity, setActivity] = useState<IActivity>(intializeForm);

    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.currentTarget;
        setActivity({ ...activity, [name]: value });
    };

    const handleSubmit = () => {
        if (activity.id.length === 0) {
            let newActivity = {
                ...activity,
                id: uuid(),
            };
            console.log(newActivity);
            createActivity(newActivity);
        } else {
            console.log(activity);
            editActivity(activity);
            console.log(activity);
        }
    };

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input
                    placeholder='Title'
                    value={activity.title}
                    name='title'
                    onChange={handleInputChange}
                />
                <Form.TextArea
                    rows={2}
                    placeholder='Description'
                    value={activity.description}
                    name='description'
                    onChange={handleInputChange}
                />
                <Form.Input
                    placeholder='Category'
                    value={activity.category}
                    name='category'
                    onChange={handleInputChange}
                />
                <Form.Input
                    type='datetime-local'
                    placeholder='Date'
                    value={activity.date}
                    name='date'
                    onChange={handleInputChange}
                />
                <Form.Input
                    placeholder='City'
                    value={activity.city}
                    name='city'
                    onChange={handleInputChange}
                />
                <Form.Input
                    placeholder='Venue'
                    value={activity.venue}
                    name='venue'
                    onChange={handleInputChange}
                />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button
                    onClick={() => setEditMode(false)}
                    floated='right'
                    type='submit'
                    content='Cancel'
                />
            </Form>
        </Segment>
    );
};

export default ActivityForm;