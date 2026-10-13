import type { CSSProperties } from 'react';

export interface TechTextProps {
  text?: string;
  fontFamily?: string;
  fontWeight?: number | string;
  fontSize?: number;
  letterSpacing?: number;
  color?: string;
  accentColor?: string;
  reach?: number;
  softness?: number;
  dashLength?: number;
  dashGap?: number;
  strokeWidth?: number;
  lineStyle?: 'dashed' | 'solid';
  reveal?: 'letter' | 'area';
  specks?: number;
  selection?: boolean;
  labels?: boolean;
  draggable?: boolean;
  sweep?: boolean;
  speed?: number;
  align?: 'left' | 'center';
  className?: string;
  style?: CSSProperties;
}

declare const TechText: (props: TechTextProps) => JSX.Element;

export default TechText;
