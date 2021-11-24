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

    radioFunction = (genres) => this.axiosApp.get(`/radio/${genres}`)

    getTrackById = (id) => this.axiosApp.get(`/track/${id}`)

    radioTracks = (genreId) => this.axiosApp.get(`/radio/${genreId}/tracks`)
   
    radioGenre = (genreId) => this.axiosApp.get(`/radio/${genreId}`)

    getAlbum = (id) => this.axiosApp.get(`/album/${id}`)
}

module.exports = ("APIHandler", APIHandler)