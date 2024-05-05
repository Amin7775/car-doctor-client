import banner_1 from './../../../assets/images/banner/1.jpg'
import banner_2 from './../../../assets/images/banner/2.jpg'
import banner_3 from './../../../assets/images/banner/3.jpg'
import banner_4 from './../../../assets/images/banner/4.jpg'
import banner_5 from './../../../assets/images/banner/5.jpg'
import banner_6 from './../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[650px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner_1} className="w-full object-cover object-top" />
          <div className="absolute flex items-center text-white top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full">
            <div className='max-w-md ml-14'>
            <h1 className='text-6xl font-bold mb-8'>Affordable Price For Car Servicing</h1>
      
            {/* <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1> */}
            <p className='text-xl mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
            <button className="btn btn-error text-white mr-5 ">Discover More</button>
            <button className="btn btn-error btn-outline font-medium">Latest Project</button>
              <button></button>
            </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform gap-2 -translate-y-1/2 bottom-0 right-5">
            <a href="#slide6" className="btn btn-circle bg-red-500 hover:bg-red-500 text-white border-0">❮</a> 
            <a href="#slide2" className="btn btn-circle bg-red-500 hover:bg-red-500 text-white border-0">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
  <img src={banner_2} className="w-full object-cover object-center" />
  <div className="absolute flex items-center text-white top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full">
    <div className='max-w-md ml-14'>
      <h1 className='text-6xl font-bold mb-8'>Affordable Price For Car Servicing</h1>
      <p className='text-xl mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      <div>
        <button className="btn btn-error text-white mr-5 ">Discover More</button>
        <button className="btn btn-error btn-outline font-medium">Latest Project</button>
      </div>
    </div>
  </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide1" className="btn btn-circle">❮</a> 
    <a href="#slide3" className="btn btn-circle">❯</a>
  </div>
</div> 

<div id="slide3" className="carousel-item relative w-full">
  <img src={banner_3} className="w-full object-cover object-center" />
  <div className="absolute flex items-center text-white top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full">
    <div className='max-w-md ml-14'>
      <h1 className='text-6xl font-bold mb-8'>Affordable Price For Car Servicing</h1>
      <p className='text-xl mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      <div>
        <button className="btn btn-error text-white mr-5 ">Discover More</button>
        <button className="btn btn-error btn-outline font-medium">Latest Project</button>
      </div>
    </div>
  </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide2" className="btn btn-circle">❮</a> 
    <a href="#slide4" className="btn btn-circle">❯</a>
  </div>
</div> 


<div id="slide4" className="carousel-item relative w-full">
  <img src={banner_4} className="w-full object-cover object-center" />
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide3" className="btn btn-circle">❮</a> 
    <a href="#slide5" className="btn btn-circle">❯</a>
  </div>
</div>
<div id="slide5" className="carousel-item relative w-full">
  <img src={banner_5} className="w-full object-cover object-center" />
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide4" className="btn btn-circle">❮</a> 
    <a href="#slide6" className="btn btn-circle">❯</a>
  </div>
</div>
<div id="slide6" className="carousel-item relative w-full">
  <img src={banner_6} className="w-full object-cover object-center" />
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide5" className="btn btn-circle">❮</a> 
    <a href="#slide1" className="btn btn-circle">❯</a>
  </div>
</div>

      </div>
    );
};

export default Banner;