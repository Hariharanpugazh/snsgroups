import React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import SNSLogo from './components/Logo/SNSLogo';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/*Header*/}
      <div className='mt-8'>
        <Header />
      </div>
      {/* Large logo for desktop */}
      <div className="hidden md:block">
        <SNSLogo size="400px" />
      </div>
      {/* Medium logo for tablets */}
      <div className="hidden sm:block md:hidden">
        <SNSLogo size="300px" />
      </div>
      {/* Footer */}
      <div className='mt-8'>
        <Footer />
      </div>
      {/* Small logo for mobile */}
      <div className="block sm:hidden">
        <SNSLogo size="250px" />
      </div>
    </div>
  );
}

export default App;