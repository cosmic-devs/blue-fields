declare module 'vue-modules' {
  export interface VueModule<T = Record<string, any>> {
    readonly name: string
    install(): void
  }

  export enum ProjectType {
    EPHEMERAL = 1,
    RECURRENT,
    PERMANENT
  }

  export enum ProjectStatus {
    PLANNED = 1,
    RECRUITING,
    FULL
  }

  export enum PositionType {
    VOLUNTEER = 1,
    FIELD
  }

  export enum UserStatus {
    GUEST = 1,
    VOLUNTEER,
    WORKER,
    CREATOR,
    ADMIN
  }

  export interface Position {
    type: PositionType
    project: Project
    title: string
    limit: number
    description: string
    candidates: User[]
    participants: User[]
  }

  export interface Location {
    latitude: number
    longitude: number
    address: string
  }

  export interface User {
    applications: Position[]
    approved: boolean
    country_code: string
    email: string
    email_verified: boolean
    first_name: string
    image: ''
    last_name: string
    phone_number: string
    positions: Position[]
    projects: Project[]
    status: UserStatus
  }

  export interface Project {
    approved: boolean
    creator: User
    description: string
    end: string
    id: number
    image: string
    location: Location
    positions: Position[]
    status: ProjectStatus
    start: string
    title: string
    type: ProjectType
  }

}
