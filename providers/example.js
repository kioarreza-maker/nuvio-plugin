class Example {
  constructor() {
    this.name = "Example";

    // WEBSITE LINK
    this.baseUrl = "https://en.yts-official.org/?quality=2160p";
  }

  async search(query) {
    return [
      {
        title: query,
        url: this.baseUrl
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
