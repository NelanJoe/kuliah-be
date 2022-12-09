const download = () => {
  return new Promise((resolve, reject) => {
    const status = true;

    setTimeout(() => {
      if (status) {
        resolve("Download selesai");
      } else {
        reject("Download gagal");
      }
    }, 3000);
  });
};

download()
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
