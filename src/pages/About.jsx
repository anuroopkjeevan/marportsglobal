import React, { useMemo, useState } from 'react';
import { Building2, ShieldCheck, Search, User, FileText, X } from 'lucide-react';

import promo from '../assets/jayakumar.png';
import joeImg from '../assets/advisory.png';
import sankImg from '../assets/vivekseth.png';
import jamilImg from '../assets/mrjamil.jpeg';
import raviImg from '../assets/ravimehothra.jpeg';
import rajesh from '../assets/Rajesh Photo.jpg.jpeg';
import shibu from '../assets/cdrshibu.jpeg';

const boardMembers = [
  {
    name: 'Dr. Jayakumar',
    title: 'Honorary Chairman | Marports Global Conference & Awards',
    description:
      "Dr. Jayakumar: Pioneering Leader in India's Maritime Infrastructure\n\nDr. Jayakumar's landmark achievement is spearheading the Vizhinjam International Seaportâ€”the nation's first deep-water container transshipment hub near Thiruvananthapuram. As Founder CEO and Managing Director of Vizhinjam International Seaport Limited, he drove its conceptualization, planning, design, structuring, and execution, culminating in its commissioning in 2024. This strategic asset harnesses its strategic location and natural 20+ meter depths to cut India's reliance on foreign transshipment hubs, boosting maritime trade and economic growth.\nHis journey with Vizhinjam began in 2001 as Special Private Secretary to Kerala's Minister for Ports, building on prior expertise as Technical Adviser of Westport Malaysia in the development of transshipment and bulk terminals; and part of Malaysian port delegations to India, Myanmar, and Cambodia.\nA top-ranking Civil Engineering graduate from College of Engineering Thiruvananthapuram, Dr Jayakumar earned an MTech and PhD in Ocean Engineering from IIT Madras. Early in his career (1988â€“1994), as project head of IIT Madras's Wave Energy Group, he led the design, construction, and installation of India's pilot wave power plant off Vizhinjamâ€”sponsored by the Government of Indiaâ€”to harness electricity from ocean waves.\nHe served as the CEO of Pondicherry Port and Special Economic Zone during 2007 to 2016 and also held positions of Managing Director of Kerala State Maritime Development Cooperative Limited and Member of the Kerala Maritime Board.\nDr. Jayakumar was selected and trained by the U.S. Department of Commerce's Special American Business Internship Program in Port Development for Asian experts, held in Washington, DC.\nA prolific author of technical papers and committee member at state/national levels, he has earned awards like 'Outstanding Engineering Personality' from the Institution of Engineers (India) â€“ Kerala, and a 2024 Dual Doctorate from the European International University (Paris) and AIMRI (UAE) for his maritime contributions.\nToday, Dr. Jayakumar serves as the Principal Advisor at ULCCS, the world's largest cooperative, on infrastructure projects.",
    imageSrc: promo,
  },
  {
    name: 'Dr. Ravi Kumar Mehrotra CBE',
    title: 'Founder, Promoter & Executive Chairman â€“ Foresight Group',
    description:
      "Dr. Ravi Kumar Mehrotra CBE is the Founder and Executive Chairman of the Foresight Group (Foresight Global Pte. Ltd., Singapore). A marine engineer by profession, he began his career in 1964 with the Shipping Corporation of India, rising to the rank of Chief Engineer. He was later seconded as Managing Director for the companyâ€™s international joint ventures, where he developed the global relationships that enabled him to establish the Foresight Group in 1984.\n\nOver the decades, he has carefully guided the Group into diversified sectors including drilling, shipping, ports, gas infrastructure, retail, hospitality, and not-for-profit maritime training. His leadership philosophy is rooted in long-term sustainability, with a vision for the Group to celebrate its centenary in 2084 with strong financial health and continued relevance to society.\n\nDr. Ravi received the Honorary Commander of the Order of the British Empire (CBE) from Her Majesty Queen Elizabeth II. He serves as Chairman of the European India Chamber of Commerce (EICC), headquartered in Brussels, and has held several prestigious honorary positions, including Director of the Commonwealth Business Council.\n\nHe has served as a board member of Lloydâ€™s Register and is a recipient of the Lloydâ€™s List and Seatrade Lifetime Achievement Award for his contribution to the offshore and maritime industry. He has also been conferred an Honorary Industrial Doctorate from Aries International Maritime Research Institute (Dubai, UAE) and, in 2021, received the Doctor of Science (Honoris Causa) from Royal Holloway, University of London.\n\nDr. Ravi holds the Freedom of the City of London and continues to serve as visiting faculty at the Cambridge Academy of Transport. A noted international speaker, entrepreneur, and philanthropist, he remains actively engaged in advancing global maritime and business leadership.",
    imageSrc: raviImg,
  },
  {
    name: 'Mr. Rajesh Menon',
    title: 'Associate Director (SME–Maritime) | Department of Promotion of Industry and Internal Trade | Ministry of Commerce & Industry | Government of India',
    description:
      'Rajesh Menon is a senior technocrat and maritime policy expert with nearly three decades of experience in infrastructure development, including over twenty years across ports, shipping, logistics, and multimodal transportation. His career uniquely spans government, large corporate groups, and academia, giving him a rare ability to bridge policy intent with commercial execution.\n\nHe has held senior leadership roles within the Government of India, contributing to national initiatives such as PM GatiShakti, Sagarmala, the National Logistics Policy, and the Indian Ports legislative framework. As a maritime subject-matter expert, he has evaluated and advised on complex infrastructure projects, developed integrated port connectivity and logistics strategies, and supported evidence-based policymaking at the highest levels of government.\n\nIn the private sector, Rajesh spent over a decade with the Adani Group and led strategic business development initiatives at major ports, managing large teams, negotiating high-value projects, and engaging closely with regulators, investors, and CXO leadership. Earlier, at the National Institute of Design, he helped establish commercially viable consultancy and training verticals, strengthening industryâ€“academia collaboration.\n\nBeyond executive roles, Rajesh is an active consultant, author, and visiting faculty member at premier institutions. He is a recognized public voice on maritime policy, logistics reform, sustainability, and infrastructure governance, known for translating complex technical issues into actionable policy and strategic insight.',
    imageSrc: rajesh,
  },
  {
    name: 'Cdr RR Shibu (Retd)',
    title: 'Managing Director | Navsys Marine Technologies Pvt Ltd',
    description:
      'Commander R R Shibu (Retd.) is a maritime industry leader, technology entrepreneur, and former Indian Naval officer with over two decades of experience spanning defence engineering, shipbuilding, advanced manufacturing, and digital transformation. He is an alumni of Indian Institute of Technology (IIT) Delhi.\n\nDuring his distinguished service in the Indian Navy, he held multiple appointments including those abroad. He played a key role in complex warship design and build programmes as well as indigenisation of warship building steels. He was also an advisor to the Kerala Startup Mission.\n\nFollowing his naval career, he transitioned into entrepreneur and build multiple companies. He is cofounder and Managing Director of Navsys Marine Technologies Pvt. Ltd., a Hyderabad-based marine and defence engineering company focused on indigenous design, development, and manufacturing of mission-critical naval systems and marine hardware. Under his leadership, Navsys has built advanced capabilities in composites, CNC machining, robotic welding, and simulation-driven product development, contributing to resilient maritime and defence supply chains.\n\nHe also serves as a Managing Director at Hatch Marine Consultants Pvt Ltd, bringing strategic advisory and technical consulting expertise to marine projects. In addition to his marine leadership, Commander Shibu has also established HAS Technology solutions a leading IT firm with offices in Trivandrum, Pune, Toronto, Miami and San Francisco.\n\nCommander Shibuâ€™s combined defence, manufacturing and technology leadership positions him as a strategic contributor to maritime innovation and industrial advancement.',
    imageSrc: shibu,
  },
  {
    name: 'Mr.Joe Brincat',
    title: 'Advisory Board Member | Maritime & Offshore Industry Veteran',
    description:
      'Joe Brincat is a distinguished maritime and offshore industry veteran with over four decades of global experience spanning ship repair, classification, offshore construction, and regional leadership.\n\nHe previously served as Vice President â€“ Middle East Region at ABS, overseeing operations across 18 countries and playing a pivotal role in positioning ABS as the classification society of choice for offshore and tanker markets.\n\nThroughout his career, he has led landmark projects including FPSO conversions, jack-up drilling units, semi-submersibles, spars, and wind farm installation vesselsâ€”many of which were regional firsts.\n\nJoe was instrumental in establishing the ABS Middle East Engineering Office and the Regional Advisory Technical Committee, strengthening technical governance and industry collaboration.\n\nHis strategic insight, technical depth, and governance experience make him a valued advisor to boards and institutions shaping the future of the maritime and offshore sectors.',
    imageSrc: joeImg,
  },
  {
    name: 'Mr. Jamil Al Ali',
    title: 'Regional Commercial & Business Development Director | Bureau Veritas',
    description:
      'Mr. Jamil Al Ali graduated in 1990 as a Marine Engineer from South Tyneside College, UK, after completing his engineering cadetship sponsored by Kuwait Oil Tanker Company (KOTC). He sailed onboard various classes of vessels within the KOTC fleet, including product tankers, VLCCs, and gas carriers, rising through the ranks to Chief Engineer before joining the KOTC Head Office as a Technical Superintendent in 2002.\n\nHe subsequently held several senior managerial positions at KOTC, ranging from Fleet Engineering Group Manager to Head of the Fleet New Building Group. Over the course of his distinguished career, he developed extensive expertise in tanker and gas carrier segments.\n\nMr. Al Ali was widely recognized for his key role in maintaining the KOTC fleet to the highest international industry standards and received prestigious industry accolades, including recognition associated with Tanker Operator of the Year.\n\nHe has also led the Kuwait delegation at the IMO Marine Environment Protection Committee (MEPC) meetings in London and represented Kuwait at COP23 â€“ Shipping Initiative in Bonn, Germany.\n\nAfter a highly successful 30-year career at KOTC, Mr. Jamil Al Ali was appointed as Head of Regional Commercial & Business Development for the Middle East Region within the Marine & Offshore Division of Bureau Veritas.',
    imageSrc: jamilImg,
  },
  {
    name: 'Mr. Vivek Seth',
    title: 'Chairman of the Board | Shipfinex \nFormer Senior VP Marine Services-Adnoc L&S',
    description:
      'Mr. Vivek Seth is a distinguished senior maritime leader with nearly 35 years of global industry experience spanning operational excellence, commercial strategy, and top-tier executive leadership. With over 15 years at the C-suite level, he has played a pivotal role in driving large-scale growth, transformation, and value creation across some of the worldâ€™s most respected maritime organizations.\n\nHe previously served as Senior Vice President at ADNOC Logistics & Services, where he led strategic expansion initiatives and transformation programs across key maritime verticals. Prior to this, he was the Chief Executive Officer of Milaha Offshore, steering the organization through sustained growth, operational optimization, and strengthened market leadership.\n\nFrom 2009 to 2014, he served as Managing Director â€“ Middle East & India at Smit Lamnalco (UAE), holding full P&L responsibility across 11 countries. Under his leadership, the business successfully doubled in scale within five years, reinforcing the companyâ€™s regional footprint and operational strength.\n\nEarlier in his career, Mr. Seth held senior leadership and operational roles with Svitzer and Tidewater across multiple geographies and maritime segments. His diverse exposure across offshore, port services, logistics, and asset-intensive maritime operations enables him to bring a holistic and forward-looking perspective to strategic decision-making.\n\nCurrently, he serves as Chairman of the Board at Shipfinex, a pioneering platform transforming the maritime sector through fractional ownership of maritime assets, unlocking new avenues for investment and asset optimization.\n\nA former Chief Engineer, Mr. Seth combines strong seafaring foundations with seasoned executive acumen.\n\nHe holds an MBA from Manchester Business School, UK, and a Bachelorâ€™s degree in Marine Engineering from MERI (formerly DMET), India.',
    imageSrc: sankImg,
  },
];

