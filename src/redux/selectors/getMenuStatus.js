export const getMenuStatus = (state) => {
  if (state.app) {
    return state.app.menu.isOpened;
  } else {
    return false;
  }
};
