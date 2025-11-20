// Utility to replace blue colors with primary color #535CCD
// This file serves as documentation for color replacements

export const PRIMARY_COLOR = '#535CCD';
export const PRIMARY_COLORS = {
  50: '#f0f0ff',
  100: '#e0e0ff',
  200: '#c7c7ff',
  300: '#a5a5ff',
  400: '#7d7dff',
  500: '#535CCD',
  600: '#4a52b8',
  700: '#3f46a3',
  800: '#353b8e',
  900: '#2a3079',
};

// Color replacement map
export const COLOR_REPLACEMENTS: Record<string, string> = {
  'bg-blue-600': 'bg-[#535CCD]',
  'bg-blue-700': 'bg-[#4a52b8]',
  'bg-blue-500': 'bg-[#535CCD]',
  'bg-blue-800': 'bg-[#3f46a3]',
  'bg-blue-900': 'bg-[#2a3079]',
  'bg-blue-50': 'bg-[#f0f0ff]',
  'bg-blue-100': 'bg-[#e0e0ff]',
  'text-blue-600': 'text-[#535CCD]',
  'text-blue-700': 'text-[#4a52b8]',
  'text-blue-500': 'text-[#535CCD]',
  'text-blue-800': 'text-[#3f46a3]',
  'text-blue-900': 'text-[#2a3079]',
  'text-blue-100': 'text-[#e0e0ff]',
  'text-blue-300': 'text-[#c7c7ff]',
  'border-blue-600': 'border-[#535CCD]',
  'border-blue-500': 'border-[#535CCD]',
  'border-blue-200': 'border-[#c7c7ff]',
  'border-blue-800': 'border-[#3f46a3]',
  'ring-blue-500': 'ring-[#535CCD]',
  'ring-blue-600': 'ring-[#535CCD]',
  'hover:bg-blue-700': 'hover:bg-[#4a52b8]',
  'hover:bg-blue-800': 'hover:bg-[#3f46a3]',
  'hover:text-blue-500': 'hover:text-[#535CCD]',
  'hover:text-blue-700': 'hover:text-[#4a52b8]',
  'from-blue-600': 'from-[#535CCD]',
  'to-blue-700': 'to-[#4a52b8]',
  'from-blue-50': 'from-[#f0f0ff]',
  'to-indigo-600': 'to-[#535CCD]',
  'to-indigo-700': 'to-[#4a52b8]',
};

