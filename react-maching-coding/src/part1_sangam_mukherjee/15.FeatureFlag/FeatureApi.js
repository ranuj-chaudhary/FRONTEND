export const allowedFeatures = {
  modalPopup: true,
  customTabs: true,
  scrollIndicator: true,
  qrGenerator: true,
};
export function subscribedFeatures() {
  return new Promise((resolve, reject) => {
    resolve(allowedFeatures);
  });
}
