import { ReactNode } from "react";

export interface NavLink {
  id: string;
  name: string;
}

export interface SocialIcon {
  name: string;
  icon: ReactNode;
  url: string;
}

export interface WorkSkill {
  skill: string;
}

export interface Experience {
  title: string;
  company?: string;
  location?: string;
  icon: string;
  iconBg: string;
  date: string;
  img?: string;
  certification_link?: string;
}

export interface ProjectTag {
  name: string;
}

export interface Project {
  name: string;
  description: string;
  tags: ProjectTag[];
  isFeatured?: boolean;
  image?: string;
  source_code_link?: string;
  live_preview: string;
}

export type MySkills = string[];

declare const navLinks: NavLink[];
declare const socialIcons: SocialIcon[];
declare const mySkills: MySkills;
declare const workSkills: WorkSkill[];
declare const experiences: Experience[];
declare const projects: Project[];

export {
  navLinks,
  socialIcons,
  mySkills,
  workSkills,
  experiences,
  projects,
};