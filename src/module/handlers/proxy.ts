import Koa from 'koa'
import coBody from 'co-body'
import axios from 'axios'

type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'purge' | 'PURGE'
  | 'link' | 'LINK'
  | 'unlink' | 'UNLINK'

interface Data{
  baseURL: string,
  path: string,
  method: Method
  data?: Record<string, string> 
}

export async function proxyHandler(ctx: Koa.ParameterizedContext) {
  try {
    const body: Data = await coBody(ctx.req)

    const res: any = await axios({
      method: body.method,
      url: body.path,
      baseURL: body.baseURL,
      data: body.data,
    })
    
    ctx.body = res.data
    ctx.status = res.status
  } catch (e) {

    ctx.body = e.message
    ctx.status = 500
  }
}
