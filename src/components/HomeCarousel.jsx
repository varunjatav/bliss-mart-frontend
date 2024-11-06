import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// const responsive = {
//   0: { items: 1 },
//   568: { items: 2 },
//   1024: { items: 3 },
// };

const items = [
  <div className="h-[400px]" data-value="1">
    <img
      src="https://i.pinimg.com/originals/24/c7/b6/24c7b6bc82dec49ffce7f23a0822109f.png"
      alt="fashion ideas"
      loading="lazy"
       className="h-full w-full"
    />
  </div>,
  <div className="h-[400px]" data-value="2">
    <img
      src="https://marketplace.canva.com/EAFHG6sbLsQ/1/0/1600w/canva-brown-beige-simple-special-sale-banner-lQfPvhnznqs.jpg"
      alt="special sale"
      loading="lazy"
       className="h-full w-full"
    />
  </div>,
  <div className="h-[400px]" data-value="3">
    <img
      src="https://png.pngtree.com/template/20220330/ourlarge/pngtree-orange-simple-and-atmospheric-women-s-clothing-autumn-and-winter-fashion-image_906464.jpg"
      alt="winter sale"
      loading="lazy"
      className="h-full w-full"
    />
  </div>,
  <div className="h-[400px]" data-value="4">
    <img
      src="https://marketplace.canva.com/EAFWecuevFk/1/0/1600w/canva-grey-brown-minimalist-summer-season-collections-banner-landscape-VXEmg9V800o.jpg"
      alt="summer collection"
      loading="lazy"
        className="h-full w-full"
    />
  </div>,
  <div className="h-[400px]" data-value="5">
    <img
      src="https://templates.simplified.co/thumb/3446e660-7af3-4ff6-86ce-755afcde8fcd.jpg"
      alt="mens clothing"
      loading="lazy"
      className="h-full w-full"
    />
  </div>,
];

const MainCarousel = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    autoPlay
    autoPlayInterval={3000}
    controlsStrategy="alternate"
    infinite
    disableButtonsControls
    disableDotsControls
  />
);

export default MainCarousel;
