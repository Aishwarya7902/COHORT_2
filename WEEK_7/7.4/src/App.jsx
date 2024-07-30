import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { notifications, totalNotificationSelector } from './atoms'
import { RecoilRoot, useRecoilValue,useRecoilState } from 'recoil'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount,setNetworkCount] = useRecoilState(notifications);
  const totalNotificationsCount=useRecoilValue(totalNotificationSelector)

  // useEffect(()=>{
  //   axios.get("https://sum-server.100xdevs.com/notifications")
  //   .then(res=>{
  //     setNetworkCount(res.data)
  //   })
  // },[])

  return (
    <>
      <button>Home</button>

      <button>My Network ({networkCount.networks >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me({totalNotificationsCount})</button>
    </>
  )
}


export default App
