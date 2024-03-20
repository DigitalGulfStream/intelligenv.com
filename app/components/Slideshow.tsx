'use client'
import Image from 'next/image'
import Link from 'next/link'
import Slider from "react-slick";
import ItemSlideshow from './ItemSlideshow'
import { useRef, useState } from 'react'
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import { slideType } from '@/types/slide';

const Slideshow = () => {
  const settings = {
    slidesToShow: 1,
    dots: false,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1
  }
  const [slides, setslides] = useState<slideType[]>([
    {
      id: 0,
      url: 'img1.jpg'
    },
    {
      id: 1,
      url: 'img2.jpg'

    }
  ])

  return (
    <section className='relative'>
      <div className='sliderItem'></div>
      <Slider {...settings}>
        {slides &&
          slides.map((slide, i) => (
            <ItemSlideshow
              key={i}
              slide={slide}
            />
          ))}
      </Slider>
    </section>
  )
}
export default Slideshow
