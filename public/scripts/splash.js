console.log("Insanity Check")

var Title = React.createClass({
  render: function() {
    return (
      <div className="title jumbotron">
        <h1>This is your last resort.</h1>
      </div>
    );
  }
});

var EventsFrame = React.createClass({
  render: function() {
    return (
        <div className="eventsFrame jumbotron">
          <h3>Events</h3>
          <div className="col-xs-4">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <h6 className="card-subtitle text-muted">Support card subtitle</h6>
              </div>
              <img src="img/tiesto.png" alt="Card image" />
              <div className="card-block">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </div>

          <div className="col-xs-4">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <h6 className="card-subtitle text-muted">Support card subtitle</h6>
              </div>
              <img src="img/gareth.png" alt="Card image" />
              <div className="card-block">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </div>

          <div className="col-xs-4">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <h6 className="card-subtitle text-muted">Support card subtitle</h6>
              </div>
              <img src="img/flume.png" alt="Card image" />
              <div className="card-block">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
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
