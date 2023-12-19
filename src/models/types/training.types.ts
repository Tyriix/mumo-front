import { TrainingStatus, TrainingTypes } from '../enums/trainings.enum';

export type Training = {
  training_id: number;
  date: Date;
  description: string;
  training_type: TrainingTypes;
  training_location: string;
  status: TrainingStatus;
  created_at: Date;
};
