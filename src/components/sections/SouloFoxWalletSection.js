const SouloFoxWalletSection = ({ data }) => {
  return (
    <section id="wallet">
      <div>
        <h2 className="text-2xl text-200 text-center pt-5 pb-5">
          {data.heading}
        </h2>
      </div>

      <div className="container mb-4">
        <p>{data.subHeading}</p>
      </div>

      <div className="container flex ">
        <div className="w-1/2 ">
          <p className="">1. {data.text1}</p>
        </div>

        <div className="w-1/2 ">
          <img
            src={data.imageSrc1}
            alt=""
            srcset=""
            className=""
          />
        </div>
      </div>

      <div className="container flex ">
        <div className="w-1/2 ">
          
            <img src={data.imageSrc2} alt="" srcset="" className="pb-4"/>
        
        </div>

        <div className="w-1/2 ">
          <p className="">2. {data.text2}</p>
        </div>
      </div>

      <div className="container flex ">
        <div className="w-1/2 ">
          <p className="">3. {data.text3}</p>
        </div>

        <div className="w-1/2 ">
          
            <img src={data.imageSrc3} alt="" srcset=""className=""/>
        
        </div>
      </div>
    </section>
  );
};

export default SouloFoxWalletSection;
