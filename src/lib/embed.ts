const FRAME_OK = /(^|\.)(youtube\.com|youtu\.be|spotify\.com|robomart\.ai|systemarobotica\.com)$/;

export function hostAllowsFraming(url: string): boolean {
  try {
    return FRAME_OK.test(new URL(url).hostname);
  } catch {
    return false;
  }
}
