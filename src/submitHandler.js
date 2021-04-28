const submitHandler = (function () {
  return function (event) {
    event.preventDefault();
    console.log(event);
  }
})();

export default submitHandler;