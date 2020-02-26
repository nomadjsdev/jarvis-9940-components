**This button is designed to send a fixed message to the group - it has one state.**

#### Timer button

```javascript
<React.Fragment>
  <h3>Colorblind mode off, 3 different alignments</h3>
  <TimerButton alignment='left'>TimerButton</TimerButton>
  <TimerButton>TimerButton</TimerButton>
  <TimerButton alignment='right'>TimerButton</TimerButton>
  <h3>Deuteranopia</h3>
  <TimerButton colorMode='deut'>TimerButton</TimerButton>
  <h3>Protanopia</h3>
  <TimerButton colorMode='prot'>TimerButton</TimerButton>
  <h3>Tritanopia</h3>
  <TimerButton colorMode='tri'>TimerButton</TimerButton>
  <h3>Monochromacy</h3>
  <TimerButton colorMode='mono'>TimerButton</TimerButton>
</React.Fragment>
```
