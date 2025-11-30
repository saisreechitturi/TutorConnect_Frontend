/**
 * TutorConnect Tailwind CSS Configuration
 * 
 * This configuration extends Tailwind's default theme with custom colors
 * for the TutorConnect brand identity.
 * 
 * CUSTOM COLOR PALETTE:
 * Primary (Blue) - Used for main brand identity, buttons, links, and focus states
 * - primary-50:  #eff6ff - Lightest blue (used for subtle backgrounds, hover states)
 * - primary-100: #dbeafe - Very light blue (used for light backgrounds, selected states)
 * - primary-500: #3b82f6 - Medium blue (used for focus rings, borders, accents)
 * - primary-600: #2563eb - Main brand blue (primary buttons, active states, main CTA)
 * - primary-700: #1d4ed8 - Dark blue (button hover states, pressed states)
 * 
 * DEFAULT TAILWIND COLORS USED:
 * Gray Scale - Used for text, backgrounds, and neutral UI elements
 * - gray-50 to gray-900: Full grayscale palette for various UI needs
 * 
 * Status Colors (Tailwind defaults):
 * - Red (red-300, red-500, red-600): Error states, destructive actions
 * - Green (green-300, green-500, green-600): Success states, positive feedback
 * - Yellow (yellow-300, yellow-500, yellow-600): Warning states, caution indicators
 * - Blue (blue-500, blue-600): Information, links, highlights
 * 
 * FONT FAMILY (Tailwind defaults):
 * - sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
 *         "Helvetica Neue", Arial, "Noto Sans", sans-serif (default for all text)
 * - serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif
 * - mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", 
 *         "Courier New", monospace (for code snippets)
 * 
 * SPACING SCALE (Tailwind defaults):
 * - 1: 0.25rem (4px)
 * - 2: 0.5rem (8px)
 * - 3: 0.75rem (12px)
 * - 4: 1rem (16px)
 * - 5: 1.25rem (20px)
 * - 6: 1.5rem (24px)
 * - 8: 2rem (32px)
 * - 10: 2.5rem (40px)
 * - 12: 3rem (48px)
 * 
 * FONT SIZES (Tailwind defaults):
 * - xs: 0.75rem (12px) - Extra small text, hints
 * - sm: 0.875rem (14px) - Small text, labels
 * - base: 1rem (16px) - Default body text
 * - lg: 1.125rem (18px) - Slightly larger text
 * - xl: 1.25rem (20px) - Large text
 * - 2xl: 1.5rem (24px) - Headings
 * - 3xl: 1.875rem (30px) - Large headings
 * - 4xl: 2.25rem (36px) - Extra large headings
 * 
 * BORDER RADIUS (Tailwind defaults):
 * - rounded-none: 0
 * - rounded-sm: 0.125rem (2px)
 * - rounded: 0.25rem (4px)
 * - rounded-md: 0.375rem (6px) - Most commonly used
 * - rounded-lg: 0.5rem (8px)
 * - rounded-xl: 0.75rem (12px)
 * - rounded-full: 9999px - Perfect circles
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Custom primary color palette for TutorConnect brand
                primary: {
                    50: '#eff6ff',   // Lightest blue - subtle backgrounds
                    100: '#dbeafe',  // Very light blue - hover/selected states
                    500: '#3b82f6',  // Medium blue - focus rings, accents
                    600: '#2563eb',  // Main brand blue - primary buttons, CTAs
                    700: '#1d4ed8'   // Dark blue - hover states
                }
            }
        },
    },
    plugins: [],
}