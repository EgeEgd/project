import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

process.on('SIGTERM', () => {
  console.log('Disconnecting from database…')

  prisma.$disconnect()
})

export default prisma