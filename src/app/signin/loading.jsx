
import LoadingModal from '@/components/modals/LoadingModal'
import { Suspense } from 'react'

 
export default function Loading() {
  return (
    <>
      <Suspense fallback={<LoadingModal />}>
        <LoadingModal />
      </Suspense>
    </>
  )
}