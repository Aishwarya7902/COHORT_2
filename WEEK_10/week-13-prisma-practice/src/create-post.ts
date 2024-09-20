
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({log:['info','query','error']})

async function main() {
  await prisma.post.create({
    data: {
     title: "title of post",
     content:"Hello",
     published:true,
     authorId:1
    }
  })
}

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })