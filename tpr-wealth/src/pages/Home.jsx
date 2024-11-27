import React from 'react';
import { Link } from 'react-router-dom';
import struggling from "../assets/home1.jpeg"
import { useNavigate } from 'react-router-dom';
import Chatbot from '../components/ChatBot';


const Home = () => {
    const navigate=useNavigate()
    const handleGetStarted = () => {
        navigate('/mutual-funds'); // Navigate to the Contact page
      };
  return (
    <div className='mt-14'>
      {/* Hero Section */}
      <section className=" text-center py-20 bg-gradient-to-r from-gray-800 via-gray-700 to-black">
        <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
          Empower Your Financial Future
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Learn, Invest, and Grow with TPR Wealth.
        </p>
        <button onClick={handleGetStarted} className="bg-gradient-to-r from-gray-300 to-gray-500 text-black px-8 py-3 rounded-lg hover:from-gray-400 hover:to-gray-600">
            Get Started 
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-16 bg-gradient-to-b from-black to-gray-900">
        <h3 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
          Our Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg">
            <h4 className="font-bold text-lg"><Link to='/mutual-funds'>Learn About Mutual Funds</Link></h4>
            <p className="text-gray-400 mt-2">Access beginner to advanced resources.</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg">
            <h4 className="font-bold text-lg"><Link to='/track-investment'>Track Your Investments</Link></h4>
            <p className="text-gray-400 mt-2">Monitor growth and plan your goals.</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg">
            <h4 className="font-bold text-lg"><Link to='/contact'>Join the Community</Link></h4>
            <p className="text-gray-400 mt-2">Engage with like-minded investors.</p>
          </div>
        </div>
      </section>
      {/* Interactive Investment Calculator Button */}
      <section className="text-center bg-gradient-to-r from-gray-800 to-gray-700 text-white py-12 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold mb-4">See How Your Investments Can Grow</h2>
        <p className="text-lg text-gray-300 mb-6">
          Use our interactive calculator to visualize how your monthly investments can help you build wealth over time.
        </p>
        <Link
          to="/investment-calculator"  // Link to the page with the calculator
          className="bg-gradient-to-r from-gray-300 to-gray-500 text-black px-8 py-3 rounded-lg hover:from-gray-400 hover:to-gray-600"
        >
          Try It Now
        </Link>
      </section>

       {/* Struggling to Invest Section */}
       <section className="bg-gray-900 text-white py-16 rounded-lg shadow-md relative">
        {/* Background Image */}
        <img
          src={struggling}  // Path to the image in your public folder
          alt="Investing Mentor"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="max-w-4xl mx-auto text-center relative ">
          <h2 className="text-3xl font-bold mb-4">
            Struggling to Invest?
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Investing can be overwhelming, especially if you're just starting out.
            Whether you're unsure about how mutual funds work or how to begin your
            investment journey, you're not alone. We are here to guide you through
            every step of the way, making your investment journey smoother and
            more rewarding.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            With TPR Wealth, you’ll receive personalized advice, expert resources,
            and a supportive community to help you grow your wealth at your own pace.
          </p>
          <div className="mt-8">
            <Link
              to='contact' // Adjust to the path of your contact page
              className="bg-gradient-to-r from-gray-300 to-gray-500 text-black px-8 py-3 rounded-lg hover:from-gray-400 hover:to-gray-600"
            >
              Get Assistance Here
            </Link>
          </div>
        </div>
      </section>
       {/* Include the chatbot */}
       <Chatbot />
    </div>
  );
};

export default Home;
