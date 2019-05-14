let _pasteComponent;

_pasteComponent = (view, page) => {
    view.load(page);
};

window.onload =  () => {
  const header = $('#header');
  const navigation = $('#navigation');

  _pasteComponent(header, "components/header.html");
  _pasteComponent(navigation, "components/navigation.html");
};

