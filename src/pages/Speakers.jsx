import React, { useMemo, useState } from 'react';
import { ShieldCheck, Search, FileText, X, User } from 'lucide-react';

import promo from '../assets/sankalpog.jpeg';
import rahul from '../assets/rahuloak.jpeg';
import amla from '../assets/amlaboara.jpeg';
import puvan from '../assets/puvanesan.jpeg';
import rajesh from '../assets/Rajesh Photo.jpg.jpeg';
import pmanoj from '../assets/pmanoj.jpeg';
import anil from '../assets/anil.jpeg';
import hari from '../assets/hariraj.jpeg';
import hem from '../assets/hemanth.jpeg';
import surendran from '../assets/Sundaravadivelu.jpeg';
import sharma from '../assets/vivek.jpeg';
import kumar from '../assets/harikumar.jpeg';
import tijo from '../assets/tijo.jpeg';
import ajay from '../assets/ajay.jpeg';
import asha from '../assets/ashapillai.jpeg';



const speakers = [
  {
    name: 'Capt. (Dr.) Sankalp Shukla',
    title: 'Managing Director â€“ Bernhard Schulte Shipmanagement (India) Pvt. Ltd.',
    description:
      "Capt. Sankalp Shukla joined BSM, formerly known as Eurasia, in 1995. He began his journey as a Deck Cadet and served on various types of vessels until attaining command in 2007. Following this, he joined BSMâ€™s Chennai office as Fleet Personnel Manager in September 2008. He later took a sabbatical to pursue an MSc in Shipping, Logistics and Supply Chain Management from the University of Plymouth, United Kingdom. Thereafter, he rejoined BSM in 2009 as a Marine Superintendent and was promoted in 2010 to the rank of Crew Manager, additionally shouldering responsibilities for business development. In December 2012, he was promoted to Deputy Director of BSM Crew Service Centre India, followed by his appointment as Director in December 2014 and subsequently as Managing Director in 2020. During his tenure, there was a substantial increase in the number of Indian seafarers serving on ships managed by the company. Overall, he has completed over 30 years with the BSM Group and continues to contribute actively to its growth. Capt. Shukla also serves as Chairman of the Foreign Ownersâ€™ Representatives and Ship Managers Association (FOSMA), Court Member of the Indian Maritime University (IMU), Trustee at NUSI ITF Trust and Maritime Floating Staff Welfare Trust (MFSWT), and General Secretary of the Maritime Awareness Program Society (MAPS). He has been conferred the prestigious Honorary Doctorate (Honoris Causa) by AMET University (Academy of Maritime Education and Training), India. The honorary degree was bestowed by Shri K. Ramachandran, Chancellor, during the institution's 32nd-year celebrations at a convocation ceremony held in Chennai on 28 January 2026.",
    imageSrc: promo,
  },
  {
    name: 'Mr.Rajesh Menon',
    title: 'Associate Director (SME-Maritime) | Department of Promotion of Industry and Internal Trade | Ministry of Commerce & Industry',
    description:
      'Rajesh Menon is a senior technocrat and maritime policy expert with nearly three decades of experience in infrastructure development, including over twenty years across ports, shipping, logistics, and multimodal transportation. His career uniquely spans government, large corporate groups, and academia, giving him a rare ability to bridge policy intent with commercial execution. He has held senior leadership roles within the Government of India, contributing to national initiatives such as PM GatiShakti, Sagarmala, the National Logistics Policy, and the Indian Ports legislative framework. As a maritime subject-matter expert, he has evaluated and advised on complex infrastructure projects, developed integrated port connectivity and logistics strategies, and supported evidence-based policymaking at the highest levels of government. In the private sector, Rajesh spent over a decade with the Adani Group and led strategic business development initiatives at major ports, managing large teams, negotiating high-value projects, and engaging closely with regulators, investors, and CXO leadership. Beyond executive roles, Rajesh is an active consultant, author, and visiting faculty member at premier institutions.',
    imageSrc: rajesh,
  },
  {
    name: 'Mr. Anil Yendluri, IPS (Retd.)',
    title: 'Managing Director â€“ Vishwa Samudra Engineering Pvt. Ltd\nFormer CEO â€“ Krishnapatnam Port',
    description:
      'Anil Yendluri is a retired Indian Police Service (IPS) officer with over 30 years of experience in law enforcement and public administration. He has held key positions in various government departments and has been instrumental in promoting sustainable development and energy efficiency initiatives. His expertise spans across policy formulation, strategic planning, and implementation of green technologies in maritime operations.',
    imageSrc: anil,
  },
  {
    name: 'Mr. Datuk Puvanesan Subenthiran',
    title: 'Group CEO & MD | Privasia Group',
    description:
      'Datuk Puvanesan A/L Subenthiran is one of the founding members of PRIVASIA and was appointed as the Group Chief Executive Officer (GCEO) and Managing Director of PRIVASIA Group on 4 May 2009. Prior to this, Datuk Puvanesan was a senior in the Business Advisory and Assurance Department of BDO Simpsons Xavier in Ireland. Upon returning to Malaysia, he held the position of Chief Financial Officer of the Makmal Jaya Group. Since November 2024, he has been serving as an Executive Director of NexG Berhad and was re-appointed as an Investment Panel Member of the Human Resource Development Corporation in March 2025. He also holds directorships in several private limited companies incorporated in Malaysia.',
    imageSrc: puvan,
  },
     {
    name: 'Mr. Harikumar Ambalapparambil',
    title: 'Chief Executive Officer Udupi cochin Shipyard Ltd',
    description:`Mr. Harikumar Ambalapparambil is a native of Kochi, Kerala who has completed his schooling and pre-university education in Kochi and graduated with a degree in Engineering from Government Engineering College, Thrissur, in 1986.He began his professional career in 1987 as a Junior Engineer with M/s FORDEC (India) Pvt. Ltd., working at the M/s Mazagon Dock Mangalore Yard. In 1988, he joined M/s Cochin Shipyard Limited as a Graduate Engineer Trainee. Over the next 20 years, he served in various capacities, steadily rising to the position of Assistant General Manager. In 2008, he moved to  M/s Tebma Shipyards Limited, Malpe, as General Manager (Technical), where he contributed significantly for six years. In 2014, he joined M/s Larsen& Toubro Shipbuilding, Kattupalli, Chennai, as Head (Engineering), serving the organization for approximately seven years.  He has  vast experience of over thirty five years  in shipbuilding, ship repair, and project management.In February 2021, he assumed charge as Chief Executive Officer of M/s Udupi Cochin Shipyard Limited (UCSL), Malpe—a wholly owned subsidiary of Cochin Shipyard Limited under the Ministry of Ports, Shipping and Waterways. At the time, the yard (formerly Tebma Shipyards Limited) required revival  and  operational  restructuring.  However  under  his  leadership,  M/s  UCSL  underwent  a remarkable transformation. The shipyard was made operational within six months and secured its first commercial contract within a year. Since then, the yard has successfully delivered six tugs under the ASTDS program to Indian clients and four  3800 DWT Bulk carriers to clients fromEurope.   Most of these  deliveries were completed  ahead of schedule, which helped the yard in securing further orders, both from Indian and international clients, expanding the order book of the yard  to over ₹2,500 crores and positioning UCSL in the global shipbuilding market. Under his leadership the shipyard saw a steady increase of revenue over the pastfour years, and the yard started reporting profits from the financial year 2023-24.Mr. Harikumar is a Fellow of the Institution of Engineers (India) and a Fellow of the Institute of Marine Engineers (India).
`,
        imageSrc: kumar,
  }
  ,
  {
    name: 'Mr.R ahul Oak',
    title: 'Head of Energy Projects | Torm Shipping India Pvt Ltd',
    description:
      'Rahul Oak is a passionate maritime professional with more than 24 years of ship handling experience across various capacities and roles. He began his maritime journey in the millennium year 2000 as a Sailing Engineer Officer on SCI tanker ships. When he stepped ashore in 2012 to join Torm Shipping India as a Technical Superintendent, he had already sailed for several years as a Chief Engineer, gaining wide experience in most aspects of shipping operations. Based primarily in Mumbai, he acquired extensive knowledge in shipboard operations, technical ship management, risk management, and crew handling. As Head of Energy Projects at TORM for more than 3.5 years, he has actively contributed to reducing TORMâ€™s COâ‚‚ footprint by implementing various energy-saving projects onboard TORM vessels.',
    imageSrc: rahul,
  },
  {
    name: 'Mr. P Manoj',
    title: 'Editor (Shipping) - ET Infra',
    description:
      "P Manoj is an accomplished maritime journalist with nearly three decades of experience covering India's shipping, ports, logistics, and maritime policy landscape. He currently serves as Editor â€“ Shipping at ET Infra, the infrastructure-focused digital platform of The Economic Times, based in Mumbai, a role he has held since April 2022. Widely respected for his deep domain expertise, Manoj has consistently delivered authoritative reporting and sharp analysis on container shipping, shipbuilding, port development, coastal logistics, and regulatory reforms shaping India's maritime ecosystem. Prior to joining ET Infra, he was Senior Deputy Editor at The Hindu BusinessLine (2017â€“2022), where he played a key role in maritime and infrastructure coverage. Manoj was a part of the team that launched the MINT newspaper where he spent a decade reporting on shipping and logistic sectors. During his stint, Manoj also wrote a weekly shipping column named 'ALL ABOVE BOARD', first for the main paper, and then for Mint Asia, a weekly newspaper published by the MINT in Singapore. Manoj continues to shape industry discourse through insightful reporting and policy analysis. His perspectives are widely followed across India's maritime and infrastructure sectors, making him a valued contributor to conversations on the future of shipping and port-led development.",
    imageSrc: pmanoj,
  },
  {
    name: 'Mr. Hariraj P',
    title: 'Chief Operating Officer | Smart Engineering & Design Solutions (India) Pvt. Ltd',
    description:
      "Hariraj P. is the Chief Operating Officer at Smart Engineering & Design Solutions (India) Pvt. Ltd., where he leads a multi-disciplinary team of about 160 engineers in developing innovative ship designs. With a B. Tech in Naval Architecture & Ship Building from CUSAT, he began his career at G.T.R. Campbell Marine Consults, with its â€˜TRADERâ€™ series bulk carrier projects at Cochin Shipyard. At SEDS, he oversees concept & functional design development and coordinates with external partners, driving the creation of a diverse range of commercial and naval vessels. Hariraj is an active member of several technical committees, including Lloyds Register, ClassNK and DNV GL, and is a member of Indian Institute of Naval Architects and Royal Institute of Naval Architects.",
    imageSrc: hari,
  },
  {
    name: 'Mr. Hemant Sahai',
    title: 'Founding Partner | HSA Advocates',
    description:
      'Hemant Sahai is the Founding Partner of HSA Advocates and has spent over three decades advising on some of Indiaâ€™s most complex and high-impact infrastructure and energy projects. His body of work spans the entire lifecycle of large public-private partnership projects, from structuring of concession and competitive bidding documents to financing, implementation, and navigating the regulatory environment. Infrastructure including ports form a significant part of his practice. He has advised on development of major greenfield and brownfield projects in transportation and connectivity infrastructure including ports, airports, inland waterways and highways. One of the landmark engagements where he advised is the bidding of the Vizhinjam International Deepwater Transshipment Seaport in Kerala, Indiaâ€™s first deep-water transshipment hub. Mr. Sahai had advised on the development of the project, including bid advisory, drafting of the bidding documents and the concession agreements, and continues to advise VISL on implementation support. His role included advising on the complex advisory and environmental issues including defending the project from diverse environmental related challenges before the National Green Tribunal and the Supreme Court of India. His work on Vizhinjam has helped set the framework for large-scale port PPPs in India. His practice areas include corporate advisory, project finance, mergers and acquisitions, regulatory, and dispute resolution. He advises across sectors including infrastructure, energy, manufacturing, services, and financial services sectors, with a strong focus on critical and emerging sectors such as renewable energy, green hydrogen, offshore wind, and nuclear energy. He has also advised governments, regulators, and multilateral institutions on policy and regulatory matters, and is consistently ranked Band 1 by leading publications such as Chambers and Partners for Projects, Energy and Infrastructure.',
    imageSrc: hem,
  },
  {
    name: `Dr. R. Sundaravadivelu FNAE`,
    title: 'Emeritus Professor (Retd) IIT MADRAS',
    description:` Prof. R. Sundaravadivelu FNAE has about 40 Years of Teaching, Research and
Consultancy experience in IIT Madras in the field of Offshore, Coastal, Ship and Ports &
Harbors Structures.
• He has retired as Emeritus Professor from Department of Ocean Engineering, IIT Madras
in 2023.
• He is presently Director Prof. R. Sundaravadivelu Advisory Services Pvt Ltd.
• He has guided 25 PhD and 60 M Tech and B Tech projects. He has published about 200
international journal and conference papers.
• He has served in the governing council of Indian Maritime University, IIT Madras and
CRRI Delhi. He is presently Chairperson CED 47 Bureau of Indian Standards committee
on Ports, Harbours and Offshore Installations.
• He is the Fellow of the Indian national Academy of Engineering and Indian Geotechnical
Society.
• He has successfully completed about 1000 consultancy projects worth Rs. 50,000 crores.
The notable projects are for various ports, Navy, Coast guard, Ministry of Defence,
Ministry of External Affairs, Ministry of Shipping, Ministry of Home, DGNP, Shipyards,
Maritime Boards, Alhw, Rites, ITD, Afcons, NEC, Rkec, Simplex, L&T, Atomic Energy,
RIL etc `,
    imageSrc: surendran,
  },
   {
    name: 'Mr. Vivek Sharma',
    title: `Head of Business Development,
Public Policy and Regulatory Affairs
India, Bangladesh and Sri Lanka Region`,
    description:`Vivek leads the growth of businesses and
collective engagement of Maersk Group across
the Indian Subcontinent Region with the
Government. He is based at Delhi and works
closely with Maersk’s Global Leadership and
Chairman’s Office.
Vivek brings with him wide experience from
prior leadership roles with Shell Plc, Tata
Group, Adani Group and KPMG.
Over the years, he has worked across Policy
and Regulatory Affairs, Mergers &
Acquisitions, and Strategy Functions across
India, Middle East, and South-East Asia.
He has extensive experience in energy and
infrastructure sectors covering international
trade negotiations, multilateral financing
arrangements and carbon policies.
By education, Vivek is a graduate in Geology
and Mining and master’s in finance and
economics. He is an alumnus of SAID Business
School, University of Oxford. He also holds CFA
(Chartered Financial Analyst) and FRM
(Financial Risk Manager) certifications.
`,
    imageSrc: sharma,
  },
  {
    name: 'Mr. Tijo C. Mathew',
    title: `GM & Head – Ports & Harbours Business Segment
Heavy Civil Infrastructure, Larsen & Toubro Limited`,
    description:`Mr. Tijo C. Mathew is a seasoned civil engineering and infrastructure leader with over 23 years of extensive experience in marine, ports, and large-scale infrastructure development. Currently serving as General Manager & Head of the Ports & Harbours Business Segment at Larsen & Toubro Construction, he leads strategic direction, operations, and execution of complex maritime infrastructure projects.

An alumnus of Indian Institute of Technology Madras and SP Jain Institute of Management and Research, Mr. Mathew holds an M.Tech in Construction Technology & Management and a Post Graduate Diploma in Executive Management. He is also a Chartered Engineer affiliated with the Institution of Civil Engineers, UK and the Engineering Council, UK.
He began his career with L&T in 2003, contributing to critical marine infrastructure projects including breakwaters, dredging, and LNG terminals. Between 2013 and 2016, he played a key role in the prestigious Riyadh Metro Project in Saudi Arabia, overseeing design and construction engineering for a 26 km elevated metro viaduct.

Upon returning to India, he led engineering design and coordination for specialized bridge and marine projects, and subsequently headed the Ports & Harbours Design & Research Centre. From 2017 onwards, he has been instrumental in delivering engineering excellence, value optimization, and tendering for multiple large-scale marine projects.
Since 2022, Mr. Mathew has transitioned into business leadership, successfully steering the Ports & Harbours segment with a focus on innovation, operational excellence, and project delivery. Under his leadership, major infrastructure projects have been executed for leading clients including the Indian Navy, Cochin Shipyard, Petronet LNG, DP World, and APM Terminals.
With a strong blend of technical expertise and strategic vision, Mr. Tijo C. Mathew continues to be a driving force in advancing port and maritime infrastructure development in India and beyond.`,
    imageSrc: tijo,
  },
    {
    name: 'Mr. Amlan Bora',
    title: 'Speaker | Chief Representative | Port of Rotterdam Authority',
    description:
      'Amlan Bora is an experienced global supply chain professional who has worked with major multinational organizations such as Siemens, Philips, and Diageo in progressively senior leadership roles. Prior to his current position, he served as the Chief Representative and Trade & Investment Commissioner of the Netherlands Business Support Offices (NBSO) in India. The NBSOs are trade offices managed by the Ministry of Economic Affairs of the Dutch Government, supporting bilateral trade and investment between the Netherlands and India. Having spent many years in India, Amlan is deeply connected to and committed to the countryâ€™s development. He serves as an advisor to several non-profit organizations in India and abroad.',
    imageSrc: amla,
  },
     {
    name: `Mr. Ajay Kumar Singh`,
    title: `Head of Section, Maritime
Advisory India DNV`
,
    description:`Ajay is a maritime consultant with around 10 years of experience. He holds a
Master’s degree in Rotating Equipment, an MBA in Health Safety and
Environmental Management, and a Bachelor’s in Mechanical Engineering. He
leads and manages a diverse team of Consultants, Senior Consultants at
DNV Maritime Advisory India and delivers high-quality services to clients in
the maritime and port sectors.
His expertise spans alternative fuel technologies for ships, techno-commercial
studies for maritime decarbonization, and project management activities. Ajay
has performed gap assessments for LNG and Methanol bunkering terminal
facilities in India, and managed health & safety assessments for ports in Asia
and the Middle East. His project management skills cover projects related to
maritime decarbonization, noise and vibration studies, safety risk and
reliability, life cycle management, and shipping advisory in the Maritime and
Port Sector.
Ajay’s work spans projects across India, Singapore, UAE, Norway, and
Australia. He enhances DNV’s market presence in India, represents the
organization at various events, and is recognized as an industry expert
through his speaking engagements and contributions to conferences and
webinars.`,
    imageSrc: ajay,
  },
    {
    name: 'Dr. Asha Pillai',
    title: 'Chief Strategy Officer, Docker Vision, Kochi',
    description:`Dr. Asha Pillai is a seasoned ports, shipping, and logistics professional with over three decades of leadership experience across terminal operations, container logistics, and maritime services. 
Her career uniquely bridges industry and academia, with contributions in education, training, research, and consultancy. She currently serves as Chief Strategy Officer at Docker Vision, driving AI-powered solutions for port and logistics automation. 
Dr. Pillai is also the Founder Director of AiD Foundation and has held senior roles in container terminal and leading global shipping and logistics organizations, along with serving as visiting faculty at premier maritime institutions.`,
    imageSrc: asha,
  },
 
];

