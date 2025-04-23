import envJson from "./../.env.json"

type Keys = keyof typeof envJson

export function getEnv<Type>(env: Keys): Type {
    try {
        const reponse = envJson[env]
        return reponse as Type
    } catch (error) {
        throw new Error("Une erreur est survenue lors de la récupération de la variable d'environement " + env)
    }
}

