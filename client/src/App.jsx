import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import ResumeBuilder from './pages/ResumeBuilder'
import Preview from './pages/Preview'
import Login from './pages/Login'
import { useDispatch } from 'react-redux'
import api from './configs/api'
import { login, setLoading } from './app/features/authSlice'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import CallToAction from './components/home/CallToAction'
import Features from './components/home/Features'
import Testimonial from './components/home/Testimonial'

const App = () => {

  const dispatch = useDispatch()

  const getUserData = async () => {
    const token = localStorage.getItem('token')
    try {
      if (token) {
        const { data } = await api.get('/api/users/data')
        if (data.user) {
          dispatch(login({ token, user: data.user }))
        }
      }
    } catch (error) {
      console.log(error.message)
    } finally {
      dispatch(setLoading(false)) //always runs, no duplication
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='app' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='builder/:resumeId' element={<ResumeBuilder />} />
        </Route>

        <Route path='view/:resumeId' element={<Preview />} />

      </Routes>
    </>
  )
}

export default App