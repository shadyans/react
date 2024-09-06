import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
function FooterComp() {
  return (
    <div className="h-auto text-white bg-[#272554] bg grid grid-cols-12  ">
      <div className="  sm:col-span-3 col-span-12 ml-3 mr-3 mt-5 ">
        <div className="">
          <img
            className="h-10 w-30"
            src="https://ifingerstudio.com/eduvalt/wp-content/themes/eduvalt/assets/img/logo/secondary_logo.png"
          />
        </div>

        <div>
          <p className=" mt-4 text-slate-400">
            when an unknown printer took galley of type and scrambled it to make
            pspecimen bookt has.
          </p>{" "}
        </div>

        <div className=" mt-4 font-bold">463 7th Ave, NY 10018, USA</div>
        <div className=" mt-2 font-bold">+123 88 9900 456</div>

        <div className=" mt-2 flex gap-x-4 ">
          <a className="text-white" href="">
            <FacebookIcon />
          </a>
          <a className="text-white" href="">
            <WhatsAppIcon />
          </a>
          <a className="text-white" href="">
            <TwitterIcon />
          </a>
          <a className="text-white" href="">
            <LinkedInIcon />
          </a>
          <a className="text-white" href="">
            <YouTubeIcon />
          </a>
        </div>
      </div>
      <div className=" sm:col-span-3 col-span-12 mt-5 ml-3 mr-3 ">
        <div className="text-2xl font-bold">Resoursec</div>
        <div className="mt-2">
          <a className="no-underline text-slate-500 font-medium" href="">
            About
          </a>
        </div>
        <div className="mt-2">
          <a className="no-underline text-slate-500 font-medium" href="">
            Contact
          </a>
          <div className="mt-2">
            <a className="no-underline text-slate-500 font-medium" href="">
              Help Center
            </a>
            <div className="mt-2">
              <a className="no-underline text-slate-500 font-medium" href="">
                Refund
              </a>
              <div className="mt-2">
                <a className="no-underline text-slate-500 font-medium" href="">
                  Conditions
                </a>
                <div className="mt-2">
                  <a
                    className="no-underline text-slate-500 font-medium"
                    href=""
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" sm:col-span-3 col-span-12 ml-3 mr-3 mt-5 ">
        <div className="text-2xl font-bold">Courses</div>
        <div className="mt-2">
          <a className="no-underline text-slate-500 font-medium" href="">
            Life Coach
          </a>
        </div>
        <div className="mt-2">
          <a className="no-underline text-slate-500 font-medium" href="">
            Health Coach
          </a>
          <div className="mt-2">
            <a className="no-underline text-slate-500 font-medium" href="">
              development{" "}
            </a>
            <div className="mt-2">
              <a className="no-underline text-slate-500 font-medium" href="">
                Web Design
              </a>
              <div className="mt-2">
                <a className="no-underline text-slate-500 font-medium" href="">
                  SEO Optimize
                </a>
                <div className="mt-2">
                  <a
                    className="no-underline text-slate-500 font-medium"
                    href=""
                  >
                    Business Coach
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="- h-80 sm:col-span-3 col-span-12 ml-3 mr-3 mt-4 ">
        <div className="text-xl mt-4 font-bold">Working Hour</div>
        <div className="flex justify-between text-slate-500 mt-4 ">
          <div className="mt-2 text-white font-medium">Mon - Fri</div>
          <div className="">8:00 AM - 5:00 PM</div>
        </div>
        <div className=" mt-3 flex justify-between text-slate-500 border-t">
          <div className="mt-2 text-white font-medium">Mon - Fri</div>
          <div className="">8:00 AM - 5:00 PM</div>
        </div>
        <div className=" mt-3 flex justify-between text-slate-500 border-t">
          <div className="mt-2 text-white font-medium">Mon - Fri</div>
          <div className="">8:00 AM - 5:00 PM</div>
        </div>
      </div>

      {/* sm:mx-12 sm:flex sm:justify-between */}
      <div className="border-t mt-5  h-28 col-span-12  flex flex-col items-center">
        <div className=" mt-2 ">
          <div className="mt-4">
            Copyright © 2024 eduvalt. All rights reserved.
          </div>
          <div className="mt-4">
            Privacy Policy<span className="mx-2">.</span>
            Terms & Conditions
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComp;