const normalizeCopy = (value = '') =>
  value
    .replace(/ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ|ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“|Ã¢â‚¬â€œ/g, '-')
    .replace(/ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â|ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â|Ã¢â‚¬â€/g, '-')
    .replace(/ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢|ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢|Ã¢â‚¬â„¢/g, "'")
    .replace(/ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¹Ã…â€œ|ÃƒÂ¢Ã¢â€šÂ¬Ã‹Å“|Ã¢â‚¬Ëœ/g, "'")
    .replace(/ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“|ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ|Ã¢â‚¬Å“/g, '"')
    .replace(/ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â|ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â|Ã¢â‚¬Â/g, '"')
    .replace(/ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡|ÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¡/g, '2')
    .replace(/ÃƒÆ’Ã¢â‚¬Å¡|Ãƒâ€š/g, ' ')
    .replace(/ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢/g, '•')
    .replace(/\ufffd/g, '')
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

const toSingleLine = (value = '') => normalizeCopy(value).replace(/\n+/g, ' ').replace(/\s{2,}/g, ' ').trim();

const extractRole = (member = {}) => {
  const cleanName = toSingleLine(member.name || '').toLowerCase();
  const cleanTitle = toSingleLine(member.title || '').toLowerCase();

  if (cleanName.includes('vivek seth') || cleanName.includes('ravi kumar mehrotra')) return '';

  if (cleanTitle.includes('moderator')) return 'Moderator';
  if (cleanTitle.includes('chairman')) return 'Chairman';
  if (cleanTitle.includes('director')) return '';
  if (cleanTitle.includes('founder')) return '';
  return '';
};

