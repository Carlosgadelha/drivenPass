/*
  Warnings:

  - The values [CreditCard,DebitCard] on the enum `TypesCards` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TypesCards_new" AS ENUM ('creditCard', 'debitCard', 'both');
ALTER TABLE "Cards" ALTER COLUMN "type" TYPE "TypesCards_new" USING ("type"::text::"TypesCards_new");
ALTER TYPE "TypesCards" RENAME TO "TypesCards_old";
ALTER TYPE "TypesCards_new" RENAME TO "TypesCards";
DROP TYPE "TypesCards_old";
COMMIT;

-- DropIndex
DROP INDEX "SecureNotes_title_key";
