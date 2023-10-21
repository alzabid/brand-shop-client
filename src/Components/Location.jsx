

const Location = () => {
    return (
      <div className=" px-6 md:px-10 ">
        <div className=" h-[300px] bg-[url('/img/bg.jpg')] bg-no-repeat bg-cover bg-center">
          <div className=" px-6 md:px-20 py-12 md:py-20">
            <p className=" text-white text-2xl md:text-4xl font-semibold  ">
              Join our newsletter and get...
            </p>
            <p className=" py-5 text-white font-semibold  ">
              Join our email subscription now to get updates on promotions and
              coupons.
            </p>
            <div className="relative md:w-1/2">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Location;