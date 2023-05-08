import { Header } from "@/components/Header"
import { Banner } from "@/components/Banner"
import { Hero } from "@/components/Hero"
import { Reviews } from "@/components/Reviews"
import { PrimaryFeatures } from "@/components/PrimaryFeatures"
import { SecondaryFeatures } from "@/components/SecondaryFeatures"
import { CallToAction } from "@/components/CallToAction"
import { Footer } from "@/components/Footer"
import { RachanaShah } from "@/components/RachanaShah"
import { Form } from "@/components/Form"
import { Pricing } from "@/components/Pricing"
import { LeadModal } from "@/components/Modal"

export default function Home() {
  return (
    <>
      <Banner />
      <Header />
      <Hero />
      <LeadModal />
      <RachanaShah />
      <Reviews />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <Pricing />
      <CallToAction />
      <Form />
      <Footer />
    </>
  )
}