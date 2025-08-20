/**
IMPORTANT — Tu peux coller tes objets EXACTS ici sans les modifier.

Ils seront affichés tels quels dans les modals (dangerouslySetInnerHTML).
*/

export type ModalItem = {
  modalId: string;
  title: string;
  text: string;
  modalTitle?: string;
  modalContent: string; // HTML
};

export const techProjects: ModalItem[] = [
  // ⬇︎ EXEMPLE MINIMAL — remplace par tes items (pdfExcelModal, amcModal, erpEnrollmentModal, resamatModal)
  // { modalId: "erpEnrollmentModal", title: "Création d’un ERP…", text: "…", modalTitle: "…", modalContent: …HTML… },
];

export const pedaproject: ModalItem[] = [
  // itProjectProgramModal, storylineModal, spocsModal, MoodleModal, videoHycare
];

export const mycompetencies: ModalItem[] = [
  // needsanalisys, establishprocess
];

export const GROUPS = {
  tech: [techProjects],
  pedago: [pedaproject, mycompetencies],
  proj: [techProjects], // ou autre combinaison
};
