import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import all client images
import client01 from "../img/clients/client-1.jpg";
import client02 from "../img/clients/client-2.jpg";
import client03 from "../img/clients/client-3.jpg";
import client04 from "../img/clients/client-4.jpg";
import client05 from "../img/clients/client-5.jpg";
import client06 from "../img/clients/client-6.jpg";
import client07 from "../img/clients/client-7.jpg";
import client08 from "../img/clients/client-8.jpg";
import client09 from "../img/clients/client-9.jpg";
import client10 from "../img/clients/client-10.jpg";
import client11 from "../img/clients/client-11.jpg";
import client12 from "../img/clients/client-12.jpg";
import client13 from "../img/clients/client-13.jpg";
import client14 from "../img/clients/client-14.jpg";
import client15 from "../img/clients/client-15.jpg";
import client16 from "../img/clients/client-16.jpg";
import client17 from "../img/clients/client-17.jpg";
import client18 from "../img/clients/client-18.jpg";
import client19 from "../img/clients/client-19.jpg";

const ClientList = () => {
  const clients = [
    client01, client02, client03, client04, client05,
    client06, client07, client08, client09, client10,
    client11, client12, client13, client14, client15,
    client16, client17, client18, client19
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Clients</h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto"></div>
        </div>

        {/* Client Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-600 text-lg">
            We're proud to work with industry-leading companies that trust us to deliver exceptional results
          </p>
        </div>

        {/* Clients Slider */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 40,
              },
            }}
            className="px-4"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <img
                    src={client}
                    alt={`Client ${index + 1}`}
                    className="w-full h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16  bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">100+ Projects Delivered</h3>
            <p className="text-gray-600">Successfully completed projects across various industries</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">95% Client Satisfaction</h3>
            <p className="text-gray-600">Consistently exceeding client expectations</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16  bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">10+ Years Experience</h3>
            <p className="text-gray-600">Delivering excellence since our inception</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientList;