export const PORT = Number(process.env.PORT) || 4000;
export const VERCEL_OIDC_TOKEN = process.env.VERCEL_OIDC_TOKEN || "";
export const NODE_ENV = process.env.NODE_ENV || "development";
export const isProduction = NODE_ENV === "production";