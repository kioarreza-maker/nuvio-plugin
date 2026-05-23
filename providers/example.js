class Example {
  constructor() {
    this.name = "Example";

    // WEBSITE LINK
    this.baseUrl = "https://www.pornhub.com/gay";
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
        url: "https://www.pornhub.com/gay"
      }
    ];
  }
}

module.exports = Example;
