import { projects } from "../../../data/projects";

export default function handler({ query: { name } }, res) {
  const filtered = projects.filter((project) => project.name === name);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: "Could not find project" });
  }
}
