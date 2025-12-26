import prisma from "../config/prisma.js";
export const getCategories = async (request, reply) => {
    try {
        const categories = await prisma.category.findMany({
            orderBy: { name: "asc" },
        });
        reply.send(categories);
    }
    catch (err) {
        request.log.error({ err }, "Erro ao buscar categories");
        reply.status(500).send({ error: "Erro ao buscar categorias" });
    }
};
