import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react'; // Rename 'Swiper' here

import appCategory from "../../../public/images/appCategory.png"
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MySwiperComponent = () => { // Rename your component here
    return (
        <SwiperReact // Use 'SwiperReact' instead of 'Swiper'
            modules={[Navigation, Pagination,]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <Image
                    src={appCategory}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={appCategory}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={appCategory}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={appCategory}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </SwiperSlide>
            {/* ... */}
        </SwiperReact>
    );
}

export default MySwiperComponent; // Export with the new name
