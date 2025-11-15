document.addEventListener("DOMContentLoaded", () => {
  // Floating beans
  for (let i = 0; i < 15; i++) {
    const bean = document.createElement("div");
    bean.classList.add("bean");
    bean.style.left = Math.random() * 100 + "vw";
    bean.style.animationDuration = 10 + Math.random() * 10 + "s";
    bean.style.animationDelay = Math.random() * 5 + "s";
    document.body.appendChild(bean);
  }

  // Parallax coffee cup movement
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    const cup = document.querySelector(".coffee-cup");
    cup.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
  });
});
