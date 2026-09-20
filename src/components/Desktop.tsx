import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { User, Briefcase, Lightbulb, BookOpen, BookMarked, FileText, Newspaper, Mic, Link, TerminalSquare, Music, Github } from "lucide-react";
import { useWindowManager } from "@/hooks/useWindowManager";
import { useMusicPlayer } from "@/hooks/useMusicPlayer";
import DesktopIcon from "@/components/DesktopIcon";
import ScrambleText from "@/components/ScrambleText";
import DraggableWindow from "@/components/DraggableWindow";
import Taskbar from "@/components/Taskbar";
import Terminal from "@/components/Terminal";
import ContactWindow from "@/components/ContactWindow";
import MusicPlayer from "@/components/MusicPlayer";
import GitHubWidget from "@/components/GitHubWidget";
import profilePic from "@/assets/roboalias.png";

const desktopItems = [
  {
    id: "identity",
    icon: User,
    iconName: "User",
    label: "identity",
    title: "identity",
    content: { text: "roboticist. cofounder & CEO of Robomart. inventor of the self-driving store. author of Systema Robotica." },
    size: { width: 480, height: 200 },
  },
  {
    id: "role",
    icon: Briefcase,
    iconName: "Briefcase",
    label: "role",
    title: "role",
    content: { text: "cofounder & CEO @robomart — self-driving stores on wheels, delivering everyday goods autonomously." },
    size: { width: 500, height: 220 },
  },
  {
    id: "thesis",
    icon: Lightbulb,
    iconName: "Lightbulb",
    label: "thesis",
    title: "thesis",
    content: {
      text: "the store should come to you. robomart operates a fleet of self-driving stores that drive to customers and sell on arrival. commerce at the speed of autonomy.",
    },
    size: { width: 560, height: 300 },
  },
  {
    id: "background",
    icon: BookOpen,
    iconName: "BookOpen",
    label: "background",
    title: "background",
    content: {
      text: "previously founded Dispatch and Lutebox. angel investor in robotics startups. robotics expert to Wefunder. startup mentor at Singularity University, FI, NIC, Wayra. PhD (withdrawn). MSc + MBA.",
    },
    size: { width: 540, height: 280 },
  },
  {
    id: "treatise",
    icon: BookMarked,
    iconName: "BookMarked",
    label: "treatise",
    title: "treatise",
    content: {
      text: "Systema Robotica — a treatise on the order and evolution of robotkind: humanity's guide to understanding and coexistence with robots in a future of non-human superintelligences. first edition now available in print and audio.",
      linkGroups: [
        {
          heading: "read",
          links: [
            { label: "systemarobotica.com", href: "https://www.systemarobotica.com" },
            { label: "amazon", href: "https://www.amazon.com/dp/B0DBHB22GM" },
            { label: "audible", href: "https://www.audible.com/pd/Systema-Robotica-Audiobook/B0DG6XFN1V" },
          ],
        },
      ],
    },
    size: { width: 520, height: 340 },
  },
  {
    id: "patents",
    icon: FileText,
    iconName: "FileText",
    label: "patents",
    title: "patents",
    content: {
      linkGroups: [
        {
          heading: "issued & pending",
          links: [
            { label: "one tap grocery ordering via self-driving mini marts — US11227270B2", href: "https://patents.google.com/patent/US11227270B2" },
            { label: "social networking system and methods of implementation — US8943141B2", href: "https://patents.google.com/patent/US8943141B2" },
            { label: "sharing content on devices with reduced user actions — EP2887686A1", href: "https://patents.google.com/patent/EP2887686A1" },
            { label: "sensor-based tracking of vehicle content — US20220207505A1", href: "https://patents.google.com/patent/US20220207505A1" },
          ],
        },
      ],
    },
    size: { width: 560, height: 300 },
  },
  {
    id: "press",
    icon: Newspaper,
    iconName: "Newspaper",
    label: "press",
    title: "writing & talks",
    content: {
      linkGroups: [
        {
          heading: "writing",
          links: [
            { label: "on the order and evolution of robotkind — techrxiv preprint", href: "https://www.techrxiv.org/doi/full/10.36227/techrxiv.172373477.73979469/v1" },
            { label: "how to win in the autonomous taxi space — techcrunch", href: "https://techcrunch.com/2017/09/14/how-to-win-in-the-autonomous-taxi-space/" },
            { label: "the on-demand delivery trilemma — techcrunch", href: "https://techcrunch.com/2023/02/15/the-on-demand-delivery-trilemma/" },
            { label: "the on-command economy — chatbots magazine", href: "https://chatbotsmagazine.com/the-on-command-economy-59587161b167" },
            { label: "crowdfunding your startup — uk tech news", href: "https://www.uktech.news/need-to-know-2/crowdfunding-your-tech-startup-founders-perspective-20140213" },
          ],
        },
        {
          heading: "talks",
          links: [
            { label: "keynote, 2025 scm fair", href: "https://youtu.be/QEvpDONaxUI" },
            { label: "shoptalk 2018", href: "https://youtu.be/TuzNpVBF5Ak" },
            { label: "groceryshop 2019", href: "https://youtu.be/zPf6hL-VUcc" },
            { label: "groceryshop 2021", href: "https://youtu.be/EtkGIv3q-Qs" },
            { label: "petersen automotive museum launch", href: "https://youtu.be/uDk0Mo_Yjlg" },
          ],
        },
      ],
    },
    size: { width: 560, height: 480 },
  },
  {
    id: "interviews",
    icon: Mic,
    iconName: "Mic",
    label: "interviews",
    title: "interviews",
    content: {
      linkGroups: [
        {
          heading: "tv & video",
          links: [
            { label: "fox45", href: "https://youtu.be/IFdDrxNjfGQ?si=Jb7zGM5QlqsvQe-j" },
            { label: "ktla5", href: "https://youtu.be/uRu8bt6AQu8?si=_E2eQd5HPjyvCPbK" },
            { label: "startup to storefront", href: "https://youtu.be/uhFMMEzkcog?si=vOnp5FpPjVD0DAbC" },
            { label: "machine minds", href: "https://www.youtube.com/watch?v=7KlvGKimLFM" },
            { label: "bend reality", href: "https://www.youtube.com/watch?v=kEm5zk_1ZXE" },
            { label: "kinematic conversations", href: "https://www.youtube.com/watch?v=jULsyDkg3sQ" },
            { label: "all in with bryan weatherford", href: "https://www.youtube.com/watch?v=_nGPGMnZVSM" },
            { label: "omni talk retail", href: "https://www.youtube.com/watch?v=r_La6xmVsI0" },
            { label: "the tech ranch", href: "https://www.youtube.com/watch?v=2u2oNSMAkck" },
            { label: "everyone funding startups", href: "https://www.youtube.com/watch?v=tJQEL6Zgc-k" },
            { label: "vnl austria", href: "https://youtu.be/rw160IiNHXg" },
            { label: "tv tokyo", href: "https://youtu.be/3oOYKcPl_iE" },
          ],
        },
        {
          heading: "podcasts & print",
          links: [
            { label: "shoptalk spotlight — spotify", href: "https://open.spotify.com/episode/1sQ5nnccwdA96T3dJeDxqE?si=d1469ed13f1a4ae7" },
            { label: "the rebound — spotify", href: "https://open.spotify.com/episode/48DzPkEtzlmnetuQzlAh71?si=4bc701269ab340a9" },
            { label: "the shobeir show", href: "https://theshobeirshow.com/podcast-item/episode-29-ali-ahmed-ceo-of-robomart/" },
            { label: "entrepreneur magazine", href: "https://www.entrepreneur.com/starting-a-business/self-driving-shops-on-wheels-are-heading-to-your/472141" },
          ],
        },
      ],
    },
    size: { width: 480, height: 520 },
  },
  {
    id: "links",
    icon: Link,
    iconName: "Link",
    label: "links",
    title: "links",
    content: {
      linkGroups: [
        {
          heading: "robomart",
          links: [
            { label: "robomart.ai", href: "https://robomart.ai" },
            { label: "systemarobotica.com", href: "https://www.systemarobotica.com" },
          ],
        },
        {
          heading: "personal",
          links: [
            { label: "@roboalias", href: "https://x.com/roboalias" },
            { label: "github/roboalias", href: "https://github.com/roboalias" },
            { label: "linkedin/in/roboalias", href: "https://www.linkedin.com/in/roboalias/" },
          ],
        },
      ],
    },
    size: { width: 400, height: 300 },
  },
  {
    id: "terminal",
    icon: TerminalSquare,
    iconName: "TerminalSquare",
    label: "terminal",
    title: "terminal",
    content: { terminal: true },
    size: { width: 620, height: 400 },
  },
  {
    id: "music",
    icon: Music,
    iconName: "Music",
    label: "music",
    title: "greatest hits",
    content: { music: true },
    size: { width: 380, height: 480 },
  },
  {
    id: "github",
    icon: Github,
    iconName: "Github",
    label: "github",
    title: "github",
    content: { github: true },
    size: { width: 230, height: 280 },
  },
];

