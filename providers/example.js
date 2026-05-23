class Example {
  constructor() {
    this.name = "Example";

    // WEBSITE LINK
    this.baseUrl = "https://www.cineby.sc";
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
        url: "https://www.cineby.sc"
      }
    ];
  }
}

module.exports = Example;
