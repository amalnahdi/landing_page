import { ReactComponent as ReactLogo } from "./abc.svg";
import { ReactComponent as Svg1 } from "./imageR11.svg";
import { ReactComponent as Svg2 } from "./imageR2.svg"; 
import { ReactComponent as Svg3 } from "./imageL.svg" ; 
import { ReactComponent as Svg4 } from "./1.svg";
import { ReactComponent as Svg5 } from "./2.svg";
import { ReactComponent as Svg6 } from "./3.svg" ;


import "./App.css";
import { useEffect, useState } from "react";
import { Player } from "video-react";
import axios from 'axios'
const CardDone=()=>{
  return(
    <div class="d-flex flex-col col-md-3 test" 
    >

          <Svg4  style={{
    display:'flex',
    flex:1,
    position:'absolute',
    bottom:'80%',
    right:'15%',
    height:'50%',

  }}/> 
  
 

 <div className='d-flex  ' style={{
   flexDirection:'column',
   paddingTop:"53%",
   flex:1
 }}>
 <h2 style={{paddingBottom:'5%'}}>bad communication</h2>
  <p>You’re fed up with having to explain yourself multiple times.</p>
 </div>
     

   

</div>
  )
}

const CardDtwo=()=>{
  return(
    <div class="d-flex flex-col col-md-3 test" 
    >

          <Svg5  style={{
    display:'flex',
    flex:1,
    position:'absolute',
    bottom:'80%',
    right:'15%',
    height:'50%',

  }}/> 
  
 

 <div className='d-flex  ' style={{
   flexDirection:'column',
   paddingTop:"53%",
   flex:1
 }}>
 <h2 style={{paddingBottom:'5%'}}> poor quality </h2>
  <p>You’re tired of the guessing.game to find the right designer.</p>
 </div>
     

   

</div>
  )
}

