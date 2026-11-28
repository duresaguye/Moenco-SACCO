import type { Metadata } from 'next'
import { ContactPage } from '@/components/contact-page'

export const metadata: Metadata = {
  title: 'Contact Moenco SACCO',
  description: 'Find Moenco SACCO service-area information, membership guidance and a contact form preview.',
}

export default function Page() {
  return <ContactPage />
}
