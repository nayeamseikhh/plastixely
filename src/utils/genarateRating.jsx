import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const GenarateRating = () => {
    const rating = 3.7;
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.25 && rating % 1 < 0.75;
  const emptyStars = 5 - fullStars - (halfStars ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={`full-${i}`} className="text-yellow">
        <FaStar />
      </span>
    );
  }
  if (halfStars) {
    stars.push(
      <span key={`half`} className="text-yellow">
        <FaRegStarHalfStroke />
      </span>
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={`empty-${i}`} className="text-yellow">
        <FaRegStar />
      </span>
    );
  }
  return stars;
}

export default GenarateRating