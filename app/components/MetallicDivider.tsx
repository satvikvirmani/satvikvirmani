export function MetallicDivider({ variant = 'holographic' }: { variant?: 'holographic' | 'chrome' | 'brushed' }) {
  const gradients = {
    holographic: 'linear-gradient(90deg, #00f0ff 0%, #b444ff 25%, #ff006e 50%, #ffd60a 75%, #00ff88 100%)',
    chrome: 'linear-gradient(90deg, #e8e8e8 0%, #b8b8b8 50%, #e8e8e8 100%)',
    brushed: 'linear-gradient(90deg, #c0c0c0 0%, #d8d8d8 50%, #c0c0c0 100%)',
  };

  return (
    <div className="w-full h-[2px] relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-40"
        style={{ background: gradients[variant] }}
      />
    </div>
  );
}
