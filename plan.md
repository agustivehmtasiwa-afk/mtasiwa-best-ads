# Implementation Plan: MTASIWA JR 💫 ADS

A modern, premium advertising and promotion mobile-responsive web application.

## Scope Summary
- **Mobile-first web app** with a futuristic social-media aesthetic (Black, Orange, Gold, White).
- **Core Features**: Ad creation, music/video uploads, AI poster generator (simulated), business campaigns, chat support, wallet system, and language support (English/Swahili).
- **Persistence**: Client-side only (localStorage) for user sessions, profile, and basic "database" state.
- **Admin**: Dedicated dashboard for management tasks (approvals, users, analytics).

## Affected Areas
- **Frontend**: All UI components, animations (Framer Motion), layout, and state management.
- **Data**: Mock data layer using `localStorage` for simulating persistence.
- **Localization**: i18n setup for Swahili and English.

## Phases

### Phase 1: Foundation & Theming (frontend_engineer)
- Configure Tailwind with the specific palette: Black, Orange (`#FF8C00`), Gold (`#FFD700`).
- Setup `framer-motion` for smooth animations.
- Implement i18next for English/Swahili support.
- Create shared UI layout with the Bottom Menu (Home, Explore, Upload, Notifications, Profile).

### Phase 2: Authentication & Profile (frontend_engineer)
- Implement animated Welcome Screen.
- Create Login/Signup pages (Phone, Email, Google/Facebook mocks).
- User Profile page with bio, photo upload (simulated), and language toggle.
- Admin login route for `mtasiwajr@gmail.com`.

### Phase 3: Home & Core Features (frontend_engineer)
- Home screen with the 6 primary action buttons:
  - Create Advert (Multi-step form)
  - Upload Music (File selection + Mock player)
  - Video Promotion (Feed-style viewer)
  - Business Campaign (Dashboard for ads)
  - AI Poster Generator (Canvas/Mock generation UI)
  - Contact Us (Chat UI)
- Implementation of the "Explore" feed (TikTok/Canva style).

### Phase 4: Systems & Logic (quick_fix_engineer)
- **Wallet/Credits**: Logic for adding/deducting mock credits.
- **Notifications**: Local notification state management.
- **Language Toggle**: Hooking up the i18n switch in settings.
- **Persistence**: Service to sync `localStorage` with app state.

### Phase 5: Admin Dashboard (frontend_engineer)
- Admin-only routes with restricted access.
- User management table (Block/Delete actions).
- Ad approval queue.
- Analytics charts (Mock data).
- System-wide notification sender.

### Phase 6: Polish & Mobile Optimization (quick_fix_engineer)
- Ensure all components are responsive and feel like a native mobile app.
- Final CSS touch-ups for "premium/futuristic" look (gradients, glows, blurs).
- Verification of Swahili translations.

## Assumptions & Risks
- **No Backend**: All data will reset if the user clears browser storage.
- **AI Poster**: This will be a UI-only simulation or use a public mock API, not a real custom-trained model.
- **File Uploads**: Files will be handled via URL.createObjectURL or Base64 and stored in memory/localStorage (limited by browser size constraints).

## Sequencing Constraints
- Phase 1 must complete before others to ensure consistent branding.
- Phase 5 depends on the "Core Features" from Phase 3 being ready to manage.
