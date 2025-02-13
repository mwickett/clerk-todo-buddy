
import { SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
          <div className="w-full max-w-md p-8 backdrop-blur-lg bg-white/80 rounded-2xl shadow-xl">
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-3xl font-semibold text-gray-900">Welcome</h1>
                <p className="mt-2 text-gray-600">Sign in to manage your tasks</p>
              </div>
              <div className="space-y-4">
                <SignIn routing="path" path="/sign-in" afterSignInUrl="/" />
              </div>
              <div className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <SignUp routing="path" path="/sign-up">
                  <span className="text-blue-500 hover:text-blue-600 cursor-pointer">
                    Sign up
                  </span>
                </SignUp>
              </div>
            </div>
          </div>
        </div>
      </SignedOut>
    </>
  );
};

export default AuthWrapper;
