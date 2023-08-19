import Image from 'next/image'
import TopSection from './components/TopSection'
import CombinatioSection from './components/CombinatioSection'
import { EnterpriseSection } from './components/EnterpriseSection'

export default function Home() {
  return (
    <div>
      <TopSection />
      <CombinatioSection />
      <EnterpriseSection />
    </div>
  )
}
