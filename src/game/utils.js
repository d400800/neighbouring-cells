export default class Utils {
    static getRandomItem(items) {
        return items[Math.floor(Math.random() * items.length)];
    }
}