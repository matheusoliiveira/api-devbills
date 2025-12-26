import { getCategories } from "../controllers/category.controller";
import { authMiddleware } from "../middlewares/auth.middlewares";
const categoryRoutes = async (fastify) => {
    fastify.addHook("preHandler", authMiddleware);
    fastify.get("/", getCategories);
};
export default categoryRoutes;
