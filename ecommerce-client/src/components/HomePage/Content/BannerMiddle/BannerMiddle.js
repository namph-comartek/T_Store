import React, { Component } from "react";
import { Link } from "react-router-dom";
import './style.css';
export default class BannerMiddle extends Component {
  render() {
    return (
      <div className="li-static-banner" style={{ marginTop: -45 }}>
        <div className="container">
          <div className="row">
            {/* Begin Single Banner Area */}
            <div className="col-lg-4 col-md-4 text-center">
              <div className="single-banner">
                <Link to="#">
                  <img src="  https://photo2.tinhte.vn/data/attachment-files/2021/01/5324660_banner-s21.jpg" alt="Li's Static Banner" />
                </Link>
              </div>
            </div>
            {/* Single Banner Area End Here */}
            {/* Begin Single Banner Area */}
            <div className="col-lg-4 col-md-4 text-center pt-xs-30">
              <div className="single-banner">
                <Link to="./products/12">
                  <img src="https://cdn.tgdd.vn/Files/2018/11/27/1134121/bannerlaptopthang12_800x450-600x400.png" alt="Li's Static Banner" />
                </Link>
              </div>
            </div>
            {/* Single Banner Area End Here */}
            {/* Begin Single Banner Area */}
            <div className="col-lg-4 col-md-4 text-center pt-xs-30">
              <div className="single-banner">
                <Link to="/products/51">
                  <img src="https://kenh14cdn.com/crop/640_360/203336854389633024/2021/9/16/photo1631778962938-1631778963244670900328.jpg" alt="Li's Static Banner" />
                </Link>
              </div>
            </div>
            {/* Single Banner Area End Here */}
          </div>
        </div>
      </div>
    );
  }
}
