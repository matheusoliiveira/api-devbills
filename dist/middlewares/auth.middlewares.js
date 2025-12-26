import admin from "firebase-admin";
export const authMiddleware = async (request, reply) => {
    const authHeader = request.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        reply.code(401).send({ error: "Token de autorização não fornecido" });
        return;
    }
    const token = authHeader.replace("Bearer ", "");
    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        request.userId = decodedToken.uid;
    }
    catch (err) {
        request.log.error({ err }, "Erro ao verificar token");
        reply.code(401).send({ error: "Token inválido ou expirado" });
    }
};
