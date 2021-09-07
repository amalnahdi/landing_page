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
const Pricing=()=>{
  return(
    <div className="flex pt-32 justify-center  w-full h-screen pb-5">
    <div className="flex flex-col items-center space-y-6 w-2/3 h-1/3">
      <h1 className='text-white text-4xl'>Get A Superhero Design Team </h1>
      <h1 className='text-white text-4xl'>To Grow Your Business</h1>
    <div className="flex flex-col items-center justify-between space-y-7 w-3/5">
      <h3 className='text-white text-4sm pt-3'>
      We provide an experienced design team that works with you everyday to create high-quality design assets to help grow your business. Zero headaches, fixed pricing and no contracts.
      </h3>
      <button className="bg-red-500 px-8 mt-5 py-4 rounded-3xl	text-white text-4sm ring-8	ring-red-500 ring-opacity-20 hover:ring-opacity-50">
          SEE OUR PRICING
      </button>
      </div>

    </div>
  </div>
  )
}
const Sponsor=()=>{
  const sponsors=[
    {
      image:"https://uploads-ssl.webflow.com/5dd3495558fd7f3d1fcb52bc/6051fea67000c0ca9fca0695_5f05b754a9e7ff40555d6203_Repeat%20Grid%201%201.svg"
    },
    {
      image:"https://uploads-ssl.webflow.com/5dd3495558fd7f3d1fcb52bc/60935bf3cbbe7038ca0d5220_Educative%20Logo%20(1).png"
    },
    {
      image:"https://uploads-ssl.webflow.com/5dd3495558fd7f3d1fcb52bc/5f50d21aa1488360e926f525_Artboard.png"
    },
    {
      image:"https://uploads-ssl.webflow.com/5dd3495558fd7f3d1fcb52bc/6051fea3c3254355530fbdfb_45227905-0-Artboard%201.svg"
    }
    
  ]
  return(
  <div
        className="flex  w-screen bg-indigo-900 h-auto pb-10 justify-center content-center items-center"
       
      >
        <div className="flex flex-col  md:flex-row w-1/2 h-full justify-between pt-10 content-end items-end">
        {
          sponsors.map(sponsor=>
            
           <img src={sponsor.image} style={{height:'100px',width:'140px'}}/>
            )
            
          
        }
        </div>
        </div>
)}
function App() {

  return (
    <div className="App w-full h-screen ">
      <div
        className="w-auto bg-green h-auto pb-10"
        style={{
          backgroundImage: `url('https://uploads-ssl.webflow.com/5dd3495558fd7f3d1fcb52bc/5fd8c68e7f095f59346d6dfa_Artboard%20%E2%80%93%202%20(1).png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavBar />
        <Pricing/>
      </div>
      <Sponsor/>
      <div className="flex pt-16 justify-center  w-full h-auto pb-10 bg-indigo-900">
    <div className="flex flex-col items-center space-y-6 w-2/3 h-1/3">
      <h1 className='text-white text-4xl'>We get it. Reliable designers </h1>
      <h1 className='text-blue-500 text-4xl'>are hard to find</h1>
      </div>
      </div>
      <div className="flex   w-full h-screen pb-5 bg-indigo-900">

      <div className="flex  flex-col  justify-center items-center space-y-3 lg:flex-row  lg:justify-between w-full mt-1 space-x-2">
          <div style={{height:"400px",width:'350px',backgroundImage:`url("https://uploads-ssl.webflow.com/5dd3495558fd7f3d1fcb52bc/605200ca638f38edafded84c_Rectangle%20482.svg?fbclid=IwAR2YPXFYr8cltgiFowXumHqPFsfBXQsJrQYPyqOC4gFUgEgac490awGnhs8")`,backgroundSize:'cover',backgroundRepeat: "no-repeat"}} className='rounded-3xl hover:ring-red-100 '>

          </div>
          <div style={{height:"400px",width:'350px',backgroundImage:`url("https://uploads-ssl.webflow.com/5dd3495558fd7f3d1fcb52bc/605200ca638f38edafded84c_Rectangle%20482.svg?fbclid=IwAR2YPXFYr8cltgiFowXumHqPFsfBXQsJrQYPyqOC4gFUgEgac490awGnhs8")`,backgroundSize:'cover',backgroundRepeat: "no-repeat"}} className='rounded-3xl'>
            
          

          </div>
          <div style={{height:"400px",width:'350px',backgroundImage:`url("https://uploads-ssl.webflow.com/5dd3495558fd7f3d1fcb52bc/605200ca638f38edafded84c_Rectangle%20482.svg?fbclid=IwAR2YPXFYr8cltgiFowXumHqPFsfBXQsJrQYPyqOC4gFUgEgac490awGnhs8")`,backgroundSize:'cover',backgroundRepeat: "no-repeat"}} className='rounded-3xl'>

          </div>
        
      </div>
      </div>

    
    </div>
  );
}

export default App;
