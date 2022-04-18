import stls from '@/styles/pages/Contact.module.sass'
import { handleGetStaticProps } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'
import { NextSeo, OrganizationJsonLd } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { routeContact } from '@/data/routes'
import companyName from '@/data/companyName'
import PageTitle from '@/components/layout/PageTitle'
import { Contacts } from '@/components/sections'
import { city, street } from '@/data/location'
import { number, numberAlt } from '@/data/contact'
import { email, emailAlmaty } from '@/data/email'

const LegalPage = ({ programs }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType(null)
    setCurProgramsStudyFieldSlug(null)
  }, [])

  return (
    <>
      <NextSeo
        title={`Контакты | ${companyName}`}
        description={truncate(
          `${city}, ${street}, ${number}, ${numberAlt}, ${email}`,
          120
        )}
        canonical={`${routesFront.root}${routeContact}`}
      />
      {/* <OrganizationJsonLd
        id='https://www.purpule-fox.io/#corporation'
        logo='https://www.example.com/photos/logo.jpg'
        legalName='Purple Fox LLC'
        name='Purple Fox'
        address={{
          streetAddress: '1600 Saratoga Ave',
          addressLocality: 'San Jose',
          addressRegion: 'CA',
          postalCode: '95129',
          addressCountry: 'US'
        }}
        contactPoint={[
          {
            telephone: '+1-401-555-1212',
            contactType: 'customer service',
            areaServed: 'US',
            availableLanguage: ['English', 'Spanish', 'French']
          },
          {
            telephone: '+1-877-746-0909',
            contactType: 'customer service',
            contactOption: 'TollFree',
            availableLanguage: 'English'
          },
          {
            telephone: '+1-877-453-1304',
            contactType: 'technical support',
            contactOption: 'TollFree',
            areaServed: ['US', 'CA'],
            availableLanguage: ['English', 'French']
          }
        ]}
        sameAs={['https://www.orange-fox.com']}
        url='https://www.purpule-fox.io/'
      /> */}
      <PageTitle>Контакты</PageTitle>
      <Contacts />
    </>
  )
}

export const getStaticProps = async () =>
  await handleGetStaticProps({ page: '/contact' })

export default LegalPage
