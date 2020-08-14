import React from "react";

const mdetails = () => {
  return (
    <div class="row">
      <div class="col-sm-12 mt-3 mt-lg-0 d">My details</div>
      <div class="col-sm-3 shad1 p-3 mb-5 bg-white rounded-sm mt-sm-3 p-sm-5 d-none d-sm-none d-md-none d-lg-block">
        <div class="border bordr "></div>
        <div>
          <a href="#" class="l">
            Edit
          </a>
        </div>
      </div>

      <div class="col-lg-8 col-6 offset-lg-1 mr-auto">
        <div class="row">
          <div class="col-lg-3 boldtext  mt-4 mt-lg-0 ">Name</div>
          <div class="col-lg-4 lighttext">Agnideep Sengupta</div>
          <div class="col-lg-3 offset-lg-1 boldtext d-none d-sm-none d-md-none d-lg-block">
            Biolege membership
          </div>
          <div class="col-lg-1 d-none d-sm-none d-md-none d-lg-block lighttext">
            Yes
          </div>
          <div class="col-lg-3 mt-3 boldtext">Gender</div>
          <div class="col-lg-4 mt-lg-3 lighttext">Male</div>
          <div class="col-lg-3 mt-sm-3 offset-lg-1 boldtext d-none d-sm-none d-md-none d-lg-block">
            Member Modal
          </div>
          <div class="col-lg-1 mt-sm-3 d-none d-sm-none d-md-none d-lg-block lighttext">
            family
          </div>
          <div class="col-lg-3 mt-3 boldtext">Date of Birth</div>
          <div class="col-lg-4 mt-lg-3 lighttext">September 04, 1998</div>
          <div class="w-100"></div>
          <div class="col-lg-3 mt-3 boldtext">Age</div>
          <div class="col-lg-4 mt-lg-3 lighttext">21</div>
          <div class="w-100"></div>
          <div class="col-lg-3 mt-3 boldtext">Contact</div>
          <div class="col-lg-4 mt-lg-3 lighttext">
            8876977257{" "}
            <a class="sidetext" href="">
              Edit
            </a>
          </div>
          <div class="w-100"></div>
          <div class="col-lg-3 mt-3 boldtext">
            E-mail<a class="text-muted sidetext"> (optional)</a>
          </div>
          <div class="col-lg-4 mt-lg-3 lighttext">agnideepsg02@gmail.com</div>
          <div class="w-100"></div>
          <div class="col-lg-3 mt-3  boldtext">Blood Group</div>
          <div class="col-lg-4 mt-lg-3 lighttext">A+</div>
          <div class="col-lg-3 mt-3 offset-lg-1 boldtext d-lg-none d-xl-none ">
            Biolege membership
          </div>
          <div class="col-lg-1 d-lg-none d-xl-none lighttext">Yes</div>
          <div class="col-lg-3 mt-3 offset-lg-1 d-lg-none d-xl-none boldtext">
            Member Modal
          </div>
          <div class="col-lg-1 mt-sm-3 d-lg-none d-xl-none lighttext">
            family
          </div>
        </div>
      </div>
      <div class="col-6 d-lg-none d-xl-none ml-auto mt-4">
        <div class="border bordr rounded "></div>
        <div>
          <a href="#" class="l">
            Edit
          </a>
        </div>
      </div>
      <div class="col-sm-12 text-right">
        <button type="button " class="btn btn-sm px-sm-5 button-text">
          Save
        </button>
        <hr class="hr-style" />
      </div>
    </div>
  );
};

export default mdetails;
