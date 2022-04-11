import stls from '@/styles/components/general/CorporateClients.module.sass'
import {
  ImgHeadHunter,
  ImgRosSeti,
  ImgRosNeft,
  ImgRZHD,
  ImgMinistryOfLabor,
  ImgSberbankLeasing
} from '@/components/imgs'

const clientsList = [
  {
    name: 'HeadHunter',
    pic: <ImgHeadHunter />
  },
  {
    name: 'РосСети',
    pic: <ImgRosSeti />
  },
  {
    name: 'РосНефть',
    pic: <ImgRosNeft />
  },
  {
    name: 'РЖД',
    pic: <ImgRZHD />
  },
  {
    name: 'Министерство труда',
    pic: <ImgMinistryOfLabor />
  },
  {
    name: 'Сбербанк Лизинг',
    pic: <ImgSberbankLeasing />
  }
]

const CorporateClients = () => {
  return (
    <div className={stls.container}>
      <h2 className={stls.title}>Мы сотрудничаем с крупными организациями</h2>
      <div className={stls.clients}>
        {clientsList.map((client, idx) => (
          <div key={client.name + idx} className={stls.client}>
            {client.pic}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CorporateClients
