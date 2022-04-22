export const API_RAM = {
    URL: "https://rickandmortyapi.com/api",

    CHARACTERS : function () {
        return `${this.URL}/character`
    },

    CHARACTER_BY_ID : function (id) {
        return `${this.URL}/character/${id}`
    }
}