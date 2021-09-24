import stls from '@/styles/components/icons/IconCloseCircle.module.sass'

const IconCloseCircle = () => {
  return (
    <div className={stls.container}>
      <svg viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Закрыть</title>
        <circle cx='16' cy='16' r='16' fill='#F5F5F5' />
        <path
          d='M11.2002 11.2L20.8002 20.8'
          stroke='#D9D9D9'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M20.7998 11.2L11.1998 20.8'
          stroke='#D9D9D9'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconCloseCircle
