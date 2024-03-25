const settings = {
  pairs: ``,
  score: 1400, // check github score setting for minimum score values
};

let p = settings.pairs.split(`\n`);
for (let i = 0; i < p.length; i++) {
  p[i] = p[i].split(`\t`);
}
const c = (x, t, i) => {
  try {
    const e = document.querySelector(
      `.c15e85q3>.tqy0hun>div[aria-label="${x}"]`
    ).parentNode.parentNode.parentNode;
    if (e)
      setTimeout(() => {
        e.click();
      }, t);
    return t + i;
  } catch {
    return t;
  }
};
document
  .getElementsByClassName(
    `AssemblyButtonBase AssemblyPrimaryButton--default AssemblyButtonBase--xlarge AssemblyButtonBase--padding AssemblyButtonBase--fullWidth`
  )[0]
  .click();
let t = 0;
p.forEach((a) => {
  t = c(a[1], c(a[0], t, 49), (7 * settings.score - 1700 - 49 * 42) / 36);
});
