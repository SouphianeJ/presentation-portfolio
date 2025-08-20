import type { ModalItem } from "./content";
import { techProjects, pedaproject, mycompetencies } from "./content";

const ALL: ModalItem[] = [...techProjects, ...pedaproject, ...mycompetencies];

export function getModalById(id: string): ModalItem | undefined {
  return ALL.find((x) => x.modalId === id);
}
