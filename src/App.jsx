import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import CampaignFlow from './sections/CampaignFlow'
import TeamSwitcher from './sections/TeamSwitcher'
import DesignSystem from './sections/DesignSystem'
import Variations from './sections/Variations'
import DemoForm from './sections/DemoForm'
import ProductOverview from './sections/ProductOverview'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <ProductOverview />

        <CampaignFlow />
        <TeamSwitcher />
        <DesignSystem />
        <Variations />
        <DemoForm />
      </main>

      <Footer />
    </> 
  )
}

export default App