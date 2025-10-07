import { motion } from 'framer-motion';
import { Zap, GitBranch, Workflow, ArrowRight, Play, Settings } from 'lucide-react';

// Custom Button Component with inline styles
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'outline';
  size?: 'default' | 'lg';
  className?: string;
  style?: React.CSSProperties;
}

function Button({ children, onClick, variant = 'default', size = 'default', className = '', style = {} }: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    fontSize: size === 'lg' ? '14px' : '12px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    padding: size === 'lg' ? '16px 24px' : '10px 16px',
    ...style,
  };

  const variantStyles: React.CSSProperties = variant === 'outline' 
    ? {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        color: 'white',
        backdropFilter: 'blur(8px)',
      }
    : {
        background: 'linear-gradient(to right, #facc15, #f97316)',
        color: 'black',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      };

  return (
    <button
      style={{ ...baseStyles, ...variantStyles }}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}

export function CTASection() {
  const sectionStyles: React.CSSProperties = {
    position: 'relative',
    minHeight: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    padding: '40px 0',
  };

  const backgroundStyles: React.CSSProperties = {
    position: 'absolute',
    inset: '0',
    background: 'linear-gradient(to bottom right, #34d399, #4338ca, #0f172a)',
  };

  const overlayStyles: React.CSSProperties = {
    position: 'absolute',
    inset: '0',
    background: 'linear-gradient(to top right, rgba(34, 197, 94, 0.3), transparent, rgba(67, 56, 202, 0.4))',
  };

  const secondOverlayStyles: React.CSSProperties = {
    position: 'absolute',
    inset: '0',
    background: 'linear-gradient(to bottom left, transparent, rgba(16, 185, 129, 0.1), rgba(30, 41, 59, 0.3))',
  };

  const contentStyles: React.CSSProperties = {
    position: 'relative',
    zIndex: 10,
    maxWidth: '48rem',
    margin: '0 auto',
    padding: '0 20px',
    textAlign: 'center' as const,
    color: 'white',
  };

  const badgeStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '9999px',
    padding: '6px 12px',
    marginBottom: '20px',
    fontSize: '12px',
    fontWeight: '500',
  };

  const headlineStyles: React.CSSProperties = {
    fontSize: 'clamp(1.8rem, 6vw, 3rem)',
    fontWeight: '700',
    marginBottom: '16px',
    lineHeight: '1.2',
  };

  const subheadlineStyles: React.CSSProperties = {
    fontSize: 'clamp(1rem, 3vw, 1.2rem)',
    marginBottom: '20px',
    color: '#f3f4f6',
    maxWidth: '40rem',
    margin: '0 auto 20px auto',
    lineHeight: '1.5',
  };

  const featureContainerStyles: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
    gap: '16px',
    marginBottom: '28px',
  };

  const featureItemStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(8px)',
    borderRadius: '9999px',
    padding: '6px 12px',
    fontSize: '12px',
    fontWeight: '500',
    cursor: 'default',
  };

  const buttonContainerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '24px',
  };

  const trustIndicatorStyles: React.CSSProperties = {
    marginTop: '24px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    color: '#d1d5db',
    fontSize: '12px',
  };

  const avatarContainerStyles: React.CSSProperties = {
    display: 'flex',
    marginLeft: '-4px',
  };

  const avatarStyles: React.CSSProperties = {
    width: '24px',
    height: '24px',
    background: 'linear-gradient(to bottom right, #34d399, #4338ca)',
    borderRadius: '50%',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    marginLeft: '-3px',
  };

  const bottomDecorationStyles: React.CSSProperties = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    height: '60px',
    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent)',
  };

  // Media query styles
  const getResponsiveButtonContainer = () => {
    if (typeof window !== 'undefined' && window.innerWidth >= 640) {
      return {
        ...buttonContainerStyles,
        flexDirection: 'row' as const,
      };
    }
    return buttonContainerStyles;
  };

  const getResponsiveTrustIndicator = () => {
    if (typeof window !== 'undefined' && window.innerWidth >= 640) {
      return {
        ...trustIndicatorStyles,
        flexDirection: 'row' as const,
      };
    }
    return trustIndicatorStyles;
  };

  return (
    <section style={sectionStyles}>
      {/* Animated Gradient Background */}
      <div style={backgroundStyles}>
        <motion.div
          style={overlayStyles}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          style={secondOverlayStyles}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div style={{ position: 'absolute', inset: '0', pointerEvents: 'none' }}>
        {/* Large flowing shapes */}
        <motion.div
          style={{
            position: 'absolute',
            top: '40px',
            left: '20px',
            width: '80px',
            height: '80px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            filter: 'blur(30px)',
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          style={{
            position: 'absolute',
            bottom: '60px',
            right: '40px',
            width: '120px',
            height: '120px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '50%',
            filter: 'blur(50px)',
          }}
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Additional floating shapes */}
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '25%',
            width: '60px',
            height: '60px',
            backgroundColor: 'rgba(52, 211, 153, 0.2)',
            borderRadius: '8px',
            filter: 'blur(18px)',
          }}
          animate={{
            rotate: [0, -180, -360],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          style={{
            position: 'absolute',
            top: '75%',
            right: '33%',
            width: '40px',
            height: '40px',
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            borderRadius: '6px',
            filter: 'blur(12px)',
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Workflow nodes */}
        <motion.div
          style={{
            position: 'absolute',
            top: '25%',
            right: '25%',
            width: '12px',
            height: '12px',
            backgroundColor: 'rgba(253, 224, 71, 0.6)',
            borderRadius: '50%',
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.6, 1, 0.6],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          style={{
            position: 'absolute',
            bottom: '33%',
            left: '33%',
            width: '8px',
            height: '8px',
            backgroundColor: 'rgba(251, 146, 60, 0.5)',
            borderRadius: '50%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        {/* Additional workflow nodes */}
        <motion.div
          style={{
            position: 'absolute',
            top: '16%',
            left: '50%',
            width: '6px',
            height: '6px',
            backgroundColor: 'rgba(52, 211, 153, 0.4)',
            borderRadius: '50%',
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        <motion.div
          style={{
            position: 'absolute',
            bottom: '16%',
            right: '16%',
            width: '8px',
            height: '8px',
            backgroundColor: 'rgba(99, 102, 241, 0.5)',
            borderRadius: '50%',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: '3px',
              height: '3px',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              left: `${25 + i * 8}%`,
              top: `${35 + (i % 3) * 15}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.6,
            }}
          />
        ))}

        {/* Connection lines with enhanced animations */}
        <svg style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', opacity: 0.2 }}>
          <motion.path
            d="M 100 200 Q 300 150 500 250 T 900 200"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.path
            d="M 200 400 Q 400 350 600 450 T 1000 400"
            stroke="url(#gradient2)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="3,3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
              delay: 2,
            }}
          />
          <motion.path
            d="M 50 300 Q 250 250 450 350 T 850 300"
            stroke="url(#gradient3)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="8,4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'linear',
              delay: 4,
            }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="50%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div style={contentStyles}>
       

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={headlineStyles}
        >
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Jago{' '}
          </motion.span>
          <span style={{ position: 'relative' }}>
            <motion.span
              style={{
                background: 'linear-gradient(to right, #fcd34d, #fb923c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              n8n
            </motion.span>
            <motion.div
              style={{
                position: 'absolute',
                bottom: '-8px',
                left: '0',
                right: '0',
                height: '4px',
                background: 'linear-gradient(to right, #fcd34d, #fb923c)',
                borderRadius: '2px',
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
            <motion.div
              style={{
                position: 'absolute',
                top: '-4px',
                right: '-8px',
                width: '8px',
                height: '8px',
                backgroundColor: '#facc15',
                borderRadius: '50%',
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.5,
              }}
            />
          </span>{' '}
          <br />
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            dalam{' '}
            <motion.span
              style={{ color: '#40ed10ff' }}
              animate={{
                textShadow: [
                  '0 0 0px rgba(165, 180, 252, 0)',
                  '0 0 20px rgba(165, 180, 252, 0.8)',
                  '0 0 0px rgba(165, 180, 252, 0)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.2,
              }}
            >
              30 Hari
            </motion.span>
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={subheadlineStyles}
        >
          Otomatisasi workflow bisnis Anda dan hemat 10+ jam per minggu dengan panduan video step-by-step yang mudah dipahami
        </motion.p>

        {/* Feature Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={featureContainerStyles}
        >
          {[
            { icon: Play, text: '50+ Video Tutorial', color: '#a5b4fc' },
            { icon: GitBranch, text: 'Real-world Projects', color: '#6ee7b7' },
            { icon: Settings, text: 'Lifetime Access', color: '#cbd5e1' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.8 + index * 0.2,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              }}
              style={featureItemStyles}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: index * 2,
                }}
              >
                <item.icon style={{ width: '16px', height: '16px', color: item.color }} />
              </motion.div>
              <span>{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={getResponsiveButtonContainer()}
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Button
              size="lg"
              style={{
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'linear-gradient(to right, rgba(255, 255, 255, 0.2), transparent)',
                }}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                  repeatDelay: 3,
                }}
              />
              <span style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Mulai Belajar Sekarang
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <ArrowRight style={{ width: '16px', height: '16px' }} />
                </motion.div>
              </span>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              borderColor: [
                'rgba(255, 255, 255, 0.3)',
                'rgba(99, 102, 241, 0.6)',
                'rgba(255, 255, 255, 0.3)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Button
              variant="outline"
              size="lg"
              style={{
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent)',
                }}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                  repeatDelay: 4,
                }}
              />
              <span style={{ position: 'relative' }}>Lihat Preview Gratis</span>
            </Button>
          </motion.div>
        </motion.div>

        
      </div>

      {/* Bottom decoration */}
      <div style={bottomDecorationStyles} />
    </section>
  );
}