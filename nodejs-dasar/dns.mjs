import dns from "dns/promises"

const id = await dns.lookup("wwww.programmerzamannowq.com")

console.info(id)