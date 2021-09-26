const app = new Vue({
  el: "#app",
  data: {
    pokemon: {
      name: "bulbasaur",
      sprites: {
        front_default: "",
        front_shiny: "",
      },
      moves: [],
      abilities: [],
      types: [],
      stats: [],
    },
    actualizacion: "",
  },

  created() {
    console.log("Data received in created");
    buscar();
  },
  computed: {
    pokeFoto() {
      return this.pokemon.sprites.front_default;
    },
    pokeShiny() {
      return this.pokemon.sprites.front_shiny;
    },
    movimientos() {
      return this.pokemon.moves;
    },
    habilidades() {
      return this.pokemon.abilities;
    },
    tipos() {
      return this.pokemon.types;
    },
    estadisticas() {
      return this.pokemon.stats;
    },
  },
  methods: {
    buscar() {
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemon.name}`)
        .then((response) => response.json())
        .then((json) => (this.pokemon = json));
    },
  },
});
