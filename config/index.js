const dev = process.env.NODE_ENV !== "production" || process.env.NODE_ENV !== "build";

export const server = dev ? "http://localhost:3000" : "https://mathewdevin.com";
