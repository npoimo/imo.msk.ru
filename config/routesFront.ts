import { dev } from '@/config/index'

const routesFront = {
  root: dev ? 'http://localhost:3000' : 'https://mipo.msk.ru',
  home: '/'
}

export default routesFront
