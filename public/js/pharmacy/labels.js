export const TIMING_LABEL = {
  before_meal: "Trước ăn",
  after_meal: "Sau ăn",
  with_meal: "Cùng bữa ăn",
  any: "Bất kỳ thời điểm"
};

export function labelShortLine(l) {
  return `S:${l.morning} T:${l.noon} C:${l.afternoon} T:${l.evening}`;
}

export function totalPerDay(l) {
  return l.morning + l.noon + l.afternoon + l.evening;
}
