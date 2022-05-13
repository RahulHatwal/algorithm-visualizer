import React, { Component } from "react";
import "./style.css";
class Footer extends Component {
  render() {
    return (
      <footer class="page-footer font-small special-color-dark pt-4 ">
        <div className="flex-wrap" style={{ textAlign: "center" }}>
          <h3>Made by Rahul Hatwal And Vaibhav Kumar Tiwari</h3>
        </div>

        <div class="footer-copyright text-center py-3">
          <h3>© 2022 Copyright</h3>
        </div>
      </footer>
    );
  }
}

export default Footer;
