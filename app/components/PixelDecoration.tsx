interface PixelDecorationProps {
  rows?: number;
  variant?: 'horizontal' | 'vertical' | 'grid';
  color?: string;
  className?: string;
}

export function PixelDecoration({ 
  rows = 8, 
  variant = 'horizontal',
  color = '#00f0ff',
  className = '' 
}: PixelDecorationProps) {
  if (variant === 'grid') {
    return (
      <div className={`grid grid-cols-8 gap-1 ${className}`}>
        {[...Array(64)].map((_, i) => (
          <div
            key={i}
            className="aspect-square opacity-20"
            style={{
              backgroundColor: Math.random() > 0.5 ? color : 'transparent',
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col gap-1 ${className}`}>
        {[...Array(rows)].map((_, i) => (
          <div
            key={i}
            className="w-1 opacity-30"
            style={{
              height: `${Math.random() * 100}%`,
              backgroundColor: color,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-${rows} gap-1 ${className}`}>
      {[...Array(rows)].map((_, i) => (
        <div
          key={i}
          className="h-1 opacity-20"
          style={{
            width: `${Math.random() * 100}%`,
            background: `linear-gradient(90deg, ${color} 0%, transparent 100%)`,
          }}
        />
      ))}
    </div>
  );
}
