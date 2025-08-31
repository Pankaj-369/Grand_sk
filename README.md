# The Grand SK Cafe and Lounge Website

A professional, responsive website for The Grand SK Cafe and Lounge, founded by Nitesh Chhabra.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Online Reservations**: Complete booking system with email confirmations
- **Interactive Menu**: Categorized menu with pricing and descriptions
- **Photo Gallery**: Showcase of cafe ambiance and offerings
- **Contact Information**: Complete location and contact details
- **Customer Testimonials**: Social proof and reviews
- **Modern UI/UX**: Smooth animations and professional design

## Contact Information

- **Address**: Building No-9 Satya Niketan, Moti Bagh, 110021 (South Campus)
- **Phone**: +91 8587885015 (Nitesh Chhabra), +91 8700560190 (Vishal Hasija)
- **Email**: niteshchhabra2001@gmail.com
- **Hours**: Everyday 11:00 AM - 12:00 AM
- **Nearest Metro**: Durgabai Deshmukh

## Email Configuration

To enable automatic email confirmations for reservations:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create email templates using the provided templates in `src/services/emailTemplates.ts`
3. Update the EmailJS configuration in `src/components/Contact.tsx`
4. Replace placeholder values with your actual EmailJS credentials

## Technologies Used

- React 18 with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- React Leaflet for interactive maps
- EmailJS for email functionality
- Vite for development and building

## Development

```bash
npm install
npm run dev
```

## Building

```bash
npm run build
```

## Deployment

The site is optimized for static hosting and can be deployed to any modern hosting platform.