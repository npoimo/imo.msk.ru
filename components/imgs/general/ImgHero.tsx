import stls from '@/styles/components/imgs/general/ImgHero.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/general/lady-studying.jpg'

const ImgHero = ({ width = 0, height = 0 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Девушка за ноутбуком обучается'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
      />
    </div>
  )
}

export default ImgHero
