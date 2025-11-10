import { useState } from 'react'
import Payment from './Payment'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <div className="bg-emerald-500 text-white py-16 px-4 w-full">
        <div className="w-full text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <img src={viteLogo} className="h-12" alt="Vite logo" />
            <img src={reactLogo} className="h-12" alt="React logo" />
          </div>
          <h1 className="text-4xl font-bold mb-4">PayFlow Demo</h1>
          <p className="text-lg">
            Experience seamless payment processing with modern React components<br />
            and beautiful UI design
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-16 px-4 w-full">
        <div className="w-full px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Modern Payment Solutions
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Built with React and Vite for lightning-fast performance. Secure, responsive, and user-<br />
            friendly payment forms that adapt to any device.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Secure Processing Card */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Secure Processing</h3>
              <p className="text-gray-600 text-sm">
                End-to-end encryption ensures your payment data is always protected and secure.
              </p>
            </div>

            {/* Lightning Fast Card */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Lightning Fast</h3>
              <p className="text-gray-600 text-sm">
                Powered by Vite and React for instant load times and smooth interactions.
              </p>
            </div>

            {/* Mobile Ready Card */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Mobile Ready</h3>
              <p className="text-gray-600 text-sm">
                Fully responsive design that works perfectly on all devices and screen sizes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="bg-gray-100 pb-16 px-4 w-full">
        <div className="w-full px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Interactive Demo</h3>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-8 rounded-lg transition-colors mb-4"
            >
              Click Counter: {count}
            </button>
            <p className="text-gray-500 text-sm">
              Edit <code className="bg-gray-100 px-2 py-1 rounded">src/App.jsx</code> and see it live! Add or Reactivated!
            </p>
          </div>
        </div>
      </div>

      {/* Payment Form Section */}
      <div className="bg-gray-800 py-16 px-4 w-full">
        <div className="w-full px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">
            Try Our Payment Form
          </h2>
          <p className="text-center text-gray-300 mb-12">
            Experience our beautifully designed payment form with real-time validation, secure<br />
            input handling, and smooth animations.
          </p>
          <div className="flex justify-center">
            <Payment />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 w-full">
        <div className="w-full px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Column 1 */}
            <div>
              <h4 className="text-white font-semibold mb-4">PayFlow Demo</h4>
              <p className="text-sm">
                A modern payment form app built with React, Vite, and Tailwind CSS. Showcasing best practices in UI/UX design.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-white font-semibold mb-4">Technologies</h4>
              <ul className="text-sm space-y-2">
                <li>⚡ React 19.2.0</li>
                <li>⚡ Vite 4.1.17</li>
                <li>⚡ Tailwind CSS 4.1.17</li>
                <li>⚡ Modern JavaScript</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-white font-semibold mb-4">Learn More</h4>
              <ul className="text-sm space-y-2">
                <li><a href="https://react.dev" className="hover:text-white transition-colors">React Docs</a></li>
                <li><a href="https://vitejs.dev" className="hover:text-white transition-colors">Vite Docs</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>Built with ❤️ using modern web technologies</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
