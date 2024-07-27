/*
  Warnings:

  - You are about to drop the column `userEmail` on the `Todo` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_userEmail_fkey";

-- DropIndex
DROP INDEX "Todo_userEmail_idx";

-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "userEmail",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
