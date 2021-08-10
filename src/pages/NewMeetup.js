import { useHistory } from "react-router-dom";

import MeetUpForm from "../components/meetups/NewMeetupForm"
function NewMeetupsPage(){
    const history = useHistory();
    function addMeetupHandler(meetupData){
        fetch('https://react-backend-d0df3-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(() => {
            history.replace('/')
        });

    }

    return (<section>
        <h1>Add New Meetup</h1>
        <MeetUpForm onAddMeetup={addMeetupHandler}/>
    </section>)

}

export default NewMeetupsPage;