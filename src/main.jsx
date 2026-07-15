import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import App from './App.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'
import './index.css'

function Root() {
  const [ready, setReady] = useState(false)
  useEffect(() => { const timer = window.setTimeout(() => setReady(true), 1200); return () => window.clearTimeout(timer) }, [])
  return <React.StrictMode><MotionConfig reducedMotion="user"><BrowserRouter><LoadingScreen ready={ready} /><App /></BrowserRouter></MotionConfig></React.StrictMode>
}
ReactDOM.createRoot(document.getElementById('root')).render(<Root />)
