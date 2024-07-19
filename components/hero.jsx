const style = {
  position: "absolute",
  width: "1111px",
  height: "463px",
  top: "202px",
  left: "244px",
  gap: "0px",
  opacity: "0px",
  border: "1px solid red",
  display: "flex",
};
const Content = {
  display: "flex",
  flexDirection: "column",
  gap: "25px",
};
const Hero = () => {
  return (
    <div style={style}>
      <div style={Content}>
        <div className="redText">Let’s shift your business</div>
        <div className="bigText">
          Shift your business <br /> fast with Shade Pro.
        </div>
        <div className="description">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next consultancy website within few minutes.
        </div>
        <button className="button-big">GET started a project</button>
      </div>
      <div className="image">
        <img src="/images/zurag.png" alt="zurag" />
      </div>
    </div>
  );
};

export default Hero;
