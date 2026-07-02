import { motion } from "motion/react";

type OrnamentStyle = "flourish" | "rings" | "heart" | "minimal";

interface Props {
  style?: OrnamentStyle;
  className?: string;
  dark?: boolean;
}

export default function OrnamentDivider({ style = "flourish", className = "", dark = false }: Props) {
  const color = dark ? "#c9a96e" : "#c9a96e";
  const lineColor = dark ? "rgba(201,169,110,0.3)" : "rgba(201,169,110,0.4)";

  const ornament = () => {
    switch (style) {
      case "rings":
        return (
          <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="16" r="10" stroke={color} strokeWidth="1"/>
            <circle cx="30" cy="16" r="10" stroke={color} strokeWidth="1"/>
          </svg>
        );
      case "heart":
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21C12 21 3 13.5 3 8.5C3 5.46 5.46 3 8.5 3C10.28 3 11.94 3.94 12 5C12.06 3.94 13.72 3 15.5 3C18.54 3 21 5.46 21 8.5C21 13.5 12 21 12 21Z" stroke={color} strokeWidth="1" fill="none"/>
          </svg>
        );
      case "minimal":
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0L9 7L16 8L9 9L8 16L7 9L0 8L7 7Z" fill={color} opacity="0.6"/>
          </svg>
        );
      case "flourish":
      default:
        return (
          <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12C8 12 12 4 20 4C24 4 26 8 30 8C34 8 36 4 40 4C48 4 52 12 60 12" stroke={color} strokeWidth="1" fill="none"/>
            <path d="M0 12C8 12 12 20 20 20C24 20 26 16 30 16C34 16 36 20 40 20C48 20 52 12 60 12" stroke={color} strokeWidth="1" fill="none"/>
            <circle cx="30" cy="12" r="2" fill={color} opacity="0.5"/>
          </svg>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`flex items-center justify-center gap-4 py-2 ${className}`}
    >
      <div className="flex-1 max-w-[100px] h-px" style={{ background: `linear-gradient(to right, transparent, ${lineColor})` }}></div>
      {ornament()}
      <div className="flex-1 max-w-[100px] h-px" style={{ background: `linear-gradient(to left, transparent, ${lineColor})` }}></div>
    </motion.div>
  );
}
