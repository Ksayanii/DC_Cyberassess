export interface Question {
  id: string;
  title: string;
  name: keyof AssessmentData;
  options: {
    id: string;
    label: string;
    value: number;
  }[];
}

export interface AssessmentData {
  passwordManagement: number;
  passwordFrequency: number;
  mfa: number;
  updates: number;
}

export interface ScoreData {
  overall: number;
  password: number;
  auth: number;
  device: number;
}

export interface Recommendation {
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
}