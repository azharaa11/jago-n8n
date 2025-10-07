import { Mail, Phone, MapPin, Youtube, Instagram, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navigationLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Kursus', href: '#' },
    { name: 'Tentang', href: '#' },
    { name: 'Kontak', href: '#' },
  ];

  const socialMedia = [
    { name: 'YouTube', icon: Youtube, href: '#', hoverColor: '#ef4444' },
    { name: 'Instagram', icon: Instagram, href: '#', hoverColor: '#ec4899' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', hoverColor: '#3b82f6' },
  ];

  const footerStyle: React.CSSProperties = {
    position: 'relative',
    background: 'linear-gradient(to bottom right, #ffffff, #f8f9fa, #f1f3f5)',
    color: '#1f2937',
    overflow: 'hidden',
  };

  const worldMapContainerStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.03,
  };

  const worldMapImageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const topBorderStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(to right, transparent, rgba(156, 163, 175, 0.5), transparent)',
  };

  const topBlurStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '32px',
    background: 'linear-gradient(to bottom, rgba(249, 250, 251, 0.8), transparent)',
    backdropFilter: 'blur(4px)',
  };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    maxWidth: '1280px',
    margin: '0 auto',
    padding: isMobile ? '48px 24px' : '64px 24px',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: isMobile ? '48px' : '32px',
  };

  const columnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  const logoContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const logoBoxStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(to bottom right, #3b82f6, #8b5cf6)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: '500',
    color: '#ffffff',
  };

  const headingStyle: React.CSSProperties = {
    color: '#111827',
    margin: 0,
  };

  const descriptionStyle: React.CSSProperties = {
    color: '#6b7280',
    lineHeight: '1.75',
    margin: 0,
  };

  const listStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  };

  const getLinkStyle = (linkName: string): React.CSSProperties => ({
    color: hoveredLink === linkName ? '#111827' : '#6b7280',
    textDecoration: 'none',
    transition: 'color 0.2s',
    display: 'inline-block',
  });

  const contactItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
  };

  const getIconStyle = (isHovered: boolean): React.CSSProperties => ({
    width: '20px',
    height: '20px',
    color: isHovered ? '#3b82f6' : '#6b7280',
    transition: 'color 0.2s',
    marginTop: '2px',
    flexShrink: 0,
  });

  const contactLinkStyle: React.CSSProperties = {
    color: '#6b7280',
    textDecoration: 'none',
    transition: 'color 0.2s',
  };

  const contactLinkHoverStyle: React.CSSProperties = {
    color: '#111827',
    textDecoration: 'none',
    transition: 'color 0.2s',
  };

  const socialContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '16px',
    paddingTop: '8px',
  };

  const getSocialButtonStyle = (socialName: string, hoverColor: string): React.CSSProperties => ({
    width: '40px',
    height: '40px',
    backgroundColor: hoveredSocial === socialName ? '#f3f4f6' : 'rgba(243, 244, 246, 0.6)',
    backdropFilter: 'blur(4px)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: hoveredSocial === socialName ? hoverColor : '#6b7280',
    transition: 'all 0.2s',
    transform: hoveredSocial === socialName ? 'scale(1.1)' : 'scale(1)',
    textDecoration: 'none',
    border: '1px solid #e5e7eb',
    cursor: 'pointer',
  });

  const bottomBorderContainerStyle: React.CSSProperties = {
    marginTop: '48px',
    paddingTop: '32px',
    borderTop: '1px solid #e5e7eb',
  };

  const bottomContentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: isMobile ? '16px' : '0',
  };

  const copyrightStyle: React.CSSProperties = {
    color: '#6b7280',
    textAlign: isMobile ? 'center' : 'left',
    margin: 0,
  };

  const bottomLinksStyle: React.CSSProperties = {
    display: 'flex',
    gap: '24px',
  };

  const [hoveredEmail, setHoveredEmail] = useState(false);
  const [hoveredPhone, setHoveredPhone] = useState(false);
  const [hoveredPrivacy, setHoveredPrivacy] = useState(false);
  const [hoveredTerms, setHoveredTerms] = useState(false);

  return (
    <footer style={footerStyle}>
      {/* World Map Background */}
      <div style={worldMapContainerStyle}>
        <img
          src="https://images.unsplash.com/photo-1712508818413-76a31994b525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMG1vZGVybiUyMGRhcmt8ZW58MXx8fHwxNzU5NzI4NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="World Map"
          style={worldMapImageStyle}
        />
      </div>

      {/* Top Border with Blur Effect */}
      <div style={topBorderStyle}></div>
      <div style={topBlurStyle}></div>

      {/* Footer Content */}
      <div style={containerStyle}>
        <div style={gridStyle}>
          
          {/* Logo and Description */}
          <div style={columnStyle}>
            <div style={logoContainerStyle}>
              <div style={logoBoxStyle}>
                <span>n8n</span>
              </div>
              <h3 style={headingStyle}>Jago n8n</h3>
            </div>
            <p style={descriptionStyle}>
              Platform terpercaya untuk belajar n8n dari dasar hingga mahir. Tingkatkan skill automation Anda bersama kami.
            </p>
          </div>

          {/* Navigation */}
          <div style={columnStyle}>
            <h4 style={headingStyle}>Navigasi</h4>
            <ul style={listStyle}>
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={getLinkStyle(link.name)}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div style={columnStyle}>
            <h4 style={headingStyle}>Kontak</h4>
            <ul style={listStyle}>
              <li style={contactItemStyle}>
                <Mail style={getIconStyle(hoveredEmail)} />
                <a 
                  href="mailto:suratkita@gmail.com" 
                  style={hoveredEmail ? contactLinkHoverStyle : contactLinkStyle}
                  onMouseEnter={() => setHoveredEmail(true)}
                  onMouseLeave={() => setHoveredEmail(false)}
                >
                  suratkita@gmail.com
                </a>
              </li>
              <li style={contactItemStyle}>
                <Phone style={getIconStyle(hoveredPhone)} />
                <a 
                  href="tel:+628123456789" 
                  style={hoveredPhone ? contactLinkHoverStyle : contactLinkStyle}
                  onMouseEnter={() => setHoveredPhone(true)}
                  onMouseLeave={() => setHoveredPhone(false)}
                >
                  +62 812-3456-7890
                </a>
              </li>
              <li style={contactItemStyle}>
                <MapPin style={getIconStyle(false)} />
                <span style={{ color: '#6b7280' }}>
                  Jakarta, Indonesia
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div style={columnStyle}>
            <h4 style={headingStyle}>Ikuti Kami</h4>
            <p style={descriptionStyle}>
              Dapatkan update terbaru dan tips seputar n8n automation
            </p>
            <div style={socialContainerStyle}>
              {socialMedia.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    style={getSocialButtonStyle(social.name, social.hoverColor)}
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    aria-label={social.name}
                  >
                    <Icon style={{ width: '20px', height: '20px' }} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div style={bottomBorderContainerStyle}>
          <div style={bottomContentStyle}>
            <p style={copyrightStyle}>
              © 2025 Jago n8n. All rights reserved.
            </p>
            <div style={bottomLinksStyle}>
              <a 
                href="#" 
                style={hoveredPrivacy ? contactLinkHoverStyle : contactLinkStyle}
                onMouseEnter={() => setHoveredPrivacy(true)}
                onMouseLeave={() => setHoveredPrivacy(false)}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                style={hoveredTerms ? contactLinkHoverStyle : contactLinkStyle}
                onMouseEnter={() => setHoveredTerms(true)}
                onMouseLeave={() => setHoveredTerms(false)}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
