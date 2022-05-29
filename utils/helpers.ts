export default {
  /* Gets video path by name */
  getVideo(fileName: string) {
    return require("@/assets/videos/" + fileName);
  },
  /* Gets image path ny file name */
  getImgUrl(fileName: string, subFolder = "") {
    return require(`@/assets/img${subFolder}/${fileName}`);
  },
};
