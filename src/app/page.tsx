"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { TrendingUp } from 'lucide-react';

const assetMap = [
  {"id": "heroImage", "url": "https://images.pexels.com/photos/5257759/pexels-photo-5257759.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Four colleagues brainstorming around a laptop in a bright, modern office setting."},
  {"id": "aboutImage", "url": "https://images.pexels.com/photos/34239106/pexels-photo-34239106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "modern office workspace - Photo by Jakub Zerdzicki"},
  {"id": "teamMember1", "url": "https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Young professional leading a diverse team in a contemporary office setting."},
  {"id": "teamMember2", "url": "https://images.pexels.com/photos/34302273/pexels-photo-34302273.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "professional in office - Photo by Sean P. Twomey"}
];

export default function Home() {
  const resolvedHeroImage = assetMap.find(a => a.id === 'heroImage')?.url;
  const resolvedAboutImage = assetMap.find(a => a.id === 'aboutImage')?.url;

  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: 'Home', id: 'home' },
            { name: 'Features', id: 'features' },
            { name: 'Pricing', id: 'pricing' },
            { name: 'Blog', id: 'blog' }
          ]}
          brandName="AISaaS"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Empowering Your Business"
            description="Discover the future with our AI SaaS solutions designed to automate and innovate."
            tag="Launch"
            buttons={[
              { text: 'Get Started', href: 'features' },
              { text: 'Learn More', href: 'about' }
            ]}
            imageSrc={resolvedHeroImage}
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: 'Innovation', description: 'We lead in AI-driven solutions.' },
              { title: 'Quality', description: 'Commitment to excellence.' }
            ]}
            imageSrc={resolvedAboutImage}
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="features" data-section="features" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            features={[
              { title: 'Automation', description: 'Streamline your workflow.', imageSrc: '/feature1.jpg' },
              { title: 'Scalability', description: 'Grow without limits.', imageSrc: '/feature2.jpg' }
            ]}
            title="Our Features"
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="pricing" data-section="pricing" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardOne
            plans={[
              { id: 'basic', badge: 'Value', price: '$29/mo', subtitle: 'Great for startups', features: ['Basic support', 'Unlimited access'], badgeIcon: TrendingUp },
              { id: 'premium', badge: 'Best Value', price: '$99/mo', subtitle: 'For growing businesses', features: ['Priority support', 'Advanced features'], badgeIcon: TrendingUp }
            ]}
            title="Choose Your Plan"
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Get in Touch"
            title="Contact Us"
            description="We'd love to hear from you. Reach out with any questions or feedback."
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: 'Features', href: 'features' }, { label: 'Pricing', href: 'pricing' }] },
              { items: [{ label: 'About Us', href: 'about' }, { label: 'Contact', href: 'contact' }] }
            ]}
            logoText="AISaaS"
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}