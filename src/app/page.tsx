import Image from 'next/image'
import TopSection from './components/TopSection'
import CombinatioSection from './components/CombinatioSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <TopSection />
      <CombinatioSection />
      <Footer />
    </div>
  )
}
