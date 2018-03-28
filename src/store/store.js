import CharacterModule, { CharacterSyncing } from './CharacterModule';
import AuthModule from './AuthModule';
import syncingPlugin from './plugins/syncing.plugin';


export default {
  plugins: [syncingPlugin([new CharacterSyncing()])],
  modules: { CharacterModule, AuthModule }
}
