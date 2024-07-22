const style = {
  position: "absolute",
  width: "100%",
  height: "635px",
  top: "801px",
};

const Testimonial = () => {
  return (
    <section style={style}>
      <div className="testimonial text-white min-h-[635px]">
        <div className="testimonial-content">
          <div className="text-green-400 text-sm uppercase mb-4">
            Testimonial
          </div>
          <div className="text-center text-3xl font-semibold max-w-xl mb-6">
            “Simply the best. Better than all the rest. I’d recommend this
            product to beginners <br /> and advanced users.”
          </div>

          <div className="ml-4 flex flex-col items-center gap-4">
            <img
              src="/images/Ian.png"
              alt="Ian Klein"
              className="rounded-full w-76 h-76"
            />
            <div className="font-semibold">Ian Klein</div>
            <div className="text-sm text-gray-300 font-extralight">
              Digital Marketer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