const displayTitle = (title = '') => toSingleLine(title).replace(/\s*\|\s*/g, ' | ');

const getExcerpt = (description = '') => {
  const clean = toSingleLine(description);
  return clean.length > 230 ? `${clean.slice(0, 230).trim()}...` : clean;
};

const printBio = (member) => {
  const printWindow = window.open('', '_blank', 'width=900,height=700');
  if (!printWindow) return;

  const name = toSingleLine(member.name);
  const title = displayTitle(member.title);
  const description = normalizeCopy(member.description);

  printWindow.document.write(`
    <html>
      <head>
        <title>${name} - Advisory Board Bio</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 36px; color: #1f2937; }
          h1 { margin: 0 0 8px; font-size: 28px; }
          h2 { margin: 0 0 20px; font-size: 16px; font-weight: 600; color: #1e40af; }
          p { font-size: 14px; line-height: 1.7; text-align: justify; white-space: pre-wrap; }
        </style>
      </head>
      <body>
        <h1>${name}</h1>
        <h2>${title}</h2>
        <p>${description}</p>
      </body>
    </html>
  `);

  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
};

const AdvisoryCard = ({ member, onReadBio }) => (
  <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="mb-4 flex items-start gap-4">
      <div className="h-16 w-16 overflow-hidden rounded-full border border-slate-200 bg-slate-50">
        {member.imageSrc ? (
          <img src={member.imageSrc} alt={normalizeCopy(member.name)} className="h-full w-full object-cover object-top" />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <User className="h-6 w-6 text-slate-400" />
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">{extractRole(member)}</p>
        <h3 className="text-xl font-bold leading-tight text-slate-900">{normalizeCopy(member.name)}</h3>
      </div>
    </div>

    <p className="mb-4 whitespace-pre-line text-sm font-medium leading-relaxed text-slate-700">{displayTitle(member.title)}</p>
    <p className="mb-6 text-sm leading-relaxed text-slate-600">{getExcerpt(member.description)}</p>

    <div className="mt-auto flex gap-3">
      <button onClick={() => onReadBio(member)} className="flex-1 rounded-md bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-700">
        Read Bio
      </button>
      <button onClick={() => printBio(member)} className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
        <FileText className="h-4 w-4" />
        PDF
      </button>
    </div>
  </article>
);

const BioModal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div className="max-h-[88vh] w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-xl" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between border-b border-slate-200 p-5">
          <div className="pr-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{extractRole(member)}</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">{normalizeCopy(member.name)}</h2>
            <p className="mt-2 whitespace-pre-line text-sm font-medium text-slate-700">{displayTitle(member.title)}</p>
          </div>
          <button onClick={onClose} className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700" aria-label="Close bio">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[58vh] overflow-y-auto p-5">
          <p className="text-sm leading-7 text-slate-700 whitespace-pre-line">{normalizeCopy(member.description)}</p>
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-slate-200 bg-slate-50 p-4">
          <button onClick={onClose} className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
            Close
          </button>
          <button onClick={() => printBio(member)} className="inline-flex items-center gap-2 rounded-md bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
            <FileText className="h-4 w-4" />
            Download Bio
          </button>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const [query, setQuery] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);

  const organizedMembers = useMemo(
    () =>
      boardMembers.map((member) => ({
        ...member,
        name: toSingleLine(member.name),
        title: displayTitle(member.title),
        description: normalizeCopy(member.description),
      })),
    [],
  );

  const filteredMembers = useMemo(() => {
    if (!query.trim()) return organizedMembers;

    const needle = query.toLowerCase();
    return organizedMembers.filter((member) => {
      const haystack = `${member.name} ${member.title} ${member.description}`.toLowerCase();
      return haystack.includes(needle);
    });
  }, [organizedMembers, query]);

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900">About Marports</h1>

        <div className="max-w-6xl mx-auto space-y-24">
          <section className="relative">
            <div className="flex flex-col md:flex-row gap-8 items-center bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-lg shrink-0">
                <Building2 size={32} />
              </div>
              <div className="text-lg font-bold text-gray-700 leading-relaxed">
                <p>
                  The Marports Global Conference & Excellence Awards is a premier international platform that unites maritime leaders, shipowners, port developers,
                  terminal operators, ship designers and builders, digitalization experts, visionaries, and policymakers from around the world. Dedicated to shaping
                  the future of the global maritime and port ecosystem, Marports Global convenes the industry's most influential voices to share insights, explore
                  innovations, and celebrate excellence. From sessions on green shipping, port ecosystems, ship design and shipbuilding, digitalization, and
                  decarbonization to honoring pioneers redefining maritime leadership, Marports Global charts the course for the future of ocean trade. Invited speakers
                  and panellists can choose from a broad range of cutting-edge topics.
                </p>
              </div>
            </div>
          </section>

          <section className="py-8">
            <div className="mb-10 rounded-xl border border-slate-200 bg-white p-6 md:p-8">
              <div className="mb-4 inline-flex items-center gap-3">
                <div className="rounded-lg bg-slate-800 p-2 text-white">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Marports Advisory Board</h2>
              </div>

              <div className="relative mt-6 max-w-md">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by name, role, or organization"
                  className="w-full rounded-md border border-slate-300 bg-white py-2.5 pl-9 pr-3 text-sm text-slate-800 outline-none ring-slate-300 focus:ring"
                />
              </div>
            </div>

            <div className="mb-4 text-sm font-medium text-slate-600">
              Showing {filteredMembers.length} member{filteredMembers.length === 1 ? '' : 's'}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredMembers.map((member) => (
                <AdvisoryCard key={member.name} member={member} onReadBio={setSelectedMember} />
              ))}
            </div>

            {filteredMembers.length === 0 && (
              <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
                No advisory board members match your search.
              </div>
            )}
          </section>

          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Organized By</h2>
            <div className="w-24 h-1.5 bg-blue-600 rounded-full mt-4"></div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow mb-12">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                E Hub Events Pvt. Ltd. is the visionary force behind the Marports Global Conference & Excellence Awards â€” a premier international maritime platform
                conceived as an annual convergence of global industry leaders, innovators, and policymakers.
              </p>
              <p>
                Founded by Jayadevu Sreekumar, a seasoned event strategist with over two decades of experience, E Hub Events is built on a strong foundation of global
                exposure, strategic networking, and execution excellence.
              </p>
              <p>
                Jayadevu previously served as director at Aries Group of Companies, a leading maritime conglomerate with 70+ companies across 30 countries. During his
                18-year tenure, he led the group's event management division, conceptualising and delivering high-impact conferences and awards across maritime,
                insurance, entertainment, medical, and real estate sectors.
              </p>
              <p>
                He was the driving force behind Shiptek, a globally recognised maritime event that expanded from Kochi to international destinations including the UAE,
                Singapore, Saudi Arabia, Greece, and Hong Kong â€” positioning it as one of the most respected maritime networking platforms originating from India.
              </p>
              <p>
                With Marports Global, E Hub Events ushers in a new era â€” establishing Thiruvananthapuram as an emerging maritime hub in India's Indian Ocean region
                and launching what is envisioned as a prestigious annual global gathering.
              </p>
              <p>At its core, E Hub Events stands for credibility, quality, global reach, and long-term industry impact.</p>
              <p className="font-semibold text-gray-900">Marports Global is not just a conference â€” it is the beginning of an enduring maritime legacy.</p>
            </div>
          </div>
        </div>
      </div>

      <BioModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </div>
  );
};

export default About;
