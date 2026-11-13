# DevMountain

This repository is an archive of the exercises and assessments from a DevMountain coding bootcamp. The weeks cover JavaScript drills, HTML and CSS pages, Express APIs, SQL scripts, a Jest suite, a small runtime comparison, and iOS projects. There is no single application at the repository root. Each folder is its own exercise.

## Prerequisites

- Node.js and npm. These commands were run with Node.js v22.23.4 and npm 10.9.9. The `package.json` files do not set an `engines` field.
- A web browser for the HTML pages.
- PostgreSQL, if you run the SQL scripts in `week-9/sql-intro` or the travel journal server in `week-10/assessment-data/travel-journal`.
- macOS and Xcode for the projects under `ah-ios-5-unit-1`. Those were not run in this environment.

## Install

There is no root `package.json` and no repository build step. From the repository root, install inside the project you want to run:

```bash
npm install --prefix week-6/js-requests
npm install --prefix week-7/back-end-1
npm install --prefix week-7/back-end-2
npm install --prefix week-8/apis/swapi
npm install --prefix week-8/assessment-backend
npm install --prefix week-8/crypto-security
npm install --prefix week-10/assessment-data/travel-journal
npm install --prefix week-12/assessment-qa-devops
npm install --prefix week-14/assessment-cs
```

`week-9/sql-intro/package.json` has no dependencies and no start script. `node_modules` is gitignored.

Checked-in `_build/handouts` directories are course handouts. This repository has no Makefile or Sphinx config that rebuilds them.

## Run

Run these from the repository root.

### JavaScript exercises

These files run with Node.js and do not need `npm install`:

```bash
node week-1/calculator/calc.js
node week-2/challenge-fizz-buzz/fizzBuzz.js
node week-2/code-challenge-max-of-two/max-of-two.js
node week-3/challenge-add-to-zero/addToZero.js
node week-4/challenge-find-lucky-nums/findLuckyNumbers.js
node week-4/challenge-has-unique-char/hasUniqueChars.js
node week-4/challenge-is-palindrome/isPalindrome.js
node week-5/challenge-has-more-vowels/hasMoreVowels.js
node week-6/challenge-print-digits/printDigits.js
node week-6/challenge-stock-prices/stockPrices.js
node week-6/challenge-string-decoder/stringDecoder.js
node week-7/challenge-decode-string/decodeString.js
node week-8/chal-balanced-parenthesis/balancedParens.js
node week-8/chal-make-unique-string/makeUnique.js
node week-8/chal-tshirt-sorter/tshirtSorter.js
```

`week-1/calculator/calc.js` reads one line from stdin. The first token is the operator (`+`, `-`, `*`, `/`, or `√`) and the next tokens are numbers. Square root uses the first number. Example input: `+ 2 3`.

`.vscode/launch.json` launches `week-8/chal-tshirt-sorter/tshirtSorter.js`.

### Runtime comparison

`week-14/assessment-cs` depends on `execution-time`. `runtime.js` prints timings, then asks whether to write a CSV.

```bash
npm install --prefix week-14/assessment-cs
node week-14/assessment-cs/runtime.js
```

Answer `n` to exit. Answer `y` to be prompted for a file path. `npm test` in this folder prints `Error: no test specified` and exits 1. The same default test script is in `week-9/sql-intro`, `week-8/crypto-security`, `week-8/apis/swapi`, `week-8/assessment-backend`, and `week-10/assessment-data/travel-journal`.

### Express servers

Install that project's dependencies first. Stop a server with Ctrl-C. These ports overlap, so run one server at a time:

| Command | Port |
| --- | --- |
| `node week-6/js-requests/server/index.js` | 3000 |
| `node week-7/back-end-1/index.js` | 4000 |
| `node week-8/assessment-backend/server/index.js` | 4000 |
| `node week-7/back-end-2/server/index.js` | 4004 |
| `node week-8/crypto-security/part-2/server/index.js` | 4004 |
| `node week-12/assessment-qa-devops/server.js` | `PORT` or 3000 |

`week-8/crypto-security/part-1/server/index.js` uses `require`, and `week-8/crypto-security/package.json` sets `"type": "module"`. `node week-8/crypto-security/part-1/server/index.js` exits with `ReferenceError: require is not defined`.

`week-12/assessment-qa-devops/package.json` sets `"start": "./server.js"`. `server.js` has no shebang and is not executable, so run it with `node`:

```bash
node week-12/assessment-qa-devops/server.js
```

`week-12/assessment-qa-devops/Procfile` contains `web: node ./week-12/assessment-qa-devops/server.js`.

The travel journal server reads `SERVER_PORT` and `CONNECTION_STRING` from the environment (`dotenv`). There is no `.env.example` in the repo. It was not started here.

```bash
cd week-10/assessment-data/travel-journal
npm install
export SERVER_PORT=4000
export CONNECTION_STRING='<postgres connection string>'
node server/index.js
```

### SQL

`week-9/sql-intro` holds SQL scripts: `person.sql`, `artist.sql`, `employee.sql`, `invoice.sql`, `orders.sql`, `group_by.sql`, `update.sql`, and `delete.sql`. `person.sql` starts with `DROP TABLE person`. Run a script against a database you choose, for example:

```bash
psql -d <database> -f week-9/sql-intro/person.sql
```

`psql` was not available in the environment used to check these commands, so the SQL files were not executed.

