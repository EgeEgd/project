"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
process.on('SIGTERM', () => {
    console.log('Disconnecting from database…');
    prisma.$disconnect();
});
exports.default = prisma;
//# sourceMappingURL=prisma.js.map