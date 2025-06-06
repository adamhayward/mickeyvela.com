// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Row, Col } from "react-bootstrap";

import Review1 from "../../images/Review1.jpeg";
import Review2 from "../../images/Review2.jpeg";
import Review3 from "../../images/Review3.jpeg";
import Review4 from "../../images/Review4.jpeg";
import Review5 from "../../images/Review5.jpeg";
import Review6 from "../../images/Review6.jpeg";
import Review7 from "../../images/Review7.jpeg";
import Review8 from "../../images/Review8.jpeg";
import Review9 from "../../images/Review9.jpeg";
import Review10 from "../../images/Review10.jpeg";
import Review11 from "../../images/Review11.jpeg";
import Review12 from "../../images/Review12.jpeg";
import Review13 from "../../images/Review13.jpeg";
import Review14 from "../../images/Review14.jpeg";
import Review15 from "../../images/Review15.jpeg";
import Review16 from "../../images/Review16.jpeg";
import Review17 from "../../images/Review17.jpeg";
import Review18 from "../../images/Review18.jpeg";
import Review19 from "../../images/Review19.jpeg";
import Review20 from "../../images/Review20.jpeg";

// Import Swiper styles
// import "swiper/swiper.min.css";
// import "swiper/modules/pagination/pagination.min.css";
// import "swiper/modules/navigation/navigation.min.css";
// import "swiper/modules/scrollbar/scrollbar.min.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Reviews() {
  const review = [
    Review1,
    Review2,
    Review3,
    Review4,
    Review5,
    Review6,
    Review7,
    Review8,
    Review9,
    Review10,
    Review11,
    Review12,
    Review13,
    Review14,
    Review15,
    Review16,
    Review17,
    Review18,
    Review19,
    Review20,
  ];

  let reviews = [];

  review.forEach((review) => {
    reviews.push(
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "5% 0 0 10%",
        }}
      >
        <div style={{ width: "90%", height: "90%" }}>
          <img
            style={{
              width: "90%",
              height: "90%",
              border: "1px solid gray",
              boxShadow: "0px 5px 10px 0px #2d323885",
            }}
            src={review}
            className="img-responsive"
            alt="Adam Hayward posing in a suit"
          />
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      <Row>
        <Col>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 7500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
          >
            {reviews}
          </Swiper>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <div id="footerText">
            &copy; {new Date().getFullYear()} MickeyVela.com
          </div>
        </Col>
      </Row>
    </>
  );
}
