import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanTerm, setLoanTerm] = useState(24);
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();
    login({ id: 1, email: loginData.email });
    navigate('/dashboard');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    login({ id: 1, email: registerData.email });
    navigate('/dashboard');
  };

  const calculateMonthlyPayment = () => {
    const rate = 0.059 / 12;
    const numberOfPayments = loanTerm;
    const monthlyPayment = (loanAmount * rate * Math.pow(1 + rate, numberOfPayments)) / (Math.pow(1 + rate, numberOfPayments) - 1);
    return Math.round(monthlyPayment);
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalPayment = monthlyPayment * loanTerm;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold text-blue-600">LoanBerry</div>
            <div className="space-x-2 sm:space-x-4">
              <button
                onClick={() => setShowLoginModal(true)}
                className="text-gray-600 hover:text-gray-900 px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md font-medium"
              >
                Log In
              </button>
              <button
                onClick={() => setShowRegisterModal(true)}
                className="bg-blue-600 text-white hover:bg-blue-700 px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md font-medium"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get the funds you need with{' '}
              <span className="text-blue-600">LoanBerry</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Apply for a personal loan with competitive rates and flexible terms.
              Get funds as soon as the next business day.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => setShowRegisterModal(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 w-full sm:w-auto"
              >
                Get Started
              </button>
              <button
                onClick={() => setShowLoginModal(true)}
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 w-full sm:w-auto"
              >
                Create Account
              </button>
            </div>
          </div>

          {/* Loan Calculator */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Loan Calculator</h2>
            <p className="text-sm text-gray-600 mb-6">
              Move the sliders to calculate your potential loan payment
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount
                </label>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>₹10,000</span>
                  <span>₹{loanAmount.toLocaleString()}</span>
                  <span>₹500,000</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Term
                </label>
                <input
                  type="range"
                  min="12"
                  max="60"
                  step="12"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>12 months</span>
                  <span>{loanTerm} months</span>
                  <span>60 months</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <p className="text-sm text-gray-600">Monthly Payment</p>
                  <p className="text-xl font-semibold">₹{monthlyPayment.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Payment</p>
                  <p className="text-xl font-semibold">₹{totalPayment.toLocaleString()}</p>
                </div>
              </div>

              <button
                onClick={() => setShowRegisterModal(true)}
                className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700"
              >
                Apply for This Loan
              </button>

              <p className="text-xs text-center text-blue-600 hover:underline cursor-pointer">
                Check your credit score to get better interest rates
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-12 sm:py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Why Choose LoanBerry?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Simple Application</h3>
              <p className="text-gray-600">Our straightforward online application takes just minutes to complete. No paperwork, no hassle.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Quick Decisions</h3>
              <p className="text-gray-600">Get instant eligibility checks and receive your loan offers within minutes of applying.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Secure & Trusted</h3>
              <p className="text-gray-600">Your personal and financial information is protected with industry-leading security measures.</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-12 sm:py-16 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12">
            Get the funds you need in just a few simple steps
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Apply Online</h3>
              <p className="text-gray-600">
                Fill out our simple online application with your personal and financial details.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Review Offers</h3>
              <p className="text-gray-600">
                Compare personalized loan offers with different terms and rates.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Get Funded</h3>
              <p className="text-gray-600">
                Accept your preferred offer and receive funds directly to your bank account.
              </p>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => setShowRegisterModal(true)}
              className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-md font-medium hover:bg-blue-700 w-full sm:w-auto"
            >
              Apply Now →
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-12 sm:py-16 bg-gray-50 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">What Our Customers Say</h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12">
            Don't just take our word for it. Here's what our happy customers have to say.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                The loan application process was incredibly smooth. I got approved quickly and the funds were in my account the next day!
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">SM</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Miller</h4>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                I was hesitant at first, but LoanBerry made getting a loan so easy. The rates were better than my bank offered.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">AK</span>
                </div>
                <div>
                  <h4 className="font-semibold">Alex Kim</h4>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Excellent customer service! They helped me every step of the way and found me the best interest rate possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 sm:py-16 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Ready to Get the Funds You Need?</h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12">
            Join thousands of satisfied customers who have used LoanBerry to get the financial support they needed.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-blue-600">$10M+</p>
              <p className="text-gray-600">Loans Funded</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-blue-600">5,000+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-blue-600">4.8/5</p>
              <p className="text-gray-600">Customer Rating</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => setShowRegisterModal(true)}
              className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-md font-medium hover:bg-blue-700 w-full sm:w-auto"
            >
              Apply Now →
            </button>
            <button
              onClick={() => setShowRegisterModal(true)}
              className="border border-blue-600 text-blue-600 px-6 sm:px-8 py-3 rounded-md font-medium hover:bg-blue-50 w-full sm:w-auto"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 mt-12 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">LoanBerry</h3>
              <p className="text-gray-600 text-sm">
                Providing fast and reliable personal loans with competitive rates.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Personal Loans</li>
                <li>Auto Loans</li>
                <li>Debt Consolidation</li>
                <li>Home Improvement</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>© 2025 LoanBerry. All rights reserved.</p>
            <p className="mt-2">This is a demo application. No real loans are being issued.</p>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Log In</h2>
              <button
                onClick={() => setShowLoginModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Create Account</h2>
              <button
                onClick={() => setShowRegisterModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleRegister}>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={registerData.firstName}
                      onChange={(e) => setRegisterData({ ...registerData, firstName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={registerData.lastName}
                      onChange={(e) => setRegisterData({ ...registerData, lastName: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={registerData.email}
                    onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={registerData.password}
                    onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;