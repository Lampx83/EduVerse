export const BASE_WEIGHTS = { S: 10, E1: 25, G: 25, U: 30, E2: 10 };

export const MODULE_WEIGHTS = {
  gpp:      { S: 10, E1: 30, G: 30, U: 20, E2: 10 },
  hospital: { S: 20, E1: 20, G: 20, U: 30, E2: 10 },
  medrep:   { S: 10, E1: 15, G: 30, U: 35, E2: 10 }
};

export const STAGE_ORDER = ["S", "E1", "G", "U", "E2"];

export const STAGE_LABEL = {
  S: "Set the stage",
  E1: "Elicit info",
  G: "Give info",
  U: "Understand",
  E2: "End"
};

export const BONUS_RULES = {
  gpp:      { code: "non_drug_advice",        label: "Bonus: tư vấn dinh dưỡng/sinh hoạt (non-drug advice)", max: 5 },
  hospital: { code: "prescription_screening", label: "Bonus: phát hiện lỗi y lệnh (prescription screening)", max: 5 },
  medrep:   { code: "pharmacoecon_terms",     label: "Bonus: dùng đúng QALY / ICER / chi phí-hiệu quả",       max: 5 }
};
