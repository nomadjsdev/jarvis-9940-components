**This button is designed to send a fixed message to the group - it has one state.**

#### Message button

```javascript
<React.Fragment>
  <h3>Colorblind mode off, 3 different alignments</h3>
  <MessageButton alignment='left'>MessageButton</MessageButton>
  <MessageButton>MessageButton</MessageButton>
  <MessageButton alignment='right'>MessageButton</MessageButton>
  <h3>Deuteranopia</h3>
  <MessageButton colorMode='deut'>MessageButton</MessageButton>
  <h3>Protanopia</h3>
  <MessageButton colorMode='prot'>MessageButton</MessageButton>
  <h3>Tritanopia</h3>
  <MessageButton colorMode='tri'>MessageButton</MessageButton>
  <h3>Monochromacy</h3>
  <MessageButton colorMode='mono'>MessageButton</MessageButton>
</React.Fragment>
```
