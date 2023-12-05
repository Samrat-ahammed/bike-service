import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Slider = () => {
  return (
    <div>
      {" "}
      <AwesomeSlider>
        <div>
          <img src={"https://i.ibb.co/0BtyMbr/5874399.jpg"} alt="" />
        </div>

        <div>
          <img src={"https://i.ibb.co/5snBR54/8037113.jpg"} alt="" />
        </div>

        <div>
          <img src={"https://i.ibb.co/f2CYMjN/4745875.jpg"} alt="" />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
