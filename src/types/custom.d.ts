// src/types/custom.d.ts
declare module '*.png';
declare module '*.svg';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.css';
declare module '*.scss';
declare module '*.module.css';
declare module '*.module.scss';
declare module '@/utils/cn' {
  export function cn(...classes: (string | undefined | false)[]): string;
}
