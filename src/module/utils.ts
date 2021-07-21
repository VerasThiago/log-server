import os from 'os'

export function getListIPs(family?: string): string {
  const networks = getInterfaces(family)

  return networks
    .map((network) => {
      return network.address
    })
    .join(' | ')
}

export function getInterfaces(family = 'IPv4'): os.NetworkInterfaceInfo[] {
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
