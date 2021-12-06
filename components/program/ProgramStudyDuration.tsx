import { getCasedRuYearString, getCasedRuMonthString } from '@/helpers/index'

type TypeProgramStudyDuration = {
  studyMonthsDuration: number
  monthsOnly?: boolean
}

const ProgramStudyDuration = ({
  studyMonthsDuration,
  monthsOnly
}: TypeProgramStudyDuration) => {
  const years = Math.floor(+studyMonthsDuration / 12)
  const months = +studyMonthsDuration - 12 * years

  return (
    <>
      {monthsOnly ? (
        getCasedRuMonthString({ months: studyMonthsDuration })
      ) : (
        <>
          {getCasedRuYearString({ years })} {getCasedRuMonthString({ months })}
        </>
      )}
    </>
  )
}

export default ProgramStudyDuration
