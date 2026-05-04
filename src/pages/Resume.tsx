const Resume = () => {
  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-12 max-w-[720px] mx-auto text-[12px] leading-[1.5] font-mono print:p-0 print:text-[10px]">
      <header className="mb-6">
        <h1 className="text-[18px] font-bold tracking-tight">Ali Ahmed</h1>
        <p className="text-[11px] text-neutral-500 mt-1">
          Los Angeles &middot; ali@robomart.ai &middot; roboalias.com
        </p>
      </header>

      <Section title="Now">
        <Line>Building <b>The Sentience Prize</b> — a global competition to test and award the first sentient robot.</Line>
      </Section>

      <Section title="Experience">
        <Entry left="Robomart" right="2017–present">
          Cofounder & CEO. Created the self-driving store. Built 5 generations of autonomous delivery robots (Gala → RM5). Filed the only active NHTSA petition for a driverless delivery vehicle on US public roads. 10,000+ miles, 96.4% fully autonomous, zero critical incidents. Partners include Ahold Delhaize, Unilever, Mars, NVIDIA, Yamaha Motors, Avery Dennison. Venture-backed by Hustle Fund, HAX, Capital Factory, and others.
        </Entry>
        <Entry left="Dispatch Messenger" right="UK">
          Founder & CEO. Fastest-growing on-demand delivery startup in the UK. Millions in order value within months of launch.
        </Entry>
        <Entry left="Lutebox" right="UK">
          Cofounder & CEO.
        </Entry>
      </Section>

      <Section title="Book">
        <Line>
          <b>Systema Robotica: On the Order and Evolution of Robotkind</b> (Staten House, 2024)
        </Line>
        <Line className="text-neutral-500">
          "The first serious attempt to create a systematic vocabulary around the intelligent technology rapidly taking over our world." — Michael Graziano, Professor of Psychology & Neuroscience, Princeton
        </Line>
      </Section>

      <Section title="Patents">
        <Line>US 11,227,270 — One tap/command grocery ordering via self-driving mini marts</Line>
        <Line>US 8,943,141 — Social networking system and methods of implementation</Line>
        <Line>EP 2,887,686 — Sharing content on devices with reduced user actions</Line>
        <Line>US 2022/0207505 — Sensor-based tracking of vehicle content</Line>
      </Section>

      <Section title="Publications">
        <Line>On the Order and Evolution of Robotkind — TechRxiv</Line>
        <Line>How to win in the autonomous taxi space — TechCrunch, 2017</Line>
        <Line>The On-Demand Delivery Trilemma — TechCrunch, 2023</Line>
        <Line>The On-Command Economy — Chatbots Magazine, 2017</Line>
      </Section>

      <Section title="Speaking">
        <Line>SCM Fair 2025 (keynote) · Shoptalk 2018 · Groceryshop 2019, 2021 · Petersen Automotive Museum</Line>
      </Section>

      <Section title="Press">
        <Line>Fox45 · KTLA5 · TV Tokyo · Entrepreneur Magazine · Omni Talk Retail · Shoptalk Spotlight</Line>
      </Section>

      <Section title="Recognition">
        <Line>EB1A "Genius Visa" — Alien of Extraordinary Ability green card (2019)</Line>
        <Line>UK Tech Nation Exceptional Talent visa (2015)</Line>
        <Line>Top 100 Asian Stars in UK Tech (2015)</Line>
        <Line>Futurist, Futurist Valley (2024)</Line>
      </Section>

      <Section title="Education">
        <Line>PhD (withdrawn) · MSc + MBA · Management, Computing, Design, Marketing</Line>
      </Section>

      <Section title="Investing & Mentorship">
        <Line>Angel: Robot.com · Seaflight · Airhouse (acquired) · CareRev</Line>
        <Line>Mentor: Singularity University · Founder Institute · NIC · Wayra</Line>
        <Line>Robotics expert to Wefunder</Line>
      </Section>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-4">
    <h2 className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-1">{title}</h2>
    {children}
  </section>
);

const Entry = ({ left, right, children }: { left: string; right: string; children: React.ReactNode }) => (
  <div className="mb-2">
    <div className="flex justify-between">
      <span className="font-bold">{left}</span>
      <span className="text-neutral-400">{right}</span>
    </div>
    <p className="text-neutral-600">{children}</p>
  </div>
);

const Line = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={className}>{children}</p>
);

export default Resume;
