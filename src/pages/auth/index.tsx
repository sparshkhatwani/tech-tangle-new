import { authModalState } from "@/atoms/authModalAtom";
import AuthModal from "@/components/Modals/AuthModal";
import Navbar from "@/components/Navbar/Navbar";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilValue } from "recoil";

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
  const authModal = useRecoilValue(authModalState);
  const [user, loading, error] = useAuthState(auth);
  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
    if (!loading && !user) setPageLoading(false);
  }, [user, router, loading]);

  if (pageLoading) return null;

  return (
    <div className="bg-dark-layer-2 h-screen relative">
      <div className="max-w-7xl bg-dark-layer-2 mx-auto min-w-full">
        <Navbar />
        {/* height of the div under "flex items-center" was h-[calc(100vh-5rem)] */}
        <div className="flex items-center justify-center h-[calc(100vh - 1rem)] pointer-events-none select-none">
          {/* <img src="/hero.png" alt="HERO IMAGE" /> */}
        </div>
        {authModal.isOpen && <AuthModal />}
      </div>


      <section className="bg-harry font-inter container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">Problem Solving Platform</span> made <br className="hidden lg:block" /> for <span className="font-semibold underline decoration-primary"><span/>Data Structures & Alogrithms</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source platform for essentials of data stuctures and <br className="hidden lg:block" /> algorithms for your skills, assesments or interviews!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
             
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>

      <section className="font-inter py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Your Journey Starts Here
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Choose the path that suits you best
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Basic Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Basic
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  1 month required
                </p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    <s>Opitmal Solutions</s>
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    <s>Basic Support</s>
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    <s>Hard Problems</s>
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Community Access
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Weekly Updates
                  </li>
                </ul>
                <button className="mx-1 bg-black text-white py-2 px-5 text-sm font-semibold rounded-md">
                  Choose Path
                </button>
              </div>
            </div>
            {/* Standard Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Standard
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  3 months required
                </p>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">
                  Recommended
                </span>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    Optimal Solutions
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Priority Support
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Up to 5 Users
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Community Access
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Daily Updates
                  </li>
                </ul>
                <button className="mx-1 bg-black text-white py-2 px-5 text-sm font-semibold rounded-md">
                  Choose Path
                </button>
              </div>
            </div>
            {/* Premium Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Premium
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  6 months required
                </p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    Optimal Solutions
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Personal Guidance
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Unlimited Users
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Community Access
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Real-time Updates
                  </li>
                </ul>
                <button className="mx-1 bg-black text-white py-2 px-5 text-sm font-semibold rounded-md">
                  Choose Path
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="font-inter py-12 bg-white dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">What Our Clients Say</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Hear from our satisfied customers</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Testimonial 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"This service has been a game-changer for our business. Highly recommend!"</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">John Doe</h3>
          <p className="text-gray-500 dark:text-gray-300">CEO, Company A</p>
        </div>
      </div>
      {/* Testimonial 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"Amazing experience! The team was professional and the results were outstanding."</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Jane Smith</h3>
          <p className="text-gray-500 dark:text-gray-300">Marketing Director, Company B</p>
        </div>
      </div>
      {/* Testimonial 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"Exceptional service and support. We couldn't be happier with the results."</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Michael Brown</h3>
          <p className="text-gray-500 dark:text-gray-300">CTO, Company C</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="font-inter py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Top Blogs</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out our most popular blog posts</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Blog 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="./blog1.jpeg" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 1</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
            <button className="m-2 bg-black text-white py-2 px-5 text-sm font-semibold rounded-md">Read More</button>
          </div>
        </div>
      </div>
      {/* Blog 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog 2" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 2</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
            <button className="m-2 bg-black text-white py-2 px-5 text-sm font-semibold rounded-md">Read More</button>
          </div>
        </div>
      </div>
      {/* Blog 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg" alt="Blog 3" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 3</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
            <button className="m-2 bg-black text-white py-2 px-5 text-sm font-semibold rounded-md">Read More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <div className="font-inter bg-gray-900">
        <section className="container mx-auto py-24 flex flex-col md:flex-row items-center">
          <div className="flex flex-col items-center px-6">
            <h1 className="font-sans text-6xl  font-bold text-indigo-800 mb-4">
              {/* <!-- < TechTangle />  --> */}
              <span className="text-brand-orange">TechTangle</span>
            </h1>

            <p className="text-[17px] text-gray-200 mb-3 mx-10">
              TECH TANGLE is an innovative full-stack web application designed
              to help users enhance their coding skills, specifically in Data
              Structures and Algorithms (DSA). The platform offers an
              interactive environment where users can solve coding challenges,
              run their code in real-time, and receive immediate feedback. It is
              tailored to prepare users for technical interviews, competitive
              programming, and improve problem-solving abilities.
            </p>

            <section className="font-inter container mx-auto py-16 bg-gray-900">
              <h2 className="text-3xl font-bold text-center text-gray-200 mb-10">
                Built Using
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-indigo-200 p-8 rounded-lg shadow-md text-center">
                  <div className="flex justify-between">
                    <img
                      src="./react-logo-1.png"
                      className="rounded-lg h-10"
                      alt=""
                    />
                    <img src="./tail.png" className="rounded-lg h-10" alt="" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    React & Tailwind CSS
                  </h3>
                  <p className="text-gray-600">
                    React: A JavaScript library for building dynamic UIs with
                    reusable components.
                  </p>
                  <p className="text-gray-600">
                    Tailwind CSS: A utility-first CSS framework for fast,
                    responsive design without custom CSS.
                  </p>
                </div>
                <div className="bg-yellow-200 p-8 rounded-lg shadow-md text-center">
                  <div className="flex justify-between">
                    <img
                      src="./nextjs.1024x1024.png"
                      className="rounded-lg h-10"
                      alt=""
                    />
                    <img
                      src="./Typescript_logo_2020.svg.png"
                      className="rounded-lg h-10"
                      alt=""
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Next JS & TypeScript
                  </h3>
                  <p className="text-gray-600">
                    Next.js: A React framework for fast, server-side rendered
                    apps with built-in routing.
                  </p>
                  <p className="text-gray-600">
                    TypeScript: A JavaScript superset adding static typing for
                    better code quality.
                  </p>
                </div>
                <div className="bg-orange-200 p-8 rounded-lg shadow-md text-center">
                  <div className="flex justify-between">
                    <img src="./fire.png" className="rounded-lg h-10" alt="" />
                    <img src="./mind.jpeg" className="rounded-lg h-10" alt="" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Firebase & FireStore
                  </h3>
                  <p className="text-gray-600">
                    Firebase Firestore: A cloud-based NoSQL database for
                    real-time data syncing and scalable storage.
                  </p>
                </div>
              </div>
            </section>

            <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-medium py-3 px-8 rounded-full">
              Start Your Journey
            </button>
          </div>
        </section>
      </div>

      <div className="font-inter bg-gray-900">
        <section className="container mx-auto py-16">
          <h2 className="text-3xl font-bold text-center text-gray-200 mb-10">
            Our Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-gray-800 border-2 border-gray-700 p-6 rounded-lg shadow-md">
              <img
                src="./lap1.jpg"
                alt="Article Image"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-200 mb-2">
                Practice Coding Challenges
              </h3>
              <p className="text-gray-300">
                Sharpen your problem-solving skills with a variety of coding
                challenges tailored to all skill levels. Solve problems, run
                your code, and get immediate feedback.
              </p>
            </article>
            <article className="bg-gray-800 border-2 border-gray-700 p-6 rounded-lg shadow-md">
              <img
                src="./tree.png"
                alt="Article Image"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-200 mb-2">
                Learn Data Structures & Algorithms
              </h3>
              <p className="text-gray-300">
                Master essential Data Structures and Algorithms with curated
                problems designed to strengthen your understanding. Prepare
                yourself for technical interviews and coding competitions.
              </p>
            </article>
            <article className="bg-gray-800 border-2 border-gray-700 p-6 rounded-lg shadow-md">
              <img
                src="./prog1.jpg"
                alt="Article Image"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-200 mb-2">
                Track Your Progress
              </h3>
              <p className="text-gray-300">
                Monitor your growth as you solve problems and track your
                performance over time. Stay motivated with detailed reports and
                insights into your coding journey.
              </p>
            </article>
          </div>
        </section>
      </div>

      <div className="font-inter bg-gray-900">
        <section className="container mx-auto py-16 bg-gray-900">
          <h2 className="text-3xl font-bold text-center text-gray-200 mb-10">
            What role do we play?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 border-2 border-gray-700 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-200">
                Explore Optimal Solutions
              </h3>
              <p className="text-lg text-gray-300 mb-4">
                Access expert-reviewed optimal solutions for each problem. Learn
                efficient techniques and enhance your coding knowledge by
                comparing your approach with the best practices.
              </p>
            </div>
            <div className="bg-gray-800 border-2 border-gray-700 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-200">
                Real-Time Code Execution
              </h3>
              <p className="text-lg text-gray-300 mb-4">
                Run your code in real time and see the results instantly. Our
                integrated code execution environment supports code editor to
                help you test and improve your solutions effortlessly
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="font-inter bg-gray-900">
        <section className="container mx-auto py-16 bg-gray-900">
          <h2 className="text-3xl font-bold text-center text-gray-200 mb-10">
            Our Characteristics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-100 p-8 rounded-lg shadow-md text-center">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Powerful Analytics
              </h3>
              <p className="text-gray-600">
                Get in-depth insights into your coding performance. Our
                analytics feature tracks your strengths, identifies areas for
                improvement, and helps you optimize your learning journey.
              </p>
            </div>
            <div className="bg-green-100 p-8 rounded-lg shadow-md text-center">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Reliable and Trusted
              </h3>
              <p className="text-gray-600">
                Ensure a smooth, secure, and dependable coding experience. You
                can trust our platform to support your learning and growth.
              </p>
            </div>
            <div className="bg-orange-100 p-8 rounded-lg shadow-md text-center">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 6l3 1m0 0l-3 1m3-1l3 1m0 0l-3 1m3-1l3 1m0 0l-3 1m3-1l3 1m0 0l-3 1m3-1l3 1m0 0l-3 1m3-1"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Customized Learning Paths
              </h3>
              <p className="text-gray-600">
                Tailor your learning experience with customizable paths designed
                to suit your goals and skill level. Whether you're preparing for
                interviews or exploring new algorithms.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="font-inter bg-gray-900">
        <footer className="bg-gray-800 text-white py-20 px-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold mb-3">Useful Links</h4>
              <ul className="text-gray-300 flex flex-wrap md:flex-nowrap">
                <li className="mr-4">
                  <a href="#" className="hover:text-white">
                    Link 1
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" className="hover:text-white">
                    Link 2
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" className="hover:text-white">
                    Link 3
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" className="hover:text-white">
                    Link 4
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Link 5
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-6 md:mt-0">
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <svg
                  className="w-6 h-6 fill-current text-black"
                  viewBox="0 0 24 24"
                >
                  <rect width="24" height="24" />
                </svg>
                <svg
                  className="w-6 h-6 fill-current text-black"
                  viewBox="0 0 24 24"
                >
                  <rect width="24" height="24" />
                </svg>
                <svg
                  className="w-6 h-6 fill-current text-black"
                  viewBox="0 0 24 24"
                >
                  <rect width="24" height="24" />
                </svg>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default AuthPage;
