"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import data from "../data/data.json";

const reviews = data.reviews;

export default function ReviewsCards() {
  return (
    <section className="bg-secondary-light py-20 mt-20 w-full overflow-hidden">
      <div className="px-5 sm:px-10 lg:px-32">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* ---------------- LEFT COLUMN (Navigation & Title) ---------------- */}
          <div className="lg:w-[25%] flex flex-col gap-8">
            <div className="flex items-start lg:flex-col gap-6">
              <Image src="/colon.png" alt="Quote" width={86} height={66} />
              <h3 className="text-[#1C1C1C] font-aeonik text-2xl sm:text-3xl font-bold leading-tight">
                What our customers <br className="hidden lg:block" /> are saying
              </h3>
            </div>

            <div className="flex gap-5 items-center mt-4">
              <button className="reviews-prev bg-gray-600 p-3 rounded-full text-white hover:bg-black transition cursor-pointer">
                <ChevronLeft size={20} />
              </button>

              <Image src="/pagination.png" alt="dots" width={60} height={10} />

              <button className="reviews-next bg-gray-600 p-3 rounded-full text-white hover:bg-black transition cursor-pointer">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* ---------------- RIGHT COLUMN (SLIDER) ---------------- */}
          <div className="lg:w-[75%] w-full">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".reviews-next",
                prevEl: ".reviews-prev",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={24}
              /* Responsive Breakpoints:
                 - 0 to 639px: 1 card
                 - 640px to 1023px: 2 cards
                 - 1024px and up (lg/xl): 3 cards 
              */
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="py-6"
            >
              {reviews.map((item) => (
                <SwiperSlide key={item.id} className="!h-auto py-2">
                  {/* !h-auto is crucial for equal height slides */}
                  <div className="flex flex-col justify-between bg-white p-8 rounded-[32px] shadow-sm border border-black/5 h-full hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col gap-4">
                      {/* Rating Stars */}
                      <div className="flex gap-1">
                        {[...Array(4)].map((_, i) => (
                          <Image
                            key={i}
                            src="/greenstar.png"
                            alt="star"
                            width={18}
                            height={18}
                          />
                        ))}
                        <Image
                          src="/whitestar.png"
                          alt="star"
                          width={18}
                          height={18}
                        />
                      </div>

                      {/* Review Text */}
                      <p className="text-[#1C1C1C] font-poppins text-[15px] leading-relaxed opacity-90">
                        “{item.description}”
                      </p>
                    </div>

                    {/* Profile Section - Pushed to bottom via justify-between */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100 mt-6">
                      <div className="w-[50px] h-[50px] rounded-full overflow-hidden border flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-aeonik text-[16px] font-bold leading-tight">
                          {item.name}
                        </p>
                        <p className="font-poppins text-[13px] text-gray-500">
                          {item.post}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
