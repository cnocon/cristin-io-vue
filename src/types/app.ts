export interface IAppData {
  jobTitle: string
  experience: IWorkHistory[]
  volunteering: IVolunteeringData[]
  skills: string[]
  assets: string[]
  courses: IEducationData[]
  connect: IConnectData[]
  resume: IResumeData
}
export interface IAward {
  name: string
  detail: string
}
export interface IConnectData {
  icon: string
  link?: string
  text: string
  classes: string
}
export interface IEducationData {
  img: string
  name: string
  url: string
  company: string
  instructor: string
  description: string
  certificate_url: string
}
export interface IResumeData {
  name: string
  jobTitle: string
  experience: IWorkHistory[]
  volunteering: IVolunteeringData[]
  skills: string[]
  assets: string[]
  education: IEducationData[]
}
export interface IQuote {
  cite?: string
  citePosition?: string
  content: string
}
export interface IVolunteeringData {
  year: number
  startDate: string | null
  endDate: string
  position: string
  company: string
  location: string
  positionDetail: string
  descList: string[]
  awards: IAward[]
}
export interface IWorkHistory {
  year: number
  startDate: string
  endDate: string | null
  position: string
  company: string
  location: string
  desc: string | null
  descList: string[]
  awards: IAward[]
}
