export class CacheProxy {
  pokemons = {}

  static instance;
  constructor() {
    if(CacheProxy.instance) {
      return CacheProxy.instance
    }
    CacheProxy.instance = this

  }
  
  async getPokemon(id, getRemotePokemon, url) {
    if(!this.pokemons[id]) {
      this.pokemons[id] = await getRemotePokemon({ url })
    } 
    return this.pokemons[id]
  }
}