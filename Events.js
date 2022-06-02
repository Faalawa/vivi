import React from 'react';
import './Events.css';


const Events = () => {
    // const [ticketNumbers,setTicketNumbers] = useState();
    // const [vipTickects, setVipTickets] = useState();

    return(
        <div>
          <div className="detail">
          <img src="https://cdn.apk-cloud.com/detail/screenshot/1qQ8yzc4iKAg20ksny0wGIjzPqYAs3OYDmdkxaSuQkT5ON75mbVh3sIA-Eh1UR-A2pw=h900.png" alt="" />
          </div>
          <div>
          <fieldset>
              <legend>Up coming Concerts</legend>
              <p>Concert description</p>
              <button className="Area">Tickects Availibility</button>
              <br />
              <button className="Area">Vip tickets</button>
          </fieldset>
          </div>
          <div className="footer">
            <footer>
                <p>Address Info</p>
            </footer>
          </div>
          
        </div>        
    );

}

export default Events;