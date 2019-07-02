function isInSight(el) {
  const bound = el.getBoundingClientRect();
  const clientHeight = window.innerHeight;
  return bound.top <= clientHeight + 100;
}

let index = 0;
function checkImgs() {
  const imgs = document.querySelectorAll(".my-pic");
  for (let i = index; i < imgs.length; i++) {
    if (isInSight(imgs[i])) {
      loadImg(imgs[i]);
      index = i;
    }
  }
}

function loadImg(el) {
  if (!el.src) {
    const source = el.dataset.src;
    el.src = source;
  }
}

function throttle(fn, mustRun = 500) {
  const timer = null;
  let previous = null;
  return function() {
    const now = new Date();
    const context = this;
    const args = arguments;
    if (!previous) {
      previous = now;
    }
    const remaining = now - previous;
    if (mustRun && remaining >= mustRun) {
      fn.apply(context, args);
      previous = now;
    }
  };
}
