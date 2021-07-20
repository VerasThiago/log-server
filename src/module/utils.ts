import os from 'os'

export function getInterface(family: string): os.NetworkInterfaceInfo {
  const networkArr = os.networkInterfaces().en0

  for (const network of networkArr) {
    if (network.family === family) {
      return network
    }
  }

  return undefined
}
