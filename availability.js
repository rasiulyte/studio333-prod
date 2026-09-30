/* Static original availability for Studio 333.
 * Numbers match assets/art-NN.jpg. Edit this list when stock changes.
 * Jonathan / Rasa Notes list (2026-09-13): 5,12,14,15,18,22,23,25,26,27,28.
 * 2026-09-30: Rasa confirmed 35 (Eye of the Storm) and 36 (Silver Tide) originals are available.
 * Everything else: original sold (giclée still available).
 */
(function (global) {
  const ORIGINAL_AVAILABLE = new Set([
    5, 12, 14, 15, 18, 22, 23, 25, 26, 27, 28, 35, 36
  ]);

  const titleToNum = {};

  const register = (title, artNum) => {
    if (!title || !artNum) return;
    titleToNum[String(title).trim().toLowerCase()] = Number(artNum);
  };

  const numFromFilename = (filename) => {
    if (!filename) return null;
    const m = String(filename).match(/art-(\d+)/i);
    return m ? Number(m[1]) : null;
  };

  const isOriginalAvailable = (work) => {
    if (!work) return false;
    let n = null;
    if (work.filename) n = numFromFilename(work.filename);
    if (n == null && work.src) n = numFromFilename(work.src);
    if (n == null && work.title) n = titleToNum[String(work.title).trim().toLowerCase()];
    if (n == null && typeof work === 'string') n = titleToNum[work.trim().toLowerCase()];
    return n != null && ORIGINAL_AVAILABLE.has(n);
  };

  global.Studio333Availability = {
    ORIGINAL_AVAILABLE,
    register,
    numFromFilename,
    isOriginalAvailable
  };
})(window);
