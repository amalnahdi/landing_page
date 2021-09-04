const NavBar = () => {
  return (
    <div className="flex flex-row justify-between w-auto m-0 px-10 content-center pt-5">
      <div className="flex flex-row h-10 w-30 space-x-2">
        <img src="https://uploads-ssl.webflow.com/5dd3495558fd7f3d1fcb52bc/5fc675c11f5b4212db8ecb65_Group%202.svg" />
        <span className="self-center color text-white font-medium	">
          pixeltrue
        </span>
      </div>
      <div className="hidden md:flex flex-row space-x-5 w-auto  text-white bg-yellow  pt-1">
        <span className="group flex flex-col cursor-pointer  space-y-0 w-auto h-auto content-center ">
          <p className="m-0 p-0">Case Studies</p>
          <p className="w-auto h-1 bg-red-500 opacity-0  group-hover:opacity-100 transition-width transition-slowest linear"></p>
        </span>
        <span className="group flex flex-col cursor-pointer  space-y-0 w-auto h-auto content-center ">
          <p className="m-0 p-0">Pricing</p>
          <p className="w-auto h-1 bg-red-500 opacity-0  group-hover:opacity-100 transition-width transition-slowest linear"></p>
        </span>
        <span className="group flex flex-col cursor-pointer  space-y-0 w-auto h-auto content-center ">
          <p className="m-0 p-0">Our Work</p>
          <p className="w-auto h-1 bg-red-500 opacity-0  group-hover:opacity-100 transition-width transition-slowest linear"></p>
        </span>
        <span className="group flex flex-col cursor-pointer  space-y-0 w-auto h-auto content-center ">
          <p className="m-0 p-0">Our platform </p>
          <p className="w-auto h-1 bg-red-500 opacity-0  group-hover:opacity-100 transition-width transition-slowest linear"></p>
        </span>
        <span className="group flex flex-col cursor-pointer  space-y-0 w-auto h-auto content-center ">
          <p className="m-0 p-0 content-center flex flex-row space-x-1 h-full">
            <span>
            More
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 self-start pt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
</svg>

          </p>
          <p className="w-auto h-1 bg-red-500 opacity-0  group-hover:opacity-100 transition-width transition-slowest linear"></p>
        </span>
        <span className="group flex flex-col cursor-pointer  space-y-0 w-auto h-auto content-center ">
          <p className="m-0 p-0">Login</p>
          <p className="w-auto h-1 bg-red-500 opacity-0  group-hover:opacity-100 transition-width transition-slowest linear"></p>
        </span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="flex md:hidden h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
</svg>
    </div>
  );
};
function App() {
  return (
    <div className="App w-screen h-screen">
      <div
        className="w-screen bg-green h-screen"
        style={{
          backgroundImage: `url('https://uploads-ssl.webflow.com/5dd3495558fd7f3d1fcb52bc/5fd8c68e7f095f59346d6dfa_Artboard%20%E2%80%93%202%20(1).png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavBar />
      </div>
      <div className="w-screen bg-green h-screen bg-indigo-900"></div>
    </div>
  );
}

export default App;
