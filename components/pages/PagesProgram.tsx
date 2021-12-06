import {
  HeroProgram,
  Desc,
  HowProcessGoes,
  WhatYouWillLearn,
  ForWhom,
  YourDiploma,
  BriefProgramContents,
  FullProgram,
  YourResume,
  Cta,
  Teachers,
  HelpWithEmployment,
  YourFutureJob,
  StudyCost,
  Faq
} from '@/components/sections'
import { discount } from '@/data/price'
import { TypeCategory } from '@/types/index'

type PagesProgramType = {
  ofType: TypeCategory
}

const PagesProgram = ({ ofType = null }: PagesProgramType) => {
  return (
    <>
      <HeroProgram />
      {/* <Desc /> */}
      <ForWhom />
      <WhatYouWillLearn />
      <HowProcessGoes />
      <YourDiploma ofType={ofType} />
      <BriefProgramContents />
      <FullProgram />
      {ofType !== 'course' && <YourResume />}
      <Cta
        title={'Начните обучаться со скидкой'}
        desc={`Забронируйте программу по спеццене — со скидкой ${discount.substring(
          1
        )}`}
        cta='reserve'
      />
      <Teachers />
      {/* <HelpWithEmployment /> */}
      {ofType !== 'course' && <YourFutureJob />}
      <StudyCost />
      <Faq />
    </>
  )
}

export default PagesProgram
