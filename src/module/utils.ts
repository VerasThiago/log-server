import os from 'os'

export function getInterfaces(family: string): os.NetworkInterfaceInfo[] {
  const networkInterfaces = os.networkInterfaces()
  const networkMatachedWithFamily: os.NetworkInterfaceInfo[] = []

  for (const networkKey in networkInterfaces) {
    const networkArr = networkInterfaces[networkKey]

    for (const network of networkArr) {
      if (network?.family === family) {
        networkMatachedWithFamily.push(network)
      }
    }
  }

  return networkMatachedWithFamily
}
