import React from "react";
import ticketLogo from "../../images/tickets.png";

const Destination = () => {
  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-md-4">
          <div className="bg-light px-3 py-5">
            <label className="col-form-label">Pick From</label>
            <select className="form-control">
              <option>Gulsan</option>
              <option>Minrpur</option>
              <option>Jatrabari</option>
            </select>
            <label className="col-form-label">Pick To</label>
            <select className="form-control">
              <option>Motijheel</option>
              <option>Uttara</option>
              <option>Airport</option>
            </select>
            <button type="button" className="btn btn-success btn-block mt-3">Search</button>
          </div>

          {/* result */}
          <div className="searchResult bg-light px-3 py-5">
            <div className="bg-info mb-2 rounded p-2 text-white">
                <h3>Pick From</h3>
                <h3>Pick To</h3>
            </div>
            {/* loop start */}
            <div className="d-flex justify-content-between align-items-center px-2 py-4 bg-white rounded">
                <img className="w-25" src={ticketLogo} alt="ticket"/>
                <p className="mb-0">Ticket 1</p>
                <p className="mb-0">$10</p>
            </div>
            <div className="d-flex justify-content-between align-items-center px-2 py-4 bg-white rounded">
                <img className="w-25" src={ticketLogo} alt="ticket"/>
                <p className="mb-0">Ticket 1</p>
                <p className="mb-0">$10</p>
            </div>
            <div className="d-flex justify-content-between align-items-center px-2 py-4 bg-white rounded">
                <img className="w-25" src={ticketLogo} alt="ticket"/>
                <p className="mb-0">Ticket 1</p>
                <p className="mb-0">$10</p>
            </div>
            {/* end loop */}
          </div>
        </div>
        <div className="col-md-8">
            <div className="gmap">
                <iframe className="border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8223924372!2d90.27923775747219!3d23.780887456211758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1616161994587!5m2!1sen!2sbd" width="600" height="450"  loading="lazy" title="map"></iframe>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
