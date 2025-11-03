import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, ExternalLink, FileText, Briefcase, Users, Sparkles, MessageSquare, ArrowRight, Phone } from 'lucide-react';
import profileImg from './assets/profile.jpg';

// ============================================
// CONTENT CONFIGURATION - EDIT THIS SECTION
// ============================================
const SITE_CONFIG = {
  name: "Elube Ajah",
  tagline: "Writer, Storyteller & Researcher",
  bio: "I'm a writer and researcher passionate about web3, storytelling, and community growth. I began my journey in crypto back in 2019. I still remember losing 0.65 eth that year, a painful moment that later became a turning point. It taught me patience, discipline, and the importance of security and learning. Over the years, I've worked with couple of projects helping them communicate their mission in simple, relatable ways. What drives me is connection, real people behind screens, building something meaningful. Beyond web3, I'm deeply interested in personal growth, time management, and health. I believe consistency and empathy are key to sustaining success in any field. When I'm not writing or researching, I'm probably listening to music, reflecting, or helping others navigate their first steps into web3.",
  profileImage: profileImg, // IMPORTANT: Replace with your actual path
  // If you imported it like: import profileImg from './assets/profile.jpg'
  // Then use: profileImage: profileImg (without quotes)
  email: "ajahelube@gmail.com",
  phone: "+234 806 563 7825",
  twitter: "https://x.com/ajah_elube",
  
  // Brand colors extracted from his profile picture (purple/blue theme)
  brandColors: {
    primary: '#7C3AED', // Deep purple
    secondary: '#3B82F6', // Bright blue
    accent: '#EC4899', // Pink accent
    light: '#F3E8FF', // Light purple
    dark: '#5B21B6', // Dark purple
  },
  
  writings: {
      WinningThreads: [
      { content: "Lombard is redefining how Bitcoin moves onchain.", url: "https://x.com/ajah_elube/status/1979095043786051702", engagement: "4.4K likes"},
      { content: "I was astonished to be spotlighted as a BARD of the Week.", url: "https://x.com/ajah_elube/status/1979247757560098967", engagement: "22k likes", featured: true  },
       { content: "Bitget Wallet", url: "https://x.com/ajah_elube/status/1907777517357830624", engagement: "48k views"},
       { content: "Toby", url: "https://x.com/ajah_elube/status/1939050975592878205", engagement: "15k views"},
       { content: "URnetwork", url: "https://x.com/ajah_elube/status/1941461980100858335", engagement: "11k views"},
       { content: "Skillful AI", url: "https://x.com/ajah_elube/status/1928067236003996091", engagement: "7k views"},
       { content: "Hilo Token", url: "https://x.com/ajah_elube/status/1892242340896539073", engagement: "3.8k views"},
       { content: "UpRock", url: "https://x.com/ajah_elube/status/1900578005711261833?s=19", engagement: "32k views"},
       { content: "CoinW", url: "https://x.com/ajah_elube/status/1909270198302949632?s=19", engagement: "15k views"},
       { content: "AQA", url: "https://x.com/ajah_elube/status/1903476189299155391", engagement: "12k views"},
       { content: "Fantasy Fanton", url: "https://x.com/ajah_elube/status/1866000818287136864", engagement: "2.8k views"},
       { content: "Circularweb3 (PART ONE)", url: "https://x.com/ajah_elube/status/1874711794746339659", engagement: "2.1k views"},
        { content: "Aicoach Mia", url: "https://x.com/ajah_elube/status/1883529393726775622?t=t32ERtEyvTyIW_mas9xhHw&s=19", engagement: "1.8k views"},
        //  { content: "", url: "", engagement: ""},
        //   { content: "", url: "", engagement: ""},
        //    { content: "", url: "", engagement: ""},
      
    ],
    WritingForX: [
      { title: " Writing A Thread That Wins", url: "https://x.com/ajah_elube/status/1918197709930205503", date: "May 2025", featured: true },
      { title: "Ajah's $150 Win: Web3 Success Secret", url: "https://x.com/ajah_elube/status/1961474729652400616", date: "Aug 2025", featured: true },
      { title: "Breaking Through Writer's Block", url: "https://x.com/ajah_elube/status/1941378824014266593", date: "July 2025", featured: true },
      { title: " The One Reader Approach", url: "https://x.com/ajah_elube/status/1864321495385719184", date: "Dec 4 2024" },
      { title: "How to Do Research", url: "https://x.com/ajah_elube/status/1886665442837545438", date: "Feb 4 2025" },
      { title: "Understanding Your Audience", url: "https://x.com/ajah_elube/status/1876662051008823618", date: "Jan 2025" },
      { title: "Building a Strategic Presence on X", url: "https://x.com/ajah_elube/status/1853094999061385528", date: "Nov 2024" },
      { title: "How to Stand Out as a Small Account", url: "https://x.com/ajah_elube/status/1842573441787994212", date: "Oct 2024" },
      { title: "Understanding X Algorithm", url: "https://x.com/ajah_elube/status/1842229902566650310", date: "Oct 2024" },
      { title: "Avoiding Shadowban", url: "https://x.com/ajah_elube/status/1843679405039603779", date: "Oct 2024" },
      { title: "Bringing Creativity to the Blockchain", url: "https://x.com/ajah_elube/status/1850931814040551884", date: "Oct 2024" },
      { title: "Celebrate Your Wins", url: "https://x.com/ajah_elube/status/1852960549195190574", date: "Nov 2024" },
      { title: "Dear Creators", url: "https://x.com/ajah_elube/status/1870499605580013895", date: "Dec 2024" },
      { title: "Voice Block", url: "https://x.com/ajah_elube/status/1852021173199962332", date: "Oct 2024" },
      { title: "Impersonation on X", url: "https://x.com/ajah_elube/status/1852358006450893059", date: "Nov 2024" },
      // { title: "", url: "", date: "" },
    ],
    projects: [
    { title:" A Beginner’s Guide to Stonbassadors Program", url: "https://x.com/ajah_elube/status/1849478163862077878", date: "Oct 2024" ,featured: true },
    { title:"Calling All Video Creators to Shine with STONfi!", url: "https://x.com/ajah_elube/status/185450793373372876",date: "Oct 2024"  },
    { title: "Grant Program", url: "https://x.com/ajah_elube/status/1850566904739434646", date: "Oct 2024" },
    { title: "How To Write For A Project (Using STONfi As A Case Study)", url: "https://x.com/ajah_elube/status/1845855867951829026", date: "Oct 2024" },
    { title: "Grow STONfi With Stonbassadors", url: "https://x.com/ajah_elube/status/1844379550072840198", date: "Oct 2024" },
    { title: "DeFi Safety with STONfi", url: "https://x.com/ajah_elube/status/1841459474319409317", date: "Oct 2024" },
    { title: "Why You Gats Know About STON.fi", url: "https://x.com/ajah_elube/status/1832068054731112671", date: "Sept 2024" },

    ],
    collaborations: [
      { title: "Freelancing Opportunity", partner: "Loofa", url: "https://x.com/ajah_elube/status/1852732911302090814",date: "Nov 2024" },
      { title: "Guide to Joining Loofa as a Freelancer", partner: "Loofa", url: "https://x.com/ajah_elube/status/1851635493173125259",date: "Oct 2024"},
      { title: " Loofa and Freelance", partner: "Loofa", url: "https://x.com/ajah_elube/status/1849818131952267705" ,date: "Oct 2024"},
      { title: " FlipOutGG ", partner: " FlipOutGG", url: "https://x.com/ajah_elube/status/1851296393975267490" ,date: "Oct 2024"},
      { title: " From Dreams to Reality ", partner: "Brokie", url: "https://x.com/ajah_elube/status/1824403433119498704" ,date: "Aug 2024"},
      { title: " MyTONSwap", partner: "MyTONSwap", url: "https://x.com/ajah_elube/status/1828738433985978534" ,date: "Aug 2024"},
      { title: "FISH ", partner: "FISH", url: "https://x.com/ajah_elube/status/1848398821149274330" ,date: "Oct 2024"},
                // { title: " ", partner: "", url: "" ,date: ""},
      
    ],
    brandinweb3: [
      { title: "Brand in Web3 (Introduction)", url: "https://x.com/ajah_elube/status/1853460434860347428", date: "Nov 2024" },
      { title: "Practical Steps to Strengthen Your Brand ", url: "https://x.com/ajah_elube/status/1853685751201829119?" ,date: "Nov 2024"},
      { title: "Strategies For Building Trust Within Your Community ",url: "https://x.com/ajah_elube/status/1853812876848283792" ,date: "Nov 2024"},
      { title: "How to Stand Out in a Crowded Web3 Space", url: "https://x.com/ajah_elube/status/1854045915385880922" ,date: "Nov 2024"},
      { title: " Why Consistency Matters in Web3", url: "https://x.com/ajah_elube/status/1854181743491686839" ,date: "Nov 2024"},
  
    ],
    goodMorningPosts: [
      { content: "Good morning! Today's reminder: Your first draft doesn't have to be perfect.", url: "https://twitter.com/username/status/126", date: "Oct 30" },
      { content: "Good morning! Write before you doubt. Create before you criticize.", url: "https://twitter.com/username/status/127", date: "Oct 29" },
      { content: "Good morning! The blank page is not your enemy. It's your canvas.", url: "https://twitter.com/username/status/128", date: "Oct 28" },
    ],
    
  }
};

