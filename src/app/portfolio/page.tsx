"use client";
import React, { useState } from "react";

import Banner from "@/components/UIComponent/Banner";
import { portfolioSlides } from "@/utils/dummy/banner/PortfolioSlider";
import Card from "@/components/UIComponent/PortfolioCard";
import { BTNS, portfolio } from "@/utils/dummy/portfolio/Portfolio";

export const page = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <Banner banners={portfolioSlides} height="half" />
      <section style={{ backgroundColor: "#f8f9fa", padding: "40px 0" }}>
        <div style={{ margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "#333", fontSize: "14px", letterSpacing: "1px" }}>
              CURATED SELECTION
            </p>
            <h1
              style={{
                color: "#333",
                fontSize: "28px",
                fontWeight: "bold",
                paddingTop: "20px",
              }}>
              A selection of{" "}
              <span style={{ color: "#dc3545" }}>successful projects</span>
            </h1>
            <p
              style={{
                color: "#333",
                marginTop: "16px",
                maxWidth: "700px",
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: "1.6",
              }}
            >
              Whether you’d like to find out more about our web development
              services, our prowess with graphic design, our SEO expertise or
              our eCommerce solutions, you are bound to find a suitably
              impressive case study from among our extensive past history of
              satisfied clients.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {BTNS.map((btn, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                style={{
                  background:
                    active === index
                      ? "linear-gradient(93deg, #3B0097 6.17%, #55004D 148.14%)"
                      : "#fff",
                  color: active === index ? "#fff" : "#333",
                  cursor: active === index ? "default" : "pointer",
                  transition: "all 0.3s ease",
                }}
                className="tab-button"
                onMouseOver={(e) => {
                  if (active !== index)
                    e.currentTarget.style.background = "#f1f1f1";
                }}
                onMouseOut={(e) => {
                  if (active !== index)
                    e.currentTarget.style.background = "#fff";
                }}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>

        {/* Show Cards Based on Active Tab */}
        <Card data={portfolio[active]} />
      </section>
    </div>
  );
};
export default page;
