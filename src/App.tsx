import React from 'react';
import SNSLogo from './components/Logo/SNSLogo';
import Section1 from './components/Section1';
import Footer from './components/footer/footer';
import Header from './components/header/header';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header>
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col md:flex-row items-center justify-center p-4 space-x-10">
        {/* Circular Phase - Left */}
        <div className="flex-shrink-0">
          {/* Large logo for desktop */}
          <div className="hidden md:block">
            <SNSLogo size="400px" />
          </div>

          {/* Medium logo for tablets */}
          <div className="hidden sm:block md:hidden">
            <SNSLogo size="300px" />
          </div>

          {/* Small logo for mobile */}
          <div className="block sm:hidden">
            <SNSLogo size="250px" />
          </div>
        </div>

        {/* Columns - Right */}
        <div className="flex-grow mt-10 md:mt-0">
          <Section1 />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <Footer />
      </footer>
    </div>
  );
}

export default App;