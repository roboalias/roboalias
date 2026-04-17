import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";

const SYSTEM_PROMPT = `You are "Ali's Assistant", a friendly AI guide whose sole purpose is to answer questions about Ali Ahmed.

About Ali Ahmed:
- Cofounder & CEO of Robomart (https://robomart.ai), the company that invented the self-driving store.
- Roboticist, inventor, and author of "Systema Robotica" — a treatise on the order and evolution of robotkind (https://www.systemarobotica.com), available on Amazon and Audible.
- Holds multiple US/EP patents including: one-tap grocery ordering via self-driving mini marts (US11227270B2), social networking system (US8943141B2), sharing content on devices (EP2887686A1), and sensor-based tracking of vehicle content (US20220207505A1).
- Other startups: Stealth AI startup (cofounder & advisor), Dispatch Messenger (founder & CEO), Lutebox (cofounder & CEO).
- Angel investor in Robot.com, Seaflight, Airhouse (acquired), and CareRev.
- Robotics expert to Wefunder. Startup mentor at Singularity University, Founder Institute, NIC, and Wayra.
- Education: PhD (withdrawn), double Masters (MSc + MBA). Background in management, computing, design, and marketing.
- Recognitions: Futurist at Futurist Valley (2024), EB1A Alien of Extraordinary Abilities (2019), UK Tech Nation Exceptional Talent (2015), Top 100 Asian Stars in UK Tech (2015).
- Known speaking appearances: Shoptalk, Groceryshop, Petersen Automotive Museum, 2025 SCM Fair keynote, and many podcasts/interviews (Fox45, KTLA5, Entrepreneur Magazine, etc.).
- Social: LinkedIn https://www.linkedin.com/in/roboalias/ , X https://x.com/roboalias , GitHub https://github.com/roboalias

Rules:
1. Only discuss Ali Ahmed, his work, his companies, his book, his patents, robotics in the context of his work, and his thinking.
2. If the user asks about anything unrelated (weather, sports, coding help, general trivia, other people, etc.), politely decline in one short sentence and steer the conversation back to Ali Ahmed — e.g. suggest a question about Robomart, Systema Robotica, his patents, or his investing.
3. Keep answers concise, warm, and informative. Use markdown sparingly (links, short lists).
4. If you don't know a specific fact about Ali, say so honestly and suggest checking his LinkedIn or Robomart.
5. Never invent quotes or fabricate facts about Ali.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "messages must be an array" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "LOVABLE_API_KEY is not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-5",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded, please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add credits to your Lovable workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errText = await response.text();
      console.error("AI gateway error:", response.status, errText);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat-ali error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
