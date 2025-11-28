import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-10">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Welcome to Our Platform!</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl text-center">
        Your journey begins here. Explore our features and connect with our community.
      </p>
      <div className="mb-8">
        <Image
          src="https://cmitsolutions.com/bothell-wa-1091/wp-content/uploads/sites/105/2023/03/hacker-g840eb2d5f_1920.jpg"
          alt="Hacker Image"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="flex space-x-4">
        <a
          href="/admin/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out text-lg font-medium"
        >
          Admin Login
        </a>
        <a
          href="#"
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out text-lg font-medium"
        >
          Learn More
        </a>
      </div>
      <footer className="mt-20 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Our Platform. All rights reserved.
      </footer>
    </div>
  );
}