import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header Section (consistent with home page) */}
      <header className="pt-16 pb-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-rose-800 mb-4">
            Welcome
          </h1>
          <p className="text-xl text-gray-700 max-w-lg mx-auto">
            Sign in to your Embrace Family account
          </p>
        </div>
      </header>

      {/* Login Form */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-md">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-sm text-rose-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-rose-600 text-white font-semibold rounded-lg hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition-colors"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link href="/register" className="text-rose-600 hover:underline font-medium">
                Create account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}