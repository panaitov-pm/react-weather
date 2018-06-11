export default (degree) => (temp) => (
  (degree === 'C')
    ? Math.ceil((temp - 273.15))
    : Math.ceil(((temp * 9 / 5) - 459.67))
)
