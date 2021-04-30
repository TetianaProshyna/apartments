import { Component } from "react";
import style from "./MouseDecorator.module.css";

class MouseDecorator extends Component {
  state = {
    x: 0,
    y: 0,
    imgSrc: "",
    visible: false,
  };
  componentDidMount() {
    window.addEventListener("mousemove", this.mouseHandler);
  }
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.mouseHandler);
  }
  mouseHandler = (event) => {
    const { clientX, clientY, target } = event;

    if (!target.dataset.decorate) {
      this.setState({
        visible: false,
      });
      return;
    }
    const imgSrc = target.dataset.icon;
    console.log(imgSrc);

    this.setState({
      x: clientX,
      y: clientY,
      visible: true,
      imgSrc,
    });
  };
  render() {
    const { x, y, imgSrc, visible } = this.state;

    return (
      visible && (
        <div
          className={style.mouseDecorator}
          style={{
            transform: `translate(${x}px, ${y}px)`,
          }}
        >
          {!imgSrc && <span>🎁</span>}
          <img width="30" height="30" src={imgSrc} alt="" />
        </div>
      )
    );
  }
}
export default MouseDecorator;
