import CommonWrapper from "../common/CommonWrapper";

const Home = () => {
  return (
    <CommonWrapper>
      <div className="h-screen  bg-website-color-lightGreen flex flex-col  gap-11 items-center justify-center text-center p-6">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to Your Dashboard
        </h1>

        {/* Subheading / Description */}
        <p className="text-gray-700 text-lg md:text-xl mb-6 max-w-2xl">
          Explore your platform, manage your users, and keep track of your progress easily.
        </p>

        {/* Call-to-action button */}
        <a
          href="https://cheesuschrusty.netlify.app/user"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
  User Dashbord
        </a>

        <a
          href="https://cheesuschrusty.netlify.app/admin"
          className="px-6 py-3   bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
         Admin Dashbord
        </a>
      </div>
    </CommonWrapper>
  );
};

export default Home;
