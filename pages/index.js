import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/nav";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isOn1, setIsOn1] = useState(false);
  const [isOn2, setIsOn2] = useState(false);
  const [isOn3, setIsOn3] = useState(false);


  const closeSvg = (
    <svg className="w-3 h-3 fill-current" viewBox="0 -192 469.33333 469">
      <path d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0" />
    </svg>
  );

  const openSvg = (
    <svg className="w-3 h-3 fill-current" viewBox="0 0 469.33333 469.33333">
      <path d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0" />
    </svg>
  );

  return (
    <>
      <Head>
        <title>CloudeInU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* <!--Hero--> */}
      <div
        className="py-20 h-screen"
        style={{
          background: "url('/cloude-bg.svg')",
        }}
      >
        <div className="container mx-auto px-6 py-10">
          <div className="flex mb-4">
            <div className="w-1/2 p-2">
              <h1 className="text-5xl font-bold mb-2 text-yellow-300">
                Cloude In U
              </h1>
              <h2 className="text-4xl font-bold mb-2 text-yellow-300">
                Bulut Sunucusu
              </h2>
              <h3 className="text-2xl mb-8">Güvenilir, Ekonomik, Kolay</h3>
              {/* bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full */}
              <button className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-500 hover:bg-indigo-800 text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                <Link href="/sign-up">
                  <a>Sign Up</a>
                </Link>
              </button>
            </div>
            <div className="w-1/2 p-2 text-center">
              <img src="/guide-tr.gif" alt="guide" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Features --> */}
      <section className="container mx-auto px-6 p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Features
        </h2>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Exercise Metrics
            </h4>
            <p className="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch is able to capture you
              vitals while you exercise. You can create different category of
              exercises and can track your vitals on the go.
            </p>
          </div>
          <div className="w-50 md:w-1/2">
            <img src="/cloude-db.svg" alt="Monitoring" />
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <img src="/email.svg" alt="Reporting" />
          </div>
          <div className="w-full md:w-1/2 pl-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Reporting</h4>
            <p className="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch can generate a
              comprehensive report on your vitals depending on your settings
              either daily, weekly, monthly, quarterly or yearly.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Syncing</h4>
            <p className="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch allows you to sync data
              across all your mobile devices whether iOS, Android or Windows OS
              and also to your laptop whether MacOS, GNU/LInux or Windows OS.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src="analysis.svg" alt="Syncing" />
          </div>
        </div>
      </section>

      {/* Steps Guide */}
      <section className="max-w-5xl mx-auto py-10">
        <div>
          <div className="flex flex-row">
            <div className="hidden md:flex flex-col items-center">
              <div className="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
                <div className="text-3xl font-black text-gray-500">Step 1</div>
                <div className="text-gray-500 text-sm">Idea</div>
              </div>
              <div className="h-full border-l-4 border-transparent">
                <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
              </div>
            </div>
            <div className="flex-auto border rounded  border-gray-300">
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex-auto">
                  <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
                    <span className="font-black">Step 1</span> - Idea
                  </div>
                  <div className="p-3 text-3xl text-gray-800 font">
                    Find your best idea
                  </div>
                  <div className="px-3 pb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam facilis, voluptates error alias dolorem praesentium
                    sit soluta iure incidunt labore explicabo eaque, quia
                    architecto veritatis dolores, enim consequatur nihil ipsum.
                  </div>
                </div>
                <div className="md:w-96 w-full p-5">
                  <img
                    src="https://image.flaticon.com/icons/svg/1330/1330216.svg"
                    alt="step 1"
                    className="object-scale-down"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start flex-row">
            <div className="border-t-4 border-r-4 border-transparent">
              <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
            </div>
            <div className="border-t-4 border-transparent flex-auto">
              <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
            </div>
            <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
          </div>
          <div className="flex flex-row-reverse">
            <div className="hidden md:flex flex-col items-center">
              <div className="w-32 py-5 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
                <div className="text-3xl font-black text-gray-500">Step 2</div>
                <div className="text-gray-500 text-sm">Collaboration</div>
              </div>
              <div className="h-full border-r-4 border-transparent">
                <div className="border-l-4 ml-4 h-full border-gray-300 border-dashed"></div>
              </div>
            </div>
            <div className="flex-auto border rounded  border-gray-300">
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex-auto">
                  <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
                    <span className="font-black">Step 2</span> - Collaboration
                  </div>
                  <div className="p-3 text-3xl text-gray-800 font">
                    Find your team and collaborate
                  </div>
                  <div className="px-3 pb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam facilis, voluptates error alias dolorem praesentium
                    sit soluta iure incidunt labore explicabo eaque, quia
                    architecto veritatis dolores, enim consequatur nihil ipsum.
                  </div>
                </div>
                <div className="md:w-96 w-full p-5">
                  <img
                    src="https://image.flaticon.com/icons/svg/1330/1330216.svg"
                    alt="step 2"
                    className="object-scale-down"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start flex-row-reverse">
            <div className="border-t-4 border-l-4 border-transparent">
              <div className="w-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-b-4 rounded-br-full"></div>
            </div>
            <div className="border-t-4 border-transparent flex-auto">
              <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
            </div>
            <div className="w-16 mt-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-t-4 rounded-tl-full"></div>
          </div>
          <div className="flex flex-row">
            <div className="hidden md:flex flex-col items-center">
              <div className="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
                <div className="text-3xl font-black text-gray-500">Step 3</div>
                <div className="text-gray-500 text-sm">Planification</div>
              </div>
              <div className="h-full border-l-4 border-transparent">
                <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
              </div>
            </div>
            <div className="flex-auto border rounded  border-gray-300">
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex-auto">
                  <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
                    <span className="font-black">Step 3</span> - Planification
                  </div>
                  <div className="p-3 text-3xl text-gray-800 font">
                    Make a good plan and prepare tasks
                  </div>
                  <div className="px-3 pb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam facilis, voluptates error alias dolorem praesentium
                    sit soluta iure incidunt labore explicabo eaque, quia
                    architecto veritatis dolores, enim consequatur nihil ipsum.
                  </div>
                </div>
                <div className="md:w-96 w-full p-5">
                  <img
                    src="https://image.flaticon.com/icons/svg/1330/1330216.svg"
                    alt="step 3"
                    className="object-scale-down"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start flex-row">
            <div className="border-t-4 border-r-4 border-transparent">
              <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
            </div>
            <div className="border-t-4 border-transparent flex-auto">
              <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
            </div>
            <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
          </div>
          <div className="flex flex-row-reverse">
            <div className="hidden md:flex flex-col items-center">
              <div className="w-32 py-5 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
                <div className="text-3xl font-black text-gray-500">Step 4</div>
                <div className="text-gray-500 text-sm">Implementation</div>
              </div>
            </div>
            <div className="flex-auto border rounded  border-gray-300">
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex-auto">
                  <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
                    <span className="font-black">Step 4</span> - Implementation
                  </div>
                  <div className="p-3 text-3xl text-gray-800 font">
                    Execute, impletement your solution
                  </div>
                  <div className="px-3 pb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam facilis, voluptates error alias dolorem praesentium
                    sit soluta iure incidunt labore explicabo eaque, quia
                    architecto veritatis dolores, enim consequatur nihil ipsum.
                  </div>
                </div>
                <div className="md:w-96 w-full p-5">
                  <img
                    src="https://image.flaticon.com/icons/svg/1330/1330216.svg"
                    alt="step 4"
                    className="object-scale-down"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Testimonials --> */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Testimonials
          </h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 px-2 mb-4">
              <div className="bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">
                  Monitoring and tracking my health vitals anywhere I go and on
                  any platform I use has never been easier.
                </p>
                <p className="text-gray-500 text-xs md:text-sm px-6">
                  John Doe
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4">
              <div className="bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">
                  As an Athlete, this is the perfect product for me. I wear my
                  Smart Health Monitoring Wristwatch everywhere i go, even in
                  the bathroom since it's waterproof.
                </p>
                <p className="text-gray-500 text-xs md:text-sm px-6">
                  Jane Doe
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4">
              <div className="bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">
                  I don't regret buying this wearble gadget. One of the best
                  gadgets I own!.
                </p>
                <p className="text-gray-500 text-xs md:text-sm px-6">
                  James Doe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Call to Action--> */}
      {/* style={{ backgroundColor: "#667eea" }} */}
      <section
        style={{
          background: "url('/matrix-bg.svg')",
        }}
      >
        <div className="container mx-auto px-6 text-center py-20">
          <h2 className="mb-6 text-4xl font-bold text-center text-white">
            Limited in Stock
          </h2>
          <h3 className="my-4 text-2xl text-white">
            Get yourself the Smart Health Monitoring Wristwatch!
          </h3>
          <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out">
            Pre Order
          </button>
        </div>
      </section>

      {/* FAQ */}

      <section>
        <div className="bg-white mx-auto p-6">
          <div className="mb-4">
            <div
              onClick={() => setIsOn1(!isOn1)}
              className="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold cursor-pointer hover:bg-gray-300"
            >
              1. Lorem ipsum dolor sit amet?
              <span className="h-6 w-6 flex items-center justify-center text-teal-500">
                {!isOn1 ? openSvg : closeSvg}
              </span>
            </div>
            <div className={`${isOn1 ? "show" : "hidden"} p-3`}>
              <p className="text-gray-600 mb-3">
                1.1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed nulla porttitor, porttitor arcu ut, dictum
                augue. Vestibulum consequat in urna in bibendum. Praesent sed
                magna risus. Nunc elementum in mauris ac pharetra. Ut blandit ut
                lorem sit amet rutrum. Vivamus ut purus fringilla, euismod nibh
                ut, blandit.
              </p>
              <p className="text-gray-600">
                1.2. Nunc ac efficitur sapien. Mauris eu lectus odio. Mauris ac erat
                tortor. Nulla consectetur commodo justo. Pellentesque eget
                ornare quam. Pellentesque sodales metus non semper luctus.
                Praesent non ornare tellus, eget vulputate tellus. Donec luctus
                non sapien sed semper.
              </p>
            </div>
          </div>
          <div className="mb-4">
          <div
              onClick={() => setIsOn2(!isOn2)}
              className="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold cursor-pointer hover:bg-gray-300"
            >
              2. Lorem ipsum dolor sit amet?
              <span className="h-6 w-6 flex items-center justify-center text-teal-500">
                {!isOn2 ? openSvg : closeSvg}
              </span>
            </div>
            <div className={`${isOn2 ? "show" : "hidden"} p-3`}>
              <p className="text-gray-600 mb-3">
                2.1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed nulla porttitor, porttitor arcu ut, dictum
                augue. Vestibulum consequat in urna in bibendum. Praesent sed
                magna risus. Nunc elementum in mauris ac pharetra. Ut blandit ut
                lorem sit amet rutrum. Vivamus ut purus fringilla, euismod nibh
                ut, blandit.
              </p>
              <p className="text-gray-600">
                2.2. Nunc ac efficitur sapien. Mauris eu lectus odio. Mauris ac erat
                tortor. Nulla consectetur commodo justo. Pellentesque eget
                ornare quam. Pellentesque sodales metus non semper luctus.
                Praesent non ornare tellus, eget vulputate tellus. Donec luctus
                non sapien sed semper.
              </p>
            </div>
          </div>
          <div className="mb-4">
          <div
              onClick={() => setIsOn3(!isOn3)}
              className="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold cursor-pointer hover:bg-gray-300"
            >
              3. Lorem ipsum dolor sit amet?
              <span className="h-6 w-6 flex items-center justify-center text-teal-500">
                {!isOn3 ? openSvg : closeSvg}
              </span>
            </div>
            <div className={`${isOn3 ? "show" : "hidden"} p-3`}>
              <p className="text-gray-600 mb-3">
                3.1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed nulla porttitor, porttitor arcu ut, dictum
                augue. Vestibulum consequat in urna in bibendum. Praesent sed
                magna risus. Nunc elementum in mauris ac pharetra. Ut blandit ut
                lorem sit amet rutrum. Vivamus ut purus fringilla, euismod nibh
                ut, blandit.
              </p>
              <p className="text-gray-600">
                3.2. Nunc ac efficitur sapien. Mauris eu lectus odio. Mauris ac erat
                tortor. Nulla consectetur commodo justo. Pellentesque eget
                ornare quam. Pellentesque sodales metus non semper luctus.
                Praesent non ornare tellus, eget vulputate tellus. Donec luctus
                non sapien sed semper.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!--Footer--> */}
      <Footer />
      {/* <footer className="bg-gray-100">
        <div className="container mx-auto px-6 pt-10 pb-6">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/4 text-center md:text-left ">
              <h5 className="uppercase mb-6 font-bold">Links</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    FAQ
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Help
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left ">
              <h5 className="uppercase mb-6 font-bold">Legal</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Terms
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left ">
              <h5 className="uppercase mb-6 font-bold">Social</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left ">
              <h5 className="uppercase mb-6 font-bold">Company</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Official Blog
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    About Us
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
}
