/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */

/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = async (result) => {
  try {
    const responseData = async () => {
      console.log("Download selesai");
      console.log(`Hasil Download: ${result}`);
    };

    return await responseData();
  } catch (error) {
    return console.error(error);
  }
};

/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback show
 */
const download = (callShowDownload) => {
  setTimeout(() => {
    const result = "windows-10.exe";
    callShowDownload(result);
  }, 3000);
};

download(showDownload);
