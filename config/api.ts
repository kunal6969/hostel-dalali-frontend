// API Configuration
export const API_CONFIG = {
  BASE_URL: 'https://hostel-dalali-backend.onrender.com/api',
  TIMEOUT: 10000, // 10 seconds
  RETRY_ATTEMPTS: 3,
} as const;

// Export individual URLs for easy access
export const API_ENDPOINTS = {
  AUTH: {
    SEND_OTP: '/auth/sendOtpForSignup',
    VERIFY_OTP: '/auth/verifyOtpForSignup',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
  },
  LISTINGS: {
    BASE: '/listings',
    UPLOAD_PROOF: '/listings/upload-proof',
  },
  ATTENDANCE: {
    COURSES: '/attendance/courses',
  },
  USERS: {
    PROFILE: '/users/profile',
  },
  MESSAGES: {
    BASE: '/messages',
  },
  EVENTS: {
    BASE: '/events',
  },
  FRIENDS: {
    BASE: '/friends',
  },
} as const;
