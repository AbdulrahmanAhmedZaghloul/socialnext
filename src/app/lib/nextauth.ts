import { GoogleProvider } from "next-auth/providers/google";

export const autoOptions ={
    Providers:[
        GoogleProvider({
            clientId:'',
            clientSecret:'',

        }),
    ],
}