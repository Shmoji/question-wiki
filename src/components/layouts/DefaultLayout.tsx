import { ReactNode } from 'react'

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="min-h-screen py-16">
        {children}
      </div>
    </>
  )
}