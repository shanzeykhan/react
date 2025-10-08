import React,{useEffect} from "react";

const LoginForm = ({user, setUser, onSubmit}) => {
     useEffect(() => {
      const timer = setInterval(() => {
        console.log("Tick...");
      }, 1000);
    
      // cleanup
      return () => clearInterval(timer);
    }, []);
  return (
    <div className="m-auto p-5 ">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="relative w-full h-10 mb-5 bg-[#2148C0] px-2 py-1 border border-white rounded-2 text-white flex items-center gap-2">
          <img className="absolute" src="/user.svg" alt="user icon" />
          <input
            className="w-full pl-5 z-10 focus:border-none focus:ring-none focus:outline-none"
            type="text"
            name="username"
            placeholder="USERNAME"
            onChange={(e) =>
              setUser({ username: e.target.value, password: user.password })
            }
          />
        </div>

        <div className="relative w-full h-10 mb-5 bg-[#2148C0] px-2 py-1 border border-white rounded-2 text-white">
          <img className="absolute" src="/lock.svg" alt="user icon" />
          <input
            className="w-full pl-5 z-10 focus:border-none focus:ring-none focus:outline-none"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) =>
              setUser({ username: user.username, password: e.target.value })
            }
          />
        </div>

        <button
          className="rounded-2 border border-transparent text-[#2148C0] font-medium p-1 w-full h-10 bg-white cursor-pointer hover:border-[#646cff]"
          type="submit"
        >
          LOGIN
        </button>
        <div>Forget password?</div>
      </form>
    </div>
  );
};

export default LoginForm;
