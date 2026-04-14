-- Supabase Database Reset & Seed Script
-- Based on my-cv.md and src/constants/index.tsx

-- 1. CLEANUP (Optional: Remove if you want to keep existing data)
DROP TABLE IF EXISTS public.skills CASCADE;
DROP TABLE IF EXISTS public.skill_categories CASCADE;
DROP TABLE IF EXISTS public.experiences CASCADE;
DROP TABLE IF EXISTS public.projects CASCADE;
DROP TABLE IF EXISTS public.hero_stats CASCADE;
DROP TABLE IF EXISTS public.site_config CASCADE;
DROP TABLE IF EXISTS public.contact_messages CASCADE;

-- 2. SCHEMA DEFINITION

-- Projects table
CREATE TABLE public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  name_en TEXT NOT NULL,
  name_ar TEXT NOT NULL,
  description_en TEXT NOT NULL,
  description_ar TEXT NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  images TEXT[] NOT NULL DEFAULT '{}',
  live_url TEXT,
  source_url TEXT,
  gradient TEXT NOT NULL DEFAULT 'linear-gradient(135deg,#0F0E1A,#1A1428,#0C1018)',
  placeholder_text TEXT,
  display BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Work experience table
CREATE TABLE public.experiences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sort_order INTEGER NOT NULL DEFAULT 0,
  year_label TEXT NOT NULL,
  title_en TEXT NOT NULL,
  title_ar TEXT NOT NULL,
  company TEXT NOT NULL,
  company_logo TEXT,
  description_en TEXT,
  description_ar TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Skill categories table
CREATE TABLE public.skill_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sort_order INTEGER NOT NULL DEFAULT 0,
  category_number TEXT NOT NULL,
  name_en TEXT NOT NULL,
  name_ar TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Skills table
CREATE TABLE public.skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES public.skill_categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0
);

-- Contact messages table
CREATE TABLE public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Hero stats table
CREATE TABLE public.hero_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sort_order INTEGER NOT NULL DEFAULT 0,
  value TEXT NOT NULL,
  label_en TEXT NOT NULL,
  label_ar TEXT NOT NULL
);

-- Site config
CREATE TABLE public.site_config (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  about_paragraphs_en TEXT[] NOT NULL DEFAULT '{}',
  about_paragraphs_ar TEXT[] NOT NULL DEFAULT '{}',
  hero_subtitle_en TEXT NOT NULL DEFAULT '',
  hero_subtitle_ar TEXT NOT NULL DEFAULT '',
  email TEXT NOT NULL DEFAULT '',
  linkedin_url TEXT NOT NULL DEFAULT '',
  github_url TEXT NOT NULL DEFAULT '',
  facebook_url TEXT NOT NULL DEFAULT '',
  cv_url TEXT NOT NULL DEFAULT '',
  marquee_items TEXT[] NOT NULL DEFAULT '{}'
);

-- 3. SECURITY (RLS)
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skill_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hero_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_config ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Public read experiences" ON public.experiences FOR SELECT USING (true);
CREATE POLICY "Public read skill_categories" ON public.skill_categories FOR SELECT USING (true);
CREATE POLICY "Public read skills" ON public.skills FOR SELECT USING (true);
CREATE POLICY "Public read stats" ON public.hero_stats FOR SELECT USING (true);
CREATE POLICY "Public read config" ON public.site_config FOR SELECT USING (true);
CREATE POLICY "Public insert contact" ON public.contact_messages FOR INSERT WITH CHECK (true);

-- 4. SEEDING DATA

