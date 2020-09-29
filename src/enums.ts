export enum RequestStatus {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

export enum AuthStatus {
  OUT = 'OUT',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

export enum UserStatus {
  GUEST = 'GUEST',
  VOLUNTEER = 'VOLUNTEER',
  ADMIN = 'ADMIN'
}

export enum ProjectType {
  EPHEMERAL = 'EPHEMERAL',
  RECURRENT = 'RECURRENT',
  PERMANENT = 'PERMANENT'
}

export enum ProjectStatus {
  ENDED = 'ENDED',
  FULL = 'FULL',
  RECRUITING = 'RECRUITING',
  APPROVAL = 'APPROVAL',
  PROTOTYPE = 'PROTOTYPE',
  CANCELLED = 'CANCELLED'
}

export enum ObservationStatus {
  POINTED = 'POINTED',
  REVISE = 'REVISE',
  FIXED = 'FIXED'
}
