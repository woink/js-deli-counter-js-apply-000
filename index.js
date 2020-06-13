function takeANumber(katzDeliLine, newCustomer) {
  let i = 0;
  while (i < newCustomer.length) {
    katzDeliLine.push(newCustomer);
    return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`;
    i++;
  }
}

function nowServing(katzDeliLine) {
  let nextCustomer = '';
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    nextCustomer = katzDeliLine.shift()
    return `Currently serving ${nextCustomer}.`
  }
}

function currentLine(katzDeliLine) {
  let i = 0;
  let customers = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    while (i <= katzDeliLine.length + 1) {
      customers += `${i + 1}. ${katzDeliLine.shift()}, `
      i++;
    }
    return `The line is currently: ${customers.replace(/,\s$/, "")}`;
  }
}