const normalizeCopy = (value = '') =>
  value
    .replace(/Ã¢â‚¬â€œ|â€“|–/g, '-')
    .replace(/Ã¢â‚¬â€”|â€”|—/g, '-')
    .replace(/Ã¢â‚¬â„¢|â€™|’/g, "'")
    .replace(/Ã¢â‚¬Ëœ|â€˜|‘/g, "'")
    .replace(/Ã¢â‚¬Å“|â€œ|“/g, '"')
    .replace(/Ã¢â‚¬Â|â€|”/g, '"')
    .replace(/Ã¢â€šâ€š|â‚‚/g, '2')
    .replace(/Ã¢â€žÂ¢/g, 'TM')
    .replace(/Ã‚|Â/g, ' ')
    .replace(/â€¢/g, '•')
    .replace(/\ufffd/g, '')
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

const toSingleLine = (value = '') => normalizeCopy(value).replace(/\n+/g, ' ').replace(/\s{2,}/g, ' ').trim();

const extractRole = (speaker = {}) => {
  const cleanName = toSingleLine(speaker.name || '').toLowerCase();
  const cleanTitle = toSingleLine(speaker.title || '').toLowerCase();

  if (cleanName.includes('rajesh menon')) return 'Moderator';
  if (cleanName.includes('asha pillai')) return 'Moderator';
  if (cleanTitle.includes('moderator')) return 'Moderator';
  if (cleanTitle.includes('panelist')) return 'Panelist';
  if (cleanTitle.includes('speaker')) return 'Speaker';

  // Default all unspecified entries to Panelist as requested
  return 'Panelist';
};

