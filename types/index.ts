// GENERAL API RESPONSE TYPES
export interface ICollectionResponse<T> {
  data: T;
  meta: IResourceMeta;
}
export interface IResourceMeta {
  pagination: IPagination;
}
export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

// EXPERIENCES TYPES
export interface IExperience {
  id: number;
  attributes: IExperienceAttribute;
}

export interface IExperienceAttribute {
  role: string;
  companyName: string;
  companyLogoUrl: string;
  startDate: string;
  endDate: string;
  tech: ITech[];
  duties: IDuties[];
  companyLogo: ICompanyLogo;
}
export interface ICompanyLogo {
  data: ICompanyLogoData;
}
export interface ICompanyLogoData {
  attributes: ICompanyLogoDataAttribute;
}
export interface ICompanyLogoDataAttribute {
  url: string;
}
export interface ITech {
  id: number;
  name: string;
}
export interface IDuties {
  id: number;
  dutyItem: string;
}

// SKILLS TYPES
export interface ISkill {
  id: number;
  attributes: ISkillAttribute;
}
export interface ISkillAttribute {
  rating: number;
  techImg: ITechImg;
}
export interface ITechImg {
  data: ITechImgData;
}
export interface ITechImgData {
  id: number;
  attributes: ITechImgDataAttribute;
}
export interface ITechImgDataAttribute {
  url: string;
}

//PROJECTS TYPES
export interface IProject {
  id: number;
  attributes: IProjectAttribute;
}
export interface IProjectAttribute {
  projectTitle: string;
  projectDesc: string;
  projectUrl: string;
  projectSnapshot: IProjectSnapshot;
}
export interface IProjectSnapshot {
  data: IProjectSnapshotData;
}
export interface IProjectSnapshotData {
  id: number;
  attributes: IProjectSnapshotDataAttribute;
}
export interface IProjectSnapshotDataAttribute {
  url: string;
}

// CONTACTS TYPES
export interface IContact {
  id: number;
  attributes: IContactAttribute;
}
export interface IContactAttribute {
  phone: string;
  email: string;
  address: string;
}
