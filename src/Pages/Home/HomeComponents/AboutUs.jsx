import person from './../../../assets/images/about_us/person.jpg'
import parts from './../../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className="hero py-8 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className='lg:w-1/2 relative'>
          <img src={person} className="w-5/6 rounded-lg shadow-2xl" />
          <img src={parts} className='w-1/2 absolute top-1/2 border-8 border-white right-5' alt="" />
          </div>
          <div className=' lg:w-1/2 pl-2'>
            <h1 className='text-2xl font-bold text-orange-600 mb-5'>About Us</h1>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className="py-6 text-lg text-gray-600">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <p className="pb-6 text-lg text-gray-600">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <button className="btn bg-orange-600 hover:bg-orange-500 text-white">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;