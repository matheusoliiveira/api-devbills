import app from "./app.js";
import { prismaConnect } from "./config/prisma.js";
import { initializeGlobalCategories } from "./services/globalCategories.service.js";
import { env } from "./config/env.js";
import initializeFirebaseAdmin from "./config/firebase.js";
const PORT = env.PORT;
initializeFirebaseAdmin();
const startServer = async () => {
    try {
        await prismaConnect();
        await initializeGlobalCategories();
        await app.listen({ port: PORT });
        console.log(`Servidor rodando na porta ${PORT}`);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};
startServer();
