export const CarryCapacity = function ({ lightLoad, mediumLoad, heavyLoad, liftOverHead, liftOffGround, pushOrDrag }) {
    return {
        lightLoad: lightLoad || 0,
        mediumLoad: mediumLoad || 0,
        heavyLoad: heavyLoad || 0,
        liftOverHead: liftOverHead || 0,
        liftOffGround: liftOffGround || 0,
        pushOrDrag: pushOrDrag || 0
    }
}
