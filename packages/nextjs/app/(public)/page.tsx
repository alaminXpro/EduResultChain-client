import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white dark:bg-slate-900 shadow-md">
        <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500">
                <Image src="/logo.png" alt="EduResultChain Logo" width={150} height={50} />
              </span>
            </h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="#"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="hidden md:block">
            <Link href="/login">
              <button className="mr-2 px-4 py-2 border border-slate-300 rounded text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-800 transition">
                Log In
              </button>
            </Link>
            <Link href="/register">
              {" "}
              <button className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition">
                Sign Up
              </button>
            </Link>
          </div>
          <button className="md:hidden text-slate-700 dark:text-slate-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      <main className="flex-grow bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Academic Integrity through{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500">
              Blockchain Transparency
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10">
            EduResultChain—a blockchain-powered platform ensuring secure, authentic, and tamper-proof academic records.
            Simplify verification, management, and validation with ease. Transforming education, one record at a time!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/login">
              <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
                Sign In
              </button>
            </Link>
            <button className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-800 transition">
              View Projects
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose EduResultChain?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-emerald-600 dark:text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422A12.042 12.042 0 0112 21.5a12.042 12.042 0 01-6.16-10.922L12 14z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Result Processing</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Support for session-wise and annual result compilation. Handling supplementary or re-examination
                results.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422A12.042 12.042 0 0112 21.5a12.042 12.042 0 01-6.16-10.922L12 14z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Data Visualization</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Graphs and charts to show student performance trends.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-violet-600 dark:text-violet-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422A12.042 12.042 0 0112 21.5a12.042 12.042 0 01-6.16-10.922L12 14z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Security and Privacy</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Secure storage and transmission of student data. Compliance with data protection regulations (e.g.,
                GDPR, FERPA).
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-amber-600 dark:text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422A12.042 12.042 0 0112 21.5a12.042 12.042 0 01-6.16-10.922L12 14z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Technology Integration</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Use of modern technologies like cloud storage for scalability. Integration with Learning Management
                Systems (LMS).
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-12 md:p-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start your Secure journey?</h2>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Join thousands of students who are already enhancing the future with EduResultChain.
            </p>
            <button className="px-6 py-3 bg-white text-emerald-600 rounded-lg hover:bg-slate-100 transition">
              Get Started Today
            </button>
          </div>
        </section>
      </main>
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Your{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500">
                  EduResultChain
                </span>
              </h3>
              <p className="mb-4">Empowering Academic Integrity through Blockchain Transparency</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p>© {new Date().getFullYear()} EduResultChain All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
