-- CreateTable
CREATE TABLE "Todos" (
    "id" SERIAL NOT NULL,
    "titile" TEXT NOT NULL,
    "discription" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Todos_pkey" PRIMARY KEY ("id")
);
