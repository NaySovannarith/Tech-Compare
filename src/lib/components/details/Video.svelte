<script lang="ts">
    import { products } from '$lib/data';
  
    const videoUrl = products[0].videoUrl;
    function getYouTubeID(url: string) {
      const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
      return match ? match[1] : null;
    }
    const videoId = getYouTubeID(videoUrl);
    const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
</script>
  
<div class="video-review-wrapper">
    <div class="video-review-header">Video Review</div>
  
    {#if thumbnailUrl}
        <div class="video-thumbnail" on:click={() => window.open(videoUrl, '_blank')}>
            <img src={thumbnailUrl} alt="Video Thumbnail" />
            <div class="overlay"></div>
            <div class="play-button">
                <svg width="70" height="70" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z"></path>
                </svg>
            </div>
        </div>
    {/if}
</div>
  
<style>
    .video-review-wrapper {
      width: 1000px;
      margin-top: 60px;
      margin-bottom: 60px;
      background: white;
      border-radius: 5px;
      overflow: hidden;
      font-family: 'Poppins', sans-serif;
      border: 1px solid #ccc;
    }
  
    .video-review-header {
      height: 80px;
      background: #194640;
      color: white;
      font-size: 36px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #ccc;
    }
  
    .video-thumbnail {
      position: relative;
      cursor: pointer;
    }
  
    .video-thumbnail img {
      width: 100%;
      height: auto;
      display: block;
    }
  
    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.3); /* darker overlay */
    }
  
    .play-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(255, 255, 255, 0.7);
      border-radius: 50%;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s, background 0.3s;
      backdrop-filter: blur(4px);
    }
  
    .play-button:hover {
      background: rgba(255, 255, 255, 0.9);
      transform: translate(-50%, -50%) scale(1.1);
    }
  
    .play-button svg {
      width: 40px;
      height: 40px;
      fill: #194640;
    }
</style>