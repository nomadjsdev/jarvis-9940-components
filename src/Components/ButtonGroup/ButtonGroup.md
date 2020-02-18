**This is a group of two or more `ToggleButton`, displayed horizontally or vertically. Only one button can be active at a time. The active prop should be either a buttonId, or null. A reset button is automatically appended to the group.**

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

#### Horizontal group, 2 buttons, none active

```js
<ButtonGroup
  orientation='horizontal'
  buttons={[
    { id: 'one', text: 'One' },
    { id: 'two', text: 'Two' }
  ]}
  active={null}
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
