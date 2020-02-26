**This button is designed to change colour based on state - it has two states.**

#### Inactive button

```javascript
<React.Fragment>
  <h3>Colorblind mode off, 3 different alignments</h3>
  <ToggleButton alignment='left'>ToggleButton</ToggleButton>
  <ToggleButton>ToggleButton</ToggleButton>
  <ToggleButton alignment='right'>ToggleButton</ToggleButton>
  <h3>Deuteranopia</h3>
  <ToggleButton colorMode='deut'>ToggleButton</ToggleButton>
  <h3>Protanopia</h3>
  <ToggleButton colorMode='prot'>ToggleButton</ToggleButton>
  <h3>Tritanopia</h3>
  <ToggleButton colorMode='tri'>ToggleButton</ToggleButton>
  <h3>Monochromacy</h3>
  <ToggleButton colorMode='mono'>ToggleButton</ToggleButton>
</React.Fragment>
```

#### Active button

```javascript
<React.Fragment>
  <h3>Colorblind mode off, 3 different alignments</h3>
  <ToggleButton active={true} alignment='left'>
    ToggleButton
  </ToggleButton>
  <ToggleButton active={true}>ToggleButton</ToggleButton>
  <ToggleButton active={true} alignment='right'>
    ToggleButton
  </ToggleButton>
  <h3>Deuteranopia</h3>
  <ToggleButton active={true} colorMode='deut'>
    ToggleButton
  </ToggleButton>
  <h3>Protanopia</h3>
  <ToggleButton active={true} colorMode='prot'>
    ToggleButton
  </ToggleButton>
  <h3>Tritanopia</h3>
  <ToggleButton active={true} colorMode='tri'>
    ToggleButton
  </ToggleButton>
  <h3>Monochromacy</h3>
  <ToggleButton active={true} colorMode='mono'>
    ToggleButton
  </ToggleButton>
</React.Fragment>
```
