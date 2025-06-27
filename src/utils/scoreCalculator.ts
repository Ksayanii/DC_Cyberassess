import { AssessmentData, ScoreData, Recommendation } from '@/types/assessment';


export function calculateScores(data: AssessmentData): ScoreData {
  const passwordScore = (data.passwordManagement + data.passwordFrequency) / 2;
  const authScore = data.mfa;
  const deviceScore = data.updates;
 
  const overallScore = Math.round(((passwordScore + authScore + deviceScore) / 12) * 100);
 
  return {
    overall: overallScore,
    password: passwordScore,
    auth: authScore,
    device: deviceScore
  };
}


export function generateRecommendations(data: AssessmentData, scores: ScoreData): Recommendation[] {
  const recommendations: Recommendation[] = [];


  // Password-based recommendations
  if (scores.password < 3) {
    recommendations.push({
      priority: 'high',
      title: 'Implement a Password Manager',
      description: 'Use a dedicated password manager to generate and store unique, complex passwords for each account.'
    });
  }


  if (data.passwordFrequency < 3) {
    recommendations.push({
      priority: 'medium',
      title: 'Regular Password Updates',
      description: 'Change passwords every 3-6 months or immediately after security incidents.'
    });
  }


  // Authentication recommendations
  if (scores.auth < 4) {
    recommendations.push({
      priority: 'high',
      title: 'Enable Multi-Factor Authentication',
      description: 'Add an extra layer of security by enabling MFA on all important accounts.'
    });
  }


  // Device security recommendations
  if (scores.device < 3) {
    recommendations.push({
      priority: 'high',
      title: 'Enable Automatic Updates',
      description: 'Keep your devices secure by enabling automatic updates for operating systems and applications.'
    });
  }


  // Add general recommendations
  recommendations.push({
    priority: 'medium',
    title: 'Regular Security Audits',
    description: 'Conduct monthly reviews of your security practices and account access.'
  });


  return recommendations;
}


export function getScoreColor(score: number): string {
  if (score >= 80) return 'from-green-500 to-green-600';
  if (score >= 60) return 'from-blue-500 to-blue-600';
  if (score >= 40) return 'from-orange-500 to-orange-600';
  return 'from-red-500 to-red-600';
}


export function getScoreBarColor(score: number): string {
  if (score >= 3.5) return 'bg-gradient-to-r from-green-500 to-green-600';
  if (score >= 2.5) return 'bg-gradient-to-r from-blue-500 to-blue-600';
  if (score >= 1.5) return 'bg-gradient-to-r from-orange-500 to-orange-600';
  return 'bg-gradient-to-r from-red-500 to-red-600';
}
