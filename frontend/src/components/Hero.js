import React from "react";
import styled from "styled-components";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";
import heroBcg3 from "../assets/hero.jpg";
import heroBcg4 from "../assets/hero1.jpg";
import heroBcg5 from "../assets/hero2.png";

const Hero = () => {
  return (
    <Carousel
      animation="slide"
      // indicatorIconButtonProps={{
      //   style: {
      //     padding: "10px", // 1
      //     color: "blue", // 3
      //   },
      // }}
      // activeIndicatorIconButtonProps={{
      //   style: {
      //     backgroundColor: "red", // 2
      //   },
      // }}
      indicatorContainerProps={{
        style: {
          marginTop: "-60px", // 5
          // textAlign: "right", // 4
          marginBottom: "10px",
        },
      }}
    >
      <Wrapper>
        <article className="content">
          <h1>
            Great deals <br />
            Affordable prices
          </h1>
          <p>Save a lot with our amazing offers and promo's.</p>
          <Link to="/products" className="btn hero-btn">
            shop now
          </Link>
        </article>
        <article className="img-container">
          <img
            src={heroBcg3}
            alt="nice table"
            className="main-img"
            style={{
              borderBottomRightRadius: "30%",
              borderTopLeftRadius: "20%",
            }}
          />
          {/* <img src={heroBcg4} alt="person working" className="accent-img" /> */}
        </article>
        <article className="content">
          <h1>
            Shop within your <br />
            comfort zone
          </h1>
          <p>
            Buy all your needs from all over the world and get them delivered at
            your door-step with just simple clicks.
          </p>
          <Link to="/products" className="btn hero-btn">
            shop now
          </Link>
        </article>
        <article className="img-container">
          <img
            src={heroBcg5}
            alt="nice table"
            className="main-img"
            style={{
              borderBottomRightRadius: "30%",
              borderTopLeftRadius: "20%",
            }}
          />
          {/* <img src={heroBcg2} alt="person working" className="accent-img" /> */}
        </article>
      </Wrapper>
      <Wrapper>
        <article className="content">
          <h1>
            Shop within your <br />
            comfort zone
          </h1>
          <p>
            Buy all your needs from all over the world and get them delivered at
            your door-step with just simple clicks.
          </p>
          <Link to="/products" className="btn hero-btn">
            shop now
          </Link>
        </article>
        <article className="img-container">
          <img
            src={heroBcg5}
            alt="nice table"
            className="main-img"
            style={{
              borderBottomRightRadius: "30%",
              borderTopLeftRadius: "20%",
            }}
          />
          {/* <img src={heroBcg2} alt="person working" className="accent-img" /> */}
        </article>
      </Wrapper>
    </Carousel>
  );
};

const Wrapper = styled.section`
  min-height: 90vh;
  width: 100%;
  margin-top: 1rem;

  left: 0;
  right: 0;
  background: linear-gradient(270deg, #f5f4b0, #ebb3b4, #f3d4c4);
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 35em;
    margin-bottom: 2rem;
    color: var(--clr-grey-2);
    font-size: 1rem;
    margin-left: 3rem;
  }
  h1 {
    margin-left: 3rem;
  }
  .hero-btn {
    margin-left: 3rem;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    // padding-top: 120px;
    padding-right: 20px;
    padding-left: 20px;
    height: 100vh;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }

    .img-container {
      padding-top: 90px;
      width: 100%;
      height: 100%;
      display: block;
      position: relative;
      align-items: center;
    }
    .main-img {
      width: 90%;
      height: 500px;
      position: relative;
      border-radius: var(--radius);
      // display: block;
      // object-fit: contain;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    // .img-container::before {
    //   content: "";
    //   position: absolute;
    //   width: 10%;
    //   height: 80%;
    //   background: var(--clr-primary-9);
    //   bottom: 0%;
    //   left: -8%;
    //   border-radius: var(--radius);
    // }
  }

  // min-height: 60vh;
  // display: grid;
  // place-items: center;
  // .img-container {
  //   display: none;
  // }

  // p {
  //   line-height: 2;
  //   max-width: 45em;
  //   margin-bottom: 2rem;
  //   color: var(--clr-grey-5);
  //   font-size: 1rem;
  // }
  // @media (min-width: 992px) {
  //   height: calc(100vh - 5rem);
  //   grid-template-columns: 1fr 1fr;
  //   gap: 8rem;
  //   h1 {
  //     margin-bottom: 2rem;
  //   }
  //   p {
  //     font-size: 1.25rem;
  //   }
  //   .hero-btn {
  //     padding: 0.75rem 1.5rem;
  //     font-size: 1rem;
  //   }
  //   .img-container {
  //     display: block;
  //     position: relative;
  //   }
  //   .main-img {
  //     width: 100%;
  //     height: 550px;
  //     position: relative;
  //     border-radius: var(--radius);
  //     display: block;
  //     object-fit: cover;
  //   }
  //   .accent-img {
  //     position: absolute;
  //     bottom: 0;
  //     left: 0;
  //     width: 250px;
  //     transform: translateX(-50%);
  //     border-radius: var(--radius);
  //   }
  //   .img-container::before {
  //     content: '';
  //     position: absolute;
  //     width: 10%;
  //     height: 80%;
  //     background: var(--clr-primary-9);
  //     bottom: 0%;
  //     left: -8%;
  //     border-radius: var(--radius);
  //   }
  // }
`;

export default Hero;
