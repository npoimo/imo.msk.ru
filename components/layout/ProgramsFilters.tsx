import stls from '@/styles/components/layout/ProgramsFilters.module.sass'
import { TypeCategory } from '@/types/index'
import StudyFields from '@/components/general/StudyFields'
import ProgramType from '@/components/general/ProgramType'
import SearchDesktop from '@/components/general/SearchDesktop'

type ProgramsFiltersType = {
  ofType?: TypeCategory
  close?: any
}

const ProgramsFilters = ({ ofType = null, close }: ProgramsFiltersType) => {
  return (
    <div className={stls.container}>
      <SearchDesktop />
      <StudyFields aside ofType={ofType} close={close} />
      {/* <div className={stls.divider}></div>
      <ProgramType close={close} /> */}
    </div>
  )
}

export default ProgramsFilters
