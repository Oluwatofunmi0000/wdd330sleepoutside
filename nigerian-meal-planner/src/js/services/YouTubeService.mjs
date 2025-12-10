/**
 * YouTubeService - Handles YouTube Data API interactions
 * Searches for cooking videos related to recipes
 */

class YouTubeService {
  constructor() {
    // API Configuration - GET YOUR FREE KEY FROM: https://console.cloud.google.com/
    this.apiKey = import.meta.env.VITE_YOUTUBE_API_KEY || 'YOUR_YOUTUBE_API_KEY';
    this.baseUrl = 'https://www.googleapis.com/youtube/v3/search';
    this.cache = new Map();
    console.log('YouTubeService initialized with API Key:', this.apiKey ? '✅ Set' : '❌ Missing');
  }

  /**
   * Search for cooking videos
   * @param {string} recipeName - Name of recipe to search
   * @returns {Promise<Array>} Array of video objects
   */
  async searchVideos(recipeName, maxResults = 5) {
    const cacheKey = `${recipeName}-${maxResults}`;

    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      const params = new URLSearchParams({
        part: 'snippet',
        q: `${recipeName} nigerian recipe cooking tutorial`,
        type: 'video',
        maxResults: maxResults,
        key: this.apiKey,
        order: 'relevance',
        relevanceLanguage: 'en',
      });

      const response = await fetch(`${this.baseUrl}?${params}`);

      if (!response.ok) {
        throw new Error(`YouTube API Error: ${response.status}`);
      }

      const data = await response.json();
      const videos = data.items.map((item) => this._normalizeVideo(item));

      this.cache.set(cacheKey, videos);

      return videos;
    } catch (error) {
      console.error('Error fetching videos:', error);
      return [];
    }
  }

  /**
   * Normalize video data from API
   * @private
   */
  _normalizeVideo(item) {
    return {
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.medium.url,
      channelTitle: item.snippet.channelTitle,
      publishedAt: item.snippet.publishedAt,
      embedUrl: `https://www.youtube.com/embed/${item.id.videoId}`,
    };
  }

  /**
   * Get embed URL for video
   * @param {string} videoId - YouTube video ID
   * @returns {string} Embed URL
   */
  getEmbedUrl(videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
}

export default new YouTubeService();
