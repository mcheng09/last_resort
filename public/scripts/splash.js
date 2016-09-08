console.log("Insanity Check")

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello Ben.
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
