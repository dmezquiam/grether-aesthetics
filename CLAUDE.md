# CLAUDE.md - AI Assistant Guide for Grether Aesthetics

> Comprehensive guide for AI assistants working on the Grether Aesthetics codebase

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Codebase Structure](#codebase-structure)
- [Development Workflows](#development-workflows)
- [Architecture Patterns](#architecture-patterns)
- [Code Conventions](#code-conventions)
- [Common Tasks](#common-tasks)
- [Important Gotchas](#important-gotchas)
- [Configuration Files](#configuration-files)

---

## Project Overview

**Grether Aesthetics** is a professional aesthetics clinic website built as a single-page application with a booking system. The site features a marketing landing page with multiple sections (hero, services, testimonials, FAQ, etc.) and a dedicated booking form page that submits to Google Sheets via Apps Script webhook.

**Key Features:**
- Responsive marketing website with multiple sections
- Booking form with calendar picker and validation
- Google Sheets integration for appointment management
- Smooth scroll navigation and section anchoring
- Mobile-first responsive design
- Dark mode ready (not currently implemented)

**Project Origin:** Created via Lovable.dev platform
- URL: https://lovable.dev/projects/aa0598e6-fada-40cf-b3f4-259845605dd2
- Changes via Lovable auto-commit to this repo

---

## Tech Stack

### Core Framework
- **React 18.3** - UI library
- **TypeScript 5.8** - Type safety (loose mode)
- **Vite 5.4** - Build tool and dev server
- **React Router v6** - Client-side routing

### UI & Styling
- **Tailwind CSS 3.4** - Utility-first CSS
- **shadcn/ui** - Radix UI component library
- **Lucide React** - Icon library
- **next-themes** - Dark mode support (installed, not active)

### Forms & Validation
- **react-hook-form 7.61** - Form state management
- **Zod 3.25** - Schema validation
- **@hookform/resolvers** - Zod + RHF integration

### Data & State
- **TanStack Query 5.83** - Server state (installed, unused)
- **React hooks** - Local component state
- No global state management

### Additional Libraries
- **date-fns** - Date formatting and manipulation
- **react-day-picker** - Calendar component
- **sonner** - Toast notifications
- **embla-carousel-react** - Carousel functionality

### Build Tools
- **@vitejs/plugin-react-swc** - Fast Refresh with SWC
- **ESLint 9** - Linting (minimal rules)
- **PostCSS + Autoprefixer** - CSS processing

---

## Codebase Structure

```
/home/user/grether-aesthetics/
├── src/
│   ├── pages/                    # Route pages (3 files)
│   │   ├── Index.tsx            # Home page (all sections)
│   │   ├── Reservar.tsx         # Booking form page
│   │   └── NotFound.tsx         # 404 error page
│   │
│   ├── components/               # Feature components
│   │   ├── ui/                  # shadcn/ui primitives (40+ files)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── calendar.tsx
│   │   │   └── ... (35+ more)
│   │   │
│   │   ├── Header.tsx           # Navigation bar
│   │   ├── Hero.tsx             # Hero section
│   │   ├── AboutSection.tsx     # About section
│   │   ├── ServicesSection.tsx  # Services grid
│   │   ├── BeforeAfterSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── WhyChooseSection.tsx
│   │   ├── BookingSection.tsx   # CTA booking section
│   │   ├── FAQSection.tsx       # FAQ accordion
│   │   ├── LocationSection.tsx  # Map and location
│   │   ├── SocialSection.tsx    # Social media links
│   │   ├── WhatsAppSection.tsx  # WhatsApp CTA
│   │   ├── FloatingWhatsApp.tsx # Floating button
│   │   ├── Footer.tsx           # Site footer
│   │   └── NavLink.tsx          # Navigation link component
│   │
│   ├── hooks/                    # Custom React hooks
│   │   ├── use-mobile.tsx       # Mobile breakpoint detection
│   │   └── use-toast.ts         # Toast notification system
│   │
│   ├── lib/                      # Utilities and helpers
│   │   ├── utils.ts             # cn() classname utility
│   │   └── calendly.ts          # Calendly integration
│   │
│   ├── assets/                   # Images and media (17 files)
│   │   └── *.{jpg,png,webp}
│   │
│   ├── App.tsx                   # Main app with router
│   ├── main.tsx                  # React entry point
│   ├── index.css                 # Global styles + design tokens
│   └── vite-env.d.ts            # Vite type declarations
│
├── public/                       # Static assets
├── vite.config.ts               # Vite configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript config
├── components.json              # shadcn/ui config
├── eslint.config.js             # ESLint rules
├── postcss.config.js            # PostCSS plugins
├── package.json                 # Dependencies and scripts
└── README.md                    # Project readme
```

### Key Directory Purposes

**`/src/pages/`** - Route-level page components
- Each file represents a route in the application
- Import and use in `App.tsx` for routing
- Keep page logic minimal, delegate to components

**`/src/components/`** - Reusable feature components
- Section components for the home page
- Shared UI components (Header, Footer)
- Each component in its own file

**`/src/components/ui/`** - shadcn/ui primitives
- DO NOT manually edit these files
- Managed via `npx shadcn@latest add <component>`
- Customization via Tailwind classes when using them

**`/src/hooks/`** - Custom React hooks
- Reusable stateful logic
- Follow `use*` naming convention

**`/src/lib/`** - Utility functions and helpers
- Pure functions without React dependencies
- External integrations (Calendly, etc.)

**`/src/assets/`** - Images and media files
- Import in components: `import image from "@/assets/image.jpg"`

---

## Development Workflows

### Setting Up Development Environment

```bash
# Install dependencies
npm install

# Start development server (port 8080)
npm run dev

# Lint code
npm run lint

# Build for production
npm run build

# Build for development
npm run build:dev

# Preview production build
npm run preview
```

### Adding a New Page

1. Create page component in `/src/pages/`:
```tsx
// src/pages/NewPage.tsx
const NewPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Your content */}
      <Footer />
    </div>
  );
};

export default NewPage;
```

2. Add route in `App.tsx`:
```tsx
import NewPage from "./pages/NewPage";

// Inside <Routes>, BEFORE the "*" catch-all route:
<Route path="/new-page" element={<NewPage />} />
```

3. Add navigation link in `Header.tsx` if needed

### Adding a New Section to Home Page

1. Create section component in `/src/components/`:
```tsx
// src/components/NewSection.tsx
const NewSection = () => {
  return (
    <section id="new-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Title</h2>
          <p className="text-lg text-muted-foreground">Description</p>
        </div>
        {/* Content */}
      </div>
    </section>
  );
};

export default NewSection;
```

2. Import and add to `Index.tsx`:
```tsx
import NewSection from "@/components/NewSection";

// Add in the appropriate position:
<NewSection />
```

3. Update Header navigation if section needs a link

### Adding a shadcn/ui Component

```bash
# Add a new component (e.g., tabs)
npx shadcn@latest add tabs

# Component will be created in src/components/ui/tabs.tsx
```

### Working with Forms

Use react-hook-form + Zod pattern (see `Reservar.tsx` for reference):

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// 1. Define schema
const formSchema = z.object({
  name: z.string().min(2, "Name too short").max(100),
  email: z.string().email("Invalid email"),
});

type FormData = z.infer<typeof formSchema>;

// 2. Initialize form
const form = useForm<FormData>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    name: "",
    email: "",
  },
});

// 3. Handle submission
const onSubmit = async (data: FormData) => {
  console.log(data);
  // Handle form submission
};

// 4. Render form
<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <Button type="submit">Submit</Button>
  </form>
</Form>
```

### API Integration Pattern

Current pattern (direct fetch):

```tsx
const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async (data: FormData) => {
  setIsLoading(true);
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    });

    const result = await response.json();

    if (result.status === 'success') {
      toast.success('Success message');
    } else {
      toast.error(result.message || 'Error occurred');
    }
  } catch (error) {
    console.error('Error:', error);
    toast.error('Network error');
  } finally {
    setIsLoading(false);
  }
};
```

**Note:** TanStack Query is installed but not used. Consider migrating to it for complex data fetching scenarios.

---

## Architecture Patterns

### Application Entry Flow

```
main.tsx
  ↓
App.tsx
  ↓ Providers
  ├─ QueryClientProvider (TanStack Query)
  ├─ TooltipProvider (shadcn/ui)
  ├─ Toaster (native toast)
  ├─ Sonner (alternative toast)
  └─ BrowserRouter (React Router)
      ↓ Routes
      ├─ / → Index (home page)
      ├─ /reservar → Reservar (booking form)
      └─ * → NotFound (404 page)
```

### Component Architecture

**Page Components:**
- Minimal logic, composition of sections
- Include Header and Footer where needed
- Handle route-specific state

**Section Components:**
- Self-contained marketing sections
- Stateless where possible
- Consistent spacing and layout

**UI Components:**
- shadcn/ui primitives (don't edit directly)
- Composed into feature components
- Styled via Tailwind classes

### State Management Strategy

**Local State (useState):**
- Form inputs
- UI toggles (mobile menu, modals)
- Loading states
- Scroll positions

**Form State (react-hook-form):**
- All form inputs and validation
- Centralized form state per form

**Server State (TanStack Query - ready for use):**
- NOT currently used
- Available for complex data fetching
- Caching, refetching, mutations

**No Global State:**
- No Redux, Zustand, or Context providers for app state
- Navigation via React Router
- Toast notifications via hooks

### Routing Strategy

**React Router v6 with BrowserRouter:**
- Client-side routing
- No server-side rendering
- Hash-based navigation on home page for sections

**Route Structure:**
```tsx
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/reservar" element={<Reservar />} />
  {/* ADD ALL CUSTOM ROUTES ABOVE THIS LINE */}
  <Route path="*" element={<NotFound />} />
</Routes>
```

**Navigation Methods:**
- Programmatic: `useNavigate()` hook
- Declarative: Not used (no `<Link>` components)
- Section scroll: `document.getElementById(id)?.scrollIntoView()`

**Important:** Always add new routes BEFORE the catch-all `*` route

---

## Code Conventions

### Naming Conventions

**Files:**
- Components: `PascalCase.tsx` (e.g., `Header.tsx`, `ServicesSection.tsx`)
- Hooks: `kebab-case.ts` (e.g., `use-mobile.tsx`, `use-toast.ts`)
- Utilities: `kebab-case.ts` (e.g., `utils.ts`, `calendly.ts`)

**Variables & Functions:**
- Components: `PascalCase` (e.g., `const Hero = () => {}`)
- Functions: `camelCase` (e.g., `openCalendlyPopup`, `handleSubmit`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `SERVICIOS`, `MOBILE_BREAKPOINT`)
- Variables: `camelCase` (e.g., `isLoading`, `userData`)

**CSS Classes:**
- Tailwind: `kebab-case` (e.g., `bg-primary`, `text-lg`)
- Custom: `kebab-case` (e.g., `animate-fade-in`)

### Import Order and Style

```tsx
// 1. React core
import { useState, useEffect } from "react";

// 2. External libraries (alphabetical)
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import * as z from "zod";

// 3. Internal components (@ alias)
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem } from "@/components/ui/form";
import Header from "@/components/Header";

