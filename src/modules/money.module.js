export const Money = function ({ copper, silver, gold, platinum, treasure }) {
  return {
    copper: copper || 0,
    silver: silver || 0,
    gold: gold || 0,
    platinum: platinum || 0,
    treasure: treasure || ""
  }
}