const terminalCommands = [
  {
    label: "run mcafee antivirus",
    text: "⚠️ WARNING: VIRUS DETECTED — trojan.roboalias.lol — initiating system corruption...",
    speed: 15,
    action: "infect",
  },
  {
    label: "hack the mainframe",
    text: "0xDEADBEEF 0xCAFEBABE >> /sys/kernel/exploit... [brute-forcing port 443]... ssh root@mainframe... decrypting AES-256... bypassing firewall... injecting payload... 0xFF03A9 0xB00B5... ACCESS GRANTED.",
    speed: 8,
  },
  {
    label: "self-destruct",
    text: "initiating self-destruct sequence... 3... 2... 1... 💥",
    speed: 40,
    action: "self-destruct",
    followUp: "...just kidding. system intact.",
    followUpDelay: 4500,
  },
  {
    label: "sudo rm -rf /",
    text: "permission denied. nice try.",
    speed: 25,
  },
  {
    label: "make me a sandwich",
    text: "okay. one mass-produced mass-consumed mass-deleted mass-regretted sandwich, coming up. 🥪",
    speed: 20,
  },
];

interface DesktopProps {
  onSleep: () => void;
  onRestart: () => void;
}

const Desktop = ({ onSleep, onRestart }: DesktopProps) => {
  const { windows, openWindow, closeWindow, minimizeWindow, restoreWindow, focusWindow, updatePosition } =
    useWindowManager();
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [infected, setInfected] = useState(false);
  const [shaking, setShaking] = useState(false);
  const musicPlayer = useMusicPlayer(infected);


  const handleDesktopClick = useCallback(() => {
    setSelectedIcon(null);
  }, []);

  const handleTaskbarClick = useCallback(
    (id: string) => {
      const win = windows.find((w) => w.id === id);
      if (win?.minimized) {
        restoreWindow(id);
      } else {
        minimizeWindow(id);
      }
    },
    [windows, restoreWindow, minimizeWindow]
  );

  const handleLogoClick = useCallback(() => {
    openWindow("contact", "compose", { width: 440, height: 380 }, undefined, "Mail");
  }, [openWindow]);

  const handleTerminalAction = useCallback((action: string) => {
    if (action === "infect") {
      setInfected(true);
    } else if (action === "self-destruct") {
      setShaking(true);
      setTimeout(() => setShaking(false), 4000);
    }
  }, []);

  const handleWindowClose = useCallback((winId: string) => {
    if (!infected) {
      closeWindow(winId);
      return;
    }
    const roll = Math.random();
    if (roll < 0.4) {
      // Do nothing
    } else if (roll < 0.7) {
      // Open 2-4 random windows instead
      const count = 2 + Math.floor(Math.random() * 3);
      for (let i = 0; i < count; i++) {
      const pick = desktopItems[Math.floor(Math.random() * desktopItems.length)];
        openWindow(pick.id, pick.title, pick.size, undefined, pick.iconName);
      }
    } else if (roll < 0.9) {
      // Close a different random window
      const others = windows.filter((w) => w.id !== winId);
      if (others.length > 0) {
        const pick = others[Math.floor(Math.random() * others.length)];
        closeWindow(pick.id);
      }
    } else {
      closeWindow(winId);
    }
  }, [infected, closeWindow, openWindow, windows]);

  const handleIconOpen = useCallback((itemId: string, itemTitle: string, itemSize: { width: number; height: number }) => {
    // GitHub always opens at top-right
    const pos = itemId === "github" ? { x: window.innerWidth - 250, y: 16 } : undefined;

    if (!infected) {
      const itemIcon = desktopItems.find((d) => d.id === itemId)?.iconName;
      openWindow(itemId, itemTitle, itemSize, pos, itemIcon);
      return;
    }

    // Chaos mode
    const roll = Math.random();
    if (roll < 0.4) {
      const others = desktopItems.filter((d) => d.id !== itemId);
      const pick = others[Math.floor(Math.random() * others.length)];
      openWindow(pick.id, pick.title, pick.size, undefined, pick.iconName);
    } else if (roll < 0.7) {
      const count = 5 + Math.floor(Math.random() * 4);
      for (let i = 0; i < count; i++) {
        const pick = desktopItems[Math.floor(Math.random() * desktopItems.length)];
        openWindow(pick.id, pick.title, pick.size, undefined, pick.iconName);
      }
    } else if (roll < 0.9) {
      // Nothing happens
    } else {
      const itemIcon = desktopItems.find((d) => d.id === itemId)?.iconName;
      openWindow(itemId, itemTitle, itemSize, pos, itemIcon);
    }
  }, [infected, openWindow]);

  const renderWindowContent = (winId: string) => {
    if (winId === "contact") {
      return <ContactWindow />;
    }

    const item = desktopItems.find((d) => d.id === winId);
    if (!item) return null;

    if (item.content.music) {
      return <MusicPlayer player={musicPlayer} infected={infected} />;
    }
    if (item.content.github) {
      return <GitHubWidget infected={infected} />;
    }
    if (item.content.terminal) {
      return <Terminal commands={terminalCommands} embedded onAction={handleTerminalAction} />;
    }
    if (item.content.linkGroups) {
      return (
        <div className="p-5 flex flex-col gap-5">
          {item.content.text && (
            <p className="text-[15px] leading-[1.7] text-foreground"><ScrambleText text={item.content.text} infected={infected} /></p>
          )}
          {item.content.linkGroups.map((group) => (
            <div key={group.heading}>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{group.heading}</p>
              <div className="flex flex-wrap gap-3">
                {group.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-icon underline underline-offset-4 decoration-accent-icon/40 hover:decoration-accent-icon transition-colors text-[15px]"
                  >
                    <ScrambleText text={link.label} infected={infected} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className="p-5">
        <p className="text-[15px] leading-[1.7] text-foreground"><ScrambleText text={item.content.text!} infected={infected} /></p>
      </div>
    );
  };

  const nowPlaying = {
    title: musicPlayer.currentTrack.title,
    artist: musicPlayer.currentTrack.artist,
    cover: musicPlayer.currentTrack.cover,
    isPlaying: musicPlayer.isPlaying,
    onToggle: musicPlayer.toggle,
  };

  const desktopClasses = [
    "relative w-screen h-[100dvh] overflow-hidden bg-background select-none",
    infected ? "virus-infected" : "",
    shaking ? "shake-active" : "",
  ].filter(Boolean).join(" ");

  return (
    <motion.div
      className={desktopClasses}
      onClick={handleDesktopClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Wallpaper dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--foreground) / 0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Centered welcome hero */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-60 z-0">
        <div className="flex flex-col items-center gap-3">
          <img src={profilePic} alt="roboalias" className="w-20 h-20 rounded-full border border-border" />
          <h1 className="text-2xl font-medium text-foreground"><ScrambleText text="roboalias" infected={infected} /></h1>
          <p className="text-sm text-muted-foreground"><ScrambleText text="click an icon to explore." infected={infected} /></p>
        </div>
      </div>

      {/* Desktop icons */}
      <div className="absolute top-4 left-4 grid grid-cols-2 gap-2 z-10">
        {desktopItems.map((item) => (
          <DesktopIcon
            key={item.id}
            icon={item.icon}
            label={item.label}
            selected={selectedIcon === item.id}
            onSelect={() => setSelectedIcon(item.id)}
            onOpen={() => handleIconOpen(item.id, item.title, item.size)}
            infected={infected}
          />
        ))}
      </div>


      {/* Windows */}
      <AnimatePresence>
        {windows
          .filter((w) => !w.minimized)
          .map((win) => {
            const content = renderWindowContent(win.id);
            if (!content && win.id !== "contact") return null;

            return (
              <DraggableWindow
                key={win.id}
                id={win.id}
                title={win.title}
                zIndex={win.zIndex}
                position={win.position}
                size={win.size}
                onClose={() => handleWindowClose(win.id)}
                onMinimize={() => minimizeWindow(win.id)}
                onFocus={() => focusWindow(win.id)}
                onUpdatePosition={(pos) => updatePosition(win.id, pos)}
                infected={infected}
              >
                {content}
              </DraggableWindow>
            );
          })}
      </AnimatePresence>

      {/* Taskbar */}
      <Taskbar
        windows={windows}
        onClickWindow={handleTaskbarClick}
        onLogoClick={handleLogoClick}
        onSleep={onSleep}
        onRestart={onRestart}
        nowPlaying={nowPlaying}
        infected={infected}
      />
    </motion.div>
  );
};

export default Desktop;
