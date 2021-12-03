const addOptionalZeroToMinutes = ({ date }) => {
  const minutes = date.getMinutes()
  return minutes < 10 ? `${minutes}0` : minutes
}

export default addOptionalZeroToMinutes
