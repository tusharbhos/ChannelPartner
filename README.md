# ConectR Landing Page

A responsive Next.js landing page with sign-up functionality, benefits popup, and how-to-work video.

## Features

- Responsive design for mobile, tablet, laptop, and large PC
- Sign up button that navigates to a sign-up page
- Benefits button that opens a popup with 4 benefit images
- How to Work button that opens a popup with a video

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/page.tsx` - Main landing page
- `app/signup/page.tsx` - Sign up page
- `app/components/Modal.tsx` - Reusable modal component
- `app/layout.tsx` - Root layout
- `app/globals.css` - Global styles with Tailwind

## Notes

- Replace placeholder images (`/benefit1.jpg`, etc.) with actual images in the `public` folder.
- Update the video URL in the modal to your desired video.