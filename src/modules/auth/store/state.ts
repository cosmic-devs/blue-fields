import { User } from 'vue-modules'
import { RequestStatus, AuthStatus, UserStatus } from '../../../enums'

export interface AuthState {
  token: string
  status: RequestStatus
  authStatus: AuthStatus
  me: User
}

export const initialState: AuthState = {
  token: localStorage.getItem('token') || '',
  status: RequestStatus.SUCCESS,
  authStatus: AuthStatus.OUT,
  me: {
    created: 0,
    _id: '',
    applications: {
      before: '',
      after: '',
      data: []
    },
    approved: false,
    country_code: '',
    email: '',
    email_verified: false,
    first_name: '',
    image: '',
    last_name: '',
    phone_number: '',
    positions: {
      before: '',
      after: '',
      data: []
    },
    projects: {
      before: '',
      after: '',
      data: []
    },
    status: UserStatus.GUEST
  }
}
