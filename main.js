let _pasteComponent;

_pasteComponent = (view, page) => {
    view.load(page);
};

$(window).ready(() => {
  let header = $('#header');
  let navigation = $('#navigation');

  _pasteComponent(header, "components/header.html");
  _pasteComponent(navigation, "components/navigation.html");
});

