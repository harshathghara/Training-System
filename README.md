# Tech Skill Academy - Next.js Website

A modern, responsive educational platform built with Next.js and Tailwind CSS, featuring 7 complete pages that match the exact UI designs provided.

## 🚀 Features

- **7 Complete Pages**: Landing page, authentication modals, learning profile form, course details, learning interface, and dashboard
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Interactive Components**: Dynamic forms, modals, and navigation
- **TypeScript**: Full TypeScript support for better development experience

## 📋 Pages Included

1. **Landing Page** (`/`) - Main homepage with hero section and features
2. **Sign In Modal** (`/signin`) - Authentication modal with Google/OTP options
3. **Register Modal** (`/signup`) - Registration form with validation
4. **Learning Profile** (`/profile`) - Multi-step form for user onboarding
5. **Course Detail** (`/courses/ai-introduction`) - Individual course page with curriculum
6. **Course Learning** (`/courses/ux-design/module-4`) - Active learning interface
7. **Dashboard** (`/dashboard`) - User dashboard with course listings

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **UI Components**: Headless UI

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tech-skill-academy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design Features

### Landing Page
- Hero section with gradient background
- Call-to-action buttons
- Features section with icons
- Tech skills gap section

### Authentication Pages
- Modal overlay design
- Google and OTP login options
- Form validation
- Trust indicators

### Learning Profile
- Multi-step progress indicator
- Two-column form layout
- Skip functionality
- Responsive design

### Course Pages
- Detailed course information
- Expandable curriculum modules
- Instructor profiles
- Course enrollment options

### Learning Interface
- Sidebar navigation
- Video player placeholder
- Content tabs (transcript, notes, etc.)
- Progress tracking

### Dashboard
- Goal setting input
- Course grid layout
- Subscription sections
- Interactive elements

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎯 Key Components

### Header Component
- Logo with branding
- Navigation menu
- Mobile hamburger menu
- Authentication buttons

### Course Cards
- Gradient backgrounds
- Course information
- Rating and enrollment stats
- Hover effects

### Forms
- Input validation
- Error handling
- Responsive layouts
- Accessibility features

## 🔧 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary: Blue (#2563eb)
- Secondary: Green (#10b981)
- Accent: Purple (#8b5cf6)

### Content
All content is easily editable in the respective page components.

## 📄 File Structure

```
src/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── signin/page.tsx             # Sign in modal
│   ├── signup/page.tsx             # Register modal
│   ├── profile/page.tsx            # Learning profile
│   ├── dashboard/page.tsx          # User dashboard
│   ├── courses/
│   │   ├── page.tsx                # Courses listing
│   │   ├── ai-introduction/page.tsx # Course detail
│   │   └── ux-design/module-4/page.tsx # Learning interface
│   ├── certifications/page.tsx     # Certifications page
│   ├── about/page.tsx              # About page
│   ├── layout.tsx                  # Root layout
│   └── globals.css                 # Global styles
├── components/
│   └── Header.tsx                  # Header component
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For support or questions, please open an issue in the repository.

---

**Tech Skill Academy** - Empowering learners with cutting-edge tech education 🚀
