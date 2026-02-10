export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  timeline: { phase: string; description: string }[];
  solutions: string[];
  strategies: string[];
  valueProps: { label: string; value: string }[];
}
