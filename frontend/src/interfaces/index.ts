export interface TourRegistration {
  ID: number;
  UserID: number;
  TourTypeID: number;
  Schedule: number;
  Name: string;
  Date: Date;
}

export interface TourType {
  ID: number;
  Name: string;
  MinParticipant: number;
  MaxParticipant: number;
  Description: string;
}

export interface Enrollment {
  ID: number;
  UserID: number;
  CourseID: number;
  Date: Date;
  Remark: string;
}
