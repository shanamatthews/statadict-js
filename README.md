# statadict-js

A JS version of https://github.com/atudomain/statadict.

Available as an Observable Notebook: https://observablehq.com/@shanamatthews/parse-stata-dictionary-files.

Parses Stata dictionary files for input into headers for Arquero Table via `loadFixed`.

## Usage

```js
import { dctToTableInput } from './statadict-js.js';

const exampleText = `infile dictionary {\r
  _column(1)      str12  caseid  %12s  "RESPONDENT ID NUMBER"\r
}`;

const columns = dctToTableInput(exampleText);
```

## Test

This repo includes a usage example at `index.html`.

From the repository root:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/index.html
```
