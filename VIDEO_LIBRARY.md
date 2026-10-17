# Video Library Management

## Current Implementation

The Videos page is now fully functional with filtering, centralized video data, and **automatic title fetching** from YouTube.

## Video Data Structure

All videos are managed in `script.js` in the `VIDEO_LIBRARY` array:

```javascript
{
    id: 'video_id',              // YouTube video ID or URL for other platforms
    title: 'Fallback Title',     // Used if automatic fetch fails
    category: 'adventure',       // Filter category: adventure, tutorial, short
    categoryLabel: 'Adventure',  // Display label for tag
    source: 'youtube',          // Platform: youtube (others can be added)
    duration: null              // Optional: 'MM:SS' format
}
```

## Automatic Title Fetching

**YouTube videos:** Titles are automatically fetched from YouTube's oEmbed API (no authentication required).
- Fetches actual video title on page load
- Falls back to `title` field if fetch fails
- Caches results to avoid repeated requests
- Updates when filters change

The `title` field serves as a fallback for:
- Network failures
- Videos that become unavailable
- Other video platforms without oEmbed support

## Adding New Videos

Edit `VIDEO_LIBRARY` in `script.js`:

```javascript
const VIDEO_LIBRARY = [
    // ... existing videos
    {
        id: 'NEW_VIDEO_ID',
        title: 'Fallback Title',  // Used if YouTube fetch fails
        category: 'tutorial',
        categoryLabel: 'Tutorial',
        source: 'youtube',
        duration: null
    }
];
```

The actual YouTube title will be fetched automatically when the page loads.

## Video Durations

**Current State:** Durations are set to `null` (hidden).

**Manual Entry** (Recommended)
Add durations in MM:SS format:
```javascript
duration: '12:45'  // Shows as 12:45 below video
```

## Adding Other Video Platforms

The structure supports multiple platforms. To add Vimeo, for example:

1. Add video with `source: 'vimeo'`:
```javascript
{
    id: '123456789',
    title: 'Vimeo Video Title',  // Will be used as-is (no auto-fetch yet)
    category: 'adventure',
    categoryLabel: 'Adventure',
    source: 'vimeo',
    duration: '5:30'
}
```

2. Update `getVideoEmbedUrl()` in script.js:
```javascript
function getVideoEmbedUrl(video) {
    if (video.source === 'youtube') {
        return `https://www.youtube.com/embed/${video.id}`;
    }
    if (video.source === 'vimeo') {
        return `https://player.vimeo.com/video/${video.id}`;
    }
    return video.id;
}
```

3. (Optional) Add Vimeo oEmbed fetching to `enrichVideoWithMetadata()`.

## Categories

Current categories:
- `adventure` → "Adventures" filter
- `tutorial` → "Tutorials" filter
- `short` → "Short Clips" filter
- `all` → Shows everything

## Features

✅ Working filter buttons (All, Adventures, Tutorials, Short Clips)
✅ **Automatic YouTube title fetching** (no API key needed)
✅ Fallback titles for offline/failed requests
✅ Title caching to improve performance
✅ Keyboard accessible (Enter/Space to activate filters)
✅ Centralized video data (no duplication)
✅ Modal video playback
✅ Responsive design
✅ Future-proof for multiple platforms
✅ Scroll reveal animations

## Testing Checklist

- [ ] Click "All" - shows all 7 videos with real YouTube titles
- [ ] Click "Adventures" - shows 1 video with correct title
- [ ] Click "Tutorials" - shows 4 videos with correct titles
- [ ] Click "Short Clips" - shows 2 videos with correct titles
- [ ] Check titles match actual YouTube videos
- [ ] Click video thumbnail - opens modal player
- [ ] Test on mobile - filters and videos work correctly
- [ ] Tab through filters - keyboard navigation works
- [ ] Test offline - fallback titles are used

## Technical Details

**Title Fetching:**
- Uses YouTube oEmbed API: `https://www.youtube.com/oembed`
- No authentication required
- Results cached in `videoTitleCache` object
- Graceful fallback to manual titles on error
