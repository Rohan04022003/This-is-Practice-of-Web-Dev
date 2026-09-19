import { Eye, EyeOff, Key, User2 } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [passwordShow, setPasswordShow] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    setEmail("")
    setPassword("")
    console.log("Form submitted...");
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="bg-neutral-900 py-6 px-6 h-[60%] w-[24rem] rounded-xl">
        <h2 className="font-medium text-2xl h-[10%]">Login</h2>
        <p className="text-sm font-medium text-neutral-500 -mt-1">
          Please do login to access your data.
        </p>
        <form
          onSubmit={(e) => SubmitHandler(e)}
          className="flex flex-col items-start justify-center h-[90%] gap-6"
        >
          <div className="flex items-center w-full h-10 border py-2 pl-9 pr-3 border-[#834145] rounded-xl relative">
            <User2 className="absolute left-3" size={17} color="gray" />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter your email"
              className="w-full border-0 outline-none"
              maxLength={40}
              min={6}
              required
            />
          </div>
          <div className="flex items-center w-full h-10 border py-2 pl-9 pr-10 border-[#834145] rounded-xl relative">
            <Key className="absolute left-3" size={17} color="gray" />
            {password ? (
              passwordShow ? (
                <Eye
                  onClick={() => setPasswordShow(false)}
                  className="absolute right-4 text-neutral-400 cursor-pointer"
                  size={17}
                />
              ) : (
                <EyeOff
                  onClick={() => setPasswordShow(true)}
                  className="absolute right-4 text-neutral-400 cursor-pointer"
                  size={17}
                />
              )
            ) : (
              ""
            )}
            <input
              type={passwordShow ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter password"
              minLength={6}
              maxLength={16}
              className="w-full border-0 outline-none"
              required
            />
          </div>

          <div className="flex items-center justify-between px-4 w-full">
            <button className="text-sm flex items-center gap-2 font-semibold text-neutral-500">
              <input
                type="checkbox"
                className="accent-[#834145] cursor-pointer"
              />
              Remember Me
            </button>

            <button className="text-[#834145] text-sm font-semibold cursor-pointer">
              Forgot Password
            </button>
          </div>

          <button className="w-full bg-[#834145] py-2 rounded-xl mt-3 font-medium cursor-pointer hover:brightness-75 duration-200">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
