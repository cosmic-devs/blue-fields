declare module 'vue-modules' {
  export interface VueModule<T = Record<string, any>> {
    readonly name: string
    install(): void
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

  export enum UserStatus {
    GUEST = 'GUEST',
    VOLUNTEER = 'VOLUNTEER',
    ADMIN = 'ADMIN'
  }

  export interface Position {
    _id: string
    project: Project
    title: string
    limit: number
    description: string
    candidates: {
      before: string
      after: string
      data: User[]
    }
    participants: {
      before: string
      after: string
      data: User[]
    }
  }

  export interface Location {
    latitude: number
    longitude: number
    address: string
  }

  export interface LocationInput {
    latitude: number
    longitude: number
    address?: string
  }

  export interface User {
    _id: string
    created: number
    first_name: string
    last_name: string
    email: string
    email_verified: boolean
    country_code: string
    phone_number: string
    approved: boolean
    image: string
    status: UserStatus
    projects: {
      before: string
      after: string
      data: Project[]
    }
    applications: {
      before: string
      after: string
      data: Position[]
    }
    positions: {
      before: string
      after: string
      data: Position[]
    }
  }

  export interface CreateUserInput {
    email: string
    country_code: string
    first_name: string
    last_name: string
    password: string
    phone_number: string
    image?: string
  }

  export interface LoginUserInput {
    email: string
    password: string
  }

  export interface LogoutInput {
    all_tokens?: boolean
  }

  export interface Project {
    _id: string
    created: number
    title: string
    description: string
    location: Location
    start: number
    end: number
    image: string
    type: ProjectType
    status: ProjectStatus
    owner: User
    positions: {
      before: string
      after: string
      data: Position[]
    }
    observations: {
      before: string
      after: string
      data: Observation[]
    }
  }

  export interface CreateProjectInput {
    title: string
    description: string
    location: LocationInput
    type: ProjectType
    start?: number
    end?: number
    image?: string
  }

  export interface Observation {
    _id: string
    created: number
    owner: User
    description: string
    status: ObservationStatus
    project: Project
  }

  export interface ObservationProjectRelation {
    connect: string
  }

  export interface CreateObservationInput {
    title: string
    description: string
    project: ObservationProjectRelation
  }
}

declare module 'en' {}
declare module 'es' {}
declare module 'pt' {}
