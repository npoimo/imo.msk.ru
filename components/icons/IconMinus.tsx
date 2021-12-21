import stls from '@/styles/components/icons/IconMinus.module.sass'

const IconMinus = () => {
  return (
    <div className={stls.container}>
      <svg viewBox='0 0 39 39' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Закрыть</title>
        <circle cx='19.5' cy='19.5' r='19.5' fill='#fff' />
        <line x1='26' y1='19.5' x2='13' y2='19.5' stroke='#0073A9' />
      </svg>
    </div>
  )
}

export default IconMinus
