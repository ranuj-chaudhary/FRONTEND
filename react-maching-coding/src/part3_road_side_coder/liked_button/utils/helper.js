export function fetchData(req) {
  const { status } = req;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === "liked") {
        resolve({ message: true });
      } else {
        reject({ message: false });
      }
    }, 300);
  });
}