const CardDth=()=>{
  return(
    <div class="d-flex flex-col col-md-3 test" 
    >

          <Svg6 style={{
    display:'flex',
    flex:1,
    position:'absolute',
    bottom:'80%',
    right:'15%',
    height:'50%',

  }}/> 
  
 

 <div className='d-flex  ' style={{
   flexDirection:'column',
   paddingTop:"53%",
   flex:1
 }}>
 <h2 style={{paddingBottom:'5%'}}>Missed deadlines </h2>
  <p>You lose hope as deadlines are missed over and over again.</p>
 </div>
     

   

</div>
  )
}
const Nav = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light "
      style={{ backgroundColor: "#663B74 !important" }}
    >
      <a class="navbar-brand " href="#" style={{color:'white'}}>
        <strong>Pixeltrue</strong> 
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-end " id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#" style={{color:'white'}}>
              Case studying <span class="sr-only">(current)</span>
            </a>
          </li>

          <li class="nav-item ">
            <a class="nav-link" href="#" style={{color:'white'}}>
              pricing
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="#" style={{color:'white'}}>
              Our Work
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="#" style={{color:'white'}}>
              Our Platform
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{color:'white'}}
            >
              More
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#" style={{color:'white'}}>
                Action
              </a>
              <a class="dropdown-item" href="#" style={{color:'white'}}>
                Another action
              </a>
              <a class="dropdown-item" href="#" style={{color:'white'}}>
                Something else here
              </a>
            </div>
          </li>
          <li class="nav-item dropdown"style={{color:'white'}}>
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{color:'white'}}
            >
              Login
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#" style={{color:'white'}}>
                Action
              </a>
              <a class="dropdown-item" href="#" style={{color:'white'}}>
                Another action
              </a>
              <a class="dropdown-item" href="#" style={{color:'white'}}>
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>

      <button type="button" class="btn btn-danger">
        schedule Demo{" "}
      </button>

      {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
      {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
    </nav>
  );
};
function App() {
  const [count, SetCounter] = useState(0);
  const [texts, setTexts] = useState([]);
  const [animate, setAniamte] = useState("slide0");

  const NextSlide = () => {
    if (count + 1 > slider.length - 1) {
      SetCounter(0);
    } else {
      SetCounter(count + 1);
    }
  };
  const cards = [
    [
      {
        image: "./img2.png",
        description: "UI Design",
      },
      {
        image: "./img3.svg",
        description: "App Design",
      },
    ],
    [
      {
        image: "./img4.png",
        description: "UI Design",
      },
      {
        image: "./img1.jpg",
        description: "App Design",
      },
    ],
    [
      {
        image: "./img5.png",
        description: "Graphic Design",
      },
      {
        image: "./img6.gif",
        description: "Animation",
      },
    ],
  ];
const fetchData=async ()=>{
let text=await axios.get('https://protected-shore-14845.herokuapp.com/text')
setTexts(text.data.data)}
useEffect(()=>{
  // setTimeout(()=>{
  //   fetchData()

  // },3000)
  setInterval(() => {
    // NextSlide()
  }, 2000);
})

  const slider = [
    {
      image: "p1.png",
      username: "BASHIR KHAIRY  ",
      role: "founder",
      content: `I have nothing but praise for the Pixel True team and their services. The project manager coordinates everything very well and all the designers are on the same page.

      The most important part of this plan is the amazing level of skill and talent all of the designers have. I honestly think the pricing is too low for the quality of work that is provided`,
    },
    {
      image: "p1.png",
      username: "counter2  ",
      role: "founder",
      content: `I have nothing but praise for the Pixel True team and their services. The project manager coordinates everything very well and all the designers are on the same page.

      The most important part of this plan is the amazing level of skill and talent all of the designers have. I honestly think the pricing is too low for the quality of work that is provided`,
    },
  ];
  return (
    <div
      className="App container-fluid"
      style={{ padding: "0px", margin: "0px" }}
    >
      <div className="row">
        <div className="bg col-md-12">
          <Nav />

          <div
            style={{
              alignContent: "center",
              justifyContent: "center",
              marginTop: "9%",
              marginBottom: "9%",
            }}
          >
            <h1>Get A Superhero Design Team</h1>
            <h1> To Grow Your Business</h1>
          </div>
          <div
            style={{
              alignContent: "center",
              justifyContent: "center",
              marginTop: "9%",
              marginBottom: "9%",
            }}
          >
            <h5>
              {" "}
              We provide an experienced design team that works with you everyday
            </h5>{" "}
            <h5>
              {" "}
              to create high-quality design assets to help grow your business.
              Zero
            </h5>{" "}
            <h5> headaches, fixed pricing and no contracts. </h5>
            <button type="button" class="btn btn-danger">
              see our pricing{" "}
            </button>
          </div>
        </div>
      </div>

      <div class="row" style={{ backgroundColor: "#0F123D" , color:'grey' }}>
        <div class="col-sm-2"><strong>educative</strong> </div>
        <div class="col-sm-2"><strong>steam</strong></div>
        <div class="col-sm-2"><strong>liggrsystems</strong></div>
        <div class="col-sm-2"><strong>bridgeprofits</strong> </div>
        <div class="col-sm-2"><strong>inquivix</strong></div>
     
      </div>
      <div class="row" style={{ color: "grey", backgroundColor: "#0F123D" }}>
        <div class="col-md-6 text-muted "><p><strong>many requests</strong></p></div>
        <div class="col-md-6 text-muted" style={{color:"grey"}}><p><strong> many requests</strong></p></div>
        
     
      </div>
      <div class="row" style={{ color: "white", backgroundColor: "#0F123D" }}>
        <div 
        class="align-self-end"
          style={{
            alignContent: "center",
            justifyContent: "center",
            marginTop: "9%",
            marginBottom: "9%",
            color: "white",
            marginLeft: "35%",
            marginRight: "25%",
          }}
        >
          <h2>We get it. Reliable designers</h2>{" "}
          <div style={{ color: "#87CEEB" }}>
            <h2>are hard to find.</h2>
          </div>
        </div>
<div class="d-flex justify-content-around pl-5">
<CardDone/>
<CardDtwo/>
<CardDth/>
       
      
      </div>
      </div>
      <div
        class="row"
        style={{
          backgroundColor: "#0F123D",
          alignContent: "center",
          justifyContent: "center",
          paddingTop: "9%",
          paddingBottom: "9%",
          color: "white",
        }}
      >
        <div className="col-md-12">
          <h2>Design doesn’t have to be hard.</h2>{" "}
          <div style={{ color: "#87CEEB" }}>
            <h2>We make it easy.</h2>
          </div>
        </div>
      </div>
      <div class="row" style={{ backgroundColor: "#0F123D" }}>
        <div class="col-md-12" style={{ color: "white" }}>
          <div className="row">
            <div class= "d-flex justify-content-start">
            <div className="col-md-6 my-auto  justify-content-center">
              <h1>Breath-taking Designs</h1>
              <p >With faded secondary text
                All of our designers are carefully vetted and have years of
                experience working in the design industry. You’ll get a
                dedicated UI Designer, Graphic Designer, Illustrator and Project
                Manager. With a full design team, getting breath-taking designs
                couldn't be any easier!{" "}
                </p>
              </div>
              <div className='col-md-6'>
                <Svg1/>
              </div>
            </div>
            </div>


<div className='row d-flex'>
            <div class=" col-md-6">
            <Svg3/>
           </div>     
            <div className="col-md-6  my-auto d-flex justify-content-center " style={{justifyContent:'center',alignItems:'center',display:"center",flexDirection:'column'}}> 
             <h1>Communication That Matters</h1> 
      
             <p>
                With a dedicated Project Manager who cares about your success
                and direct live-chat access to your experienced designers,
                communication issues will be no more!{" "}
                </p>
            </div>
            
            </div>
            <div className='row d-flex ' style={{flexDirection:'row-reverse'}}>
            <div class=" col-md-6">
            <Svg2/>
           </div>     
            <div className="col-md-6  my-auto d-flex justify-content-center " style={{justifyContent:'center',alignItems:'center',display:"center",flexDirection:'column'}}> 
             <h1>Communication That Matters</h1> 
      
              <p>
                With a dedicated Project Manager who cares about your success
                and direct live-chat access to your experienced designers,
                communication issues will be no more!{" "}
              </p>
            </div>
            
            </div>
          </div>
        </div>
        
      <div
        className="row"
        style={{ backgroundColor: "#0F123D", color: "white", paddingTop: "5%" }}
      >
        <div className="col-md-3">
          <ReactLogo />
        </div>
        <div
          className="col-md-9"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            paddingBottom:"9%"
          }}
        >
          
          {
            texts.map(text=>{
              return(
                <div class=" d-flex justify-content-center">
                <div class="col-md-8" 
                style={{
                  borderWidth: "0",
                  backgroundImage: `url("./box.svg")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                   paddingBottom:"9%",
                  width: "auto",
                  height: "150px",
                  maxheight: "50px",
                  maxWidth: "70%", 
                  paddingTop:"5%"
                  }}>
                  <h3>Create design projects</h3>{" "}
                  <small>
                    Submit as many job requests as you want. We'll then assign you
                    your personal designers and project manager to work on these
                    requests
                  </small>
                </div>
              </div>
              )
            })
          }
          
        </div>
        <div className="col-md-12 mb-5">
          <button
            type="button"
            class="btn btn-danger"
            style={{ alignSelf: "center" }}
          >
            schedule Demo{" "}
          </button>
        </div>

        <div className="col-md-12">
          <div style={{ color: "#87CEEB" }}>
            <h2>Custom Designs</h2>
          </div>

          <h5>
            Crafted with skill and care to help our clients grow their business!
          </h5>
        </div>
      </div>
      {cards.map((card) => {
        return (
          <div
            class="row"
            style={{
              justifyContent: "space-around",
              alignItems: "flex-start",
              backgroundColor: "#0F123D",
            }}
          >
            <div className="col-md-2"></div>

            {card.map((c) => {
              return (
                <div className="col-md-4 mb-2" style={{ position: "relative" }}>
                  <div
                    class="card margin gif"
                    id="a"
                    style={{
                      width: "450px",
                      height: "400px",
                      position: "relative",
                      backgroundImage: "url(" + c.image + ")",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div
                    className="title"
                    style={{
                      width: "auto",
                      height: "auto",
                      position: "absolute",
                      top: "5%",
                      left: "6%",
                      backgroundColor: "white",
                      padding: "1%",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "15px",
                    }}
                  >
                    <span>{c.description}</span>
                  </div>
                </div>
              );
            })}
            <div className="col-md-2"></div>
          </div>
        );
      })}
      <div
        style={{
          backgroundColor: "#0F123D",
          alignContent: "center",
          justifyContent: "center",
          paddingTop: "9%",
          paddingBottom: "9%",
        }}
      >
        <button type="button" class="btn btn-danger">
          View More{" "}
        </button>
        <div style={{ color: "white", paddingTop: "9%" }}>
          {" "}
          <h2>Our Process on Youtube</h2>{" "}
        </div>
      </div>
      <div class="col-md-2" style={{ backgroundColor: "#0F123D" }}></div>
      <div
        class="col-md-12"
        style={{
          backgroundColor: "#0F123D",
          alignContent: "center",
          justifyContent: "center",
          paddingRight: "20%",
          paddingLeft: "20%",
        }}
      >
        <Player
          playsInline
          poster="/assets/poster.png"
          src="https://www.youtube.com/embed/A6WEAuSvcgY"
        />
      </div>
      <div style={{ paddingTop: "1%",
          paddingBottom: "1%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0F123D",}}>
            <h3 style={{color:'blue'}}> wall of love </h3>
          </div>
      <div
        className="col-md-12"
        style={{
          paddingTop: "1%",
          paddingBottom: "1%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0F123D",
        }}
      >
        <button
          onClick={() => {
            // NextSlide();
            setAniamte("slide1")
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ height: "120", color: "#87CEEB",zIndex:"1" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
        </button>
        <div
          className={`card margin gif ${"slide0"==animate?"":"move-right"}`}
          style={{
            borderWidth: "0",
            backgroundImage: `url("./box.svg")`,
            backgroundSize: "cover",
            backgroundColor: "inherit",
            display: "flex",
            width: "600px",
            height: "400px",
            justifyContent: "center",
            paddingBottom: "9%",
            paddingTop: "9%",
            position: "relative",
            alignSelf: "center",
          }}
        >
          <div className="row">
            <div
              className="col-md-2 image"
              style={{ justifyContent: "flex-start", alignItems: "center" }}
            >
              <div
                style={{
                  height: "100px",
                  width: "100px",
                  borderRadius: "50%",
                  backgroundImage: `url("./p1.png")`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  alignSelf: "center",
                  marginLeft: "30%",
                }}
              ></div>
            </div>
            <div className="col-md-10">
              <h5 style={{ color: "white" }}>{slider[count].username} </h5>

              <h5 style={{ color: "#87CEEB" }}>founder </h5>
              <h6
                style={{
                  color: "white",
                  justifyContent: "center",
                  marginTop: "20%",
                }}
              >
                Pixel True have been fantastic. I get complimented all the time
                on our illustrations, and I don't think my brand would be half
                as recognisable without them.
              </h6>
            </div>
          </div>
        </div>
        <div
          className={`card margin gif ${"slide1"==animate?"move-back":"d-none"}`}
          style={{
            borderWidth: "0",
            backgroundImage: `url("./box.svg")`,
            backgroundSize: "cover",
            backgroundColor: "inherit",
            display: "flex",
            width: "600px",
            height: "400px",
            justifyContent: "center",
            paddingBottom: "9%",
            paddingTop: "9%",
            position: "relative",
            alignSelf: "center",
          }}
        >
          <div className="row">
            <div
              className="col-md-2 image"
              style={{ justifyContent: "flex-start", alignItems: "center" }}
            >
              <div
                style={{
                  height: "100px",
                  width: "100px",
                  borderRadius: "50%",
                  backgroundImage: `url("./p1.png")`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  alignSelf: "center",
                  marginLeft: "30%",
                }}
              ></div>
            </div>
            <div className="col-md-10">
              <h5 style={{ color: "white" }}>{slider[count].username} </h5>

              <h5 style={{ color: "#87CEEB" }}>founder </h5>
              <h6
                style={{
                  color: "white",
                  justifyContent: "center",
                  marginTop: "20%",
                }}
              >
                Pixel True have been fantastic. I get complimented all the time
                on our illustrations, and I don't think my brand would be half
                as recognisable without them.
              </h6>
            </div>
          </div>
        </div>
      
        <button
          onClick={() => {
            NextSlide();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{
              height: "120",
              color: "#87CEEB",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>

      <div style={{ backgroundColor: "#0F123D" }}>
        <h2 style={{ color: "white " }}> Membership benefits</h2>

        <div class="row d-flex">
          <div className="col-md-6  flex-col  " style={{ float: "right" }}>
            <div
              className="ml-auto"
              style={{
                borderWidth: "0",
                backgroundImage: `url("./box.svg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",

                width: "auto",
                height: "200px",
                maxheight: "200px",
                maxWidth: "70%",

                alignItems: "center",
                padding: "9%",
              }}
            >
              <h3 >Fast turnaround</h3>
              <h6 >Get your designs back on average in 2-3 days.</h6>
            </div>

            <div
              className="ml-auto"
              style={{
                borderWidth: "0",
                backgroundImage: `url("./box.svg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",

                width: "auto",
                height: "200px",
                maxheight: "200px",
                maxWidth: "70%",

                alignItems: "center",
                padding: "9%",
              }}
            >
              <h3>Human support</h3>
              <h6>Dedicated Project Manager to ensure smooth delivery of design projects.</h6>
            </div> 


            


          </div>
          <div className="col-md-6 flex-col ">
            <div
              className="mr-auto"
              style={{
                borderWidth: "0",
                backgroundImage: `url("./box.svg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",

                width: "auto",
                height: "200px",
                maxheight: "200px",
                maxWidth: "70%",

                justifyContent: "center",
                alignItems: "center",
                padding: "9%",
              }}
            >
              <h3>Team collaboration</h3>
              <h4> Work directly with your new design team and project manager.</h4>
            </div>
            <div
              className="mr-auto"
              style={{
                borderWidth: "0",
                backgroundImage: `url("./box.svg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",

                width: "auto",
                height: "200px",
                maxheight: "200px",
                maxWidth: "70%",

                justifyContent: "center",
                alignItems: "center",
                padding: "9%",
              }}
            >
              <h4>Ownership of files</h4>
              <h4>Have 100% ownership of all original source files created for your project.</h4>
            </div>
          </div>
        </div>
      </div>
      <div className='row p-1 mx-auto d-flex ' style={{backgroundColor:'#0F123D'}} >
              <div className='col-md-10 offset-1' style={{
                height:"400px",
                backgroundImage:`url('./bg.png')`,
                backgroundSize:'100% 100%',
                backgroundRepeat:'no-repeat',
                justifyContent:'center',alignItems:'center',
                display:'flex'  
              }}>
                <div  style={{justifyContent:'center',alignItems:'center'}}>
                         <h4> Try us out risk free! </h4>  <h6> All our plans are backed by a  </h6> 
                           <h6>14 day money-back guarantee. </h6>
                             <button type="button" class="btn btn-danger" style={{alignSelf:'center'}}>
                                   see pricing{" "}
                                 </button>

                 </div>
              </div>
       </div>

<footer class="text-center text-lg-start pt-1  text-muted" style={{backgroundColor:'#0F123D'}}>
  
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Company name
          </h6>
          <p>
          Get actionable tips on how to increase sales and conversions with design!
          </p>
          <p>
          <button type="button" class="btn btn-danger" style={{alignSelf:'center',height:'80%',width:"40%"}}>
                                   see pricing{" "}
                                 </button>
                                 </p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
          Services

          </h6>
          <p>
            <a href="#!" class="text-reset">Our Platform</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Testimonials</a>
          </p>
          <p>
            <a href="#!" class="text-reset">our work</a>
          </p>
          <p>
            <a href="#!" class="text-reset">pricing</a>
            <a href="#!" class="text-reset">schedule a demo</a>
            
          
          </p>
        </div>


        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

          <h6 class="text-uppercase fw-bold mb-4">
          Company
          </h6>
          <p>
            <a href="#!" class="text-reset">about us </a>
          </p>
          <p>
            <a href="#!" class="text-reset">Case Studies</a>
          </p>
          <p>
            <a href="#!" class="text-reset">License</a>
          </p>
          <p>
            <a href="#!" class="text-reset">FAQs</a>
            <a href="#!" class="text-reset">Refund Policy</a>

          </p>
        </div>



        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

          <h6 class="text-uppercase fw-bold mb-4">
          Resources
          </h6>
          <p><i class="fas fa-home me-3"></i> 
support@pixeltrue.com
</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            160 Robinson Road, #14-04 Singapore Business Federation Centre
          </p>
        </div>
      
      </div>
     
    </div>
  </section>

  <div class="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">All Rights Reserved PIXEL TRUE STUDIO PTE. LTD 2019-2021</a>
  </div>
</footer>
</div>
       

  );
}

export default App;
