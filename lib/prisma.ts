import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });
} else {
  const globalWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient;
  };
  
  if (!globalWithPrisma.prisma) {
    // Add pgbouncer=true to disable prepared statements in development
    const databaseUrl = process.env.DATABASE_URL?.includes('?') 
      ? `${process.env.DATABASE_URL}&pgbouncer=true&prepared_statements=false`
      : `${process.env.DATABASE_URL}?pgbouncer=true&prepared_statements=false`;
      
    globalWithPrisma.prisma = new PrismaClient({
      datasources: {
        db: {
          url: databaseUrl,
        },
      },
    });
  }
  prisma = globalWithPrisma.prisma;
}

export default prisma;





// Beyond the code, 
// // I have ensured that the PrismaClient is instantiated only once in development to prevent multiple instances.
//what is have fixed 
// What I Fixed:
// Prisma Singleton Pattern: Updated prisma.ts to use a proper singleton that prevents multiple PrismaClient instances
// Removed $disconnect() Calls: Removed the prisma.$disconnect() from actions/getForms.ts that was causing connection issues
// Added Connection Parameters: Added pgbouncer=true&prepared_statements=false to the database URL in development to disable prepared statement caching
// Cleared Cache: Removed .next directory multiple times to ensure no cached artifacts
// Generated Fresh Client: Ran npx prisma generate to ensure the client is up to date

// If u ever encounter connection issues again, consider checking your database connection limits and ensure that your environment variables are correctly set.
