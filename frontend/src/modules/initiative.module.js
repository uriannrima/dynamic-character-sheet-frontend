export const Initiative = function ({ dexModifier, miscModifier }) {
    return {
        dexModifier,
        miscModifier,
        getTotal: function () {
            return this.dexModifier + this.miscModifier;
        }
    }
}
