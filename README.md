### Log Server

Simply log receiver / sender

- Used for debug others services that don't have easy console acess to check logs

- Used to foward requests (experimental purpose)

## How to run ? 

```
docker run -p 3000:3000 verasthiago/log-server
```
### Endpoints

#### Log metric

```
POST HOST.IP:3000/logs

data: Record<string, any>
```

Example:
```
curl -d "message=salve" -X POST localhost:3000/logs
```

#### Proxy

Make request to specific `HOST`, `PATH`

```
POST HOST.IP:3000/proxy

data:
  {
    "baseURL": string,
    "path": string,
    "method": string,
    "data": Record<string, any>
    "enableHost": boolean
  }
```

Example:

```
curl --location --request POST 'localhost:3000/proxy' \
--header 'Content-Type: application/json' \
--data-raw '{
    "baseURL": "http://localhost:3000/",
    "path": "/logs",
    "method": "post",
    "data": {
      "message":  "success",
      "test": "hello world"
    },
    "enableHost": true
}'
```