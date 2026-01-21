"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

export default function ReviewsSlider({ data, prevClass, nextClass }) {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
                prevEl: `.${prevClass}`,
                nextEl: `.${nextClass}`,
            }}
            // pagination={{ type: "progressbar" }}
            spaceBetween={12}
            breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            className="reviews-swiper"
        >
            {data.map((item) => (
                <SwiperSlide key={item.id}>{item.component}</SwiperSlide>
            ))}
        </Swiper>
    )
}
