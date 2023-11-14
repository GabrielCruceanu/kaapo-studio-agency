import React from 'react'
import LocaleSwitcher from "@/components/Common/LocaleSwitcher";

function Navigation() {
  return (
    <div id="navi" className="topnav">
      <div className="container d-flex align-items-center">
        <div>
          <div className="logo icon-img-100">
            <a href="#0"><img src="/assets/imgs/logo-light.png" alt="" /></a>
          </div>
        </div>
        <a href="https://themeforest.net/user/themescamp/portfolio" className="butn butn-bord butn-cerv ml-auto text-u">
          <span className="sub-title ls1">Get Template</span>
        </a>
      </div>
    </div>
  )
}

export default Navigation
