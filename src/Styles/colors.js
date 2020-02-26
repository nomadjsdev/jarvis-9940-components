const colors = {
  white: '#FCFCFC',
  black: '#393939',
  grey: '#898989',
  seagreen: '#2E8B57',
  brightgreen: '#00FFCD',
  burntorange: '#BE5504',
  darkburntorange: '#964000',
  dustyblue: '#5A86AD',
  lightdustyblue: '#6699CC',
  darkpink: '#DF5286',
  yellow: '#DAA520',
  lighteryellow: '#EEE8AA',
  lawngreen: '#7EC850',
  palepink: '#FAA8BB'
}

export default {
  darkBorder: colors.black,
  darkText: colors.black,
  default: {
    off: { bg: colors.white, text: colors.black },
    deut: { bg: colors.white, text: colors.black },
    prot: { bg: colors.white, text: colors.black },
    tri: { bg: colors.white, text: colors.black },
    mono: { bg: colors.white, text: colors.black }
  },
  active: {
    off: { bg: colors.burntorange, text: colors.white },
    deut: { bg: colors.burntorange, text: colors.white },
    prot: { bg: colors.burntorange, text: colors.white },
    tri: { bg: colors.darkburntorange, text: colors.white },
    mono: { bg: colors.black, text: colors.white }
  },
  message: {
    off: { bg: colors.yellow, text: colors.white },
    deut: { bg: colors.lawngreen, text: colors.white },
    prot: { bg: colors.lighteryellow, text: colors.black },
    tri: { bg: colors.palepink, text: colors.white },
    mono: { bg: colors.black, text: colors.white }
  },
  timer: {
    off: { bg: colors.seagreen, text: colors.white },
    deut: { bg: colors.seagreen, text: colors.white },
    prot: { bg: colors.seagreen, text: colors.white },
    tri: { bg: colors.brightgreen, text: colors.black },
    mono: { bg: colors.black, text: colors.white }
  },
  reset: {
    off: { bg: colors.dustyblue, text: colors.white },
    deut: { bg: colors.darkpink, text: colors.white },
    prot: { bg: colors.dustyblue, text: colors.white },
    tri: { bg: colors.lightdustyblue, text: colors.white },
    mono: { bg: colors.grey, text: colors.white }
  }
}
