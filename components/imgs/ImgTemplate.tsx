import stls from '@/styles/components/imgs/ImgTemplate.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import Image from 'next/image'
import cn from 'classnames'
import { nextexport, base64pixel } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type ImgTemplateType = TypeGeneralClassNames &
  TypeGeneralImg & {
    // readonly src: StaticImageData | string
    readonly src: any // TODO: figure out better types here
    readonly alt: string
    readonly title?: string
    readonly priority?: boolean
    readonly unoptimized?: boolean
    readonly objectFit?: 'cover' | 'contain' | 'fill' | 'none'
  }

const ImgTemplate = ({
  classNames,
  width,
  height,
  src,
  alt,
  title,
  priority,
  unoptimized,
  objectFit
}: ImgTemplateType) => {
  const Tag = nextexport ? 'img' : Image

  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }
      title={title}>
      {src && (
        <Tag
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(stls.img, { [stls.nextexport]: nextexport })}
          {...(nextexport ? undefined : { placeholder: 'blur' })}
          {...(nextexport ? undefined : { blurDataURL: base64pixel })}
          {...(nextexport ? undefined : { priority })}
          {...(nextexport ? undefined : { unoptimized })}
          {...(nextexport ? undefined : { objectFit })}
        />
      )}
    </div>
  )
}

export default ImgTemplate
