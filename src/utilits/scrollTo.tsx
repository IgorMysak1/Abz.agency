export const scrollTo = (elementClass: string): void => {
  const element = document.querySelector(elementClass);
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: y,
      behavior: "smooth",
    });
  }
};
