import admin from "firebase-admin";
import { env } from "./env";

const initializeFirebaseAdmin = (): void => {
  if (admin.apps.length > 0) return;

  const {
    FIREBASE_CLIENT_EMAIL,
    FIREBASE_PRIVATE_KEY,
    FIREBASE_PROJECT_ID,
  } = env;

  // Se não tiver Firebase configurado, não derruba a API
  if (
    !FIREBASE_CLIENT_EMAIL ||
    !FIREBASE_PRIVATE_KEY ||
    !FIREBASE_PROJECT_ID
  ) {
    console.warn(
      "⚠️  Firebase não inicializado (credenciais ausentes)"
    );
    return;
  }

  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: FIREBASE_PROJECT_ID,
        clientEmail: FIREBASE_CLIENT_EMAIL,
        privateKey: FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      }),
    });

    console.log("🔥 Firebase Admin inicializado com sucesso");
  } catch (err) {
    console.error("🚨  Falha ao conectar ao Firebase", err);
    process.exit(1);
  }
};

export default initializeFirebaseAdmin;
