'use client'
import React from 'react'
import Content1 from './component/content1'
import Banner from '@/app/components/Banner/page'
import World from './component/world'
import Partners from './component/partners'
import PartnersSection from './component/PartnersSection'


const WhoWeAre = () => {
  return (
    <>
    <Banner pageName="Who We Are" />
    <Content1/>
    <World/>
    <Partners/>
    <PartnersSection/>
    </>
  )
}

export default WhoWeAre