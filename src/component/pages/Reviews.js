import { useState } from "react";
import "../../index.css";
import "./css/Reviews.css";
import "../css/grid.css";
import "../css/responsive.css";
import FormRating from "../rating-star/FormRating";
import FormRating2 from "../rating-star/FormRating2";
import StarIcons from "../../assets/font/Star-icon";
import Edwards from "../../assets/img/Edwards.png";
import Watson from "../../assets/img/Watson.png";
import ShoesWhite from "../../assets/img/Shoes-white.png";
import ShoesBright from "../../assets/img/Shoes-bright.png";
import ShoesColorful from "../../assets/img/Shoes-colorful.png";

const imgsText = [`${ShoesWhite}`, `${ShoesBright}`, `${ShoesColorful}`];

export default function Reviews() {
  const [reviews, setReviews] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log(reviews);
    console.log(name);
    console.log(email);

    setReviews("");
    setName("");
    setEmail("");
  };

  const onKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="grid wide">
      <div className="Review">
        <div className="Review__rating-container">
          <div className="Review__rating-content">
            <p className="Review__rating-view">5.0</p>
            <div className="Review__rated">
              <FormRating2 />
              <p className="Review__rated-title">(15 Reviews)</p>
            </div>
          </div>
          <div className="Review__rating-btn">
            <button className="btn btn-size__m">Write a Review</button>
          </div>
        </div>
        <div className="Review__user">
          <div className="Rating__user-content">
            <p className="Rating__user-name">Your Rating</p>
            <FormRating />
          </div>
          <div className="Review__user-content">
            <label htmlFor="review-input" className="Review__user-name">
              Your Review
            </label>
            <input
              id="review-input"
              className="Review__user-input"
              value={reviews}
              onChange={(e) => setReviews(e.target.value)}
              onKeyUp={onKeyUp}
            />
          </div>
          <div className="Review__user-contact row">
            <div className="Review__contact-container col">
              <label htmlFor="name-input" className="Review__contact-name">
                Name
              </label>
              <input
                id="name-input"
                className="Review__contact-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyUp={onKeyUp}
              />
            </div>
            <div className="Review__contact-container col">
              <label htmlFor="email-input" className="Review__contact-email">
                Mail
              </label>
              <input
                id="email-input"
                className="Review__contact-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyUp={onKeyUp}
              />
            </div>
            <div className="Review__contact-btn">
              <button
                className="btn btn-size__m btn--primary"
                onClick={() => handleSubmit()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Review-comment">
        <div className="Review-comment__container">
          <div className="Review-comment__heading">
            <div className="Review-comment__info">
              <div className="Review-comment__info-img">
                <img src={Edwards} alt="" />
              </div>
              <div className="Review-comment__title">
                <p className="Review-comment__name">Ralph Edwards</p>
                <p className="Review-comment__time">8/2/19</p>
              </div>
            </div>
            <div className="Review-comment__rating">
              <StarIcons />
              <StarIcons />
              <StarIcons />
              <StarIcons />
              <StarIcons />
            </div>
          </div>
          <div className="Review-comment__desc">
            <p className="Review-comment__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo
              turpis massa tristique augue dignissim volutpat. Quis ultricies eu
              libero tortor dictumst.
            </p>
          </div>
        </div>
        <div className="Review-comment__container">
          <div className="Review-comment__heading">
            <div className="Review-comment__info">
              <div className="Review-comment__info-img">
                <img src={Watson} alt="" />
              </div>
              <div className="Review-comment__title">
                <p className="Review-comment__name">Kristin Watson</p>
                <p className="Review-comment__time">8/2/19</p>
              </div>
            </div>
            <div className="Review-comment__rating">
              <StarIcons />
              <StarIcons />
              <StarIcons />
              <StarIcons />
              <StarIcons />
            </div>
          </div>
          <div className="Review-comment__desc">
            <p className="Review-comment__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo
              turpis massa tristique augue dignissim volutpat. Quis ultricies eu
              libero tortor dictumst.
            </p>
          </div>
          <ul className="Reviews-comment__img-list">
            {imgsText.map((img) => {
              return (
                <li className="Reviews-comment__img-item" key={img}>
                  <img src={img} alt="" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
