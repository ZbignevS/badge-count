# badge-count

The main functionality of this plugin is setting the app's badge number, which is the little number displayed on the app icon on the home screen. It also provides additional capabilities like clearing the badge, checking permissions, and requesting permission for badge notifications.

## Install

```bash
npm install badge-count
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------

</docgen-api>
