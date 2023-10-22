import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient({log: [{ level: 'query', emit: 'stdout' }]});
} else {
  const globalWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient;
  };
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient({log: [{ level: 'query', emit: 'stdout' }]});
  }
  prisma = globalWithPrisma.prisma;
}

export default prisma;