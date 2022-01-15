export const countScore = scores => Object.values(scores).reduce((prev, cur) => typeof cur === 'string' ? prev : prev + cur, 0)
