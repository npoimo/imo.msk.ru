import stls from '@/styles/components/icons/IconCircleCheck.module.sass'
import classNames from 'classnames'

const IconCircleCheck = ({ calpha = false, inverse = false }) => {
  return (
    <div
      className={classNames({
        [stls.container]: true,
        [stls.calpha]: calpha,
        [stls.inverse]: inverse
      })}>
      <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Галочка</title>
        <path
          d='M8.10815 10.2701L9.45951 11.6214L12.4325 8.64844'
          stroke='#0073A9'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <rect
          x='0.5'
          y='0.5'
          width='19'
          height='19'
          rx='9.5'
          stroke='#C0E1F4'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconCircleCheck
