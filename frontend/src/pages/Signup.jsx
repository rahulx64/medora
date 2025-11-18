import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets_frontend/assets'

const Signup = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const navigate = useNavigate()

  const validateForm = () => {
    const newErrors = {}

    // Full name validation
    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    } else if (fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Enter a valid email address'
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    } else if (!/(?=.*[a-z])/.test(password)) {
      newErrors.password = 'Password must contain lowercase letters'
    } else if (!/(?=.*[A-Z])/.test(password)) {
      newErrors.password = 'Password must contain uppercase letters'
    } else if (!/(?=.*\d)/.test(password)) {
      newErrors.password = 'Password must contain a number'
    }

    // Confirm password validation
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    // Terms agreement
    if (!agreeTerms) {
      newErrors.terms = 'You must agree to the terms and conditions'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    try {
      // Simulate API call - replace with actual backend
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Store user session (replace with actual auth logic)
      localStorage.setItem('userName', fullName)
      localStorage.setItem('userEmail', email)
      localStorage.setItem('isLoggedIn', 'true')

      setSuccess(true)
      setTimeout(() => {
        navigate('/doctors')
      }, 1500)
    } catch {
      setErrors({ submit: 'Signup failed. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  const PasswordStrength = ({ password }) => {
    let strength = 0
    if (password.length >= 6) strength++
    if (/(?=.*[a-z])/.test(password) && /(?=.*[A-Z])/.test(password)) strength++
    if (/(?=.*\d)/.test(password)) strength++

    const getColor = () => {
      if (strength === 0) return 'bg-gray-200'
      if (strength === 1) return 'bg-red-500'
      if (strength === 2) return 'bg-yellow-500'
      return 'bg-green-500'
    }

    return (
      <div className="mt-2">
        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className={`h-full ${getColor()} transition-all`} style={{ width: `${(strength / 3) * 100}%` }} />
        </div>
        <p className="text-xs text-gray-600 mt-1">
          {strength === 0 && 'Weak password'}
          {strength === 1 && 'Fair password'}
          {strength === 2 && 'Good password'}
          {strength === 3 && '✓ Strong password'}
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={assets.medoralogo} alt="Medora" className="w-12 h-12" />
          </div>

          <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-2">Create Account</h1>
          <p className="text-center text-gray-600 mb-8">Join Medora and book appointments easily</p>

          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-700 font-semibold">✓ Account created! Redirecting...</p>
            </div>
          )}

          {/* Submit Error */}
          {errors.submit && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{errors.submit}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value)
                  if (errors.fullName) setErrors({ ...errors, fullName: '' })
                }}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                  errors.fullName
                    ? 'border-red-300 focus:ring-red-200'
                    : 'border-gray-300 focus:ring-green-200'
                }`}
                placeholder="John Doe"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (errors.email) setErrors({ ...errors, email: '' })
                }}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                  errors.email
                    ? 'border-red-300 focus:ring-red-200'
                    : 'border-gray-300 focus:ring-green-200'
                }`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (errors.password) setErrors({ ...errors, password: '' })
                  }}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                    errors.password
                      ? 'border-red-300 focus:ring-red-200'
                      : 'border-gray-300 focus:ring-green-200'
                  }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-600 hover:text-gray-900"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </div>
              <PasswordStrength password={password} />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                    if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: '' })
                  }}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                    errors.confirmPassword
                      ? 'border-red-300 focus:ring-red-200'
                      : 'border-gray-300 focus:ring-green-200'
                  }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-gray-600 hover:text-gray-900"
                >
                  {showConfirmPassword ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => {
                  setAgreeTerms(e.target.checked)
                  if (errors.terms) setErrors({ ...errors, terms: '' })
                }}
                className="mt-1 w-4 h-4 accent-green-600 cursor-pointer"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to the{' '}
                <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                  Privacy Policy
                </a>
              </label>
            </div>
            {errors.terms && (
              <p className="text-sm text-red-600">{errors.terms}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || success}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold shadow-md hover:from-green-600 hover:to-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating Account...' : success ? 'Account Created!' : 'Create Account'}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-600">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social Signup */}
          <div className="flex gap-3 mb-6">
            <button className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium text-gray-700">
              <span className="flex items-center justify-center gap-2">
                <span>🔵</span> Google
              </span>
            </button>
            <button className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium text-gray-700">
              <span className="flex items-center justify-center gap-2">
                <span>f</span> Facebook
              </span>
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center text-gray-700">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              Sign in here
            </button>
          </p>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-3">Need help?</p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="text-green-600 hover:text-green-700 font-medium text-sm">
              Contact Support
            </a>
            <span className="text-gray-300">•</span>
            <a href="#" className="text-green-600 hover:text-green-700 font-medium text-sm">
              FAQs
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup