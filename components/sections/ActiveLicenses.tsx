import stls from '@/styles/components/sections/ActiveLicenses.module.sass'
import { elementIds } from '@/config/index'
import Popup from 'reactjs-popup'
import Wrapper from '@/components/layout/Wrapper'
import { CheckLicense } from '@/components/sections'
import { IconDoc } from '@/components/icons'
import { PopupImage } from '@/components/popups'
import ImgLicence from '@/components/imgs/legal/ImgLicence'

const ActiveLicenses = () => {
  return (
    <section id={elementIds.activeLicenses} className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Действующие лицензии</h2>
        <p className={stls.p}>
          Лицензия департамента образования города Москвы на осуществление
          образовательной деятельности:
        </p>
        <div className={stls.content}>
          <div className={stls.left}>
            <Popup
              trigger={
                <button className={stls.trigger}>
                  <div className={stls.img}>
                    <ImgLicence />
                  </div>
                  <div className={stls.label}>
                    <div className={stls.labelIcon}>
                      <IconDoc />
                    </div>
                    <span className={stls.diplomaTitle}>Лицензия</span>
                  </div>
                </button>
              }
              modal
              nested>
              {close => <PopupImage image={<ImgLicence />} close={close} />}
            </Popup>
          </div>
          <div className={stls.right}>
            <CheckLicense />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default ActiveLicenses
