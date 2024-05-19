# superforms-nested-validation


## Error

```text
[options.2.label] No default value specified for field (can be undefined, but must be explicit)

currentPath: {
  path: 'options.2.label'
}
```

## Possible fix

Set the path of the error message when using refine

```javascript
const schema = z.object({
    id: z.string(),
    options: z.record(z.string(), z.object({
        label: z.string().refine(value => value.length > 0, {
            message: "Label is required",
            path: ['error'], // without this, the error happens
        }),
    })),
})
```

## Run

```bash
pnpm install
pnpm run dev
```