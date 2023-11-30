interface TourRegistration {
  ID: number;
  UserID: number;
  TourTypeID: number;
  Schedule: number;
  Name: string;
  Date: Date;
}

interface TourType {
  ID: number;
  Name: string;
  MinParticipant: number;
  MaxParticipant: number;
  Description: string;
}

interface Enrollment {
  ID: number;
  UserID: number;
  CourseID: number;
  Date: Date;
  Remark: string;
}