### iOS

On a Mac, open a project in Xcode:

```bash
open "ah-ios-5-unit-1/LandmarkTableView/LandmarkTableView.xcodeproj"
open "ah-ios-5-unit-1/Reminders/Reminders.xcodeproj"
open "ah-ios-5-unit-1/Simpons Book/Simpons Book.xcodeproj"
open ah-ios-5-unit-1/ahios-5-ios-proj-1.playground
```

`ah-ios-5-unit-1/Solar System` is an empty directory.

## Usage

### HTML pages

Open these files in a browser. The API pages expect the matching server from the table above to be running.

- `week-5/html-css-1/index.html`
- `week-5/html-css-2/drill-1/index.html`
- `week-5/html-css-2/drill-2/index.html`
- `week-5/html-css-2/drill-3/index.html`
- `week-5/html-css-2/drill-3/space-x-clone/index.html`
- `week-6/js-interactivity/index.html` (movie list in the page)
- `week-6/assessment-front-end-web/home.html` (also `about.html`, `profile.html`, `neighborhood.html`)
- `week-6/js-requests/client/index.html` calls `http://localhost:3000`
- `week-7/back-end-1/index.html` calls `http://localhost:4000/api/users`
- `week-7/back-end-2/index.html` calls `http://localhost:4004/api/houses`
- `week-8/assessment-backend/client/index.html` calls port 4000
- `week-8/crypto-security/part-1/index.html` is the login and register form for the part 1 server
- `week-8/apis/swapi/index.html` loads Axios from `node_modules` and requests SWAPI from `main.js`. Run `npm install --prefix week-8/apis/swapi` before opening it.

`week-12/assessment-qa-devops/server.js` serves its own page. With that server running, open `http://localhost:3000/`.

### HTTP routes

`week-6/js-requests` (`server/index.js`, port 3000):

```bash
curl http://127.0.0.1:3000/say-hello
curl http://127.0.0.1:3000/animals
curl http://127.0.0.1:3000/repeat/hi
curl "http://127.0.0.1:3000/query-test?q=123"
curl -H 'Content-Type: application/json' -d '{"newFood":"apple"}' http://127.0.0.1:3000/food
```

`week-7/back-end-1` (port 4000):

```bash
curl http://127.0.0.1:4000/api/users
curl http://127.0.0.1:4000/weather/hot
```

`week-7/back-end-2` (port 4004):

```bash
curl http://127.0.0.1:4004/api/houses
```

`week-8/assessment-backend` (port 4000). Compliment, fortune, and goals are handled in the server. The quote routes request remote JSON from the URLs in `server/controller.js`.

```bash
curl http://127.0.0.1:4000/api/compliment
curl http://127.0.0.1:4000/api/fortune
curl http://127.0.0.1:4000/api/goals
curl http://127.0.0.1:4000/api/quote/inspire
curl http://127.0.0.1:4000/api/quote/program
```

`week-8/crypto-security/part-2` (port 4004) exposes `POST /api/register` and `POST /api/login`.

`week-12/assessment-qa-devops/server.js` exposes `GET /`, `GET /api/robots`, `GET /api/robots/five`, `POST /api/duel`, and `GET /api/player`.

`week-10/assessment-data/travel-journal/server/index.js` exposes `POST /seed`, `GET /countries`, `POST /cities`, `GET /cities`, and `DELETE /cities/:id`.

## Test

The only project with tests is `week-12/assessment-qa-devops`. `npm test` runs `jest --detectOpenHandles`.

```bash
cd week-12/assessment-qa-devops
npm install
npm test
```

What that script includes:

- `functions.test.ts` tests `shuffleArray` and does not need a server.
- `endpoints.test.ts` sends requests to `http://localhost:3000`, so `node server.js` has to be running.
- `duelDuo.test.ts` drives Chrome with Selenium against `http://localhost:3000/`.

To run only the unit file:

```bash
cd week-12/assessment-qa-devops
npx jest functions.test.ts --detectOpenHandles
```

## Layout

```text
ah-ios-5-unit-1/          Swift playground and Xcode projects
week-1/                   calculator and environment-setup notes
week-2/                   decisions, fizz buzz, max of two, JS basics assessment
week-3/                   functions, objects, add-to-zero
week-4/                   arrays, callbacks, palindrome, unique characters, lucky numbers
week-5/                   vowels challenge and HTML/CSS drills
week-6/                   front-end pages, string and stock challenges, request lab
week-7/                   two Express house and user labs, decode-string
week-8/                   APIs, auth lab, backend assessment, string challenges
week-9/sql-intro/         SQL scripts
week-10/assessment-data/  travel journal Express and Sequelize server
week-12/assessment-qa-devops/  Express app, Jest tests, Procfile
week-14/assessment-cs/    runtime comparison (runtime.js)
.vscode/                  editor launch and spellcheck settings
```

There is no `week-11` or `week-13` directory.

## License

The repository root has no `LICENSE` file. These `package.json` files set `"license": "ISC"`:

- `week-8/apis/swapi`
- `week-8/assessment-backend`
- `week-8/crypto-security`
- `week-9/sql-intro`
- `week-10/assessment-data/travel-journal`
- `week-12/assessment-qa-devops`
- `week-14/assessment-cs`

`week-6/js-requests`, `week-7/back-end-1`, and `week-7/back-end-2` do not set a license field.
