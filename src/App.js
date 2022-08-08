import './App.css'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute'
import LoginScreen from './components/screens/LoginScreen'
import RegisterScreen from './components/screens/RegisterScreen'
import ForgotPasswordScreen from './components/screens/ForgotPassword'
import ResetPasswordScreen from './components/screens/ResetPasswordScreen'
import PrivateScreen from './components/screens/PrivateScreen'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<PrivateScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/forgotpassword" element={<ForgotPasswordScreen />} />
          <Route
            path="/resetPassword/:resetToken"
            element={<ResetPasswordScreen />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
