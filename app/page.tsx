import { S1Hero } from "@/components/sections/S1Hero"
import { S2Relevance } from "@/components/sections/S2Relevance"
import { S3Mechanism } from "@/components/sections/S3Mechanism"
import { S4Outcome } from "@/components/sections/S4Outcome"
import { S5TrustFilter } from "@/components/sections/S5TrustFilter"
import { S6WhatsInside } from "@/components/sections/S6WhatsInside"
import { S7Instructor } from "@/components/sections/S7Instructor"
import { S8OfferStack } from "@/components/sections/S8OfferStack"

export default function Home() {
  return (
    <main>
      <S1Hero />
      <S2Relevance />
      <S3Mechanism />
      <S4Outcome />
      <S5TrustFilter />
      <S6WhatsInside />
      <S7Instructor />
      <S8OfferStack />
    </main>
  )
}