const displayTitle = (title = '') => toSingleLine(title).replace(/\s*\|\s*/g, ' | ');

const getExcerpt = (description = '') => {
  const clean = toSingleLine(description);
  return clean.length > 230 ? `${clean.slice(0, 230).trim()}...` : clean;
};

const printSpeakerBio = (speaker) => {
  const printWindow = window.open('', '_blank', 'width=900,height=700');
  if (!printWindow) return;

  const name = toSingleLine(speaker.name);
  const title = displayTitle(speaker.title);
  const description = normalizeCopy(speaker.description);

  printWindow.document.write(`
    <html>
      <head>
        <title>${name} - Speaker Bio</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 36px; color: #1f2937; }
          h1 { margin: 0 0 8px; font-size: 28px; }
          h2 { margin: 0 0 20px; font-size: 16px; font-weight: 600; color: #1e40af; }
          p { font-size: 14px; line-height: 1.7; text-align: justify; }
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

const SpeakerCard = ({ speaker, onReadBio }) => (
  <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="mb-4 flex items-start gap-4">
      <div className="h-16 w-16 overflow-hidden rounded-full border border-slate-200 bg-slate-50">
        {speaker.imageSrc ? (
          <img src={speaker.imageSrc} alt={normalizeCopy(speaker.name)} className="h-full w-full object-cover object-top" />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <User className="h-6 w-6 text-slate-400" />
          </div>
        )}
      </div>
      <div className="min-w-0">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">{extractRole(speaker)}</p>
        <h3 className="text-xl font-bold leading-tight text-slate-900">{normalizeCopy(speaker.name)}</h3>
      </div>
    </div>

    <p className="mb-4 whitespace-pre-line text-sm font-medium leading-relaxed text-slate-700">{displayTitle(speaker.title)}</p>
    <p className="mb-6 text-sm leading-relaxed text-slate-600">{getExcerpt(speaker.description)}</p>

    <div className="mt-auto flex gap-3">
      <button
        onClick={() => onReadBio(speaker)}
        className="flex-1 rounded-md bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-700"
      >
        Read Bio
      </button>
      <button
        onClick={() => printSpeakerBio(speaker)}
        className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
      >
        <FileText className="h-4 w-4" />
        PDF
      </button>
    </div>
  </article>
);

const BioModal = ({ speaker, onClose }) => {
  if (!speaker) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div className="max-h-[88vh] w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-xl" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between border-b border-slate-200 p-5">
          <div className="pr-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{extractRole(speaker)}</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">{normalizeCopy(speaker.name)}</h2>
            <p className="mt-2 whitespace-pre-line text-sm font-medium text-slate-700">{displayTitle(speaker.title)}</p>
          </div>
          <button onClick={onClose} className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700" aria-label="Close bio">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[58vh] overflow-y-auto p-5">
          <p className="text-sm leading-7 text-slate-700">{normalizeCopy(speaker.description)}</p>
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-slate-200 bg-slate-50 p-4">
          <button onClick={onClose} className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
            Close
          </button>
          <button onClick={() => printSpeakerBio(speaker)} className="inline-flex items-center gap-2 rounded-md bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
            <FileText className="h-4 w-4" />
            Download Bio
          </button>
        </div>
      </div>
    </div>
  );
};

const Speakers = () => {
  const [query, setQuery] = useState('');
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const organizedSpeakers = useMemo(
    () =>
      speakers.map((speaker) => ({
        ...speaker,
        name: toSingleLine(speaker.name),
        title: displayTitle(speaker.title),
        description: normalizeCopy(speaker.description),
      })),
    [],
  );

  const filteredSpeakers = useMemo(() => {
    if (!query.trim()) return organizedSpeakers;

    const needle = query.toLowerCase();
    return organizedSpeakers.filter((speaker) => {
      const haystack = `${speaker.name} ${speaker.title} ${speaker.description}`.toLowerCase();
      return haystack.includes(needle);
    });
  }, [organizedSpeakers, query]);

  return (
    <div className="min-h-screen bg-slate-50 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 rounded-xl border border-slate-200 bg-white p-6 md:p-8">
          <div className="mb-4 inline-flex items-center gap-3">
            <div className="rounded-lg bg-slate-800 p-2 text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Speakers & Panelists</h1>
          </div>
          {/* <p className="max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
            Meet the leaders, experts, and moderators shaping the conversation at Marks Global Maritime Summit.
          </p> */}

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
          Showing {filteredSpeakers.length} speaker{filteredSpeakers.length === 1 ? '' : 's'}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSpeakers.map((speaker) => (
            <SpeakerCard key={speaker.name} speaker={speaker} onReadBio={setSelectedSpeaker} />
          ))}
        </div>

        {filteredSpeakers.length === 0 && (
          <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
            No speakers match your search.
          </div>
        )}
      </div>

      <BioModal speaker={selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />
    </div>
  );
};

export default Speakers;
