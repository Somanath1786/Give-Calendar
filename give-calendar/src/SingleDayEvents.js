import React from 'react';
import SimpleModal from './SimpleModal';

class SingleDayEvents extends React.Component {   
    render()
    {
        const eventButtons = this.props.todaysEvents.map((event, idx) => {
            return(
                <SimpleModal key={idx}
                 eventName={event.EventName}
                 date={event.selectedDate}
                 time={event.Time}
                 charity ={event.DesignatedCharity}

                 />                
            )
        })
        return(
            <div>
                {eventButtons}
            </div>
        )
    }
    
}

export default SingleDayEvents;