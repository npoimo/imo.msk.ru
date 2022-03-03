import stls from '@/styles/components/general/FooterBottom.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import Link from 'next/link'
import { routePoliciesTerms, routePoliciesPrivacy } from '@/data/routes'
import { companyName } from '@/config/index'

const FooterBottom = () => {
  return (
    <div className={stls.container}>
      <Wrapper>
        <p className={stls.copy}>
          &copy; {companyName}, {new Date().getFullYear()}
        </p>
        <a
          href={routePoliciesTerms}
          target='_blank'
          rel='noopener noreferrer'
          className={stls.agreeLink}>
          Договор оферты
        </a>
        <a
          href={routePoliciesPrivacy}
          target='_blank'
          rel='noopener noreferrer'
          className={stls.docLink}>
          Политика конфиденциальности
        </a>
      </Wrapper>
    </div>
  )
}

export default FooterBottom
