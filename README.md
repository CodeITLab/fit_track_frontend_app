
# Fitness Aplikacija

Dobrodošli u fitness aplikaciju razvijenu u Vue 3 tehnologiji.

## Sadržaj

- [Kloniranje projekta](#kloniranje-projekta)
- [Instaliranje Node modula](#instaliranje-node-modula)
- [Pokretanje projekta](#pokretanje-projekta)
- [Rad s Git Flow-om](#rad-s-git-flow-om)
- [Arhitektura aplikacije](#arhitektura-aplikacije)
- [Dodatni resursi](#dodatni-resursi)

## Kloniranje projekta

1. Klonirajte repozitorij sa GitHuba:

   ```bash
   git clone https://github.com/CodeITLab/fit_track_frontend_app.git
   ```

2. Prijavite se u direktorij aplikacije:

   ```bash
   cd fit_track_frontend_app
   ```

## Instaliranje Node modula

Koristite npm (Node Package Manager) za instalaciju potrebnih modula:

```bash
npm install
```

ili kraća verzija:

```bash
npm i
```

Ovo će instalirati sve potrebne zavisnosti navedene u `package.json` datoteci.

## Pokretanje projekta

Nakon što su Node moduli instalirani, pokrenite aplikaciju lokalno:

```bash
npm run serve
```

Ovo će pokrenuti razvojni server. Nakon što se aplikacija pokrene, otvorite vaš web preglednik i posjetite:

```
http://localhost:8080
```

## Rad s Git Flow-om

Prije nego što započnete rad s Git Flow-om, uvijek se uvjerite da ste povukli najnoviju verziju koda s GitHuba kako biste imali najnovije promjene:

```bash
git pull origin main
```

### Kreiranje novog feature branch-a

Prije nego što započnete rad na novoj funkcionalnosti (feature-u), kreirajte novi branch:

```bash
git checkout -b feature/naziv-featurea
```

Zamijenite `naziv-featurea` s nazivom vašeg feature-a.

### Dodavanje promjena preko Gita

Nakon što napravite promjene u kodu, dodajte ih u stage za commit:

```bash
git add .
```

Ova komanda dodaje sve promjene. Ako želite dodati samo određene datoteke, umjesto `.` upišite nazive datoteka koje želite dodati.

### Commitanje promjena

Napravite commit s vašim promjenama:

```bash
git commit -m "Opis vaših promjena ovdje"
```

Zamijenite `"Opis vaših promjena ovdje"` s opisom vaših promjena.

### Pushanje feature branch-a na GitHub

Kada ste spremni podijeliti vašu radnu granu s ostatkom tima ili s GitHubom, pushajte vaš branch na udaljeni repozitorij:

```bash
git push origin feature/naziv-featurea
```

Opet, zamijenite `naziv-featurea` s nazivom vašeg feature-a.

## Arhitektura aplikacije

Aplikacija se sastoji od sljedećih foldera:

- **api**: Sadrži REST API pozive prema backendu.
- **assets**: Sadrži CSS datoteke i fotografije koje aplikacija koristi.
- **components**: Sadrži osnovne Vue komponente za menu, vježbe i modale (pop-up-e) u aplikaciji.
- **controllers**: Sadrži metode koje sadrže logiku za rad nad podacima.
- **helpers**: Sadrži pomoćne metode koje podržavaju funkcionalnosti aplikacije.
- **models**: Sadrži modele podataka s kojima aplikacija radi.
- **router**: Vue 3 router koji upravlja navigacijom unutar aplikacije.
- **store**: Pinia store menadžment koji upravlja akcijama nad podacima aplikacije.

## Dodatni resursi

- Za više informacija o Vue 3, posjetite [Vue.js dokumentaciju](https://v3.vuejs.org/).
- Ako imate pitanja ili prijedloge, slobodno otvorite pitanje ili PR na GitHubu.