// X (Twitter) Logo Component
const XLogo = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// ============================================
// COMPONENTS
// ============================================

const Navbar = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Writings', 'Contact'];

  // Close icon component to avoid conflict with lucide-react X
  const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-purple-100' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex-shrink-0 font-bold text-xl cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent" 
            onClick={() => onNavigate('Home')}
          >
            {SITE_CONFIG.name.split(' ')[1]}
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`transition-colors hover:text-purple-600 ${activeSection === item ? 'text-purple-600 font-semibold' : 'text-gray-700'}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-purple-600">
              {isOpen ? <CloseIcon /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-purple-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => { onNavigate(item); setIsOpen(false); }}
                className={`block w-full text-left px-3 py-2 rounded-md ${activeSection === item ? 'bg-purple-50 text-purple-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ onNavigate }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className={`relative z-10 text-center max-w-4xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8 relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 rounded-full blur-2xl opacity-40 animate-pulse"></div>
          <img 
            src={SITE_CONFIG.profileImage} 
            alt={SITE_CONFIG.name}
            className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-2xl mx-auto"
          />
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 pb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
          {SITE_CONFIG.name}
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-700 mb-8 font-medium">
          {SITE_CONFIG.tagline}
        </p>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
          {SITE_CONFIG.bio}
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href={SITE_CONFIG.twitter} target="_blank" rel="noopener noreferrer" 
             className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:shadow-xl transition-all hover:scale-105">
            <XLogo size={18} />
            Follow on X
          </a>
          <a href={`mailto:${SITE_CONFIG.email}`}
             className="flex items-center gap-2 px-6 py-3 border-2 border-purple-400 text-purple-600 rounded-full hover:bg-purple-50 transition-all hover:scale-105">
            <Mail size={20} />
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

const FeaturedWritingCard = ({ item, icon: Icon, type }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`block p-6 bg-white/90 backdrop-blur-sm rounded-xl border-2 transition-all duration-300 ${hovered ? 'shadow-2xl scale-105 border-purple-400 bg-gradient-to-br from-purple-50 to-blue-50' : 'shadow-md border-purple-100/50'}`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg transition-all duration-300 ${hovered ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white scale-110' : 'bg-purple-100 text-purple-600'}`}>
          {typeof Icon === 'function' ? <Icon /> : <Icon size={24} />}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2 text-gray-800">
            {item.title || item.content?.substring(0, 60) + '...' || item.name}
          </h3>
          {item.description && <p className="text-gray-600 text-sm mb-2">{item.description}</p>}
          {item.content && <p className="text-gray-600 text-sm mb-2">{item.content}</p>}
          {item.date && <p className="text-gray-400 text-xs mt-2">{item.date}</p>}
          {item.engagement && <p className="text-purple-500 text-xs mt-2 font-medium">{item.engagement}</p>}
          <div className="flex items-center gap-1 text-purple-600 text-sm mt-3 font-medium">
            Read on X <ExternalLink size={14} />
          </div>
        </div>
      </div>
    </a>
  );
};

const RecentWritings = ({ onNavigate }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const featuredWinningThreads = SITE_CONFIG.writings.WinningThreads.filter(t => t.featured).slice(0, 3);
  const featuredProjects = SITE_CONFIG.writings.projects.filter(p => p.featured).slice(0, 2);
  const featuredPosts = SITE_CONFIG.writings.WritingForX.filter(p => p.featured).slice(0, 2);

  return (
    <div className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-purple-50 via-blue-50 to-pink-50 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      

      <div className={`relative z-10 max-w-6xl mx-auto transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-1 pb-10 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
            Proof Of Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Latest thoughts, threads, and creative work
          </p>
        </div>
        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              
               Writing For <XLogo size={28} className="text-gray-900" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.map((item, idx) => (
                <FeaturedWritingCard key={idx} item={item} icon={() => <XLogo size={24} />} type=" WritingForX" />
              ))}
            </div>
          </div>
        )}

        {featuredWinningThreads.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <MessageSquare className="text-purple-600" size={28} />
              Latest Threads
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredWinningThreads.map((item, idx) => (
                <FeaturedWritingCard key={idx} item={item} icon={MessageSquare} type="WinningThreads" />
              ))}
            </div>
          </div>
        )}

        

        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Briefcase className="text-pink-600" size={28} />
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProjects.map((item, idx) => (
                <FeaturedWritingCard key={idx} item={item} icon={Briefcase} type="projects" />
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('Writings')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105 text-lg"
          >
            View All Writings
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

const WritingCard = ({ item, icon: Icon, type }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`block p-6 bg-white/90 backdrop-blur-sm rounded-xl border-2 transition-all duration-300 ${hovered ? 'shadow-xl scale-105 border-purple-300 bg-gradient-to-br from-purple-50 to-blue-50' : 'shadow-md border-purple-100/50'}`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg ${hovered ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white' : 'bg-purple-100 text-purple-600'} transition-all duration-300`}>
          {typeof Icon === 'function' ? <Icon /> : <Icon size={24} />}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2 text-gray-800">
            {item.title || item.content?.substring(0, 60) + '...' || item.name}
          </h3>
          {item.description && <p className="text-gray-600 text-sm mb-2">{item.description}</p>}
          {item.partner && <p className="text-gray-500 text-sm">With {item.partner}</p>}
          {item.articles && <p className="text-gray-500 text-sm">{item.articles} articles published</p>}
          {item.date && <p className="text-gray-400 text-xs mt-2">{item.date}</p>}
          {item.engagement && <p className="text-purple-500 text-xs mt-2 font-medium">{item.engagement}</p>}
          <div className="flex items-center gap-1 text-purple-600 text-sm mt-3 font-medium">
            View on X <ExternalLink size={14} />
          </div>
        </div>
      </div>
    </a>
  );
};

const WritingsSection = () => {
  const [activeTab, setActiveTab] = useState('WinningThreads'); // Default open tab
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fix for iPhone scroll starting from bottom
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [activeTab]);

  const tabs = [
    {
      id: 'WinningThreads',
      label: 'Winning Threads',
      icon: FileText,
      data: SITE_CONFIG.writings.WinningThreads,
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: Briefcase,
      data: SITE_CONFIG.writings.projects,
    },
    {
      id: 'collaborations',
      label: 'Collaborations',
      icon: Users,
      data: SITE_CONFIG.writings.collaborations,
    },
    {
      id: 'brandinweb3',
      label: 'Brand in Web3',
      icon: Sparkles,
      data: SITE_CONFIG.writings.brandinweb3,
    },
    {
      id: 'goodMorningPosts',
      label: 'Good Morning Posts',
      icon: MessageSquare,
      data: SITE_CONFIG.writings.goodMorningPosts,
    },
    {
      id: 'WritingForX',
      label: 'WritingForX',
      icon: XLogo,
      data: SITE_CONFIG.writings.WritingForX,
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="relative min-h-screen px-4 py-20 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animation-delay-4000"></div>
      </div>

      <div
        className={`relative z-10 max-w-6xl mx-auto transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
          Writings & Thoughts
        </h2>
        <p className="text-center text-gray-700 mb-12 text-lg">
          Explore curated threads, projects, collaborations, and posts that reflect creativity and impact.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white border-transparent shadow-md scale-105'
                  : 'bg-white/70 text-gray-700 hover:bg-white hover:shadow-sm border-gray-200'
              }`}
            >
              {typeof tab.icon === 'function' ? <tab.icon size={18} /> : <tab.icon size={18} />}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTabData?.data && activeTabData.data.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTabData.data.map((item, idx) => (
              <WritingCard key={idx} item={item} icon={activeTabData.icon} type={activeTab} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No content available for this section yet.</p>
        )}

        {/* Read More on Notion Button */}
<div className="text-center mt-16">
  <a
    href="https://immediate-marscapone-4ca.notion.site/Proof-of-Work-Ajah-Elube-290696411a4b8018ba7dfabcfb80e65e" // 🔗 Replace this with your client’s Notion URL
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105 text-lg"
  >
    <ExternalLink size={20} />
    Read More on Notion
  </a>
</div>

      </div>
    </div>
  );
};


const Contact = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animation-delay-4000"></div>
      </div>

      <div className={`relative z-10 max-w-2xl w-full transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-center text-gray-700 mb-12 text-lg">
          Have a project in mind? Want to collaborate? I'd love to hear from you.
        </p>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 space-y-6">
          {/* Email */}
          <a 
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-4 p-6 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white rounded-xl hover:shadow-xl transition-all hover:scale-105"
          >
            <Mail size={28} />
            <div className="flex-1">
              <div className="font-semibold text-lg">Email Me</div>
              <div className="text-purple-100 text-sm break-all">{SITE_CONFIG.email}</div>
            </div>
          </a>

          {/* WhatsApp */}
          <a 
            href={`https://wa.me/${SITE_CONFIG.phone.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-green-500 text-white rounded-xl hover:shadow-xl transition-all hover:scale-105"
          >
            <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor">
              <path d="M16 .667C7.64.667.667 7.64.667 16c0 2.827.747 5.48 2.04 7.786L1.333 31l7.387-1.333A15.23 15.23 0 0016 31.333C24.36 31.333 31.333 24.36 31.333 16S24.36.667 16 .667zm0 27.2a11.86 11.86 0 01-6.04-1.627l-.427-.24-4.387.787.8-4.266-.28-.44A11.77 11.77 0 014.267 16c0-6.453 5.28-11.733 11.733-11.733 6.454 0 11.734 5.28 11.734 11.733 0 6.454-5.28 11.734-11.734 11.734zm6.48-8.4c-.36-.18-2.12-1.04-2.453-1.16-.333-.12-.573-.18-.813.18-.24.347-.933 1.16-1.146 1.4-.213.24-.427.267-.787.087-.36-.18-1.52-.56-2.893-1.787-1.067-.947-1.787-2.12-2-2.48-.213-.36-.02-.56.16-.747.16-.16.36-.427.54-.64.18-.213.24-.36.36-.6.12-.24.06-.453-.027-.64-.087-.187-.813-1.96-1.12-2.68-.293-.707-.587-.613-.813-.627-.213-.013-.453-.013-.693-.013-.24 0-.64.093-.973.453-.333.36-1.28 1.253-1.28 3.053 0 1.8 1.307 3.547 1.493 3.787.187.24 2.573 3.933 6.24 5.52.873.373 1.553.6 2.08.773.873.28 1.667.24 2.293.147.7-.107 2.12-.867 2.42-1.707.3-.84.3-1.56.213-1.707-.093-.147-.333-.24-.693-.413z"/>
            </svg>
            <div className="flex-1">
              <div className="font-semibold text-lg">Chat on WhatsApp</div>
              <div className="text-green-100 text-sm">{SITE_CONFIG.phone}</div>
            </div>
          </a>

          {/* Telegram */}
          <a 
            href="https://t.me/ajahElube"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-sky-500 text-white rounded-xl hover:shadow-xl transition-all hover:scale-105"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
              <path d="M9.99 14.04l-.39 5.51c.56 0 .8-.25 1.1-.56l2.63-2.5 5.45 3.98c1 .55 1.72.26 1.97-.93l3.58-16.84c.32-1.49-.54-2.07-1.53-1.71L1.63 9.22c-1.46.56-1.44 1.36-.26 1.72l5.56 1.73 12.9-8.12c.61-.37 1.17-.17.71.2L9.99 14.04z"/>
            </svg>
            <div className="flex-1">
              <div className="font-semibold text-lg">Message on Telegram</div>
              <div className="text-sky-100 text-sm">@ajah_elube</div>
            </div>
          </a>

          {/* Medium */}
          <a 
            href="https://medium.com/@ajahelube"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-gray-900 text-white rounded-xl hover:shadow-xl transition-all hover:scale-105"
          >
            <svg viewBox="0 0 1043.63 592.71" width="28" height="28" fill="currentColor">
              <path d="M588.67,296.35c0,163.65-131.95,296.35-294.33,296.35S0,460,0,296.35,131.95,0,294.33,0,588.67,132.7,588.67,296.35Z"/><path d="M914.4,296.35c0,153.33-65.9,277.54-147.21,277.54S620,449.68,620,296.35,685.9,18.81,767.19,18.81,914.4,143,914.4,296.35Z"/><path d="M1043.63,296.35c0,140.62-23.4,254.69-52.29,254.69S939.05,437,939.05,296.35,962.46,41.66,991.34,41.66,1043.63,155.73,1043.63,296.35Z"/>
            </svg>
            <div className="flex-1">
              <div className="font-semibold text-lg">Read on Medium</div>
              <div className="text-gray-300 text-sm">Essays & reflections</div>
            </div>
          </a>
        </div>

        <p className="text-center text-gray-600 mt-8 text-sm">
          Typically responds within 24 hours
        </p>
      </div>
    </div>
  );
};


// ============================================
// MAIN APP
// ============================================

const App = () => {
  const [activeSection, setActiveSection] = useState('Home');

  const handleNavigate = (section) => {
  setActiveSection(section);
  // Wait for DOM to update before scrolling
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 150);
};


  return (
    <div className="font-sans antialiased relative">
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      
      {activeSection === 'Home' && (
        <>
          <Hero onNavigate={handleNavigate} />
          <RecentWritings onNavigate={handleNavigate} />
        </>
      )}
      {activeSection === 'Writings' && <WritingsSection />}
      {activeSection === 'Contact' && <Contact />}

      <footer className="bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 text-white py-8 text-center">
        <p className="text-purple-200">
          © 2025 {SITE_CONFIG.name}.<p>Built By Origboge</p>
        </p>
      </footer>
    </div>
  );
};

export default App;