import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { z } from 'zod'
import { clerkMiddleware, getAuth } from '@hono/clerk-auth'
import { zValidator } from '@hono/zod-validator'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.get('/hello', clerkMiddleware() ,(c) => {

const auth = getAuth(c)

  if (!auth?.userId) {
    return c.json({
      error: 'Unauthorized'
    })
  }
  return c.json({
    message: 'You are logged in!',
    userId: auth.userId
  })
})


export const GET = handle(app)
export const POST = handle(app)