---
title: Difference between `useAtom` and `useState`
date: 2022-05-10
---

# Difference between `useAtom` and `useState`

## Similarity

Recently I'm using React and Hooks to build up a SPA. The project uses `jotai` for global state management.

The usage of `useState` and `useAtom` is very similar.

```tsx
// useState
const [state, setState] = useState(false)
```

```tsx
// useAtom
const stateAtom = atom(false)
const [state, setState] = useAtom(stateAtom)
```

Both functions return a stateful value and a function to modify it.

## Difference

The main difference is that every time `useState` is called, a new stateful value is created and set to initial value.

While `useAtom` returns a consistent stateful value (as long as the same atom is used) every time it is called. It means if you modify the value in `a.ts`, in `b.ts` you will get the latest value it you call `useAtom` instead of an independent new value.

## Conclusion

If a consistent stateful value is needed across several modules, use `jotai`. That's what it is built for.