-- Site Config
INSERT INTO public.site_config (
  about_paragraphs_en,
  about_paragraphs_ar,
  hero_subtitle_en,
  hero_subtitle_ar,
  email,
  linkedin_url,
  github_url,
  facebook_url,
  cv_url,
  marquee_items
) VALUES (
  ARRAY[
    'I''m Osama Ibrahim, a front-end developer from Tanta, Egypt. I build production-grade React and Next.js applications that scale.',
    'Over 3 years I''ve shipped dashboards, e-commerce platforms, LMS systems, and real-time apps used by tens of thousands across Egypt and the Arab world.',
    'Currently at Softlabs while building SaaS products on the side. Udacity Frontend Nanodegree holder. 95+ Lighthouse scores — personal standard.'
  ],
  ARRAY[
    'أنا أسامة إبراهيم، مطور واجهات أمامية من طنطا، مصر. أقوم ببناء تطبيقات React و Next.js قابلة للتوسع وبجودة إنتاجية عالية.',
    'خلال أكثر من 3 سنوات، قمت بشحن لوحات تحكم، منصات تجارة إلكترونية، أنظمة إدارة تعلم (LMS)، وتطبيقات في الوقت الفعلي يستخدمها عشرات الآلاف في مصر والعالم العربي.',
    'أعمل حاليًا في Softlabs بينما أقوم ببناء منتجات SaaS خاصة بي. حاصل على Udacity Frontend Nanodegree. درجة Lighthouse 95+ هي المعيار الشخصي لي.'
  ],
  '3+ years crafting high-performance React & Next.js apps. Shipped platforms serving 76K+ users.',
  'أكثر من 3 سنوات في بناء تطبيقات React و Next.js عالية الأداء. قمت بشحن منصات تخدم أكثر من 76 ألف مستخدم.',
  'osamahima018@gmail.com',
  'https://www.linkedin.com/in/osama-ibrahim2002/',
  'https://github.com/OsamaHIma',
  'https://www.facebook.com/profile.php?id=100078254302916',
  '/osama-ibrahim-frontend-developer.pdf',
  ARRAY['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'TanStack Query', 'Laravel', 'Supabase', 'Framer Motion']
);

-- Hero Stats
INSERT INTO public.hero_stats (sort_order, value, label_en, label_ar) VALUES
(1, '76K+', 'Users', 'مستخدم'),
(2, '97', 'Lighthouse', 'لايت هاوس'),
(3, '3+', 'Years', 'سنوات خبرة');

-- Experiences
INSERT INTO public.experiences (sort_order, year_label, title_en, title_ar, company, description_en, description_ar) VALUES
(1, '2025', 'Front-end Developer', 'مطور واجهات أمامية', 'SoftLabs', 'Developed scalable React/TypeScript solutions and collaborated with cross-functional teams.', 'تطوير حلول React/TypeScript قابلة للتوسع والتعاون مع فرق متعددة الوظائف.'),
(2, '2023–25', 'Front-end Developer', 'مطور واجهات أمامية', 'Tazamun IT', 'Optimized dynamic web apps using React/Tailwind, achieving 25% performance improvement.', 'تحسين تطبيقات الويب الديناميكية باستخدام React/Tailwind، مع تحسين الأداء بنسبة 25%.'),
(3, '2023', 'Front-end Developer', 'مطور واجهات أمامية', 'Etrevago', 'Built interactive UI components using Next.js, reducing debugging time by 30%.', 'بناء مكونات واجهة مستخدم تفاعلية باستخدام Next.js، مع تقليل وقت تصحيح الأخطاء بنسبة 30%.');

-- Skill Categories
INSERT INTO public.skill_categories (id, sort_order, category_number, name_en, name_ar) VALUES
('550e8400-e29b-41d4-a716-446655440001', 1, '01', 'Frontend', 'الواجهة الأمامية'),
('550e8400-e29b-41d4-a716-446655440002', 2, '02', 'State & Data', 'إدارة البيانات'),
('550e8400-e29b-41d4-a716-446655440003', 3, '03', 'Backend', 'الواجهة الخلفية'),
('550e8400-e29b-41d4-a716-446655440004', 4, '04', 'Tooling', 'الأدوات');

-- Skills
INSERT INTO public.skills (category_id, name, sort_order) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'React.js', 1),
('550e8400-e29b-41d4-a716-446655440001', 'Next.js', 2),
('550e8400-e29b-41d4-a716-446655440001', 'TypeScript', 3),
('550e8400-e29b-41d4-a716-446655440001', 'Tailwind CSS', 4),
('550e8400-e29b-41d4-a716-446655440001', 'Framer Motion', 5),

('550e8400-e29b-41d4-a716-446655440002', 'TanStack Query', 1),
('550e8400-e29b-41d4-a716-446655440002', 'Redux Toolkit', 2),
('550e8400-e29b-41d4-a716-446655440002', 'Preact Signals', 3),
('550e8400-e29b-41d4-a716-446655440002', 'Zod', 4),

('550e8400-e29b-41d4-a716-446655440003', 'Laravel', 1),
('550e8400-e29b-41d4-a716-446655440003', 'Node.js', 2),
('550e8400-e29b-41d4-a716-446655440003', 'REST APIs', 3),
('550e8400-e29b-41d4-a716-446655440003', 'Supabase', 4),

('550e8400-e29b-41d4-a716-446655440004', 'Git', 1),
('550e8400-e29b-41d4-a716-446655440004', 'Vite', 2),
('550e8400-e29b-41d4-a716-446655440004', 'Sanity.io', 3),
('550e8400-e29b-41d4-a716-446655440004', 'Vercel', 4);

