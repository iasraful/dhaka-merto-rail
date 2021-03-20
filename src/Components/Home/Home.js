import React, { useEffect ,useState} from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [tickets , setTickets] = useState([]);
    useEffect(()=>{
        const url = 'https://run.mocky.io/v3/0049d2c4-b03c-4922-8885-be305e421cbf';
        fetch(url)
        .then(res => res.json()).then(data => setTickets(data))
    })
    return (
        <div className="homeBg">
            <div className="container h-100 w-100 d-flex align-items-center justify-content-center">
                <div className="row w-100">
                    {
                        tickets.map(ticket => (
                            <div className="col-md-3">
                                <div className="card ticketCard" style={{backgroundImage : `url('${ticket.img}')`}}>
                                    <div className="card-body  d-flex flex-column align-items-center justify-content-between">
                                        <h5 className="card-title text-white">{ticket.name}</h5>
                                        
                                        <Link to="/destination"  className="btn btn-primary">Buy Now</Link>
                                        <h2 className="card-text text-white"> ${ticket.amount} </h2>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;