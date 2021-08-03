import stls from '@/styles/components/general/SwiperContainer.module.sass'
import { useMediaQuery } from 'react-responsive'

import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination])

const SwiperContainer = ({
  slides,
  mobileOptions = { slidesNum: 1, spaceBetween: 10 },
  tabletOptions = { slidesNum: 1, spaceBetween: 10 },
  laptopOptions = { slidesNum: 2, spaceBetween: 50 },
  desktopOptions = { slidesNum: 2, spaceBetween: 50 },
  alwaysDisabledOnDesktop = false,
  isMultiRow = false
}) => {
  const isMobileLayout = useMediaQuery({ query: '(max-width: 480px)' })
  const isTabletLayout = useMediaQuery({
    query: '(min-width: 481px) and (max-width: 768px)'
  })
  const isLaptopLayout = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1200px)'
  })
  const isDesktopLayout = useMediaQuery({ query: '(min-width: 1201px)' })

  const layouts = [
    { mobile: isMobileLayout },
    { tablet: isTabletLayout },
    { laptop: isLaptopLayout },
    { desktop: isDesktopLayout }
  ]

  const getCurrentLayoutKey = () => {
    const currentLayout = layouts.find(layout => {
      const firstKey = Object.keys(layout)[0]

      if (layout[firstKey]) return layout
    })

    if (!currentLayout) return null

    const currentLayoutKey = Object.keys(currentLayout)[0]

    return currentLayoutKey
  }

  const swiperOptions = {
    mobile: mobileOptions,
    tablet: tabletOptions,
    laptop: laptopOptions,
    desktop: desktopOptions
  }

  const assignNumOfSlidesPerView = () => {
    const currentLayoutKey = getCurrentLayoutKey()

    if (!currentLayoutKey) return 0

    const { slidesNum } = swiperOptions[currentLayoutKey]

    return slidesNum
  }

  const checkIfSwiperEnabled = () => {
    if (alwaysDisabledOnDesktop && (isLaptopLayout || isDesktopLayout))
      return false

    const slidesPerView = assignNumOfSlidesPerView()

    return !(slidesPerView === slides.length)
  }

  const getSpaceBetween = () => {
    const currentLayoutKey = getCurrentLayoutKey()

    if (!currentLayoutKey) return 10

    return swiperOptions[currentLayoutKey].spaceBetween
  }

  return (
    <Swiper
      enabled={checkIfSwiperEnabled()}
      spaceBetween={getSpaceBetween()}
      slidesPerView={assignNumOfSlidesPerView()}
      slidesPerColumn={
        isMultiRow && (isLaptopLayout || isDesktopLayout) ? 2 : 1
      }
      slidesPerColumnFill={!isMobileLayout ? 'row' : 'column'}
      pagination={{ clickable: true, dynamicBullets: true }}>
      {slides.map((slide, idx) => (
        <SwiperSlide key={`slide-${idx}`}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperContainer
