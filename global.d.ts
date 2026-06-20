declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL: string
      STORYBLOK_TOKEN: string
    }
  }
}

export {}
