export const removeFilterSettings = (filterSettingObj) => {
  const filterSettingObjRemovedSettings = JSON.parse(JSON.stringify(filterSettingObj));
  for (let filterSetting in filterSettingObj) {
    filterSettingObjRemovedSettings[filterSetting] = ''
  }
  return filterSettingObjRemovedSettings
}
