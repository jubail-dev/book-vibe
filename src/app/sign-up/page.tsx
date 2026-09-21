
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="bg-base-100 rounded-2xl shadow-xl border border-base-300 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">📚</div>

            <h1 className="text-3xl font-bold text-gray-800">
              Create Your Account
            </h1>

            <p className="text-gray-500 mt-2">
              Join Book Vibe and start your reading journey
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full input input-bordered h-12 focus:outline-none focus:border-primary"
              />
            </div>

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
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Create a password"
                className="w-full input input-bordered h-12 focus:outline-none focus:border-primary"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="w-full input input-bordered h-12 focus:outline-none focus:border-primary"
              />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input
                id="terms"
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm mt-0.5"
              />

              <label
                htmlFor="terms"
                className="text-sm text-gray-600 cursor-pointer"
              >
                I agree to the{" "}
                <Link
                  href="#"
                  className="text-primary hover:underline font-medium"
                >
                  Terms & Conditions
                </Link>
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="btn btn-primary w-full h-12 text-base"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-7">
            <div className="h-px bg-base-300 flex-1"></div>
            <span className="text-sm text-gray-400">OR</span>
            <div className="h-px bg-base-300 flex-1"></div>
          </div>

          {/* Google */}
          <button className="btn btn-outline w-full h-12">
            Continue with Google
          </button>

          {/* Sign In */}
          <p className="text-center text-sm text-gray-500 mt-7">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-semibold text-primary hover:underline"
            >
              Sign In
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

export default SignUpPage;
