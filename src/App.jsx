import './index.css'

function App() {
  const handleLogin = () => {
    window.location.href = "http://localhost:3000/auth/login";
  };

  return (
     <div>
      <div>
        <button
          onClick={handleLogin}
          className="flex items-center py-2 px-4 bg-black text-white hover:bg-gray-800 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.655l-5.214-6.817-5.963 6.817H1.687l7.73-8.84L1.254 2.25h6.82l4.713 6.231 5.457-6.231z" />
          </svg>
          <span>Login with X</span>
        </button>
      </div>
    </div>
  )
}

export default App
