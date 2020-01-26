**This is a group of two or more `ToggleButton`, displayed horizontally or vertically. Only one button can be active at a time. The active number is zero-indexed.**

#### Horizontal group, 3 buttons, number 2 active

```js
<ButtonGroup
  orientation='horizontal'
  buttons={[
    { id: 'one', text: 'One' },
    { id: 'two', text: 'Two' },
    { id: 'three', text: 'Three' }
  ]}
  active={'two'}
/>
```

#### Vertical group, 4 buttons, number 3 active

```js
<ButtonGroup
  orientation='vertical'
  buttons={[
    { id: 'one', text: 'One' },
    { id: 'two', text: 'Two' },
    { id: 'three', text: 'Three' },
    { id: 'four', text: 'Four' }
  ]}
  active={'three'}
/>
```
