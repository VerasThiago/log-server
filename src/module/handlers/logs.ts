import Koa from 'koa'
import coBody from 'co-body'

interface Data {
  time: string
  file: string
  line: number
  message: string
}

export async function logsHandler(ctx: Koa.ParameterizedContext) {
  
  try {
    const body: Data = await coBody(ctx.req)
    console.log(body)
    ctx.body = "Success"
    ctx.status = 200
  } catch (e) {
    ctx.body = e.message
    ctx.status = 500
  }
}
