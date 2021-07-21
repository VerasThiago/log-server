import Koa from 'koa'
import coBody from 'co-body'
import { getListIPs } from '../utils'

interface Data {
  family?: string
}

export async function ipHandler(ctx: Koa.ParameterizedContext) {
  try {
    const body: Data = await coBody(ctx.req)

    ctx.body = getListIPs(body.family ?? 'IPv4')
    ctx.status = 200
  } catch (e) {
    ctx.body = e.message
    ctx.status = 500
  }
}
