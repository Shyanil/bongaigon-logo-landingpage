import React from "react";
import "../App.css";
import logoImg from "../assets/images/logoimage.png";

class Key extends React.Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      if (this.props.onFinish) {
        this.props.onFinish();
      }
    }, 2600);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div className="key-loader">
        <div className="key-loader-content">
          <div className="key-logo-ring">
            <img src={logoImg} alt="Subham Park" />
          </div>

          <span className="key-small-title">
            SUBHAM PARK
          </span>
<h1>
  Spotlight on <em>Modern Living</em>
</h1>

          <div className="key-line"></div>
        </div>
      </div>
    );
  }
}

export default Key;