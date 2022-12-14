export async function sendToAPI() {
  await delay();
  const randomNumber = Math.random();

  if (randomNumber > 0.5) {
    throw new Error(
      `Error because ${randomNumber.toFixed(3)} is more than 0.5!`
    );
  }

  return `Sent because${randomNumber.toFixed(3)} is lover than 0.5!`;
}

function delay() {
  return new Promise((resolve) =>
    setTimeout(resolve, getRndInteger(500, 1000))
  );
}

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
