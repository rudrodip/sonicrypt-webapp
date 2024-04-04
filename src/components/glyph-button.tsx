import { cn } from "@/lib/utils";
import "@/styles/glyph.css";

type GlyphButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  speed?: number;
};

const GLYPHS =
  "ラドクリフマラソンわたしワタシんょンョたばこタバコとうきょうトウキョウ0123456789±!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function DefaultGlyphButton({
  text,
  onClick,
  className,
  disabled,
  speed,
}: GlyphButtonProps) {
  return (
    <>
      <button style={{ "--speed": speed ? speed : 0.25 } as React.CSSProperties} className={className}>
        {text.split("").map((char, index) => {
          return (
            <span
              key={index}
              data-char={char}
              style={{
                "--index": index,
                "--char-1": `"${
                  GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                }"`,
                "--char-2": `"${
                  GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                }"`,
                "--char-3": `"${
                  GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                }"`,
              } as React.CSSProperties}
              className={className}
            >
              {char}
            </span>
          );
        })}
        <span className={cn("sr-only", className)}>{text}</span>
      </button>
      <button
        className={cn("dummy", className)}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
}
