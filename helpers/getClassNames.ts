import { TypeGeneralClassNames } from '@/types/index'

type TypegetClassNamesProps = TypeGeneralClassNames

type TypeGetClassNamesOutput = {
  readonly [key: string]: boolean
}

const getClassNames = ({
  classNames = []
}: TypegetClassNamesProps): TypeGetClassNamesOutput =>
  classNames
    .filter(className => className)
    .reduce((acc, cur) => ({ ...acc, [cur]: true }), {})

export default getClassNames
