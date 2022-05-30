/* Gets video path by name */
export function getVideo(fileName: string) {
  return require("@/assets/videos/" + fileName);
}

/* Gets image path ny file name */
export function getImgUrl(fileName: string, subFolder = "") {
  return require(`@/assets/img${subFolder}/${fileName}`);
}
