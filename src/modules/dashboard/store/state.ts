import { RequestStatus } from '../../../enums'

export interface DashboardState {
  status: RequestStatus
}

export const initialState: DashboardState = {
  status: RequestStatus.SUCCESS
}
