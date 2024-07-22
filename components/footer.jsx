const style = {
  position: "relative",
  top: "1436px",
  width: "100%",
};
const Footer = () => {
  return (
    <footer style={style}>
      <div className="bg-gray-900 text-white py-12 px-4 min-h-[791px]">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-10 top-89px">
            <h2 className="text-3xl font-bold mb-4 mt-24">
              Ready to launch your next project?
            </h2>
            <div className="footer-text flex flex-row justify-between">
              <p className="text-sm mb-2 font-thin">
                With lots of unique blocks, you can easily build a page <br />
                without coding. Build your next landing page.
              </p>
              <button className="bg-blue-600 text-white py-2 px-6 rounded text-lg">
                Get started a project
              </button>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-xl font-bold mb-4">Brainwave.io</h3>
                <p className="text-gray-400">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>About us</li>
                  <li>Contact us</li>
                  <li>Careers</li>
                  <li>Press</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Product</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>News</li>
                  <li>Help desk</li>
                  <li>Support</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Digital Marketing</li>
                  <li>Content Writing</li>
                  <li>SEO for Business</li>
                  <li>UI Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
