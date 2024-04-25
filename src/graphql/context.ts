import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';

const prisma = new PrismaClient();

export interface Context {
  req: NextRequest;
  prisma: PrismaClient;
}

export async function createContext(req: NextRequest): Promise<Context> {
  return {
    req,
    prisma,
  };
}
