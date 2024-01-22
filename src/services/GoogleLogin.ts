// 1. ovdje ubaci sve pozive prema Google-u, znači fetch ili axios pozive

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const login=(response: any)=>{
    console.log("Handle the response", response)
}

// 2. također, ovdje importaj kontrolere koji će spremati user data - ime, prezime, fotku profila itd. u UserData.ts store.

// 3. ako nisi (a nisi), moraš kreirati te kontrolere u zasebnom folderu koji možeš nazvati user-controllers pod controllers folderom.

// 4. client ID i secret se nalaze u .env datoteci, njima možeš pristupiti tako da samo importaš taj file u servis i napišeš env.vrijednost koja ti treba. ja sam ih sad interno spremio na Github kao secret, pitanje je hoće li ovako raditi, možda ti neće. moramo isprobati.
// morati ćemo naći drugačiji način da sakrijemo client id i client secret jer oni nikako ne bi smjeli biti na frontendu i ne bi se smjeli vidjeti ni na koji način. kada se deploya frontend na neki server, Heroku ili Amazon Web Servise, onda ćemo tamo interno to pohraniti da se ne vide.

// Bonus points:

// - treba warning-banner-component prebaciti u zaseban folder, modal-component, i popraviti importe.

