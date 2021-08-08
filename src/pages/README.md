## File-based Routing

Routes will be auto-generated for Vue files in this dir with the same file structure.
Check out [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) for more details.

### Path Aliasing

`~/` is aliased to `./src/` folder.

For example, instead of having

```ts
import { isDark } from '../../../../logic'
```

now, you can use

```ts
import { isDark } from '~/logic'
```

### MD views
It's possible to create pages outside of markdown files. Check out [Vitesse](https://github.com/antfu/vitesse) for particular details.


### Applying layouts
Particular layout can be assign like this for the page:

```html
<route lang="yaml">
meta:
  layout: my-fancy-layout
</route>
```