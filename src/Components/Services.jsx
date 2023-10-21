

const Services = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 md:px-10 pb-10 ">
        <div className="flex flex-col items-center justify-center border border-black p-4">
          <img className="mb-5" src="/img/service1.png" alt="" />
          <p className="text-xl font-semibold ">100% SECURE PAYMENTS</p>
          <p className=" lg:text-justify">
            We offer competitive prices on our 100 million plus product range.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center border border-black p-4">
          <img className="mb-5" src="/img/service2.png" alt="" />
          <p className="text-xl font-semibold ">Worldwide Delivery</p>
          <p className="lg:text-justify">
            With sites in 5 languages, we ship to over 200 countries & regions.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center border border-black p-4">
          <img className="mb-5" src="/img/service3.png" alt="" />
          <p className="text-xl font-semibold ">24/7 Help Center</p>
          <p className="lg:text-justify">
            Round-the-clock assistance for a smooth shopping experience.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center border border-black p-4">
          <img className="mb-5" src="/img/service4.png" alt="" />
          <p className="text-xl font-semibold ">Shop On-The-Go</p>
          <p className="lg:text-justify">
            Download the app and get the world of Beauty21 at your fingertips.
          </p>
        </div>
      </div>
    );
};

export default Services;