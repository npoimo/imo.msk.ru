import stls from '@/styles/components/general/AboutLeaf.module.sass'

const AboutLeaf = () => {
  return (
    <div className={stls.container}>
      <h2 className={stls.title}>Об институте</h2>
      <p className={stls.p}>
        Наш институт нацелен на предоставление самых актуальных знаний, которые
        будут полезны как практикующим специалистам, так и тем, кто делает
        первые шаги в профессии
      </p>
      <p className={stls.p}>
        Для этого мы приглашаем преподавателей-практиков, которые являются
        настоящими экспертами в своей области
      </p>
      <p className={stls.lastP}>
        <span className={stls.highlight}>Получите практические</span> навыки для
        продвижения в карьере или освоения новой профессии
      </p>
    </div>
  )
}

export default AboutLeaf
