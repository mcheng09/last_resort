console.log("Insanity Check")

var Title = React.createClass({
  render: function() {
    return (
      <div className="title jumbotron">
        <h2>This is your last resort.</h2>
      </div>
    );
  }
});

var EventsFrame = React.createClass({
  render: function() {
    return (
      <div className="eventsFrame">
        <h3>Events</h3>
        <div className="jumbotron eventsFrame">
          <div className="col-xs-4">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Tiesto</h4>
                <h6 className="card-subtitle text-muted">12.02.2016</h6>
              </div>
              <img src="img/tiesto.png" alt="Card image" />
              <div className="card-block">
                <p className="card-text">Performing at Hakkasan at 10 PM</p>
                <a href="#" className="card-link">See Event Details</a>
                <a href="#" className="card-link">Find Tickets</a>
              </div>
            </div>
          </div>

          <div className="col-xs-4">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Gareth Emery</h4>
                <h6 className="card-subtitle text-muted">12.02.2016</h6>
              </div>
              <img src="img/gareth.png" alt="Card image" />
              <div className="card-block">
                <p className="card-text">Performing at Ruby Skype at 11 PM</p>
                <a href="#" className="card-link">See Event Details</a>
                <a href="#" className="card-link">Find Tickets</a>
              </div>
            </div>
          </div>

          <div className="col-xs-4">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Flume</h4>
                <h6 className="card-subtitle text-muted">12.02.2016</h6>
              </div>
              <img src="img/flume.png" alt="Card image" />
              <div className="card-block">
                <p className="card-text">Performing at Temple at 12 PM</p>
                <a href="#" className="card-link">See Event Details</a>
                <a href="#" className="card-link">Find Tickets</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
});

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Title />
        <EventsFrame />
      </div>
    )
  }
});


ReactDOM.render(
  <Main />,
  document.getElementById('content')
);
