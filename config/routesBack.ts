import { dev, nextexport } from '@/config/index'

const routesBack = {
  root:
    dev || nextexport
      ? 'http://localhost:1337'
      : 'https://api-imo-msk-ru.herokuapp.com',
  home: '/',
  programs: '/programs', // /programs || /programs/:id
  teachers: '/teachers',
  reviews: '/reviews',
  webinars: '/webinars',
  getStaticProps: '/get-static-props', // /get-static-props/:page
  getStaticPathsStudyFields: '/get-static-paths/study-fields', // /get-static-paths/study-fields || /get-static-paths/study-fields/:type
  getStaticPathsPrograms: '/get-static-paths/programs' // /get-static-paths/programs || /get-static-paths/programs/:type
}

export default routesBack
