export enum TrainingStatus {
  Scheduled = 'scheduled',
  Completed = 'completed',
  Canceled = 'canceled',
}

export enum TrainingTypes {
  GroupTraining = 'group training',
  IndividualTraining = 'individual training',
  GroupHandling = 'group handling',
  IndividualHandling = 'individual handling',
}

export enum TrainingTypesColors {
  'group training' = '#66b5a7',
  'individual training' = '#ee9694',
  'group handling' = '#447e73',
  'individual handling' = '#cc7170',
}

export enum TrainingCycleStatus {
  Active = 'active',
  Inactive = 'inactive',
}
