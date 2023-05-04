export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const yearsOfExperience = `${new Date().getFullYear() - 2020}+`;
