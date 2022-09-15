import React from "react";
import axios from "axios";
import "./grid.css"
import "./Banner.css"
import "./responsive.css"
import Shoe from "../../assets/img/shoe.png"
import Shadow from "../../assets/img/shadow.png"
import Rectangle from "../../assets/img/Rectangle.png"
import Brand from "../../assets/img/Streakfly.png"
import Logo from "../../assets/img/Logo.png"


export default function Banner() {
  const [data, setData] = React.useState([]);
  const getApi = async () => {
    axios
      .get("https://localhost:7035/api/HomePage/Banner?productId=2")
      .then((res) => setData(res.data));
  };
  React.useEffect(() => {
      getApi();
  }, []);
  return (
    <div className="Banner">
        <div className="Banner__background">
            <img className="Banner__background-img" src={Rectangle} alt=""/>
        </div>
        <div className="Banner__brand">
            <img src={Brand} alt=""/>
        </div>
        <div className="Banner__logo">
            <img src={Logo} alt=""/>
        </div>
        <div className="grid wide">
            {data.map((item, index) => (
                <div className="row Banner-show" key={index}>
                    <div className="col l-6 m-12 Banner-zoom">
                        <h2 className="Banner__title">{item.title}</h2>
                        <h1 className="Banner__heading">{item.productName}</h1>
                        <p className="Banner__text">{item.description}</p>
                        <div className="Banner__group">
                            <select className="Banner__select">
                                <option className="Banner__select-item" value="1">GET</option>
                            </select>
                            <select className="Banner__select">
                                <option className="Banner__select-item" value="1">SIZE</option>
                            </select>
                            <span className="Banner__select-price">$173</span>
                        </div>
                        <div className="Banner__button">
                            <button className="btn btn--primary">Add to Bag</button>
                            <button className="btn Banner__button-item">See Details</button>
                        </div>
                    </div>
                    <div className="col l-6 m-12 Banner__shoes">
                    <img className="Banner-img" src={Shoe} alt={item.title} />
                    <img className="Banner-img_shadow" src={Shadow} alt={item.title} />

                        <ul className="Banner__list">
                                {item.productImage.map((img, key) => {
                                    return (
                                        <li key={key}>
                                            <img className="Banner__list-img" src={img.featureImage} alt={item.title} />
                                        </li>
                                    )
                                })}
                        </ul>
                    </div>
                    <div className="overplay"></div>
                </div>
            ))}
        </div>
        <div className="Banner__statistical">
            <div className="grid wide statistical__global">
                <div className="row">
                    <div className="col l-4 m-12 Banner__foot">
                        <p className="statistical__data">
                            <span className="statistical__amount">500+ </span>
                            <span className="statistical__text">Amazing products</span>
                        </p>
                    </div>
                    <div className="col l-4 m-12 Banner__foot">
                        <p className="statistical__data">
                            <span className="statistical__amount">40k+ </span>
                            <span className="statistical__text">Orders Complated</span>
                        </p>
                    </div>
                    <div className="col l-4 m-12 Banner__foot">
                        <p className="statistical__data">
                            <span className="statistical__amount">32k+ </span>
                            <span className="statistical__text">Happy Customers</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}