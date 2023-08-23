import { AppFooter } from '@/components/AppFooter'
import { AppShell } from '@mantine/core'
import { AppContent } from '../components/AppContent'
import { AppHeader } from '../components/AppHeader'
import { AppNavbar } from '../components/AppNavbar'

export default function Home() {
  return (
    <AppShell
      bg={'gray.9'}
      navbar={<AppNavbar />}
      header={<AppHeader />}
      footer={<AppFooter />}
    >
      <AppContent />
    </AppShell>
  )
}
