import stls from '@/styles/components/sections/Reviews.module.sass'
import classNames from 'classnames'
import { elementIds } from '@/config/index'
import { getImageHeight } from '@/helpers/index'
import Wrapper from '@/components/layout/Wrapper'
import SwiperContainer from '@/components/general/SwiperContainer'
import CardReview from '@/components/cards/CardReview'
import { ImgReview } from '@/components/imgs'

type ReviewsType = {
  standalone?: boolean
  reviews: any
}

const Reviews = ({ standalone = false, reviews }: ReviewsType) => {
  const slides = reviews.map((review, idx) => (
    <CardReview
      key={review.title + idx}
      title={review.title}
      photo={
        <ImgReview
          src={review.picture[0]?.url}
          alt={review.name}
          width={110}
          height={getImageHeight({
            width: 110,
            widthInitial: review.picture[0]?.width,
            heightInitial: review.picture[0]?.height
          })}
        />
      }
      name={review.name}
      occupation={review.profession}
      story={review.story}
    />
  ))

  return (
    <section
      id={elementIds.reviews}
      className={classNames({
        [stls.container]: true,
        [stls.standalone]: standalone
      })}>
      <Wrapper>
        <h2 className={stls.title}>Отзывы и статьи наших студентов</h2>
        <div className={stls.content}>
          <SwiperContainer slides={slides} />
        </div>
      </Wrapper>
    </section>
  )
}

export default Reviews
