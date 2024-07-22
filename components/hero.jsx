const style = {
  position: "absolute",
  width: "1111px",
  height: "463px",
  top: "202px",
  left: "244px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const Content = {
  width: "541px",
  height: "386px",
  display: "flex",
  flexDirection: "column",
  gap: "25px",
};
const Hero = () => {
  return (
    <div style={style}>
      <div style={Content}>
        <div className="redText text-red-600">Let’s shift your business</div>
        <div className="bigText font-sans font-bold">
          Shift your business <br /> fast with Shade Pro.
        </div>
        <div className="description font-avenir font-extralight">
          With lots of unique blocks, you can easily build a page <br />
          without coding. Build your next consultancy website within <br /> few
          minutes.
        </div>
        <button className="button-big font-bold">GET started a project</button>
      </div>
      <div className="image">
        <img
          width={"463px"}
          height={"463px"}
          src="/images/Zurag.png"
          alt="zurag"
        />
      </div>
    </div>
  );
};

export default Hero;
