class Example {
  constructor() {
    this.name = "Example";
  }

  async search(query) {
    return [
      {
        title: "Test Movie",
        url: "https://example.com/movie"
      }
    ];
  }

  async getStreams(url) {
    return [
      {
        quality: "1080p",
        type: "hls",
        url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
      }
    ];
  }
}

module.exports = Example;
