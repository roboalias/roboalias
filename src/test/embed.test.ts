import { describe, it, expect } from "vitest";
import { hostAllowsFraming } from "@/lib/embed";

describe("hostAllowsFraming", () => {
  it("allows youtube, spotify, and owned sites", () => {
    expect(hostAllowsFraming("https://www.youtube.com/embed/abc")).toBe(true);
    expect(hostAllowsFraming("https://youtu.be/abc")).toBe(true);
    expect(hostAllowsFraming("https://open.spotify.com/embed/episode/1")).toBe(true);
    expect(hostAllowsFraming("https://robomart.ai/")).toBe(true);
    expect(hostAllowsFraming("https://www.systemarobotica.com/")).toBe(true);
  });

  it("refuses patents, press, and social hosts", () => {
    expect(hostAllowsFraming("https://patents.google.com/patent/US11227270B2")).toBe(false);
    expect(hostAllowsFraming("https://techcrunch.com/2023/02/15/the-on-demand-delivery-trilemma/")).toBe(false);
    expect(hostAllowsFraming("https://www.amazon.com/dp/B0DBHB22GM")).toBe(false);
    expect(hostAllowsFraming("https://x.com/roboalias")).toBe(false);
    expect(hostAllowsFraming("https://github.com/roboalias")).toBe(false);
    expect(hostAllowsFraming("https://www.techrxiv.org/doi/full/10.36227/techrxiv.172373477.73979469/v1")).toBe(false);
  });
});