-- Projects
INSERT INTO public.projects (sort_order, is_featured, name_en, name_ar, description_en, description_ar, tags, images, live_url, gradient, display) VALUES
(1, true, 'Fantasy Pro Manager', 'فانتاسي برو مانجر', 'The biggest Arabic fantasy football platform. 76K+ users, achieving 211K+ page views in first week.', 'أكبر منصة فانتازي عربية. أكثر من 76 ألف مستخدم، وحققت أكثر من 211 ألف مشاهدة صفحة في أسبوعها الأول.', ARRAY['Next.js', 'React Query', 'Tailwind'], ARRAY['/projects/fantasy-pro-manager.png'], 'https://fantasypromanager.com/ar', 'linear-gradient(135deg,#0F0E1A,#1A1428,#0C1018)', true),
(2, false, 'Linkatik', 'لينكاتك', 'Arabic link-in-bio platform with Next.js OG image generation and TanStack architecture.', 'بديل عربي لمنصة Linktree يتميز بنظام معاينة عالي الأداء وتوليد صور OG ديناميكية.', ARRAY['Next.js', 'TanStack Router', 'Zod'], ARRAY['/projects/linkatik.png'], 'https://app.linkatik.com/user', 'linear-gradient(135deg,#0E1418,#121A14,#0A0E18)'),
(3, false, 'ASP Corporate LMS', 'منصة ASP التعليمية', 'B2B Learning Management System with HR, Trainer & Admin dashboards. Automated certifications.', 'نظام إدارة تعلم متكامل للشركات مع لوحات تحكم للموارد البشرية والمدربين والمسؤولين.', ARRAY['React.js', 'RBAC', 'TypeScript'], ARRAY['/projects/asp.png'], 'https://aspparis.com', 'linear-gradient(135deg,#10100E,#1A180A,#0E1010)'),
(4, false, 'MASA Platform', 'منصة ماسة', 'Official platform for MASA, a Saudi initiative empowering women through inspirational programs.', 'المنصة الرسمية لمبادرة ماسة السعودية لتمكين المرأة من خلال البرامج والفعاليات الملهمة.', ARRAY['Next.js', 'Tailwind', 'TypeScript'], ARRAY['/projects/masa.png'], 'https://masa-new-front.vercel.app', 'linear-gradient(135deg,#0C1018,#101820,#080C14)'),
(5, false, 'Orenus Platform', 'منصة أورينوس', 'Business management platform with Preact Signals and React Query optimistic updates.', 'منصة متكاملة لإدارة الأعمال تدعم الويب والموبايل مع استخدام Preact Signals للتحديثات اللحظية.', ARRAY['React.js', 'Laravel', 'Signals'], ARRAY['/projects/orenus.png'], 'https://orenus.net', 'linear-gradient(135deg,#0F0E1A,#1A1428,#0C1018)'),
(6, false, 'Kayan Bookstore', 'مكتبة كيان', 'Modern e-commerce platform for books and educational products with advanced filtering.', 'منصة تجارة إلكترونية حديثة للكتب والأدوات التعليمية مع مهارات تصفية وبحث متقدمة.', ARRAY['Next.js', 'Tailwind', 'E-commerce'], ARRAY['/projects/kayan.png'], 'https://kayanbookstore.com', 'linear-gradient(135deg,#0E1418,#121A14,#0A0E18)'),
(7, false, 'ArabGiftCard', 'عرب جيفت كارت', 'Corporate & e-commerce platform for digital gift cards with headless CMS.', 'منصة مؤسسية وتجارة إلكترونية لبطاقات الهدايا الرقمية مع نظام إدارة محتوى (CMS).', ARRAY['Next.js', 'Sanity.io', 'React Query'], ARRAY['/projects/arabgiftcard.png'], 'https://arabgiftcard.com', 'linear-gradient(135deg,#10100E,#1A180A,#0E1010)'),
(8, false, 'Astashirni', 'استشرني', 'Strategic advice platform built with Laravel and Inertia.js.', 'منصة استشارات استراتيجية مبنية باستخدام Laravel و Inertia.js.', ARRAY['Laravel', 'Inertia.js', 'React'], ARRAY['/projects/astashirni.png'], 'https://astashirni.com/landing', 'linear-gradient(135deg,#0C1018,#101820,#080C14)'),
(9, false, 'Trekio', 'تريكيو', 'Travel management and booking platform.', 'منصة إدارة وحجز الرحلات مبنية بأحدث معايير الويب.', ARRAY['Laravel', 'Inertia.js', 'Tailwind'], ARRAY['/projects/trekio.png'], 'https://trekio.net', 'linear-gradient(135deg,#0F0E1A,#1A1428,#0C1018)'),
(10, false, 'ChatHub', 'تشات هب', 'Real-time chat application using Socket.io and MongoDB.', 'تطبيق دردشة لحظي باستخدام Socket.io و MongoDB.', ARRAY['Socket.io', 'Node.js', 'MongoDB'], ARRAY['/projects/chatHub.png'], 'https://chathub-web.vercel.app/', 'linear-gradient(135deg,#0E1418,#121A14,#0A0E18)'),
(11, false, 'Tumor Scan', 'فحص الأورام', 'AI-assisted medical scanning platform using Firebase.', 'منصة فحص طبية مدعومة بالذكاء الاصطناعي لإدارة مسوحات الأورام.', ARRAY['Next.js', 'Firebase', 'AI'], ARRAY['/projects/tumor-scan.png'], 'https://tumor-scan.vercel.app/', 'linear-gradient(135deg,#10100E,#1A180A,#0E1010)'),
(12, false, 'AI Breed Finder', 'مكتشف الفصائل', 'AI tool for animal breed identification.', 'أداة ذكاء اصطناعي للتعرف على فصائل الكائنات.', ARRAY['Next.js', 'Firebase', 'Next-Auth'], ARRAY['/projects/ai-breed-finder.png'], 'https://ai-breed-finder.vercel.app/', 'linear-gradient(135deg,#0C1018,#101820,#080C14)');

