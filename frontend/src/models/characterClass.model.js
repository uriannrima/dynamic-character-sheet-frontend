export default function characterClass({ name, level, updateFn }) {
    return {
        name,
        level,
        update: updateFn || function (character) {
            return;
        }
    }
}