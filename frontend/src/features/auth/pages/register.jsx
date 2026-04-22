import React from 'react'
import { useNavigate , Link } from 'react-router';

const Login = () => {

    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("form submitted");
    }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" 
         style={{ 
           backgroundImage: 'var(--bg-image)', 
           backgroundSize: 'cover', 
           backgroundPosition: 'center' 
         }}>
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <div className="glass-card w-full max-w-md p-8 md:p-10 rounded-3xl animate-float">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-400">Enter your details to access your account</p>
        </div>

        <form className="space-y-6">

             <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium text-gray-300 ml-1">
              User Name
            </label>
            <input 
              type="text" 
              id="username" 
              name="email" 
              placeholder="name@company.com"
              className="input-field"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">
              Email Address
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="name@company.com"
              className="input-field"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label htmlFor="password" className="text-sm font-medium text-gray-300">
                Password
              </label>
              <a href="#" className="text-xs text-brand-primary hover:text-brand-secondary transition-colors">
                Forgot Password?
              </a>
            </div>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="••••••••"
              className="input-field"
            />
          </div>

          <div className="flex items-center space-x-2 ml-1">
            <input 
              type="checkbox" 
              id="remember" 
              className="w-4 h-4 rounded-sm border-white/10 bg-white/5 text-brand-primary focus:ring-brand-primary/20 transition-all"
            />
            <label htmlFor="remember" className="text-sm text-gray-400 cursor-pointer">
              Remember me for 30 days
            </label>
          </div>

          <button type="submit" onClick={handleSubmit} className="btn-primary mt-4">
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <Link to={"/register"} className="text-brand-primary font-semibold hover:text-brand-secondary transition-colors">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
