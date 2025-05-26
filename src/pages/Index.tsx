import React, { useState } from 'react';
import TerminalHeader from '@/components/TerminalHeader';
import NavigationMenu from '@/components/NavigationMenu';
import ContentSection from '@/components/ContentSection';

const Index = () => {
  const sections = [
    'bio', 'startups', 'publications',
    'speaking', 'interviews', 'awards', 'gallery', 'contact'
  ];

  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState<boolean>(true);

  const contentData: Record<string, string[]> = {
    bio: [
      'Cofounder & CEO of Robomart.',
      'Roboticist & inventor of the self-driving store.',
      'Author of Systema Robotica.',
      'Robotics expert to Wefunder.',
      'Angel investor in robotics startups.',
      'Startup mentor at Singularity University, FI, NIC, Wayra.',
      '',
      'PhD Dropout. Double Masters MSc + MBA.',
      'Management, Computing, Design, Marketing.'
    ],
    startups: [
      'Founded',
      '',
      'Robomart (cofounder & CEO)',
      'https://robomart.ai',
      'Stealth AI startup (cofounder & advisor)',
      'Dispatch Messenger (founder & CEO)',
      'https://www.f6s.com/company/askdispatch#about',
      'Lutebox (cofounder & CEO)',
      'https://www.f6s.com/company/lutebox#about',
      '',
      'Backed',
      '',
      'Robot.com (angel investor)',
      'https://robot.com',
      'Seaflight (angel investor)',
      'https://www.seaflight.tech',
      'Airhouse (acq.) (angel investor)',
      'https://www.airhouse.io',
      'CareRev (angel investor)',
      'https://carerev.com'
    ],
    publications: [
      'Treatise',
      '',
      'Systema Robotica',
      'A treatise on the order and evolution of robotkind',
      '',
      'Authored by Ali Ahmed, co-founder & CEO of Robomart, Systema Robotica',
      'serves as humanity\'s guide to a better understanding and coexistence',
      'with robots in a future of non-human superintelligences.',
      '',
      'The first edition, now available as a book on Amazon and select bookstores,',
      'follows the original scientific preprint \'On the Order and Evolution of',
      'Robotkind\' published on TechRxiv.',
      '',
      'Website',
      'https://www.systemarobotica.com',
      'Amazon',
      'https://www.amazon.com/dp/B0DBHB22GM',
      'Audible',
      'https://www.audible.com/pd/Systema-Robotica-Audiobook/B0DG6XFN1V',
      '',
      'Preprints',
      '',
      'On the Order and Evolution of Robotkind',
      'https://www.techrxiv.org/doi/full/10.36227/techrxiv.172373477.73979469/v1',
      '',
      'Patents',
      '',
      'One tap/command grocery ordering via self-driving mini marts (granted)',
      'https://patents.google.com/patent/US11227270B2',
      'Social networking system and methods of implementation (granted)',
      'https://patents.google.com/patent/US8943141B2',
      'Sharing content on devices with reduced user actions (withdrawn)',
      'https://patents.google.com/patent/EP2887686A1',
      'Sensor-based tracking of vehicle content (abandoned)',
      'https://patents.google.com/patent/US20220207505A1',
      '',
      'Articles',
      '',
      'How to win in the autonomous taxi space',
      'https://techcrunch.com/2017/09/14/how-to-win-in-the-autonomous-taxi-space/',
      'The On-Demand Delivery Trilemma',
      'https://techcrunch.com/2023/02/15/the-on-demand-delivery-trilemma/',
      'The On-Command Economy',
      'https://chatbotsmagazine.com/the-on-command-economy-59587161b167',
      'Crowdfunding your startup: a founder\'s perspective',
      'https://www.uktech.news/need-to-know-2/crowdfunding-your-tech-startup-founders-perspective-20140213'
    ],
    speaking: [
      'Shoptalk 2018',
      'https://youtu.be/TuzNpVBF5Ak',
      'Groceryshop 2019',
      'https://youtu.be/zPf6hL-VUcc',
      'Groceryshop 2021',
      'https://youtu.be/EtkGIv3q-Qs',
      'Petersen Automotive Museum Launch Event',
      'https://youtu.be/uDk0Mo_Yjlg'
    ],
    interviews: [
      'Fox45',
      'https://youtu.be/IFdDrxNjfGQ?si=Jb7zGM5QlqsvQe-j',
      'KTLA5',
      'https://youtu.be/uRu8bt6AQu8?si=_E2eQd5HPjyvCPbK',
      'Startup to Storefront',
      'https://youtu.be/uhFMMEzkcog?si=vOnp5FpPjVD0DAbC',
      'Machine Minds',
      'https://www.youtube.com/watch?v=7KlvGKimLFM',
      'Bend Reality',
      'https://www.youtube.com/watch?v=kEm5zk_1ZXE',
      'Kinematic Conversations',
      'https://www.youtube.com/watch?v=jULsyDkg3sQ',
      'All In with Bryan Weatherford',
      'https://www.youtube.com/watch?v=_nGPGMnZVSM',
      'Omni Talk Retail',
      'https://www.youtube.com/watch?v=r_La6xmVsI0',
      'The Tech Ranch',
      'https://www.youtube.com/watch?v=2u2oNSMAkck',
      'Everyone Funding Startups Podcast',
      'https://www.youtube.com/watch?v=tJQEL6Zgc-k',
      'VNL Austria',
      'https://youtu.be/rw160IiNHXg',
      'TV Tokyo',
      'https://youtu.be/3oOYKcPl_iE',
      'Shoptalk Spotlight Podcast',
      'https://open.spotify.com/episode/1sQ5nnccwdA96T3dJeDxqE?si=d1469ed13f1a4ae7',
      'The Rebound Podcast',
      'https://open.spotify.com/episode/48DzPkEtzlmnetuQzlAh71?si=4bc701269ab340a9',
      'The Shobeir Show Podcast',
      'https://theshobeirshow.com/podcast-item/episode-29-ali-ahmed-ceo-of-robomart/',
      'Entrepreneur Magazine',
      'https://www.entrepreneur.com/starting-a-business/self-driving-shops-on-wheels-are-heading-to-your/472141',
      'Business Because',
      'https://www.businessbecause.com/news/mba-entrepreneurs/2741/mba-entrepreneur-finds-pictures-tell-a-thousand-words'
    ],
    awards: [
      'EB1A Alien of Extraordinary Abilities (2019)',
      'https://en.wikipedia.org/wiki/Alien_of_extraordinary_ability',
      'UK Tech Nation Exceptional Talent (2015)',
      'https://www.gov.uk/global-talent-digital-technology/eligibility',
      'Top 100 Asian Stars in UK Tech (2015)',
      'https://asiansintech.com/top-100-asian-stars-uk-tech-2015/',
      'Futurist Valley',
      'https://futuristvalley.com/futurists/'
    ],
    gallery: [
      'Feature photos of appearances, talks, and events.',
      'High-resolution images available upon request.',
      '',
      'Professional headshots and event photography',
      'documenting key moments in robotics and entrepreneurship.'
    ],
    contact: [
      'LinkedIn: https://www.linkedin.com/in/roboticali/',
      'X: https://x.com/robotica1i',
      'GitHub: https://github.com/robotica1i',
      '',
      'For press inquiries and speaking engagements,',
      'please reach out via LinkedIn or X.'
    ]
  };

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    setShowMenu(false);
  };

  const handleTerminalClick = () => {
    setActiveSection(null);
    setShowMenu(true);
  };

  return (
    <div className="min-h-screen bg-white text-foreground p-6 md:p-12 max-w-6xl mx-auto">
      <div onClick={handleTerminalClick} className="cursor-pointer">
        <TerminalHeader activeSection={activeSection} />
      </div>
      
      <NavigationMenu 
        sections={sections}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
        isVisible={showMenu}
      />
      
      {activeSection && (
        <ContentSection 
          section={activeSection}
          content={contentData[activeSection] || []}
        />
      )}
    </div>
  );
};

export default Index;
