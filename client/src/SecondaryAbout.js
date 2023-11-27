import React, { useRef, useEffect } from "react";
import talvesteel from "./talvesteel.jpg";
import map from "./map.png";
import coils5 from "./coils5.jpg";

function SecondaryAbout() {
  const who = useRef(null);
  const what = useRef(null);
  const where = useRef(null);
  const why = useRef(null);
  const whoP = useRef(null);
  const whatP = useRef(null);
  const whereP = useRef(null);
  const whyP = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) who.current.classList.add("fade-in");
    });
    observer.observe(who.current);
    const observer2 = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) what.current.classList.add("fade-in");
    });
    observer2.observe(what.current);
    const observer3 = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) where.current.classList.add("fade-in");
    });
    observer3.observe(where.current);
    const observer4 = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) why.current.classList.add("fade-in");
    });
    observer4.observe(why.current);
    const observer5 = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) whoP.current.classList.add("fade-up");
    });
    observer5.observe(whoP.current);
    // const observer6 = new IntersectionObserver((entries) => {
    //   if (entries[0].isIntersecting) whatP.current.classList.add("fade-up");
    // });
    // observer6.observe(whatP.current);
    const observer7 = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) whereP.current.classList.add("fade-up");
    });
    observer7.observe(whereP.current);
    const observer8 = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) whyP.current.classList.add("fade-up");
    });
    observer8.observe(whyP.current);
  }, []);

  return (
    <div className="sec_about">
      <h1 className="who" ref={who}>
        Who Are We?
      </h1>
      <div className="para_hold" ref={whoP}>
        <div className="paragraph">
          <p>
            Greyson Alloys specializes in stainless steel distribution. The
            company was founded by Larry and Zack Talve. Together they bring
            experience, understanding, and passion to the industry. Larry has 35
            years of industry experience and expertise while Zack brings a
            strong background in sales and entrepreneurship. Please check out
            our <a href="/about">'About'</a> section to learn even more about
            us!
          </p>
          {/* <p>
            Greyson Alloys, a stainless steel distribution company, was
            founded in 2022 with the goal of providing customers throughout the
            United States with quality material at competitive prices. Greyson Alloys stocks type 304L, 316L, and type 400 stainless with
            thickness running from .010” to .125”.
          </p>
          <br />
          <p>
            In addition, we have the capability to provide slitting and
            polishing services through our domestic and overseas partners. We
            pride ourselves on providing seamless customer service and holding
            nothing but exceptional quality products for our customers. Greyson Alloys’ office is based in Manhattan and our warehouse is
            located in Baltimore.
          </p> */}
        </div>
      </div>
      <img className="citygif" src={coils5} alt="steel" />
      {/* <h1 className="who" ref={what}>
        What We Do?
      </h1>
      <div className="para_hold" ref={whatP}>
        <div className="paragraph">
          <p>
            Here at Greyson Alloys we are committed to excellence in
            everything we do. Whether it be customer service or our steel coils
            we can gaurantee you will only ever experience the utmost in
            quality. In terms of products, we stock type 304L, 316L, and type
            400 stainless with thickness running from .010” to .125”. For a full
            list of available products please check out our{" "}
            <a href="/products">'Products'</a> page. In addition to the steel
            coils, we have the capability to provide slitting and polishing
            services through our domestic and overseas partners.
          </p>
        </div>
      </div> */}
      <h1 className="who" ref={where}>
        Where Are We?
      </h1>
      <div className="map-container3" ref={whereP}>
        <div className="map-container2">
          <a
            href="https://www.google.com/maps/place/469+7th+Avenue,+469+Seventh+Ave,+7th+Floor,+New+York,+NY+10018/@40.7512416,-73.9932884,17z/data=!3m1!4b1!4m20!1m13!4m12!1m4!2m2!1d-80.1308672!2d26.1423104!4e1!1m6!1m2!1s0x89c259ac2149ebcd:0xce9fcbdb630dfdc4!2s469+7th+Avenue,+469+Seventh+Ave,+7th+Floor,+New+York,+NY+10018!2m2!1d-73.9907081!2d40.7512376!3m5!1s0x89c259ac2149ebcd:0xce9fcbdb630dfdc4!8m2!3d40.7512376!4d-73.9907081!16s%2Fg%2F1z449y4fh?entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            <img src={map} alt="map" />
          </a>
          <div style={{ width: "100%" }}>
            <p>
              Our corportate office is located at 469 7th Ave in Manhattan, NY.
              Our warehouse is located in Baltimore, MD.
            </p>
          </div>
        </div>
      </div>
      <br />
      <h1 className="who" ref={why}>
        Why Choose Us?
      </h1>
      <div className="para_hold" ref={whyP}>
        <div className="paragraph">
          <p>
            Our commitment is to excellence in both customer service and product
            quality. We work with our individual clients to satisfy their
            specific needs and requirements. Flexible payment terms and
            logistics allow us to serve clients throughout the entire US market.
            Our warehouse, which is located in Baltimore, allows us to serve
            clients throughout the United States. Please navigate to our{" "}
            <a href="/contact">'Contact'</a> page to get in touch.
          </p>
        </div>
      </div>
      <br />
      <h1 className="who" ref={what}>
        What We Do?
      </h1>
      {/* <div className="para_hold" ref={whatP}>
        <div className="paragraph">
          <p>
            We have the capability to supply Type 304, 304L, 305, 316, 316L, and
            430 stainless steel materials. Our offerings include master coils,
            slit-to-size strip coils, and cut-to-length sheets. Typically, our
            thickness ranges from .012” to .125”. Additionally, we specialize in
            offering specialty light gauge items and hot-rolled stainless steel
            plates. Both of our domestic and international mill relationships
            allow us to provide prime material at competitive prices.
          </p>
          <p>
            We offer a variety of finishes, such as 2B, 2D, #3/4 polish, and
            bright annealed.
          </p>
          <p>
            Additionally, we provide our services across a wide range of
            industries, including automotive, kitchen appliances, washroom
            accessories, tubing manufacturers, stamping manufacturers, roll
            forming, and medical supplies manufacturers.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default SecondaryAbout;
