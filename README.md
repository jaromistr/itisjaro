# itisjaro.cz

Osobní web. Čisté HTML + CSS, žádné sestavování, co je ve složce, to běží na GitHub Pages (`git@github.com:jaromistr/itisjaro.git`, větev `main`).

| Soubor | Co to je |
|---|---|
| `index.html` | česká verze – texty se upravují tady |
| `en/index.html` | anglická verze – při změně textu upravit i tu |
| `llms.txt` | shrnutí pro AI agenty (anglicky) – držet v souladu se stránkou |
| `style.css` | vzhled inspirovaný bejamas.com: světlý `#f3f3f4` / tmavý `#131315` podle systému, limetkový akcent `#c6f36b` |
| `fonts/` | Switzer (Fontshare, ITF Free Font License – komerční použití i self-hosting povolené) |
| `site.js` | zapamatuje ručně zvolený jazyk |
| `sitemap.xml`, `robots.txt` | pro vyhledávače; při změně obsahu aktualizovat `lastmod` |
| `img/og-{cs,en}.png` | náhled při sdílení odkazu (1200 × 630) |
| `favicon.ico`, `apple-touch-icon.png`, `img/icon-192.png` | ikony |
| `CNAME`, `.nojekyll` | GitHub Pages (vlastní doména, bez Jekyllu) |

Při změně obsahu aktualizovat i `dateModified` v JSON-LD obou verzí a sekci „Teď“.

## Náhled lokálně

```sh
python3 -m http.server 8090 --bind 127.0.0.1
```

→ http://127.0.0.1:8090 (podle jazyka prohlížeče přesměruje na `/` nebo `/en/`).
