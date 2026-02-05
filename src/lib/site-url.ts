const PROD_BASE_URL = "https://binary-guide.vercel.app";

const normalizeUrl = (url: string) => url.replace(/\/$/, "");

export const getSiteUrl = () => {
  const env = process.env.VERCEL_ENV;

  if (env === "production") {
    return normalizeUrl(process.env.SITE_URL ?? PROD_BASE_URL);
  }

  if (process.env.SITE_URL) {
    return normalizeUrl(process.env.SITE_URL);
  }

  if (process.env.VERCEL_URL) {
    return normalizeUrl(`https://${process.env.VERCEL_URL}`);
  }

  return "http://localhost:3000";
};