// 4. Hooks
import { useToast } from "@/hooks/use-toast";

// 5. Utilities
import { cn } from "@/lib/utils";

// 6. Assets
import logo from "@/assets/logo.png";
```

**Import Alias:**
- Use `@/` for all src imports
- Configured in `tsconfig.json` and `vite.config.ts`
- Examples: `@/components`, `@/hooks`, `@/lib`, `@/assets`

### Component Structure Pattern

```tsx
// 1. Imports
import { useState } from "react";
import { Button } from "@/components/ui/button";

// 2. Constants (if any)
const ITEMS = ["Item 1", "Item 2"];

// 3. Component definition
const ComponentName = () => {
  // 3a. Hooks
  const [state, setState] = useState(false);

  // 3b. Event handlers
  const handleClick = () => {
    setState(!state);
  };

  // 3c. Effects
  useEffect(() => {
    // Side effects
  }, [state]);

  // 3d. Derived values
  const displayText = state ? "Active" : "Inactive";

  // 3e. Render
  return (
    <div className="container">
      <Button onClick={handleClick}>{displayText}</Button>
    </div>
  );
};

// 4. Export
export default ComponentName;
```

### Section Component Pattern

All marketing sections follow this pattern:

```tsx
const SectionName = () => {
  // Data (hardcoded for now)
  const items = [
    { id: 1, title: "Title 1", description: "..." },
    { id: 2, title: "Title 2", description: "..." },
  ];

  return (
    <section id="section-id" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Section Title
          </h2>
          <p className="text-lg text-muted-foreground">
            Section description text
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item) => (
            <Card key={item.id} className="...">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section (optional) */}
        <div className="text-center mt-12">
          <Button onClick={() => navigate('/reservar')} size="lg">
            Call to Action
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionName;
```

**Key Section Conventions:**
- Always use `<section>` with an `id` attribute
- Vertical padding: `py-20`
- Container: `container mx-auto px-4`
- Centered header: `text-center max-w-3xl mx-auto mb-16`
- Content max-width: `max-w-6xl mx-auto` (or similar)

### Styling Conventions

**Tailwind Usage:**
- Use Tailwind exclusively for styling (no separate CSS files)
- Utility-first approach
- Responsive modifiers: mobile-first, then `md:`, `lg:`
- Use design tokens from `index.css` (colors, shadows, etc.)

**Responsive Pattern:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
</div>

<h1 className="text-4xl md:text-5xl lg:text-6xl">
  {/* Mobile: 4xl, Tablet: 5xl, Desktop: 6xl */}
</h1>

<div className="hidden md:flex">
  {/* Hidden on mobile, flex on tablet+ */}
</div>

<div className="md:hidden">
  {/* Visible only on mobile */}
</div>
```

**Classname Merging:**
```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  "more-classes"
)} />
```

**Design Token Usage:**
```tsx
// Colors (use semantic names)
<div className="bg-background text-foreground" />
<Button className="bg-primary text-primary-foreground" />
<p className="text-muted-foreground" />

// Custom shadows (defined in index.css)
<Card className="shadow-[var(--shadow-medium)]" />

// Custom gradients
<div style={{ background: "var(--gradient-primary)" }} />
```

### TypeScript Conventions

**Type Definitions:**
```tsx
// Inline for simple types
const [count, setCount] = useState<number>(0);

// Separate for complex types
type User = {
  id: string;
  name: string;
  email: string;
};

// Infer from Zod schema
const schema = z.object({
  name: z.string(),
});
type FormData = z.infer<typeof schema>;
```

**Current TypeScript Mode:** Loose
- `noImplicitAny: false`
- `strictNullChecks: false`
- Allows implicit `any` types
- Minimal type safety (can be improved)

**Recommendations:**
- Add types to function parameters
- Type component props if they exist
- Use `unknown` instead of `any` where possible
- Gradually add stricter types

---

## Common Tasks

### How to Add a New Service

1. Edit `src/components/ServicesSection.tsx`
2. Add new service to the `services` array:
```tsx
const services = [
  // ... existing services
  {
    icon: NewIcon, // from lucide-react
    title: "New Service",
    description: "Description of the service",
    duration: "Duration",
    price: "Price range"
  }
];
```

### How to Add a New FAQ

1. Edit `src/components/FAQSection.tsx`
2. Add new FAQ to the `faqs` array:
```tsx
const faqs = [
  // ... existing FAQs
  {
    question: "Your question?",
    answer: "Your detailed answer here."
  }
];
```

### How to Add a New Testimonial

1. Edit `src/components/TestimonialsSection.tsx`
2. Add new testimonial to the `testimonials` array:
```tsx
const testimonials = [
  // ... existing testimonials
  {
    name: "Customer Name",
    rating: 5,
    comment: "Testimonial text",
    service: "Service they used"
  }
];
```

### How to Change Contact Information

**Phone Number:**
- `src/components/Header.tsx` - Navigation bar
- `src/components/LocationSection.tsx` - Contact section
- `src/components/Footer.tsx` - Footer
- `src/components/FloatingWhatsApp.tsx` - Floating button

**Email:**
- `src/components/LocationSection.tsx` - Contact section
- `src/components/Footer.tsx` - Footer

**Address:**
- `src/components/LocationSection.tsx` - Map and address

**Social Media:**
- `src/components/SocialSection.tsx` - Social links
- `src/components/Footer.tsx` - Footer social icons

### How to Update the Booking Form

**Add/Remove Fields:**
1. Edit `src/pages/Reservar.tsx`
2. Update Zod schema:
```tsx
const reservaSchema = z.object({
  // ... existing fields
  newField: z.string().min(1, "Field required"),
});
```
3. Add to form type inference (automatic from schema)
4. Update default values
5. Add FormField component for the new field
6. Update form submission data

**Change Available Services/Hours:**
```tsx
// Edit constants at top of Reservar.tsx
const SERVICIOS = ["Service 1", "Service 2", ...];
const HORAS = ["09:00", "09:30", ...];
```

### How to Integrate a New API Endpoint

**Current Pattern (direct fetch):**
```tsx
const API_ENDPOINT = "https://api.example.com/endpoint";

const handleApiCall = async (data: any) => {
  setIsLoading(true);
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    // Handle success
    toast.success('Success!');
    return result;
  } catch (error) {
    console.error('API Error:', error);
    toast.error('Failed to process request');
    throw error;
  } finally {
    setIsLoading(false);
  }
};
```

**Recommended Pattern (TanStack Query):**

For complex scenarios, migrate to TanStack Query:

```tsx
import { useMutation } from '@tanstack/react-query';

const useCreateBooking = () => {
  return useMutation({
    mutationFn: async (data: BookingData) => {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to create booking');
      return response.json();
    },
    onSuccess: () => {
      toast.success('Booking created!');
    },
    onError: (error) => {
      console.error(error);
      toast.error('Failed to create booking');
    },
  });
};

// Usage in component
const { mutate, isPending } = useCreateBooking();
const handleSubmit = (data: BookingData) => mutate(data);
```

### How to Add Custom Animations

1. Define keyframes in `src/index.css`:
```css
@layer utilities {
  .animate-custom {
    animation: customAnimation 0.5s ease-out forwards;
  }

  @keyframes customAnimation {
    from {
      /* start state */
    }
    to {
      /* end state */
    }
  }
}
```

2. Use in components:
```tsx
<div className="animate-custom">Content</div>
```

**Existing animations:**
- `animate-fade-in` - Opacity fade
- `animate-slide-up` - Slide up with fade
- Accordion animations (built into shadcn/ui)

### How to Handle Navigation

**Between Pages:**
```tsx
import { useNavigate } from "react-router-dom";

const Component = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate('/reservar')}>
      Go to Booking
    </Button>
  );
};
```

**To Section on Home Page:**
```tsx
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Usage
<Button onClick={() => scrollToSection('servicios')}>
  View Services
</Button>
```

**Cross-Page to Section:**
```tsx
const navigate = useNavigate();

const goToHomeSection = (sectionId: string) => {
  navigate('/');
  // Wait for page to load, then scroll
  setTimeout(() => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }, 100);
};
```

---

## Important Gotchas

### 1. Route Order Matters

**Always add custom routes BEFORE the catch-all route:**

```tsx
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/reservar" element={<Reservar />} />
  {/* ADD NEW ROUTES HERE */}
  {/* DO NOT ADD ROUTES BELOW THIS LINE */}
  <Route path="*" element={<NotFound />} /> {/* Catch-all must be last */}
</Routes>
```

The `*` route catches all unmatched paths. If you add routes after it, they will never be reached.

### 2. Don't Edit shadcn/ui Components Directly

Files in `/src/components/ui/` are managed by shadcn/ui CLI. If you need to customize:

**❌ Don't:**
```tsx
// Don't edit Button.tsx directly
```

**✅ Do:**
```tsx
// Customize via className when using
<Button className="custom-styles">Text</Button>

// Or create a wrapper component
const PrimaryButton = ({ children, ...props }) => (
  <Button className="bg-primary hover:bg-primary/90" {...props}>
    {children}
  </Button>
);
```

### 3. Form Validation Requires Zod + RHF Integration

**❌ Don't use react-hook-form alone:**
```tsx
const form = useForm(); // Missing validation
```

**✅ Always use zodResolver:**
```tsx
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  field: z.string().min(1),
});

const form = useForm({
  resolver: zodResolver(schema), // Required for validation
});
```

### 4. Mobile Menu State Management

The Header component manages mobile menu state internally. If you modify the Header:
- Ensure `isMobileMenuOpen` state controls the mobile menu
- Close menu on navigation: `setIsMobileMenuOpen(false)`
- Test on mobile breakpoint (< 768px)

### 5. Scroll-Based UI Changes

Header changes style on scroll. When modifying scroll listeners:
```tsx
useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll); // Clean up!
}, []);
```

**Always remove event listeners in cleanup function** to prevent memory leaks.

### 6. TypeScript Errors May Be Ignored

Current tsconfig is loose (`noImplicitAny: false`). This means:
- TypeScript won't catch many potential errors
- Test thoroughly in the browser
- Consider adding stricter types as you work

### 7. Image Imports in Vite

**✅ Correct:**
```tsx
import heroImage from "@/assets/hero.jpg";
<img src={heroImage} alt="Hero" />
```

**❌ Incorrect:**
```tsx
<img src="@/assets/hero.jpg" alt="Hero" /> // Won't work
<img src="/src/assets/hero.jpg" alt="Hero" /> // Won't work in production
```

Images must be imported or placed in `/public/` directory.

### 8. Google Sheets Webhook Response Format

The booking form expects a specific response from Google Apps Script:

```json
// Success
{ "status": "success" }

// Error
{ "status": "error", "message": "Error description" }
```

The code handles non-JSON responses robustly (as of commit 8eccc11), but ensure backend returns proper JSON.

### 9. Date Formatting with date-fns

Always use Spanish locale for user-facing dates:

```tsx
import { format } from "date-fns";
import { es } from "date-fns/locale";

const formattedDate = format(date, "dd/MM/yyyy", { locale: es });
```

### 10. Toast Notifications

Two toast systems are available:

**Built-in (useToast):**
```tsx
import { useToast } from "@/hooks/use-toast";

const { toast } = useToast();
toast({ title: "Title", description: "Message" });
```

**Sonner (recommended for simple toasts):**
```tsx
import { toast } from "sonner";

toast.success("Success message");
toast.error("Error message");
```

Both are initialized in `App.tsx`. Use whichever fits the use case.

---

## Configuration Files

### package.json

**Scripts:**
- `npm run dev` - Start dev server on port 8080
- `npm run build` - Production build
- `npm run build:dev` - Development build (with source maps)
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

**Key Dependencies:**
- React 18.3 + React DOM
- React Router v6
- TanStack Query 5.83
- react-hook-form 7.61
- Zod 3.25
- Radix UI primitives (via shadcn/ui)
- Tailwind CSS 3.4
- Vite 5.4

### tsconfig.json

**Important Settings:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "strict": false,               // Loose mode
    "noImplicitAny": false,        // Allows implicit any
    "strictNullChecks": false,     // Allows null/undefined
    "paths": {
      "@/*": ["./src/*"]           // Path alias
    }
  }
}
```

**Path Alias:** `@/` points to `src/`

### vite.config.ts

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // @ alias
    },
  },
});
```

