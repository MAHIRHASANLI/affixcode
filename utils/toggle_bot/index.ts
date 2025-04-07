export const isTogleBot = (userAgent: string) => {
  const botPatterns = [
    "googlebot",
    "bingbot",
    "slurp",
    "duckduckbot",
    "baiduspider",
    "yandex",
    "sogou",
    "exabot",
    "facebot",
    "ia_archiver", // Alexa
    "applebot",
    "crawler",
    "spider",
    "bot",
  ];

  const ua = userAgent.toLowerCase();
  return botPatterns.some((pattern) => ua.includes(pattern));
};
