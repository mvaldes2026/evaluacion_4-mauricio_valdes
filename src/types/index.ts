export type ThemeMode = 'light' | 'dark';

export interface ProjectItem {
  id: string;
  title: string;
  technologies: string[];
  description: string;
  repoUrl: string;
  repoAriaLabel: string;
  featured: boolean;
}

export interface ProfileData {
  name: string;
  role: string;
  institution: string;
  email: string;
  avatarAlt: string;
}

export interface ContactFormValues {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}