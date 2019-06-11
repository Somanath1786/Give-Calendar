import React from 'react';

class SingleDayEvents extends React.Component {
    showData(event){
       console.log(event);
    }
    render()
    {
        const eventButtons = this.props.todaysEvents.map((event, idx) => {
            return(
                 <button onClick={() => this.showData(event)} key={idx}>{event.EventName}</button>
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