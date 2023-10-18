import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import swal from "sweetalert";


const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const Email = e.target.Email.value;
    const password = e.target.password.value;
    console.log(Email, password);

    signInUser(Email, password)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        swal("Good job!", "You successfully login!", "success");
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        swal("Error!", "Invalid Email or Password !", "error");
        setLoginError("*Invalid Email or Password");
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        swal("Good job!", "You successfully login!", "success");
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-5">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="Email"
                    name="Email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPassword ? "password" : "text"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <span
                    className="absolute top-[170PX] right-10 link link-hover"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>

                  {loginError && (
                    <p className="text-red-700 mt-2">{loginError}</p>
                  )}
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>

              <p>
                Dont have an account? Please
                <Link to="/register">
                  <button className=" -ml-3 btn btn-link">Register</button>
                </Link>
              </p>
              <p className="text-center">
                Continue with <br />
                <hr />
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-sm btn-outline mt-4 w-full lg:hover:btn-primary"
                >
                  Log in With Google
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
