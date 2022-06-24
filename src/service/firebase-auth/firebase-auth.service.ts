import { auth } from 'firebase-admin'
import { cert, initializeApp } from 'firebase-admin/app'
import { capitalize } from 'src/util/util'

const firebaseDatabaseEndpoint = process.env.FIREBASE_DATABASE_ENDPOINT
const env = process.env.env
// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require(`../../../serviceAccount${capitalize(env)}`)

initializeApp({
  credential: cert(serviceAccount),
  databaseURL: firebaseDatabaseEndpoint,
})
export const verifyJWT = async (token: string) => {
  try {
    const decordedToken = await auth().verifyIdToken(token)
    return decordedToken
  } catch (error) {
    throw new Error('error')
  }
}
