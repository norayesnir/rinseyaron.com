/** @type {import('tailwindcss').Config} */
export default {
  // content: [],
  theme: {
    // extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'neutral': {
        300: '#09090a',
        200: '#101013',
        'DEFAULT': '#252329',
        90: '#3b393e',
        80: '#525055',
        70: '#68676b',
        60: '#7f7e81',
        50: '#959497',
        40: '#acabad',
        30: '#c1c1c2',
        20: '#d7d6d7',
        10: '#ebebeb'
      },
      'primary': {
        300: '#02050b',
        200: '#0a1b38',
        100: '#133164',
        90: '#1a4790',
        80: '#255ec0',
        'DEFAULT': '#2F78F3',
        60: '#4c8af4',
        50: '#6299f5',
        40: '#76a5f6',
        30: '#88b0f7',
        20: '#9bbcf8',
        10: '#b0c9f9'
      },
      'secondary': {
        300: '#0b0520',
        200: '#24135b',
        100: '#391a80',
        90: '#4c1d9a',
        80: '#6122b8',
        'DEFAULT': '#7E2AE5',
        60: '#984ee3',
        50: '#b06adb',
        40: '#c580d3',
        30: '#d899d1',
        20: '#e8bbdc',
        10: '#f8ecf4'
      }
    },
    fontFamily: {
      heading: ['Noto Sans JP', 'sans-serif'],
      body: ['Noto Sans JP', 'sans-serif'],
    },
  },
  // plugins: [],
}
