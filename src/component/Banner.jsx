

const Banner = () => {
    return (
       
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative sm:h-[600px] h-72 w-full">
          <img
            src="https://www.siecindia.com/uploads/blog/blog_5ce5c01d783dce937a381408b93eb8fd_1711193649Italian-Student-Visa-Application%20(1).jpg"
            className="w-full " />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item sm:h-[600px] h-72  relative w-full">
          <img
            src="https://themigration.com.au/wp-content/uploads/2024/07/tourist-vissa-in-australia-feature-image.jpg"
            className="w-full " />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item sm:h-[600px] h-72  relative w-full">
          <img
            src="https://www.pibm.in/images/Blogs/post-study-work-visa-in-usa.webp"
            className="w-full " />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item sm:h-[600px] h-72  relative w-full">
          <img
            src="https://www.shuraa.com/wp-content/uploads/2024/10/family-visa-uae-rules-application-process-and-costs.jpg.webp"
            className="w-full " />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;