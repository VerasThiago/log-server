import Koa from 'koa'
import coBody from 'co-body'

export async function logsHandler(ctx: Koa.ParameterizedContext) {
  try {
    const body = await coBody(ctx.req)

    console.log(body)
    ctx.body = 'Success'
    ctx.status = 201
  } catch (e) {
    ctx.body = e.message
    ctx.status = 500
  }
}
