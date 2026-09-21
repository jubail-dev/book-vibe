import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="bg-base-100 rounded-2xl shadow-xl border border-base-300 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">📚</div>

            <h1 className="text-3xl font-bold text-gray-800">
              Welcome Back!
            </h1>

            <p className="text-gray-500 mt-2">
              Sign in to continue your Book Vibe journey
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full input input-bordered h-12 focus:outline-none focus:border-primary"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-700"
                >
                  Password
                </label>

                <Link
                  href="#"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full input input-bordered h-12 focus:outline-none focus:border-primary"
              />
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm"
              />

              <label
                htmlFor="remember"
                className="text-sm text-gray-600 cursor-pointer"
              >
                Remember me
              </label>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="btn btn-primary w-full h-12 text-base"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-7">
            <div className="h-px bg-base-300 flex-1"></div>
            <span className="text-sm text-gray-400">OR</span>
            <div className="h-px bg-base-300 flex-1"></div>
          </div>

          {/* Google Button */}
          <button className="btn btn-outline w-full h-12">
            Continue with Google
          </button>

          {/* Sign Up */}
          <p className="text-center text-sm text-gray-500 mt-7">
            Don Not have an account?{" "}
            <Link
              href="/sign-up"
              className="font-semibold text-primary hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-5">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-primary"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
