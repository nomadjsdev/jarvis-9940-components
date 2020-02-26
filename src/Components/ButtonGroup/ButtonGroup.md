**This is a group of two or more `ToggleButton`, displayed horizontally or vertically, with an optional title.**

**Only one button can be active at a time.**

**The active prop should be either a buttonId, or null.**

**A reset button is automatically appended to the group.**

#### Horizontal group with a title, 3 buttons, number 2 active

```javascript
<React.Fragment>
  <h3>Colorblind mode off, 3 different alignments</h3>
  <ButtonGroup
    title='Group'
    orientation='horizontal'
    alignment='left'
    buttons={[
      { id: 'one', text: 'One' },
      { id: 'two', text: 'Two' },
      { id: 'three', text: 'Three' }
    ]}
    active={'two'}
  />
  <ButtonGroup
    title='Group'
    orientation='horizontal'
    buttons={[
      { id: 'one', text: 'One' },
      { id: 'two', text: 'Two' },
      { id: 'three', text: 'Three' }
    ]}
    active={'two'}
  />
  <ButtonGroup
    title='Group'
    orientation='horizontal'
    alignment='right'
    buttons={[
      { id: 'one', text: 'One' },
      { id: 'two', text: 'Two' },
      { id: 'three', text: 'Three' }
    ]}
    active={'two'}
  />
  <h3>Deuteranopia</h3>
  <ButtonGroup
    title='Group'
    orientation='horizontal'
    colorMode='deut'
    buttons={[
      { id: 'one', text: 'One' },
      { id: 'two', text: 'Two' },
      { id: 'three', text: 'Three' }
    ]}
    active={'two'}
  />
  <h3>Protanopia</h3>
  <ButtonGroup
    title='Group'
    orientation='horizontal'
    colorMode='prot'
    buttons={[
      { id: 'one', text: 'One' },
      { id: 'two', text: 'Two' },
      { id: 'three', text: 'Three' }
    ]}
    active={'two'}
  />
  <h3>Tritanopia</h3>
  <ButtonGroup
    title='Group'
    orientation='horizontal'
    colorMode='tri'
    buttons={[
      { id: 'one', text: 'One' },
      { id: 'two', text: 'Two' },
      { id: 'three', text: 'Three' }
    ]}
    active={'two'}
  />
  <h3>Monochromacy</h3>
  <ButtonGroup
    title='Group'
    orientation='horizontal'
    colorMode='mono'
    buttons={[
      { id: 'one', text: 'One' },
      { id: 'two', text: 'Two' },
      { id: 'three', text: 'Three' }
    ]}
    active={'two'}
  />
</React.Fragment>
```

#### Horizontal group without a title, 2 buttons, none active

```javascript
<React.Fragment>
  <h3>Colorblind mode off, 3 different alignments</h3>
  <ButtonGroup
    orientation='horizontal'
    alignment='left'
    buttons={[
      { id: 'one', text: 'One' },
      { id: 'two', text: 'Two' }
    ]}
    active={null}
  />
  <ButtonGroup
    orientation='horizontal'
    buttons={[
      { id: 'one', text: 'One' },
      { id: 'two', text: 'Two' }
    ]}
    active={null}
  />
  <ButtonGroup
    orientation='horizontal'
    alignment='right'
    buttons={[
      { id: 'one', text: 'One' },
      { id: 'two', text: 'Two' }
    ]}
    active={null}
  />
  <h3>Deuteranopia</h3>
  <ButtonGroup
    orientation='horizontal'
    colorMode='deut'
    buttons={[
      { id: 'one', text: 'One' },
      { id: 'two', text: 'Two' }
    ]}
    active={null}
  />
  <h3>Protanopia</h3>
  <ButtonGroup
    orientation='horizontal'
    colorMode='prot'
    buttons={[
      { id: 'one', text: 'One' },
      { id: 'two', text: 'Two' }
    ]}
    active={null}
  />
  <h3>Tritanopia</h3>
  <ButtonGroup
    orientation='horizontal'
    colorMode='tri'
    buttons={[
      { id: 'one', text: 'One' },
      { id: 'two', text: 'Two' }
    ]}
    active={null}
  />
  <h3>Monochromacy</h3>
  <ButtonGroup
    orientation='horizontal'
    colorMode='mono'
    buttons={[
      { id: 'one', text: 'One' },
      { id: 'two', text: 'Two' }
    ]}
    active={null}
  />
</React.Fragment>
```

#### Vertical group with a title, 4 buttons, number 3 active

```javascript
<React.Fragment>
  <h3>Colorblind mode off, 3 different alignments</h3>
  <ButtonGroup
    title='Group'
    orientation='vertical'
    alignment='left'
    buttons={[
      { id: 'one', text: 'One' },
      { id: 'two', text: 'Two' },
      { id: 'three', text: 'Three' },
      { id: 'four', text: 'Four' }
    ]}
    active={'three'}
  />
  <ButtonGroup
    title='Group'
    orientation='vertical'
    buttons={[
      { id: 'one', text: 'One' },
      { id: 'two', text: 'Two' },
      { id: 'three', text: 'Three' },
      { id: 'four', text: 'Four' }
    ]}
    active={'three'}
  />
  <ButtonGroup
    title='Group'
    orientation='vertical'
    alignment='right'
    buttons={[
      { id: 'one', text: 'One' },
      { id: 'two', text: 'Two' },
      { id: 'three', text: 'Three' },
      { id: 'four', text: 'Four' }
    ]}
    active={'three'}
  />
  <h3>Deuteranopia</h3>
  <ButtonGroup
    title='Group'
    orientation='vertical'
    colorMode='deut'
    buttons={[
      { id: 'one', text: 'One' },
      { id: 'two', text: 'Two' },
      { id: 'three', text: 'Three' },
      { id: 'four', text: 'Four' }
    ]}
    active={'three'}
  />
  <h3>Protanopia</h3>
  <ButtonGroup
    title='Group'
    orientation='vertical'
    colorMode='prot'
    buttons={[
      { id: 'one', text: 'One' },
      { id: 'two', text: 'Two' },
      { id: 'three', text: 'Three' },
      { id: 'four', text: 'Four' }
    ]}
    active={'three'}
  />
  <h3>Tritanopia</h3>
  <ButtonGroup
    title='Group'
    orientation='vertical'
    colorMode='tri'
    buttons={[
      { id: 'one', text: 'One' },
      { id: 'two', text: 'Two' },
      { id: 'three', text: 'Three' },
      { id: 'four', text: 'Four' }
    ]}
    active={'three'}
  />
  <h3>Monochromacy</h3>
  <ButtonGroup
    title='Group'
    orientation='vertical'
    colorMode='mono'
    buttons={[
      { id: 'one', text: 'One' },
      { id: 'two', text: 'Two' },
      { id: 'three', text: 'Three' },
      { id: 'four', text: 'Four' }
    ]}
    active={'three'}
  />
</React.Fragment>
```
