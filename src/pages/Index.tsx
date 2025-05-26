
import React, { useState } from 'react';
import TerminalHeader from '@/components/TerminalHeader';
import NavigationMenu from '@/components/NavigationMenu';
import ContentSection from '@/components/ContentSection';

const Index = () => {
  const sections = [
    'bio', 'startups', 'treatise', 'publications', 'patents', 'contributions',
    'talks', 'interviews', 'features', 'mentorship', 'awards', 'gallery', 'socials'
  ];

  const [activeSection, setActiveSection] = useState<string | null>(null);

  const contentData: Record<string, string[]> = {
    bio: [
      'Cofounder & CEO of Robomart.',
      'Author of Systema Robotica.',
      'Roboticist & inventor of the self-driving store.',
      'Robotics expert to Wefunder.',
      'Mentor and angel investor in robotics startups.',
      '',
      'PhD Dropout. Double Masters MSc + MBA.',
      'Management, Computing, Design, Marketing.'
    ],
    startups: [
      'Robomart (cofounder & CEO) - https://robomart.ai',
      'Stealth AI startup (cofounder & advisor) - Confidential',
      'Robot.com (angel investor) - https://robot.com',
      'Seaflight (angel investor) - https://www.seaflight.tech',
      'Wefunder (angel investor and robotics expert) - https://wefunder.com',
      'Airhouse (acq.) (angel investor) - https://www.airhouse.io',
      'CareRev (angel investor) - https://carerev.com'
    ],
    treatise: [
      'Systema Robotica',
      'A treatise on the order and evolution of robotkind',
      '',
      'Authored by Ali Ahmed, co-founder & CEO of Robomart, Systema Robotica',
      'serves as humanity\'s guide to a better understanding and coexistence',
      'with robots in a future of non-human superintelligences.',
      '',
      'The first edition, now available as a book on Amazon and select bookshops,',
      'follows the original scientific preprint \'On the Order and Evolution of',
      'Robotkind\' published on TechRxiv.',
      '',
      'Website: https://www.systemarobotica.com',
      'Amazon: https://www.amazon.com/dp/B0DBHB22GM',
      'Audible: https://www.audible.com/pd/Systema-Robotica-Audiobook/B0DG6XFN1V'
    ],
    publications: [
      'On the Order and Evolution of Robotkind (paper preprint in Techrxiv)',
      'https://www.techrxiv.org/doi/full/10.36227/techrxiv.172373477.73979469/v1',
      '',
      'How to win in the autonomous taxi space (article)',
      'https://techcrunch.com/2017/09/14/how-to-win-in-the-autonomous-taxi-space/',
      '',
      'The On-Demand Delivery Trilemma (article)',
      'https://techcrunch.com/2023/02/15/the-on-demand-delivery-trilemma/',
      '',
      'The On-Command Economy',
      'https://chatbotsmagazine.com/the-on-command-economy-59587161b167',
      '',
      'Crowdfunding your startup: a founder\'s perspective',
      'https://www.uktech.news/need-to-know-2/crowdfunding-your-tech-startup-founders-perspective-20140213'
    ],
    patents: [
      'One tap/command grocery ordering via self-driving mini marts',
      'and seamless checkout-free technology (granted)',
      'https://patents.google.com/patent/US11227270B2',
      '',
      'Social networking system and methods of implementation (granted)',
      'https://patents.google.com/patent/US8943141B2',
      '',
      'Sharing content on devices with reduced user actions (withdrawn)',
      'https://patents.google.com/patent/EP2887686A1',
      '',
      'Sensor-based tracking of vehicle content (abandoned)',
      'https://patents.google.com/patent/US20220207505A1'
    ],
    contributions: [
      'Votex: Open source, decentralized, transparent, and equitable protocol',
      'designed to facilitate on-chain voting on the Bitcoin network,',
      'utilizing ordinal theory.',
      '',
      'Documentation: https://docs.votex.co'
    ],
    talks: [
      'Talk at Shoptalk 2018',
      'https://youtu.be/TuzNpVBF5Ak',
      '',
      'Talk at Groceryshop 2019',
      'https://youtu.be/zPf6hL-VUcc',
      '',
      'Talk at Groceryshop 2021',
      'https://youtu.be/EtkGIv3q-Qs',
      '',
      'Talk at Petersen Automotive Museum Launch Event',
      'https://youtu.be/uDk0Mo_Yjlg'
    ],
    interviews: [
      'Interview with Fox45',
      'https://youtu.be/IFdDrxNjfGQ?si=Jb7zGM5QlqsvQe-j',
      '',
      'Interview on KTLA5',
      'https://youtu.be/uRu8bt6AQu8?si=_E2eQd5HPjyvCPbK',
      '',
      'Interview on Startup to Storefront',
      'https://youtu.be/uhFMMEzkcog?si=vOnp5FpPjVD0DAbC',
      '',
      'Interview on Machine Minds',
      'https://www.youtube.com/watch?v=7KlvGKimLFM',
      '',
      'Interview on Bend Reality',
      'https://www.youtube.com/watch?v=kEm5zk_1ZXE',
      '',
      'Interview on Kinematic Conversations',
      'https://www.youtube.com/watch?v=jULsyDkg3sQ',
      '',
      'Interview on All In with Bryan Weatherford',
      'https://www.youtube.com/watch?v=_nGPGMnZVSM',
      '',
      'Interview on Omni Talk Retail',
      'https://www.youtube.com/watch?v=r_La6xmVsI0',
      '',
      'Interview on The Tech Ranch',
      'https://www.youtube.com/watch?v=2u2oNSMAkck',
      '',
      'Interview on Everyone Funding Startups Podcast',
      'https://www.youtube.com/watch?v=tJQEL6Zgc-k',
      '',
      'Interview on VNL Austria',
      'https://youtu.be/rw160IiNHXg',
      '',
      'Interview on TV Tokyo',
      'https://youtu.be/3oOYKcPl_iE',
      '',
      'Appearance on Shoptalk Spotlight Podcast',
      'https://open.spotify.com/episode/1sQ5nnccwdA96T3dJeDxqE?si=d1469ed13f1a4ae7',
      '',
      'Appearance on The Rebound Podcast',
      'https://open.spotify.com/episode/48DzPkEtzlmnetuQzlAh71?si=4bc701269ab340a9'
    ],
    features: [
      'Feature on Entrepreneur Magazine',
      'https://www.entrepreneur.com/starting-a-business/self-driving-shops-on-wheels-are-heading-to-your/472141',
      '',
      'Feature on Business Because',
      'https://www.businessbecause.com/news/mba-entrepreneurs/2741/mba-entrepreneur-finds-pictures-tell-a-thousand-words',
      '',
      'Podcast Appearance on The Shobeir Show',
      'https://theshobeirshow.com/podcast-item/episode-29-ali-ahmed-ceo-of-robomart/',
      '',
      'Futurist at Futurist Valley',
      'https://futuristvalley.com/futurists/'
    ],
    mentorship: [
      'Lancaster University',
      'President of the L.A. Philanthropic Alumni Chapter',
      '',
      'Singularity University',
      'Startup Mentor',
      '',
      'Founder Institute',
      'Startup Mentor',
      '',
      'National Incubation Centre',
      'Startup Mentor',
      '',
      'Wayra',
      'Startup Mentor'
    ],
    awards: [
      'Alien of Extraordinary Abilities (2019)',
      'UK Tech Nation Exceptional Talent Holder (2015)',
      'Top 100 Asian Stars in UK Tech (2015)'
    ],
    gallery: [
      'Feature photos of appearances, talks, and events.',
      'High-resolution images available upon request.',
      '',
      'Professional headshots and event photography',
      'documenting key moments in robotics and entrepreneurship.'
    ],
    socials: [
      'LinkedIn: https://www.linkedin.com/in/roboticali/',
      'Twitter/X: https://x.com/robotica1i',
      'GitHub: https://github.com/robotica1i',
      '',
      'Handle: @roboticali (consistent across all platforms)',
      '',
      'For press inquiries and speaking engagements,',
      'please reach out via LinkedIn or Twitter.'
    ]
  };

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-white text-foreground p-6 md:p-12 max-w-6xl mx-auto">
      <TerminalHeader />
      <NavigationMenu 
        sections={sections}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />
      
      {activeSection && (
        <ContentSection 
          section={activeSection}
          content={contentData[activeSection] || []}
        />
      )}
      
      {!activeSection && (
        <div className="text-terminal-gray text-sm mt-12">
          Click on any section above to explore roboticali's profile...
        </div>
      )}
    </div>
  );
};

export default Index;
