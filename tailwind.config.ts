/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Pretendard', 'sans-serif'],
                en: ['Edu', 'sans-serif'],
            },
            fontSize: {
                xs: ['12px', { lineHeight: '18px', letterSpacing: '-0.1px' }],
                sm: ['14px', { lineHeight: '22px', letterSpacing: '-0.3px' }],
                base: ['16px', { lineHeight: '24px', letterSpacing: '-0.4px' }],
                lg: ['20px', { lineHeight: '30px', letterSpacing: '-0.9px' }],
                xl: ['24px', { lineHeight: '36px', letterSpacing: '-1.7px' }],
                '2xl': ['32px', { lineHeight: '48px', letterSpacing: '-2.3px' }],
            },
            fontWeight: {
                thin: '200',
                light: '300',
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
                extrabold: '800',
            },
            colors: {
                white: '#FFFFFF',
                black: '#0B0B0B',
                gray: {
                    100: '#EFEFEF',
                    200: '#DCDCDC',
                    300: '#BDBDBD',
                    400: '#989898',
                    500: '#656565',
                    600: '#464646',
                    700: '#383838',
                    800: '#1F1F1F',
                    900: '#141414',
                },
                primary: {
                    DEFAULT: '#5A54F1',
                    light: '#726EF3',
                    dark: '#4642B8',
                },
                literal: {
                    danger: {
                        DEFAULT: '#EF3E3E',
                        light: '#F36E6E',
                        dark: '#B32E2E',
                    },
                    tomato: {
                        DEFAULT: '#DA532B',
                        light: '#EDAA95',
                        dark: '#A84425',
                    },
                    gold: {
                        DEFAULT: '#ECD800',
                        light: '#837FF5',
                        dark: '#B6A705',
                    },
                    green: {
                        DEFAULT: '#24C072',
                        light: '#92E0B9',
                        dark: '#20955B',
                    },
                    mint: {
                        DEFAULT: '#12DCCB',
                        light: '#89EEE6',
                        dark: '#13AA9D',
                    },
                    blue: {
                        DEFAULT: '#1288DC',
                        light: '#89C4EE',
                        dark: '#136BAA',
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
};
