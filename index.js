const Notification = (props) => {
  //  Write your code here.
  const { className, paragraphText, imageUrl } = props;
  return (
    <div className={className}>
      <img src={`${imageUrl}`} />
      <p>{paragraphText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="card-container">
      <h1>Notifications</h1>
      <div className="PrimaryContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          className="icons"
        />
        <p className="paragraph">Information Message</p>
      </div>
      <div className="successContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          className="icons"
        />
        <p className="paragraph">Success Message</p>
      </div>
      <div className="warningContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          className="icons"
        />
        <p className="paragraph">Warning Message</p>
      </div>
      <div className="DangerContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          className="icons"
        />
        <p className="paragraph">Danger Message</p>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
