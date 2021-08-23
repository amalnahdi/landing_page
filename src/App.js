import logo from './logo.svg';
import './App.css';
const Nav=()=>{
  return(
    
    <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#663B74 !important"}}>
           <a class="navbar-brand" href="#">Navbar</a>
           
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarNavDropdown">
           <ul class="navbar-nav">
           <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
           </li>
           
            <li class="nav-item">
             <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
            <a  class="nav-link" href="#">Pricing</a>     
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          More 
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Login
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
        
      </li>
    </ul>
 
   </div>
      <button type="button" class="btn btn-danger">schedule Demo </button>


    {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
    {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
  
  
  
</nav>
  )
}
function App() {
  return (
      <div className="App">
      <Nav/>   
      <div style={{alignContent:'center',justifyContent:'center',marginTop:"9%",marginBottom:"9%"}}>
      <h1>Get A Superhero Design Team</h1><h1> To Grow Your Business</h1>
      </div>
      <div style={{alignContent:'center',justifyContent:'center',marginTop:"3%",marginBottom:"9%"}}>

    <h5> We provide an experienced design team that works with you everyday</h5> <h5> to create high-quality design assets to help grow your business. Zero</h5> <h5> headaches, fixed pricing and no contracts. </h5>
    <button type="button" class="btn btn-danger">see our pricing </button>
      </div>
      <div className="container-fluid" style={{height:"200px",backgroundColor:'violet'}}>

      </div>


    </div>
  );
}

export default App;
