import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import swal from "sweetalert";

const Register = () => {
  const { createUser, handleUpdateProfile, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const [registerError, setRegisterError] = useState("");
  // const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    setRegisterError("");
    // setSuccess("");

    if (password.length < 6) {
      setRegisterError("password should 6 character");
      return;
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=])/.test(password)
    ) {
      setRegisterError(
        "At least one uppercase letter, one lowercase letter, one number and one special character."
      );
      return;
    }

    createUser(email, password)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        handleUpdateProfile(name).then(() => {
          swal("Good job!", "You created an account successfully!", "success");
          navigate("/");
        });
      })
      .catch((error) => {
        setRegisterError(error.message);
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
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-5">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
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
                    className="absolute top-[252PX] right-10 link link-hover"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
                {registerError && (
                  <p className="text-red-700 mt-2 ">{registerError}</p>
                )}
                <div className="form-control mt-5">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>

              <p>
                Already have an account? Please
                <Link to="/login">
                  <button className=" -ml-3 btn btn-link">Login</button>
                </Link>
              </p>
              <p className="text-center">
                Continue with <br />
                <hr />
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-sm btn-outline mt-4 w-full hover:btn-primary"
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

export default Register;
