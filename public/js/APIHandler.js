const axios = require("axios")


class APIHandler {
    constructor () {
      this.axiosApp = axios.create({
        baseURL: 'https://api.deezer.com'
      })
    }

    searchByArtist = (artist) => this.axiosApp.get(`/search?q=${artist}`)

    searchByTrack = (track) => this.axiosApp.get(`/search/track?q=${track}`)

    getAlbumTracks = (id) => this.axiosApp.get(`/album/${id})`)
    /* getAlbumTracks = (id) => this.axiosApp.get(`/album/${id})/tracks`) */
}

module.exports = ("APIHandler", APIHandler)