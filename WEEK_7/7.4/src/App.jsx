import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'
import { RecoilRoot, useRecoilValue } from 'recoil'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const totalNotificationsCount=useRecoilValue(totalNotificationSelector)

  return (
    <>
      <button>Home</button>

      <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>

      <button>Me({totalNotificationsCount})</button>
    </>
  )
}


export default App
