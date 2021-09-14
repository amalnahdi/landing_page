import { ReactComponent as ReactLogo } from "./abc.svg";
import "./App.css";
import { useState } from "react";
import { Player } from "video-react";

const Nav = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light "
      style={{ backgroundColor: "#663B74 !important" }}
    >
      <a class="navbar-brand" href="#">
        Navbar
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
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Pricing
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
            >
              More
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
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
            >
              Login
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
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

  const texts = [
    {
      title: "Create design projects",
      content:
        "Submit as many job requests as you want. We'll then assign you your personal designers and project manager to work on these requests",
    },
    {
      title: "Drafts & revisions",
      content:
        "You’ll receive your design within a few business days. Submit as many revisions as you want until the design is perfect! ",
    },
    {
      title: "Complete & download",
      content:
        "Submit as many job requests as you want. We'll then assign you your personal designers and project manager to work on these requests",
    },
  ];
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
      <div class="row" style={{ backgroundColor: "#0F123D" }}>
        <div class="col-sm-1">educative </div>
        <div class="col-sm-1">steam</div>
        <div class="col-sm-1">liggrsystems</div>
        <div class="col-sm-1">bridgeprofits </div>
        <div class="col-sm-1">inquivix</div>
      </div>
      <div class="row" style={{ color: "white", backgroundColor: "#0F123D" }}>
        <div class="col-md-6">ggg</div>
        <div class="col-md-6">hhhh</div>
      </div>
      <div class="row" style={{ color: "white", backgroundColor: "#0F123D" }}>
        <div
          style={{
            alignContent: "center",
            justifyContent: "center",
            marginTop: "9%",
            marginBottom: "9%",
            color: "white",
            marginLeft: "25%",
            marginRight: "25%",
          }}
        >
          <h2>We get it. Reliable designers</h2>{" "}
          <div style={{ color: "#87CEEB" }}>
            <h2>are hard to find.</h2>
          </div>
        </div>

        <div class="col-sm-1 col-md-3">
          <h2>poor quality</h2>
          <h5>You’re tired of the guessing game to find the right designer.</h5>
        </div>
        <div class="col-md-3">
          <h2>bad communication</h2>
          <h5>You’re fed up with having to explain yourself multiple times.</h5>
        </div>
        <div class="col-md-3">
          <h2>missed deadlines</h2>You lose hope as deadlines are missed over
          and over again
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
            <div className="col-md-6">
              <h1>Breath-taking Designs</h1>
              <p>
                All of our designers are carefully vetted and have years of
                experience working in the design industry. You’ll get a
                dedicated UI Designer, Graphic Designer, Illustrator and Project
                Manager. With a full design team, getting breath-taking designs
                couldn't be any easier!{" "}
              </p>
            </div>
            <div className="col-md-6">
              <h1>Communication That Matters</h1>
              <p>
                With a dedicated Project Manager who cares about your success
                and direct live-chat access to your experienced designers,
                communication issues will be no more!{" "}
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-12" style={{ color: "white" }}>
          <div className="row">
            <div className="col-md-6">
              <h1>No More Missed Deadlines</h1>
              <p>
                Need that design done on a specific date? You can trust us to
                deliver it on time. Once we commit to a date, we'll get it done.
                Job requests will on average be delivered in a few business
                days. Simpler tasks such as graphic designs and revisions will
                be delivered within 24 hours.{" "}
              </p>
            </div>
            <div className="col-md-6">
              <h1>Communication That Matters</h1>
              <p>
                With a dedicated Project Manager who cares about your success
                and direct live-chat access to your experienced designers,
                communication issues will be no more{" "}
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
          }}
        >
          <div class="div-block-305">
            <div class="col-md-8">
              <h3>Create design projects</h3>{" "}
              <p>
                Submit as many job requests as you want. We'll then assign you
                your personal designers and project manager to work on these
                requests
              </p>
            </div>
          </div>
          <div class="div-block-305">
            <div class="col-md-8">
              <h3>Drafts revisions</h3>
              <p>
                You’ll receive your design within a few business days. Submit as
                many revisions as you want until the design is perfect!
              </p>
            </div>
          </div>
          <div class="div-block-305">
            <div class="col-md-8">
              <h3>Complete download</h3>
              <p>
                Submit as many job requests as you want. We'll then assign you
                your personal designers and project manager to work on these
                requests
              </p>
            </div>
          </div>
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
                      position: "aboslute",
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
            NextSlide();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ height: "120", color: "#87CEEB" }}
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
          class=" card margin gif"
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
              <h4>sddsffsdfdf</h4>
              <h4>sddsffsdfdf</h4>
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
              <h4>sddsffsdfdf</h4>
              <h4>sddsffsdfdf</h4>
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
              <h4>sddsffsdfdf</h4>
              <h4>sddsffsdfdf</h4>
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
              <h4>sddsffsdfdf</h4>
              <h4>sddsffsdfdf</h4>
            </div>
          </div>
        </div>
      </div>
      <div className='row p-1 mx-auto '>
              <div className='col-md-10 offset-1' style={{
                height:"400px",
                backgroundImage:`url('./bg.png')`,
                backgroundSize:'100% 100%',
                backgroundRepeat:'no-repeat'
              }}>
              </div>
      </div>
    </div>
  );
}

export default App;
