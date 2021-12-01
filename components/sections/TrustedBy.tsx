import stls from '@/styles/components/sections/TrustedBy.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid } from 'swiper'
import { getClassNames } from '@/helpers/index'
import Wrapper from '@/components/layout/Wrapper'
import { ImgLogoLenovo } from '@/components/imgs'
import { breakpoints } from '@/config/index'

type TypeTrustedBy = {
  classNames?: TypeClassNames
}

const TrustedBy = ({ classNames = [] }: TypeTrustedBy) => {
  const container = getClassNames({ classNames })

  const slides = [
    { img: <ImgLogoLenovo classNames={[stls.img]} /> },
    { img: <ImgLogoLenovo classNames={[stls.img]} /> },
    { img: <ImgLogoLenovo classNames={[stls.img]} /> },
    { img: <ImgLogoLenovo classNames={[stls.img]} /> },
    { img: <ImgLogoLenovo classNames={[stls.img]} /> },
    { img: <ImgLogoLenovo classNames={[stls.img]} /> },
    { img: <ImgLogoLenovo classNames={[stls.img]} /> },
    { img: <ImgLogoLenovo classNames={[stls.img]} /> },
    { img: <ImgLogoLenovo classNames={[stls.img]} /> },
    { img: <ImgLogoLenovo classNames={[stls.img]} /> },
    { img: <ImgLogoLenovo classNames={[stls.img]} /> }
  ]
  return (
    <section className={cn([stls.container], container)}>
      <Wrapper>
        <h2 className={stls.title}>Нам доверяют обучение</h2>
        <Swiper
          modules={[Grid]}
          grid={{ rows: 2, fill: 'row' }}
          slidesPerView={2}
          breakpoints={{
            [breakpoints.laptop]: {
              slidesPerView: 4
            }
          }}
          pagination={{ dynamicBullets: true }}>
          {slides.map(({ img }, idx) => (
            <SwiperSlide key={`TrustedBySlide-${idx}`}>{img}</SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </section>
  )
}

export default TrustedBy
