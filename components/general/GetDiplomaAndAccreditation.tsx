import stls from '@/styles/components/general/GetDiplomaAndAccreditation.module.sass'

const GetDiplomaAndAccreditation = () => {
  return (
    <div className={stls.container}>
      <h3 className={stls.title}>Получаете диплом с аккредитацией</h3>
      <p className={stls.subtitle}>
        Все наши программы сертифицированы, имеют аккредитации, а дипломы
        котируются по всему миру!
      </p>
    </div>
  )
}

export default GetDiplomaAndAccreditation