**Development Server:**
- Port: 8080
- Host: `::` (all interfaces)
- Plugin: react-swc (fast refresh)

### tailwind.config.ts

**Key Configurations:**
```typescript
{
  darkMode: ["class"],           // Dark mode via class (not active)
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",         // Max container width
      },
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",     // 1rem
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // All colors from CSS variables
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // ... etc
      },
      keyframes: {
        "accordion-down": { /* ... */ },
        "accordion-up": { /* ... */ },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

**Breakpoints (default):**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### components.json (shadcn/ui)

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

**Used by:** `npx shadcn@latest add <component>`

### eslint.config.js

**Current Rules:**
- TypeScript ESLint recommended
- React Hooks rules
- React Refresh rules
- **Disabled:** `@typescript-eslint/no-unused-vars` (allows unused vars)

**Minimal linting** - can be made stricter as needed.

### postcss.config.js

Simple config for Tailwind processing:
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## Design System Reference

### Color Palette (HSL)

**Base:**
- `--background`: 30 25% 98% (Cream)
- `--foreground`: 30 15% 25% (Dark Brown)

**Brand:**
- `--primary`: 30 20% 50% (Taupe/Brown)
- `--primary-dark`: 30 25% 35%
- `--secondary`: 340 60% 88% (Soft Pink)
- `--secondary-dark`: 340 50% 75%
- `--accent`: 40 70% 70% (Gold)
- `--accent-glow`: 40 85% 80%

**Neutral:**
- `--muted`: 30 20% 95%
- `--muted-foreground`: 30 15% 45%

**UI:**
- `--border`: 30 20% 88%
- `--input`: 30 20% 90%
- `--ring`: 30 20% 50%

**Semantic:**
- `--destructive`: 0 70% 60% (Red)

### Custom CSS Variables

**Gradients:**
```css
--gradient-primary: linear-gradient(135deg, hsl(30 25% 45%), hsl(30 20% 55%));
--gradient-soft: linear-gradient(180deg, hsl(340 60% 95%), hsl(30 25% 98%));
--gradient-gold: linear-gradient(135deg, hsl(40 70% 75%), hsl(40 85% 85%));
```

**Shadows:**
```css
--shadow-soft: 0 4px 20px -2px hsl(30 20% 50% / 0.1);
--shadow-medium: 0 8px 30px -4px hsl(30 20% 50% / 0.15);
--shadow-strong: 0 12px 40px -8px hsl(30 20% 50% / 0.2);
--shadow-glow: 0 0 30px hsl(40 85% 80% / 0.3);
```

**Transitions:**
```css
--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
--transition-bounce: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Typography

