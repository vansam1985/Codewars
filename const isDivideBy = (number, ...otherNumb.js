const isDivideBy = (number, ...otherNumbers) =>
  otherNumbers.every(number_ => number % number_ === 0)