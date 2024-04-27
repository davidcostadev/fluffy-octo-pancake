declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SELF_API_URL: string;
    DATABASE_URL: string;
    NO_PEER_DEPENDENCY_CHECK: string;
    PEER_DEPENDENCY_CHECK: string;
    SECRET_SALT: string;
    SECRET_KEY: string;
    EMAIL_HOST: string;
    EMAIL_PORT: string;
    EMAIL_USER: string;
    EMAIL_PASSWORD: string;
    WEBSITE_DOMAIN: string;
    EMAIL_FROM: string;
    ENABLE_SEND_EMAIL: string;
    ENABLE_ONLY_VERIFIED_EMAILS_TO_LOGIN: string;
    SESSION_KEY: string;
  }
}
