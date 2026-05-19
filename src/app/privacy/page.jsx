import Link from "next/link";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 sm:p-10 space-y-8">
        
        {/* Header Section */}
        <div className="border-b border-slate-100 dark:border-slate-700 pb-6 text-center sm:text-left">
          <span className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            Data Protection Secure
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 italic">
            Effective Date: May 2026 | Keeping your fleet journey safe and transparent
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Section 01 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-indigo-600 dark:text-indigo-400 font-mono">01.</span> 
              Information We Collect
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              To operate the DriveFleet engine efficiently, we collect specific identity parameters during your interaction. This includes your full name, email address, secure photo URL generated via integrated social logins (Google Auth), and specific vehicle metadata if you create dynamic car listings.
            </p>
          </section>

          {/* Section 02 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-indigo-600 dark:text-indigo-400 font-mono">02.</span> 
              Secure Storage & Cookies Architecture
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              We do not store passwords in plain text format. Authentication is strictly guarded using modern validation states. To protect private route components, your session is encapsulated within an <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">HTTPOnly Cookie</strong> system containing a signed JSON Web Token (JWT).
            </p>
          </section>

          {/* Section 03 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-indigo-600 dark:text-indigo-400 font-mono">03.</span> 
              Database Modifications & Booking Analytics
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              When utilizing our interface to register vehicle configurations or request reservations, information is committed safely to our cluster database. System algorithms handle automatic transaction logs like booking increments via protected server middlewares.
            </p>
          </section>
        </div>

        {/* Footer & Action Section */}
        <div className="border-t border-slate-100 dark:border-slate-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 dark:text-slate-500 text-center sm:text-left max-w-md leading-normal">
            By interacting with our single-page application framework, you accept these direct privacy methodologies.
          </p>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-sm transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicyPage;