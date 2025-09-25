import { MessageSquare, Twitter } from 'lucide-react';
import { Button } from "./ui/button";

function Navbar() {
  const handleLogin = () => {
    window.location.href = "http://localhost:3000/auth/login";
  };
    return (
        <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
          <div className=" mx-4 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Rafess
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <Button  onClick={handleLogin} className="bg-black hover:bg-gray-800 text-white">
                  <Twitter className="w-4 h-4 mr-2" />
                  Login with X
                </Button>
              </div>
            </div>
          </div>
        </header>
    )
}

export default Navbar