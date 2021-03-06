import Base from './Base'
import Artist from './Artist'
import Track from './Track'

export default Base.extend({
  tableName: 'albums',

  artists() {
    return this.belongsToMany(Artist)
  },

  tracks() {
    return this.hasMany(Track)
  },
})
