import React, { useEffect, useState } from 'react';

export default function Home(){

  const[list,setList] = useState([]);

    const getData=async()=>{
      let res = await fetch("http://localhost:8080/product/getAllProducts",{method:"GET",headers:{"content-type":"application/json"}});
      let json = await res.json();
      setList(json);
    }
    // calling during page loading
    useEffect(()=>{
      getData();
    },[])


  return (
    <div>
      <div className="container-fluid">
        <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a href="" className="text-decoration-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">Product Review</span>
              </h1>
            </a>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}>
              <h6 className="m-0">Categories</h6>
              <i className="fa fa-angle-down text-dark"></i>
            </a>
            <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
              <div className="navbar-nav w-100 overflow-hidden" style={{ height: '410px' }}>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1"></i></a>
                  <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                    <a href="" className="dropdown-item">Men's Dresses</a>
                    <a href="" className="dropdown-item">Women's Dresses</a>
                    <a href="" className="dropdown-item">Baby's Dresses</a>
                  </div>
                </div>
                <a href="" className="nav-item nav-link">Shirts</a>
                <a href="" className="nav-item nav-link">Jeans</a>
                <a href="" className="nav-item nav-link">Swimwear</a>
                <a href="" className="nav-item nav-link">Sleepwear</a>
                <a href="" className="nav-item nav-link">Sportswear</a>
                <a href="" className="nav-item nav-link">Jumpsuits</a>
                <a href="" className="nav-item nav-link">Blazers</a>
                <a href="" className="nav-item nav-link">Jackets</a>
                <a href="" className="nav-item nav-link">Shoes</a>
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <a href="" className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-weight-semi-bold">
                  <span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper
                </h1>
              </a>
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav mr-auto py-0">
                  <a href="index.html" className="nav-item nav-link active">Home</a>
                  <a href="shop.html" className="nav-item nav-link">Shop</a>
                  <a href="detail.html" className="nav-item nav-link">Shop Detail</a>
                  <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
                <div className="navbar-nav ml-auto py-0">
                  <a href="/login" className="nav-item nav-link">Login</a>
                  <a href="/login" className="nav-item nav-link">Register</a>
                </div>
              </div>
            </nav>
            <div id="header-carousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" style={{ height: '410px' }}>
                  <img className="img-fluid" src="img/carousel-1.jpg" alt="Image" />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: '700px' }}>
                      <h3 className="display-4 text-white font-weight-semi-bold mb-4">Product Review</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar End */}

      {/* Categories Start */}
<div className="container-fluid pt-5">
 <div className="row px-xl-5 pb-3">
          {/*create a list ofproducta*/} 
          {
            list && list.map((obj,index)=>{
              return(
                <div className="col-lg-4 col-md-6 pb-1">
                <div className="cat-item d-flex flex-column border mb-4" style={{ padding: '30px' }}>
                  <p className="text-right">15 Products</p>
                  <a href={"/details?id="+obj._id} className="cat-img position-relative overflow-hidden mb-3">
                    <img className="img-fluid" src="img/cat-1.jpg" alt="" />
                  </a>
                  <h5 className="font-weight-semi-bold m-0">{obj.name}</h5>
                </div>
              </div>
               
              )
            })
          }

</div>
</div>
        {/* Categories End */}
    
    
        {/*Offer Start */}
        
    
    
    
    
        {/* Back to Top*/}
        <a href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>
       
    </div>
  )
}