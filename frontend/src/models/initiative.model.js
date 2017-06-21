export default function initiative({ dexModifier, miscModifier }) {
    return {
        dexModifier,
        miscModifier,
        getTotal: function () {
            return this.dexModifier + this.miscModifier;
        }
    }
}