import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  server: {
    SERVER_URL: z.string().url().optional(),
  },

  clientPrefix: 'VITE_',

  client: {
    VITE_SUPABASE_URL: z
      .string()
      .url('Must be a valid URL')
      .min(1, 'Supabase URL is required'),
    VITE_SUPABASE_ANON_KEY: z.string().min(1, 'Supabase Anon Key is required'),
    VITE_BASE_URL: z.string().url().optional(),
    VITE_APP_NAME: z.string().optional(),
  },

  runtimeEnv: import.meta.env,

  emptyStringAsUndefined: true,
})
