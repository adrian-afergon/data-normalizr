# data-normalizr

An util to normalize your data array with your own models, thought to use in reactive states (Angular, React, Vue, etc.)

We use it for move a data structure like this:

```json
[
    {"id": "1", "name": "Oliver", "surname": "Queen", "metahuman": false},
    {"id": "2", "name": "Dinah", "surname": "Drake", "metahuman": true}
]
```

to
```json
{
    "1": { "completeName": "Oliver Queen", "metahuman": false},
    "2": { "completeName": "Dinah Drake", "metahuman": true}
}
```

With this structure you can use the info in your inmutable state easier and map as you wish to your domain.

## Types

All types returned will be wrapped as `Normalized`. In this way you could wrap your models to identify your normalized data instead identify it as generic types.

```typescript
import { Normalized } from 'data-normalizr';

interface Hero {
    completename: string,
    metahuman: boolean
}

// You can wrap it in your state as:

interface AppState {
 heroes: Normalized<Hero>;   
}
```