**Font Families:**
- Headings: `Cormorant Garamond` (serif, elegant)
- Body: `Inter` (sans-serif, modern)

**Font Weights:**
- Headings: 600 (semibold)
- Body: 400 (regular)

**Usage:**
```tsx
<h1 className="font-serif font-semibold">Heading</h1>
<p className="font-sans">Body text</p>
```

### Spacing Scale

Standard Tailwind spacing with `container` customization:
- Container padding: `2rem` (32px)
- Section vertical spacing: `py-20` (80px top/bottom)
- Section header margin: `mb-16` (64px)

### Border Radius

```css
--radius: 1rem; // 16px
```

**Usage:**
- `rounded-lg`: var(--radius)
- `rounded-md`: var(--radius) - 2px
- `rounded-sm`: var(--radius) - 4px

---

## Testing Checklist

When making changes, test:

### Responsive Design
- [ ] Mobile (< 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (> 1024px)
- [ ] Mobile menu works correctly
- [ ] Touch interactions on mobile

### Navigation
- [ ] All navigation links work
- [ ] Section scrolling smooth and accurate
- [ ] Back button works correctly
- [ ] 404 page for invalid routes

### Forms
- [ ] All fields validate correctly
- [ ] Error messages display properly
- [ ] Success/error toasts appear
- [ ] Form resets after submission
- [ ] Loading states show during submission
- [ ] Disabled state works correctly

### Accessibility
- [ ] All images have alt text
- [ ] Form labels are associated with inputs
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Color contrast meets WCAG standards

### Performance
- [ ] Images load efficiently
- [ ] No console errors
- [ ] Smooth scrolling performance
- [ ] Build completes without errors

### Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

---

## Git Workflow

**Branch Strategy:**
- Main branch: (check git remote)
- Feature branches: `claude/claude-md-*` (auto-generated)

**Commit Conventions:**
- Use descriptive commit messages
- Format: `<type>: <description>`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Examples:**
```bash
git commit -m "feat: Add new services section"
git commit -m "fix: Correct form validation logic"
git commit -m "docs: Update CLAUDE.md with API patterns"
git commit -m "style: Adjust mobile menu spacing"
```

**Push to Remote:**
```bash
# Push to feature branch
git push -u origin claude/claude-md-mieowcypy4jwdlqc-01QwbHeYSu1rESPn5DqjQs9Z

# Retry on network errors (up to 4 times with exponential backoff)
```

**Pull Request:**
- Create PR to main branch
- Include description of changes
- Test thoroughly before merging

---

## Additional Resources

### External Integrations

**Calendly:**
- Integration in `src/lib/calendly.ts`
- URL: https://calendly.com/dmezquiam
- Used in BookingSection component

**Google Sheets API:**
- Webhook endpoint in `Reservar.tsx`
- Handles form submissions
- Returns JSON: `{ status: "success" | "error", message?: string }`

**WhatsApp:**
- Phone: +34619053318
- Used in FloatingWhatsApp and WhatsAppSection

### Documentation Links

**React:**
- Docs: https://react.dev

**React Router:**
- Docs: https://reactrouter.com

**Tailwind CSS:**
- Docs: https://tailwindcss.com

**shadcn/ui:**
- Docs: https://ui.shadcn.com
- Add components: `npx shadcn@latest add <component>`

**Radix UI:**
- Docs: https://www.radix-ui.com
- Underlying primitives for shadcn/ui

**react-hook-form:**
- Docs: https://react-hook-form.com

**Zod:**
- Docs: https://zod.dev

**TanStack Query:**
- Docs: https://tanstack.com/query

**Lucide Icons:**
- Browse: https://lucide.dev

**date-fns:**
- Docs: https://date-fns.org

---

## Conclusion

This codebase follows modern React patterns with a focus on:
- Component composition
- Type safety (with room for improvement)
- Responsive design
- Form validation
- Clean code organization

When making changes:
1. Follow established patterns
2. Test across devices
3. Maintain consistency
4. Update this guide if introducing new patterns

**Questions or need clarification?** Check the codebase or ask for guidance on specific patterns.

---

*Last Updated: 2025-11-25*
*Version: 1.0.0*
