export interface IConnectData {
  icon: string;
  link?: string;
  text: string;
  classes: string;
}
export interface IEducationData {
  img: string;
  name: string;
  url: string;
  company: string;
  instructor: string;
  description: string;
  certificate_url: string;
}
export interface IAward {
  name: string;
  detail: string;
}
export interface IWorkHistory {
  year: number;
  startDate: string;
  endDate: string | null;
  position: string;
  company: string;
  location: string;
  desc: string | null;
  descList: string[];
  awards: IAward[];
}
export interface IVolunteeringData {
  year: number;
  startDate: string | null;
  endDate: string;
  position: string;
  company: string;
  location: string;
  positionDetail: string;
  descList: string[];
  awards: IAward[];
}
export interface IAppData {
  jobTitle: string;
  experience: IWorkHistory[];
  volunteering: IVolunteeringData[];
  skills: string[];
  assets: string[];
  courses: IEducationData[];
  connect: IConnectData[];
}
