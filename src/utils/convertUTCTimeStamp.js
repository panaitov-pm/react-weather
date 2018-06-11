export default (sec) => {
  const date = new Date(sec * 1000);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
